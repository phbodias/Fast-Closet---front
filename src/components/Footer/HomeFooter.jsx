import React from 'react';
import styled from "styled-components";

export default function HomeFooter() {

    return (
        <FooterStyle>
            <p><ion-icon name="home-sharp"></ion-icon></p>
        </FooterStyle>
    )
}

const FooterStyle = styled.div`
    padding: 20px 0px;
    display: flex; 
    justify-content: space-evenly;
    background-color: #ab9a9ad5;
    width: 100%;
    height: 75px;
    box-shadow: 1px 1px 10px 5px #00000058;
    position: fixed; bottom: 0;
    box-sizing: border-box;

    h1{ 
        font-size: 1.8em;
        font-family: var(--pacifico-font);
        color: white;
    }

    p{
        font-size: 2.1em;
        color: #FFFFFF;
    }
`