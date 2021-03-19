import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model } from 'miragejs'
import { App } from './App'

createServer({
  //banco de dados interno do mirage
  models: {
    transaction: Model,

  },

  routes() {
    this.namespace = 'api' //todas as chamadas das rotas serão feitas pelo /api/...
  
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    //criação de rota
    this.post('/transactions', (schema, request) => { //schema bd
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
