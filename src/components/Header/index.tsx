import React, { useState } from 'react'
import Modal from 'react-modal'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {
  // MODAL (usando a biblioteca React Modal)
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true) //setando que a informação do modal esta aberto
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }


  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money"/>
        <button type="button" onClick={handleOpenNewTransactionModal}>  {/* abrindo o modal */}
            Nova transação
        </button>
        
        {/* acrescentando o estado */}
        <Modal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}  
        >
          <h2>Cadastrar transação</h2>
        </Modal>
      </Content>
    </Container>
  )
}