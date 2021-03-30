import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model } from 'miragejs'
import { App } from './App'

createServer({
  //banco de dados interno do mirage
  models: {
    transaction: Model,
  },

  // dados pre cadastros para interface 
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance de website",
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: "Prestação do terreno",
          type: 'withdraw',
          category: 'Casa',
          amount: 1500,
          createdAt: new Date('2021-02-15 10:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api' //todas as chamadas das rotas serão feitas pelo /api/...
  
    this.get('/transactions', () => {
      return this.schema.all('transaction') //retornando todas as transações
    })

    //criação de rota
    this.post('/transactions', (schema, request) => { //schema bd e o resquest sao os dados
      const data = JSON.parse(request.requestBody) //convertendo o objeto de texto em json 

      return schema.create('transaction', data) //Criando no bd schema o model transaction e passando os data(dados)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
