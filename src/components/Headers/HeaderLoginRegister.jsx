import styled from "styled-components";

export default function Header() {
    return (
        <HeaderStyle>
            <h1>FastCloset</h1>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    padding: 20px 0px;
    display: flex; justify-content: center;
    background-color: #ab9a9ad5;
    width: 100%;
    height: fit-content;
    box-shadow: 1px 1px 10px 5px #00000058;
    position: fixed; top: 0;

    h1{ 
        font-size: 1.8em;
        font-family: var(--pacifico-font);
        color: white;
    }
`