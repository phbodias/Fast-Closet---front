import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import { registerSchema } from '../../validations/validationsYup'
import axios from "axios";
import Header from "../Headers/HeaderLoginRegister";

function RegisterPage () {
    const navigate = useNavigate();

    async function sendRegister (e){
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const passwordRepeat = e.target[3].value;
        
        if(name.length < 3){
            return alert('Nome precisa ter no mínimo 3 caractéres');
        }
        if((password !== passwordRepeat) || (password.length < 6 || passwordRepeat.length < 6)){
            return alert('As senhas precisam ser iguais e no mínimo 6 caracteres');
        }

        const bodyRegister = {
            name,
            email,
            password,
        }

        const isValid = await registerSchema.isValid(bodyRegister);

        if(isValid){
            const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/register`, bodyRegister);
            promise.then( (res) =>{
                alert(res.data)
                navigate('/login');
            })
            .catch( err =>{
                console.log(err.response);
                alert(err.response.data);
            })
            return
        }
        alert('Preencha os dados corretamente')

    }

    return (
        <Background>
            <Header/>

            <Form onSubmit={sendRegister} >
                <h1>Cadastre-se abaixo</h1>

                <input type="text" placeholder="Nome" required />

                <input type="email" placeholder="E-mail" required />

                <input type="password" placeholder="Senha" required />

                <input type="password" placeholder="Confirmr senha" required />

                <button>Cadastrar</button>

                <Link to='/login'>
                    <h2>Já tenho conta, fazer login!</h2>
                </Link>
            </Form>
            
        </Background>
        
    )
}

export default RegisterPage;



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
