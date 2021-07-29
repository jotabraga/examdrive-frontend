import { Link } from "react-router-dom";
import styled from "styled-components";

export default function DropdownMenu({isDropped, showDropdown}){

    return(

        <MenuContainer isEnabled={isDropped} onClick={showDropdown}>
            <StyledMenu >
            <Link to="/disciplinas"><h2>Disciplinas</h2></Link>
            <Link to="/professores"><h2>Professores</h2></Link>
            <Link to="/periodos"><h2>Periodos</h2></Link>
            </StyledMenu>
        </MenuContainer>

    );
}

const MenuContainer = styled.div`
    display: ${props => props.isEnabled ? "block" : "none"};
    position: fixed;
    top: 72px;
    left: 0;
    background: transparent;
    width: 100vw;
    height: auto;
`

const StyledMenu = styled.div`
    position: absolute;
    right: 0;
    width: 100vw;
    height: 110px;
    border-radius: 0 0 8px 8px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    background: #ef5798;
    color: #fff;
    font-family: "Lato";
    font-size: 20px;
    font-weight: bold;
`