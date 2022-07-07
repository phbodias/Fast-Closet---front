import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import { registerSchema } from '../../validations/validationsYup'
import axios from "axios";
import Header from "../Header/Header";

function LoginPage() {
    const navigate = useNavigate();

    async function sendRegister(e) {
        e.preventDefault();
        const email = e.target[1].value;
        const password = e.target[2].value;

        const user = {
            email,
            password,
        }

        const isValid = await registerSchema.isValid(user);

        if (isValid) {
            const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/login`, user);
            promise.then((res) => {
                navigate('/home');
            })
                .catch(err => {
                    console.log(err)
                })
        }

    }

    return (
        <Background>
            <Header />
            <Form onSubmit={sendRegister} >
                <h1>Identificação</h1>

                <input type="text" placeholder="Nome" required />

                <input type="email" placeholder="E-mail" required />

                <button>Entrar</button>

                <Link to='/register'>
                    <h2>Faça seu cadastro aqui</h2>
                </Link>
            </Form>
        </Background>

    )
}

export default LoginPage;



// & STYLED COMPONENETS

const Background = styled.div`
    background-color: white;
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
    background-color: #D92525;
    padding: 15px;
    border-radius: 10px;
    width: 70%;
    

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
