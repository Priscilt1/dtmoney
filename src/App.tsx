import { Dashboard } from "./components/Dashboard"
import { useState } from "react"
import Modal from 'react-modal'
import { Header } from "./components/Header"
import { NewTransactionModal } from "./components/NewTransactionModal"
import { GlobalStyle } from "./styles/global"

Modal.setAppElement('#root') //questao de acessibilidade

export function App() {
  //componente pai 
 // MODAL (usando a biblioteca React Modal)
 const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

 function handleOpenNewTransactionModal() {
   setIsNewTransactionModalOpen(true) //setando que a informação do modal esta aberto
 }

 function handleCloseNewTransactionModal() {
   setIsNewTransactionModalOpen(false)
 }


  return (
    <>
      {/* componente filho - pegando o modal */}
      <Header onOpenNewTransactionsModal={handleOpenNewTransactionModal} />

      <Dashboard />
      
      {/* componente filho - pegando o modal */}
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      
      <GlobalStyle />
    </>
  )
}