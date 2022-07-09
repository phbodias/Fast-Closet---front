import styled from "styled-components";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import Header from "../Headers/HeaderLoginRegister";

function ProductIdPage (){
    const [product, setProduct] = useState(null);

    const { id } = useParams();
    console.log(id)
    useEffect( () => {
        const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/product/${id}`);
        promise
        .then( res =>{
            console.log(res.data)
            setProduct(res.data.product)
        })
        .catch( err =>{
            console.log(err.response.data)
        })

    }, [id]);
    


    return (
        <Background>
            
            <Header/>

            {product ?
            <ProductComponent
            images={product.images}
            title={product.title}
            value={product.value}
            description={product.description}
            />
            :
            <Content><h1 className="noProduct" >Produto não encontrado</h1></Content>}
           
        </Background>
    )
}

function ProductComponent ({ images, title, value, description }){

    function addOnCart(){
        console.log('adicionei no carrinho');
    }
    
    return(
        <Content>

            <ProductBox>

                <BoxImg>
                
                   {images.map( image => <img src={image} alt="" />)}
                </BoxImg>

                <TitleAndValue>
                    <h1>{title}</h1>
                    <br />
                    <span>R$ {value}</span>
                </TitleAndValue>

                <AmountBox>
                    <p>Quantidade</p>
                    <input type="number" defaultValue={1} />
                </AmountBox>
                
            
                <BuyButton onClick={addOnCart}>COMPRAR</BuyButton>
        
    
                <Hrow/>

                <Description>
                    <h2>Descrição do produto</h2>
                    <br />
                    <p>{description}</p>
                </Description>

            </ProductBox>

            
        </Content>
    )
}

export default ProductIdPage;





// & CSS

const Background = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    height: 100vh;
    box-sizing: border-box;
`

const Content = styled.div`
    box-sizing: border-box;
    display: flex; justify-content: center;
    margin-top: 69px;
    width: 100%;
    padding-top: 25px;
    padding-right: 10px;
    padding-left: 10px;
 
    .noProduct{
        padding-top: 25px;
        font-size: 1.5em;
    }
`

const ProductBox = styled.div`
    display: flex; flex-direction: column; align-items: center;
    padding: 15px;
    width: 100%;
    gap: 15px;
`

const BoxImg = styled.div`
    box-sizing: border-box;
    border-radius: 5px;
    background-color: white;
    display: flex; justify-content: flex-start; align-items: center;
    width: 100%;
    height: 300px;
    border: 3px solid #1D1B1B;
    overflow: scroll;

    img{
        height: 100%;
    }
`

const TitleAndValue = styled.div`
    width: 100%;
    &, h1, span{
    font-size: 1.1em;
    font-weight: bold;
    }
`

const AmountBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    p{
        font-size: 1.2em;
    }

    input{
        max-width: 40px;
        font-size: 1.2em;
        padding: 5px;
        text-align: center;
        border: 1px solid lightgray;
    }
`

const BuyButton = styled.div`
    text-align: center;
    background-color: #1D1B1B;
    width: 50%;
    padding: 10px 0px;
    color: white;
    font-size: 1.2em;
    font-weight: bold;
    border-radius: 5px;
    &:hover{
        background-color: var(--cor01);
        cursor: pointer;
    }
`

const Description = styled.div`
    
    h2{
        font-size: 1.1em;
        filter: opacity(60%);
    }

    p{
        line-height: 1.3em;
    }
`

const Hrow = styled.div`
    height: 1px;
    width: 100%;
    background-color:#1D1B1B ;
`
