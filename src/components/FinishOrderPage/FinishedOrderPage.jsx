import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../Headers/HeaderLoginRegister";
import axios from "axios";
import { useEffect, useState } from "react";

function FinishedOrderPage() {
    const [text, setText] = useState(null);
    const navigate = useNavigate();
    const { orderId } = useParams();

    useEffect( () => {
        const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/ordersfinished/${orderId}`);

        promise
        .then ( res => {
            setText(<h1>Pedido finalizado com sucesso.</h1>)
        })
        .catch ( err => {
            console.log(err)
            setText(<h1>Pedido não encontrado.</h1>)
        })


    }, [orderId])
    
    

    function backHome(){
        navigate('/')
    }
    return (

        <Background>
            <Header/>
            <Content>
                {text}

                <br /> <br />

                <button onClick={backHome} >Voltar para home</button>

            </Content>
        </Background>
        
    )
}

export default FinishedOrderPage

// & CSS

const Background = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    height: 100vh;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 69px;
    width: 100%;
    padding-top: 15px;
    height: 100%;

    h1{ 
        font-family: var(--roboto-font);
        font-weight: bold;
        text-align: center;
    }

    button{
        color: white;
        background-color: #ab9a9ad5;
        font-size: 1.1em;
        border: none;
        padding: 8px 16px;
        border-radius: 5px;
        &:hover{
            background-color: #272323d4;
            cursor: pointer;
        }
    }
`