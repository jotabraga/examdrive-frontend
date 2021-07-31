import Header from "../header/Header";
import styled from "styled-components";
import PageContainer from "../page-container/PageContainer";


export default function SubjectsPage(){

    return(
        <div>
            <Header />

            <PageContainer>
                <ContentBox>
                    <div>
                        <h1>Compartilhe uma prova</h1>
                    </div>
                </ContentBox>
            </PageContainer>           
        </div>

    );
}

const ContentBox = styled.form`
    width: 50%;
    padding:20px;
    height: auto;
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
    }
`