import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useState } from 'react'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) { //pegando as propriedades atraves da destruturação
  //criando o estado para armazenar a informação de qual botão foi selecionado
  const [type, setType] = useState ('deposit')
  
  return(
    // acrescentando o estado
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"  
    >
      
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input 
          placeholder="Título"
        />

        <input 
          type="number"
          placeholder="Valor"
        />

        <TransactionTypeContainer>
          <RadioBox //transformando o buttom em componente
            type="button"
            onClick={() => { setType('deposit')}} //funcao para mudar o estado do botao
            isActive={type === 'deposit'} //propriedade que poderia ter qualquer nome 
          >
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </RadioBox >

          <RadioBox  
            type="button"
            onClick={() => { setType('withdraw')}}
            isActive={type === 'withdraw'}
          >
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </RadioBox >

        </TransactionTypeContainer>

        <input 
          placeholder="Categoria"
        />

        <button type="submit">
          Cadastrar
        </button>

      </Container>
    </Modal>
  )
}