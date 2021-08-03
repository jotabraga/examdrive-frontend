import Header from "../header/Header";
import PageContainer from "../page-container/PageContainer";
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

            <PageContainer>

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

            </PageContainer>

        </div>
    );
}

const TestsOptions = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    height: auto;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 611px){
        margin-top: 0;
        flex-direction: column;
        justify-content: center;
    }
`;

const PageServices = styled.div` 
    width: 300px;
    height: 250px;
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    opacity: 0.92;
    border-radius: 8px;
    h1{
        color: #fff;
        font-size: 27px;
        margin-bottom: 15px;
        font-family: "Passion One";
    }
    @media (max-width: 611px){
        margin-top: 20px;
        height: 220px;
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
    border: 0.2px solid #FA4098;
    box-sizing: border-box;
    padding: 18px 60px;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
    :hover{
        background: #FA4098;
    }
`;
