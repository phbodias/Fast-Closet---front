import { Link, useNavigate } from 'react-router-dom';
import { loginSchema } from '../../validations/validationsYup'
import axios from "axios";
import Header from "../Header/Header";
import { Background, Form } from './LoginStyle';

function LoginPage() {
    const navigate = useNavigate();
    
    async function sendLogin(e) {
        e.preventDefault();
        const email = e.target[1].value;
        const password = e.target[2].value;

        const user = {
            email,
            password,
        }

        const isValid = await loginSchema.isValid(user);

        if (isValid) {
            const promise = axios.post(`https://fast-closet.herokuapp.com/login`, user);
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
            <Form onSubmit={sendLogin} >
                <h1>Identificação</h1>

                <input type="email" placeholder="email" required />

                <input type="password" placeholder="senha" required />

                <button>Entrar</button>

                <Link to='/register'>
                    <h2>Faça seu cadastro aqui</h2>
                </Link>
            </Form>
        </Background>

    )
}

export default LoginPage;



