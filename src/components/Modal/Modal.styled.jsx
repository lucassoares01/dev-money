import styled from "styled-components";

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(1, 1, 1, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Modal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 300px;
    background: #fff;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 8px 0px #000000;
    box-shadow: 0px 0px 8px 0px #000000;
    position: relative;

    p{
        font-weight: bold;
        font-size: 22px;
    }
`

export const Button = styled.button`
    background: red:
    outline: none;
    border: none;
    color: #fff;
    font-size: 20px;
    font-weight: bold; 
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px 20px;
    border-radius: 0px 3px 0px 0px;
    cursor: pointer;
    transition: 0.3s;

    &:hover{
        opacity: 0.5;
    }
`
