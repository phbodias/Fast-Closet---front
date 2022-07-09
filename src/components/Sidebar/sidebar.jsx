import React from 'react'
import styled from 'styled-components';

const Sidebar = ({ active }) => {

  const closeSidebar = () => { active(false) }

  return (
    <Container sidebar={active}>
      <Vazio onClick={closeSidebar}></Vazio>
      <Content>
        <h1 onClick={closeSidebar}><ion-icon name="close-circle-outline"></ion-icon></h1>
        <Hello>
          <p>Olá ;)</p>
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
        </Options>
      </Content>
    </Container>
  )
}

export const Options = styled.div`

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

export const Hello = styled.div`
  margin: 20px;
`

export const Container = styled.div`
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

export const Vazio = styled.div`
    height: 100vh;
    width: calc(100vw - 300px);
    position: fixed;
    left: 0;
`

export const Content = styled.div`
    background-color: #344149;
    width: 300px;
    position: fixed;
    right: 0;
    height: 100vh;
  
    h1 {
        position: fixed;
        top: 20px;
        right: 20px;
        color: white;
        width: 35px;
        height: 35px;
        cursor: pointer;
    }

`;

export default Sidebar
