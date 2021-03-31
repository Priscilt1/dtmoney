import { useEffect, useState, useContext } from "react";
import { api } from "../../services/api"
import { Container } from "./styles"
import { TransactionsContext } from "../../TransactionsContext"

interface Transaction {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

export function TransactionsTable() {
  //importando contexto
  const data = useContext(TransactionsContext)

  //salvando array de transactions
  const [transactions, setTransactions] = useState<Transaction[]>([]) //<Transaction[]> falando que armazena um ARRAY de transaction com o tipo que esta na sua interface

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions)) //listando os dados, salvando no estado
  }, [])


  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
         {transactions.map(transaction => ( //retornando os dados
          <tr key={transaction.id}>
            <td>{transaction.title}</td>
            <td className={transaction.type}>
              {new Intl.NumberFormat('pt-BR', { //formatação de moeda, dinheiro (de acordo com a moeda brasileira)
                style: 'currency',
                currency: 'BRL'
              }).format(transaction.amount)}
            </td>
            <td>{transaction.category}</td>
            <td>
              {new Intl.DateTimeFormat('pt-BR').format(
                new Date (transaction.createdAt) //o intl só trabalha com numeros, entao precisou converter a string para number 
              )}
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}