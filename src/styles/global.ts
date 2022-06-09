import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --background: #F0F2F5;
    --red: #E62E4D;
    --blue: #5429CC;
    --green: #33CC95;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB2;

    --shape: #FFFFFF;
}


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 1080px) {
        font-size: 93.75% // 15px
    }

    @media (max-width: 720px) {
        font-size: 87.5%; // 14px
    }
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

.react-modal-overlay {
    background: rgba(0, 0, 0, 0.5); //preto com transparencia

    position: fixed; //tela toda

    top: 0;
    bottom: 0;
    left: 0;        //overlay ocupa a tela toda
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;        //overlay ficara sempre centralizado
    

}

.react-modal-content {
    
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative; //pois vou posicionar o botao de fechar de forma absoluta dentro do modal
    border-radius: 0.25rem;

    input {
        display: block;
    }


}

.react-modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.8)
    }
}

`