import { useContext } from 'react';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext'

import { Container } from "./styles";

export function Summary() {
  // passando o contexto
  const { transactions } = useContext(TransactionsContext)

  // Calculando os totais   
  // reduce passa por todas as transações e calcula um total. O acc, é um acculumator
  const summary = transactions.reduce((acc, transaction) =>{ 
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount //somando os depositos 
      acc.total += transaction.amount //somando ao total
    } else {
      acc.withdraws += transaction.amount
      acc.total -= transaction.amount //subtraindo ao total
    }

    return acc
  }, { //iniciando os valores com objeto
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas"/>
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', { 
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Saidas"/>
        </header>
          <strong>
            {new Intl.NumberFormat('pt-BR', { 
              style: 'currency',
              currency: 'BRL'
            }).format(summary.withdraws)}
          </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total"/>
        </header>
          <strong>
            {new Intl.NumberFormat('pt-BR', { 
              style: 'currency',
              currency: 'BRL'
            }).format(summary.total)}
          </strong>

      </div>
    </Container>
  )
}