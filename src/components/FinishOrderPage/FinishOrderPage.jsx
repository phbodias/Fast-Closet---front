import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../Headers/HeaderLoginRegister";

function ItemFromCart ({ items}){
    if(items === null){  return <h1>Carrinho Vázio</h1>    } 
    
    const arrIds = items.map( (item, index) =>{
        const { product } = item;
        return <ItemBox key={index}>

                    <div className="titleAndValue">
                        <h3>{product.title}</h3>
                        <span>R$ {product.value}</span>
                    </div>

                    <div className="canvaImg">
                        <img src={product.images[0]} alt={product.title} />
                    </div>

               </ItemBox>
    });

    return arrIds
}


function FinishOrderPage() {
    const navigate = useNavigate();
    const token = localStorage.getItem("tokenFastCloset");

    const [items, setItems] = useState(null);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState('');
    const [paymenteOption, setpaymenteOption] = useState('Pix');
    const [totalValue, setTotalValue] = useState('')

    

    useEffect( () =>{
        const bodyToken = { headers : { Authorization: `Bearer ${token}` } };
        const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/cart`, bodyToken);

        promise
        .then( resp =>{
            setItems(resp.data);
            plusValue(resp.data);
        })

        .catch( err =>{
            console.log(err);
        })

    }, [token]);


    const body = {
        products: items,
        email,
        name,
        tel,
        cep,
        address,
        paymenteOption,
        totalValue
    }
    

    function plusValue (items){
        let totalValue = 0;
        for(let i = 0; i < items.length; i++){
            const { product } = items[i];
            const value = parseFloat(product.value.replace(",","."));
            totalValue+= value;
        }
        setTotalValue(totalValue.toFixed(2).replace('.', ','))
    }
    function finishOrder (e){
        e.preventDefault();

            const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/finishorder`, body, { headers : { Authorization: `Bearer ${token}` } });

        promise
        .then( resp =>{
            console.log(resp)
        })

        .catch( err =>{
            console.log(err);
        })
        
        navigate('/pedidofinalizado');
    }
    return (
        <Background>
            <Header />
            <Content>
                <FormBox>

                    <h2>Finalizar pedido</h2>

                    <ItemsList>
                        {<ItemFromCart items={items}/>}
                    </ItemsList>
                    
                    <TotalValue>
                        <h3>Valor Total: </h3>
                        <span>R$ {totalValue ? totalValue: '00,00'}</span>
                    </TotalValue>

                    <Hrow />

                    <Form onSubmit={ e => finishOrder(e)}>

                        <h2>Dados para contato</h2>
                        <input onChange={ e => setEmail(e.target.value)} value={email}
                        type="email" placeholder="Email" required />

                        <input onChange={ e => setName(e.target.value)} value={name}
                        type="text" placeholder="Nome" required />

                        <input onChange={ e => setTel(e.target.value)} value={tel}
                        type="number" placeholder="DD+Telefone" required />

                        <PaymentDiv>
                            <h2>Selecione sua forma de pagamento</h2>
                            <select name="select" onChange={ e => setpaymenteOption(e.target.value)}>
                                <option value="Pix">Pix</option>
                                <option value="Boleto">Boleto</option>
                                <option value="Cartão de Crédito">Cartão de Crédito</option>
                            </select>
                        </PaymentDiv>

                        <h2>Dados para entrega</h2>
                        <input onChange={ e => setCep(e.target.value)} value={cep}
                        type="number" placeholder="CEP" required />

                        <input onChange={ e => setAddress(e.target.value)} value={address}
                        type="text" placeholder="Endereço" required />

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
        font-family: var(--roboto-font);
        font-weight: bold;
    }

`

const Hrow = styled.div`
    height: 1px;
    width: 100%;
    background-color: #ab9a9ad5;
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
        background-color: #ab9a9ad5;
        font-size: 1.1em;
        border: none;
        padding: 8px 16px;
        border-radius: 5px;
        &:hover{
            background-color: #000000d2;
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

const ItemsList =  styled.div`
    display: flex; flex-direction: column;
    gap: 5px;
`

const ItemBox = styled.div`
    border-radius: 5px;
    box-sizing: border-box;
    background-color: lightgray;
    width: 100%;
    height: 80px;
    display: flex; justify-content: space-between;
    gap: 20px;
    padding: 10px;

    .titleAndValue {
        display: flex; flex-direction: column;
        height: 100%;
        justify-content: space-between;

        span{
            font-weight: bold;
        }

    }

    .canvaImg, img {
        width: 50px;
        height: 50px;
    }
`

const TotalValue = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`