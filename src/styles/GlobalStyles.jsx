import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    .App{
        display: flex;
        gap: 50px;
        margin-top: 60px;
    }

    h1{
        color: #fff;
    }

    body{
        text-align: center;
        width: 100vw;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Nunito';
        background: #2e3440;
    }
`;
