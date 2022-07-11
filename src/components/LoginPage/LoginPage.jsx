import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginSchema } from '../../validations/validationsYup'
import axios from "axios";
import Header from "../Headers/HeaderLoginRegister";
import { Background, Form } from './LoginStyle';

function LoginPage() {
    const navigate = useNavigate();

    const [sendError, setSendError] = useState('');

    async function sendLogin(e) {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        const user = {
            email,
            password,
        }
        const isValid = await loginSchema.isValid(user);

        if (isValid) {

            const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/login`, user);

            promise
            .then((res) => {
                setSendError('');
                localStorage.setItem("tokenFastCloset", res.data.token);
                localStorage.setItem("nameFastCloset", res.data.user.name);
                navigate('/');
            })

            .catch(err => {
                if (err.response.status === 401 || err.response.status === 404) {
                    setSendError('Preencha os dados corretamente.');
                } else {
                    alert(err.response);
                }
            })

            return
        }
    }

    return (
        <Background>
            <Header />
            <Form onSubmit={sendLogin} >
                <h1>Identificação</h1>

                {sendError !== "" ? (
                    <p>{sendError}</p>
                ) : ""}

                <input type="email" placeholder="Email" required />

                <input type="password" placeholder="Senha" required />

                <button>Entrar</button>

                <Link to='/register'>
                    <h2>Faça seu cadastro aqui</h2>
                </Link>
            </Form>
        </Background>

    )
}

export default LoginPage;



