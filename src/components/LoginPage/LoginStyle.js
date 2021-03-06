import styled from "styled-components";

const Background = styled.div`
    background-color: #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    background-color: #ab9a9ad5;
    padding: 15px;
    border-radius: 10px;
    width: 80%;

    p{
        color: red;
        font-size: 1.0em;
        margin: -5px 0;
        text-align: center;
    }

    h1{
        font-size: 1.3em;
        font-family: var(--roboto-font); font-weight: bold;
        color: white;
    }

    h2{
        font-size: 1em;
        font-family: var(--roboto-font); font-weight: bold;
        color: white;
        &:hover{
            text-decoration: underline;
            cursor: pointer;
        }
    }

    input{
        width: 90%;
        border: none;
        padding: 10px;
        border-radius: 5px;
        font-size: 1.1em;
    }   

    button{
        font-size: 1.1em;
        border: none;
        padding: 8px;
        border-radius: 5px;
        &:hover{
            background-color: #ffa6a6;
            cursor: pointer;
        }
    }
`
export {Background, Form};