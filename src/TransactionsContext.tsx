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

//falando que o componente TransactionsProvider ira receber um conteudo dentro dele 
interface TransactionsProvideProps {
  //quando for tipar children, pode usar um reactNode que aceita qualquer conteudo que poderia colocar dentro do arquivo tsx
  children: ReactNode
}

export const TransactionsContext = createContext<Transaction[]>([]) //passando o valor default, ou seja, o valor que ele deve iniciar

export function TransactionsProvider ({ children }: TransactionsProvideProps) { //logica de carregamento de dados
   //salvando array de transactions / carregamento de dados
   const [transactions, setTransactions] = useState<Transaction[]>([]) //<Transaction[]> falando que armazena um ARRAY de transaction com o tipo que esta na sua interface

   useEffect(() => {
     api.get('transactions')
       .then(response => setTransactions(response.data.transactions)) //listando os dados, salvando no estado
   }, [])

   return(
     <TransactionsContext.Provider value={transactions}> {/*pasando o valor atual do contexto */}
      {children}
     </TransactionsContext.Provider>
   )
}