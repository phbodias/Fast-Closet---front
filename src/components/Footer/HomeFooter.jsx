//import axios from "axios";
import styled from "styled-components";
import { Link } from 'react-router-dom';

export default function HomeFooter() {
    return (
        <FooterStyle>
            <Link to='/'>
                <p><ion-icon name="home-outline"></ion-icon></p>
            </Link>
            <Link to='/categories'>
                <p><ion-icon name="grid-outline"></ion-icon></p>
            </Link>
            <p><ion-icon name="cart-outline"></ion-icon></p>
        </FooterStyle>
    )
}

const FooterStyle = styled.div`
    padding: 20px 0px;
    display: flex; 
    justify-content: space-evenly;
    background-color: #D92525;
    width: 100%;
    height: fit-content;
    box-shadow: 1px 1px 10px 5px #00000058;
    position: fixed; bottom: 0;

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