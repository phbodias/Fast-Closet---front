//import axios from "axios";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useState } from "react";
import Sidebar from '../Sidebar/sidebar'

export default function HomeHeader() {
    const [user, setUser] = useState([]);

    const [sidebar, setSidebar] = useState(false)

    const showSiderbar = () => setSidebar(!sidebar)

    return (
        <HeaderStyle>
            {user.length === 0 ? (
                <Link to='/login'>
                    <p><ion-icon name="log-in-outline"></ion-icon></p>
                </Link>
            ) : (
                <p onClick={() => setUser([])}><ion-icon name="log-out-outline"></ion-icon></p>
            )}
            <h1>FastCloset</h1>
            <p onClick={showSiderbar}><ion-icon name="menu-outline"></ion-icon></p>
            {sidebar && <Sidebar active={setSidebar} />}
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    padding: 20px 0px;
    display: flex; 
    justify-content: space-evenly;
    background-color: #ab9a9ad5;
    width: 100%;
    height: 65px;
    box-shadow: 1px 1px 10px 5px #00000058;
    position: fixed; top: 0;
    z-index: 1;
    box-sizing: border-box;

    h1{ 
        font-size: 1.8em;
        font-family: var(--pacifico-font);
        color: white;
        width: 70vw;
        text-align: center;
    }

    p{
        font-size: 2.1em;
        color: #FFFFFF;
    }
`