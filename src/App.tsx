import { Dashboard } from "./components/Dashboard"
import { useState } from "react"
import Modal from 'react-modal'
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global"

Modal.setAppElement('#root') //questao de acessibilidade

export function App() {
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
      <Header onOpenNewTransactionsModal={handleOpenNewTransactionModal} />
      <Dashboard />

       {/* acrescentando o estado */}
       <Modal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}  
        >
          <h2>Cadastrar transação</h2>
        </Modal>
      
      <GlobalStyle />
    </>
  )
}