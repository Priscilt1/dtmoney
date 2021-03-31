//Criando contexto
import { createContext, useState, useEffect, ReactNode } from 'react'
import { api } from "./services/api"

interface Transaction {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

// criando um tipo herdando a interface transaction, mas omitindo o id, createdAt
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'> 


//falando que o componente TransactionsProvider ira receber um conteudo dentro dele 
interface TransactionsProvideProps {
  //quando for tipar children, pode usar um reactNode que aceita qualquer conteudo que poderia colocar dentro do arquivo tsx
  children: ReactNode
}

//formato do contexto
interface TransactionsContextData {
  transactions: Transaction[] //tipo = array de transaction
  createTransaction: (transaction: TransactionInput) => Promise<void> //tipo = funcao sem retorno
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData //forçando a tipagem
  ) //passando o valor default, ou seja, o valor que ele deve iniciar

export function TransactionsProvider ({ children }: TransactionsProvideProps) { //logica de carregamento de dados
   //salvando array de transactions / carregamento de dados
   const [transactions, setTransactions] = useState<Transaction[]>([]) //<Transaction[]> falando que armazena um ARRAY de transaction com o tipo que esta na sua interface

   useEffect(() => {
     api.get('transactions')
       .then(response => setTransactions(response.data.transactions)) //listando os dados, salvando no estado
   }, [])

   async function createTransaction(transactionInput: TransactionInput) {
    // inserindo a api
    const response = await api.post('/transactions', {
      ...transactionInput,//pegando a resposta da inserção
      createdAt: new Date()
    }) 
    const { transaction } = response.data //acessando o transaction dentro do response do axios

    // toda vez que quiser adicionar uma informacao no vetor no estado do react, copia todas as informacoes e add a nova informacao no final. Estado de imutabilidade
    setTransactions([
      ...transactions,
      transaction
    ])
   }

   return(
     <TransactionsContext.Provider value={{ transactions, createTransaction }}>  {/*retornando objeto, a listagem e a funcao createTransaction*/}
      {children}
     </TransactionsContext.Provider>
   )
}