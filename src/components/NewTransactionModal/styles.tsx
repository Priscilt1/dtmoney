import styled from 'styled-components'
import { darken, transparentize } from 'polished'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  input { 
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input { //todo input que tem um input antes dele 
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: none;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);    
    }
  }
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

interface RadioBoxProps { //typescript
  isActive: boolean;
  activeColor: 'green' | 'red'; //pode receber green ou red
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>` //typescript
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  
  /* se o props active for true, vai ter a colors, se nao, sera transparente */
  background: ${(props) => props.isActive
   ? transparentize(0.9, colors[props.activeColor]) //lembrando que sera aplicado apenas no background color
   : 'transparent' //o transparent vem do polished
  }; //o css é colocado dentro de aspas
  
  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  &:hover{
    border-color:${darken(0.1, '#d7d7d7')}; //usando uma funcao com a biblioteca polished para escurecer a cor da borda
  }

  img{
    width: 20px;
    height: 20px;
  }

  span{
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`