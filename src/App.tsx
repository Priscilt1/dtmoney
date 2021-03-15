import styled from 'styled-components'

//criação do componente estilizavel
const Title = styled.h1 `
  font-size: 64px;
  color: red;
`

export function App() {
  return (
    <div className="App">
     <Title>Hello Word</Title> {/* componente criado para a estilização */}
    </div>
  )
}