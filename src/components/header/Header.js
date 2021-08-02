import styled from "styled-components";
import Logotype from "../../assets/Logotype.png"; 
import DropdownMenu from "./DropdownMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";

export default function Header(){

    const [isDropped, setIsDropped] = useState(false);

    const showDropdown = () => {
        setIsDropped(!isDropped);
      };

    return (
        <>
            <StyledHeader>
                <Link to={"/"}>
                    <Trademark src={Logotype} />
                </Link>

                <Link to={"/"}>
                    <Title>Driven Repository</Title>
                </Link>

                <BsList fontSize="30px"  onClick={showDropdown} />
            </StyledHeader>
            
            <DropdownMenu isDropped={isDropped} showDropdown={showDropdown} />
        </>
    );
}

const Trademark = styled.img`
    width: 40px;
    height: auto;
    border: none;

    @media (max-width: 611px){
        width: 30px;
    }
`
const Title = styled.h1`
  color: #fff;
  font-size: 35px;
  font-family: "Passion One";

  @media (max-width: 611px){
    font-size: 25px;
}
`;

const StyledHeader = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding-left: 25px;
    padding-right: 25px;
    align-items: center;
    background-color: #ef5798;
    color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.10), 0 6px 20px 0 rgba(0, 0, 0, 0.09);     
    @media (max-width: 611px){
        z-index:5;
        height: 60px;
    }
`