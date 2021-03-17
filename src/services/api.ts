import axios from 'axios'

export const api = axios.create ({ //criando uma instancia para setar informações
  baseURL: 'http://localhost:3000/api',

})