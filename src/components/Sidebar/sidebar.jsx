import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Sidebar = ({ active }) => {
  const closeSidebar = () => { active(false) }
  const navigate = useNavigate();

  const username = localStorage.getItem("nameFastCloset");
  const token = localStorage.getItem("tokenFastCloset");

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    //getCartProducts()
    // eslint-disable-next-line
  }, []);

  function logout() {
    if (window.confirm("Deseja realmente fazer logout?")) {
      localStorage.setItem("tokenFastCloset", "");
      localStorage.setItem("nameFastCloset", "");
      window.location.reload();
    }
  }

  function getCartProducts() {
    
    const promisse = axios.get(`https://fast-closet.herokuapp.com/cart`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    promisse
      .then((res) => {
        setCart(res.data);
        setShowCart(!showCart);
      })

      .catch((err) => {
        alert(err.response.data);
        logout();
        navigate('/login');
      })
  }

  return (
    <Container sidebar={active}>
      <Vazio onClick={closeSidebar}></Vazio>
      <Content>
        <Close onClick={closeSidebar}><ion-icon name="close-circle-outline"></ion-icon></Close>
        <Hello>
          <p>Olá, {username}.</p>
          <Login>
            <p onClick={logout}>Fazer logout</p>
          </Login>
        </Hello>
        <Options>
          <div>
            <p><ion-icon name="person-outline"></ion-icon></p>
            <p>Minha conta</p>
          </div>
          <div>
            <p><ion-icon name="bag-handle-outline"></ion-icon></p>
            <p>Meus pedidos</p>
          </div>
          <Link to='/'>
            <div>
              <p><ion-icon name="home-outline"></ion-icon></p>
              <p>Voltar para home</p>
            </div>
          </Link>
          <div>
            <p><ion-icon name="cart-outline"></ion-icon></p>
            <p onClick={getCartProducts}>Carrinho</p>
          </div>
          <Cart>
            {showCart ? (
              <Itens>
                {cart[0] === "Carrinho vazio." ? (
                  <p>Carrinho vazio</p>
                ) : (
                  <>
                    {cart.map((item, index) => {
                      return (
                        <Link to={`/produto/${item._id}`}>
                          <Product>
                            <img src={item.product.images[0]} alt="product" />
                            <div>
                              <p key={index}>{item.product.title}</p>
                              <p>R${item.product.value}</p>
                            </div>
                          </Product>
                        </Link>

                      )
                    })}
                    <Link to='/finalizarpedido'>
                      <Button>Finalizar pedido</Button>
                    </Link>
                  </>
                )}

              </Itens>
            ) : ""}
          </Cart>
        </Options>
      </Content>
    </Container>
  )
}

const Button = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    background-color: #d13131;
    width: 60%;
    padding: 10px 0;
    color: white;
    font-size: 1.2em;
    font-weight: bold;
    border-radius: 5px;
    &:hover{
        background-color: var(--cor01);
        cursor: pointer;
    }
`

const Product = styled.div`
  margin-bottom: 17px;

  img{
    height: 50px;
  }
  
  div{
    display: flex;
    flex-direction: column;
    
    p{
      font-size: 18px;
      text-overflow: ellipsis;
    }
  }
`

const Itens = styled.div`
  width: 250px;
  height: fit-content;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`

const Cart = styled.div`
  font-size: 9px;
  margin-left: 20px;
`

const Options = styled.div`

  margin-top: 25px;

  div{
    display: flex;
    font-size: 12px;

    p{
      margin-left: 20px;
      margin-bottom: 10px;
    }
  }
`
const Login = styled.div`
  font-size: 9px;
  margin-top: 5px;
  p{
    color: #dd1d1d;
  }
`

const Hello = styled.div`
  margin: 20px;
  font-size: 15px;
`

const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0px;
  right: ${props => props.sidebar ? '0' : '-100%'};
  display: flex;
  animation: showSidebar .4s;
  
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

const Vazio = styled.div`
    height: 100vh;
    width: calc(100vw - 300px);
    position: fixed;
    left: 0;
`

const Close = styled.div`
  font-size: 40px;
  position: fixed;
  margin-top: 20px;
  margin-left: 250px;
  color: white;
  cursor: pointer;
`

const Content = styled.div`
    background-color: #344149;
    width: 300px;
    position: fixed;
    right: 0;
    height: 100vh;
    font-family: var(--roboto-font);
    overflow-y: scroll;
`

export default Sidebar
