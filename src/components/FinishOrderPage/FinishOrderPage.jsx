import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../Headers/HeaderLoginRegister";

function FinishOrderPage() {
    const navigate = useNavigate();
    // eslint-disable-next-line
    const [paymenteOption, setpaymenteOption] = useState('Pix');
    
    // & RECEBE CARRINHO COM OS PRODUTOS ( ARRAY DE OBJETOS )
    // & RENDERIZA OS PRODUTOS NA TELA
    // & APÓS O USUÁRIO PREENCHER TODOS OS DADOS CONFIRMA E VAI PRA TELA DE "PAGAMENTO"

    
    function finishOrder (e){
        e.preventDefault();
        navigate('/pedidofinalizado');
    }

    return (
        <Background>
            <Header />
            <Content>
                <FormBox>

                    <h2>Finalizar pedido</h2>

                    {/* // ITEMS */}

                    <Hrow />

                    <Form onSubmit={ e => finishOrder(e)}>

                        <h2>Dados para contato</h2>
                        <input type="email" placeholder="Email" required />
                        <input type="text" placeholder="Nome" required />
                        <input type="number" placeholder="DD+Telefone" required />

                        <PaymentDiv>
                            <h2>Selecione sua forma de pagamento</h2>
                            <select name="select" onChange={ e => setpaymenteOption(e.target.value)}>
                                <option value="Pix">Pix</option>
                                <option value="Boleto">Boleto</option>
                                <option value="Cartão de Crédito">Cartão de Crédito</option>
                            </select>
                        </PaymentDiv>

                        <h2>Dados para entrega</h2>
                        <input type="text" placeholder="Estado" required />
                        <input type="text" placeholder="Município" required />
                        <input type="text" placeholder="Bairro" required />
                        <input type="text" placeholder="Endereço, número" required />

                        <button>Finalizar pedido e Realizar pagagamento...</button>

                    </Form>



                </FormBox>
            </Content>
        </Background>
    )
}


export default FinishOrderPage;

// & CSS

const Background = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    height: 100vh;
`

const Content = styled.div`
    display: flex; justify-content: center;
    margin-top: 69px;
    width: 100%;
    padding-top: 15px;
`

const FormBox = styled.div`
    display: flex; flex-direction: column; align-items: center;
    margin: 0px 10px;
    padding: 10px;
    width: 100%;
    gap: 15px;

    h2{
        font-weight: bold;
    }

`

const Hrow = styled.div`
    height: 1px;
    width: 100%;
    background-color: var(--cor04);
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 15px;
    border-radius: 10px;
    width: 100%;
    

    h1{
        font-size: 1.3em;
        font-family: var(--roboto-font); font-weight: bold;
        color: white;
    }

    h2{
        font-size: 1em;
        font-family: var(--roboto-font); font-weight: bold;
        color: black;
        &:hover{
            text-decoration: underline;
            cursor: pointer;
        }
    }

    input{
        width: 90%;
        border: 1px solid black;
        padding: 10px;
        border-radius: 5px;
        font-size: 1.1em;
    }   

    button{
        color: white;
        background-color: var(--cor04);
        font-size: 1.1em;
        border: none;
        padding: 8px 16px;
        border-radius: 5px;
        &:hover{
            background-color: #ffa6a6;
            cursor: pointer;
        }
    }

    select{
        width: 96%;
    }


`

const PaymentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    gap: 10px;

    select{
        background-color: white;
        width: 80%;
        border: 1px solid black;
        padding: 10px;
        border-radius: 5px;
        font-size: 1.1em;
    }
`