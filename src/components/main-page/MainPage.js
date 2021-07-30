import Header from "../header/Header";
import styled from "styled-components";
import { useHistory } from "react-router";

export default function MainPage(){

    const history = useHistory();

    function listSubjects(){
        history.push("/subjects");
    }

    function listProfessors(){
        history.push("/professors");
    }

    function goToTestRegisterPage(){
        history.push("/test-register");
    }

    return(
        <div>

            <Header />

            <MainContainer>

                <TestsOptions>

                    <PageServices>
                        <h1>Consultar uma prova</h1>
                        <ViewTest onClick={listSubjects}>Por disciplina</ViewTest>
                        <ViewTest onClick={listProfessors}>Por professor</ViewTest>
                    </PageServices>

                    <PageServices>
                        <h1>Ajude o acervo!</h1>
                        <ViewTest onClick={goToTestRegisterPage}>Enviar prova</ViewTest>
                    </PageServices>

                </TestsOptions>

            </MainContainer>

        </div>
    );
}

const TestsOptions = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    height: 100vh;
    margin-top: 30px;
    justify-content: space-evenly;
    align-items: center;
`;

const MainContainer = styled.div`
    background-image: url(https://dev.bravvo.me/brbauen/driven/wp-content/uploads/2021/07/image-75.jpg);
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-attachment: fixed;
`;

const PageServices = styled.div` 
    width: 300px;
    height: 300px;
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.92;
    border-radius: 8px;
    h1{
        color: #fff;
        font-size: 27px;
        margin-bottom: 15px;
        font-family: "Passion One";
    }
`;

const ViewTest = styled.button` 
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 10px;
    width: 90%;
    line-height: 100%;
    text-align: center;
    color: #FFF;
    background: #0F0F14;
    border-radius: 8px;
    border: 0;
    box-sizing: border-box;
    padding: 18px 60px;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
    :hover{
        background: #FA4098;
    }
`;
