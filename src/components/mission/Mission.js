import Header from "../header/Header";
import styled from "styled-components";
import PageContainer from "../page-container/PageContainer";


export default function Mission(){

    return(
        <div>
            <Header />

            <PageContainer>


                    <ContentBox>
                        <div>
                            <h1>
                                Missão
                            </h1>
                        </div>
                        <div>
                            <h2>
                                Nossa missão é contribuir para divulgar materiais úteis no âmbito acadêmico
                                e fomentar a colaboração mútua entre estudantes que buscam o acesso sem barreiras
                                ao conhecimento, bem como divulgar materiais de apoio ao aprendizado.
                            </h2>
                        </div>

                    </ContentBox>

                
            </PageContainer>           

        </div>

    );
}

const ContentBox = styled.div`
    width: 40%;
    height: auto;
    padding:30px;
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
    opacity: 0.8;
    border-radius: 8px;
    div{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    h1{
        color: #fff;
        font-size: 27px;
        margin-bottom: 15px;
        font-family: "Passion One";
        font-weight: 400;
        letter-spacing: 1px;
    }
    h2{
        font-family: 'Lato', sans-serif;
        font-size: 20px;
        color: #fff;
        line-height: 30px;
    }
    @media (max-width: 611px){
        width: 90%;
        text-align: center;
        margin-top: 50px;
    }
`