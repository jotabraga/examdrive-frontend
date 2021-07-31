import Header from "../header/Header";
import styled from "styled-components";
import PageContainer from "../page-container/PageContainer";
import SubjectTests from "./SubjectTests";

export default function SubjectsPage(){

    const subjects = [
        {"id":1, "name":"Calculo","period":1},
        {"id":2, "name":"Dinamica","period":2},
        {"id":3, "name":"Estatistica","period":1},
        {"id":4, "name":"Fisica","period":1},
        {"id":5, "name":"Historia","period":1},
        {"id":6, "name":"Manutenção preditiva","period":1},
        {"id":7, "name":"Pesquisa operacional","period":1},
        {"id":8, "name":"Programação","period":4}
    ]

    return(
        <div>
            <Header />

            <PageContainer>
       
                {(subjects.length === 0 || subjects === null) ? (
                    <NoSubjects>Erro ao carregar as provas, tente novamente!</NoSubjects>
                ) : (

                    <ContentBox>
                        <div>
                            <h1>Disciplinas</h1>
                            <h1>Período</h1>
                        </div>

                        {subjects.map((subject) => (
                            <SubjectTests
                                key={subject.id}
                                name={subject.name}
                                period={subject.period}
                                id={subject.id}
                            />
                        ))}
                    </ContentBox>
                )}
                
            </PageContainer>           

        </div>

    );
}

const NoSubjects = styled.h1` 
    font-family: "Lato";
    font-size: 30px;
    color: #000;
`

const ContentBox = styled.div`
    width: 60%;
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
        justify-content: space-between;
    }
    h1{
        color: #fff;
        font-size: 27px;
        margin-bottom: 15px;
        font-family: "Passion One";
        font-weight: 400;
    }
`
