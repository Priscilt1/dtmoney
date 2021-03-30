import { FormEvent, useState } from 'react'

import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import { api } from '../../services/api'
import outcomeImg from '../../assets/outcome.svg'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) { //pegando as propriedades atraves da destruturação
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  
  //criando o estado para armazenar a informação de qual botão foi selecionado
  const [type, setType] = useState ('deposit')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault() //prevenindo o comportamento padrao do html de tentar levar para outra pagina quando submete o formulario 

    const data = {
      title,
      value,
      category,
      type,
    }

    // inserindo a api
    api.post('transactions', data)

  }
  
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

      {/* formulario */}
      <Container onSubmit={handleCreateNewTransaction}> {/*toda vez que clicar em submeter, vai disparar essa funcao */}
        <h2>Cadastrar transação</h2>

        <input 
          placeholder="Título"
          value={title} //armazenando a informacao no value
          onChange={event => setTitle(event.target.value)} //salvando o que for digitado no input
        />

        <input 
          type="number"
          placeholder="Valor"
          value={value}
          onChange={event => setValue(Number(event.target.value))} //convertendo para ser numerico no lugar de string
        />

        <TransactionTypeContainer>
          <RadioBox //transformando o buttom em componente
            type="button"
            onClick={() => { setType('deposit')}} //funcao para mudar o estado do botao
            isActive={type === 'deposit'} //propriedade que poderia ter qualquer nome 
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </RadioBox >

          <RadioBox  
            type="button"
            onClick={() => { setType('withdraw')}}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </RadioBox >

        </TransactionTypeContainer>

        <input 
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>

      </Container>
    </Modal>
  )
}