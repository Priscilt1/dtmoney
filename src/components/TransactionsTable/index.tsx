import { Container } from "./styles"
import { useTransactions } from "../../hooks/useTransactions";


export function TransactionsTable() {
  //importando contexto
  const { transactions } = useTransactions()

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