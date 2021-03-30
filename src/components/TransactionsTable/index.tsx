import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

export function TransactionsTable() {
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
            <td className={transaction.type}>{transaction.amount}</td>
            <td>{transaction.category}</td>
            <td>{transaction.createdAt}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}