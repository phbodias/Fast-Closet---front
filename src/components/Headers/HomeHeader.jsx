//import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import Sidebar from '../Sidebar/sidebar'
import { Link } from "react-router-dom";

export default function HomeHeader() {
    const [sidebar, setSidebar] = useState(false)

    const showSiderbar = () => setSidebar(!sidebar)

    const [username] = useState(localStorage.getItem("nameFastCloset"));

    return (
        <HeaderStyle>
            <Link to='/'>
                <h1>FastCloset</h1>
            </Link>
            {username === "" ? (
                <Link to="/login">
                    <p><ion-icon name="log-in-outline"></ion-icon></p>
                </Link>
            ) : (
                <>
                    <p onClick={showSiderbar}><ion-icon name="menu-outline"></ion-icon></p>
                    {sidebar && <Sidebar active={setSidebar} />}
                </>
            )}
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    padding: 20px 25px;
    display: flex; 
    justify-content: space-between;
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
        text-align: center;
    }

    p{
        font-size: 2.1em;
        color: #FFFFFF;
    }
`