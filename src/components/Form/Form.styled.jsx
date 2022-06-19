import styled from "styled-components";

export const Form = styled.form`
  width: 420px;
  height: 550px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 0px 8px 0px #000000;
  box-shadow: 0px 0px 8px 0px #000000;
  background: #fff;

  .form-header {
    width: 100%;
    border-bottom: 1px solid gray;
    text-align: center;
    padding: 20px 0px;
  }

  .form-header small {
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 2px;
  }

  .form-header p {
    font-size: 30px;
    margin-top: 15px;
    letter-spacing: 1px;
  }

  .form-area {
    width: 100%;
    height: 100vh;
    display: flex;
    border-radius: 0px 0px 5px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
  }

  .form-area small {
    margin-top: 20px;
    font-size: 17.8px;
    font-weight: 500;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 16px;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1.8px solid gray;
  font-size: 22px;
  padding: 5px 5px;

  &:focus {
    outline: none;
    border-bottom: 1.8px solid purple;
  }
`;

export const Submit = styled.input`
  background: purple;
  color: #fff;
  font-size: 18px;
  padding: 15px 60px;
  border-radius: 2px;
  outline: none;
  border: none;
  transition: 0.2s:
  cursor: pointer;
    
  &:hover{
    opacity: 0.65;
  }
`;
