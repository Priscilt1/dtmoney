import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionsModal: () => void //o retorno da função é vazio
}

//colocando a propriedade (props) na função para pegar a função do onclick que esta no app
export function Header({ onOpenNewTransactionsModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money"/>
        <button type="button" onClick={onOpenNewTransactionsModal}>  {/* abrindo o modal */}
            Nova transação
        </button>
      </Content>
    </Container>
  )
}