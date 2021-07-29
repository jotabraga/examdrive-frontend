import styled from "styled-components";
import Logotype from "../../assets/Logotype.png"; 
import DropdownMenu from "./DropdownMenu";
import { useState } from "react";
import {BsList} from "react-icons/bs";


export default function Header(){

    const [isDropped, setIsDropped] = useState(false);

    const showDropdown = () => {
        setIsDropped(!isDropped);
      };

    return (
        <>
            <StyledHeader>
                <Trademark src={Logotype} />
                <Title>Driven Repository</Title>
                <BsList fontSize="30px"  onClick={showDropdown} />
            </StyledHeader>

            <DropdownMenu isDropped={isDropped} showDropdown={showDropdown} />

            <MainContainer>

                <TestsOptions>


                </TestsOptions>
            

            </MainContainer>

        </>
    );
}

const Trademark = styled.img`
    width: 40px;
    height: auto;
`
const Title = styled.h1`
  color: #fff;
  font-size: 35px;
  font-family: "Passion One";
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
`

const TestsOptions = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const MainContainer = styled.div`
    background-image: url(https://dev.bravvo.me/brbauen/driven/wp-content/uploads/2021/07/image-75.jpg);
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-attachment: fixed;
`

// .btn {
//     font-weight: 700;
//     font-size: 18px;
//     line-height: 120%;
//     text-align: center;
//     color: #FFF;
//     background: #0F0F14;
//     border-radius: 8px;
//     border: 0;
//     box-sizing: border-box;
//     padding: 18px 60px;
//     -webkit-transition: all 0.5s;
//     -moz-transition: all 0.5s;
//     transition: all 0.5s;
// }

// .btn:hover, .btn:focus {
//     color: #FFF;
//     background-color: #FA4098;
//     border: 0;
// }