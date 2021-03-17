import { createGlobalStyle } from 'styled-components'

//o GlobalStyle depois sera um componente 
export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #ffffff;
    --green: #33CC95;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  //font-size: 16px (desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93,75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
    //REM - 1rem = font-size - melhor adaptação na tela do usuario da aplicação em geral

  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased; //para a fonte ficar mais nitida
  }

  button {
    cursor: pointer;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  [disabled] { //tudo que estiver desabilitado, como input, button..
    opacity: 0.6;
    cursor: not-allowed; //plaquinha de nao permitido
  }

  /* ESTILIZAÇÃO DO MODAL */
  .react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);
    position: fixed; //para o modal ficar fixo mesmo quando tiver rolagem na tela
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative; //para o icone de fechar ficar proximo ao modal
    border-radius: 0.24rem;
  }
  
`