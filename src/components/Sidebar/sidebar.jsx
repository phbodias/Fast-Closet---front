import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Sidebar = ({ active }) => {

  const username = localStorage.getItem("nameFastCloset")

  const closeSidebar = () => { active(false) }

  return (
    <Container sidebar={active}>
      <Vazio onClick={closeSidebar}></Vazio>
      <Content>
        <Close onClick={closeSidebar}><ion-icon name="close-circle-outline"></ion-icon></Close>
        <Hello>
          {username !== "" ? (
            <p>Olá, {username}.</p>
          ) : (
            <p>Olá ;)</p>
          )}
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
        </Options>
      </Content>
    </Container>
  )
}

const Options = styled.div`

  margin-top: 40px;

  div{
    display: flex;
    font-size: 12px;

    p{
      margin-left: 20px;
      margin-bottom: 10px;
    }
  }
`

const Hello = styled.div`
  margin: 20px;
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

`;

export default Sidebar
