import Header from "../header/Header";
import styled from "styled-components";
import PageContainer from "../page-container/PageContainer";
import ProfessorTests from "./ProfessorTests";


export default function SubjectsPage(){

    const professors = [
        {"id":1, "name":"Carlos Prado"},
        {"id":2, "name":"Paulo Oliveira"},
        {"id":3, "name":"Cesar Augusto"},
        {"id":4, "name":"Sandra Braga"},
        {"id":5, "name":"Pedro Sampaio"},
        {"id":6, "name":"Cassio Fukujima"},
        {"id":7, "name":"Nagato Sato"},
        {"id":8, "name":"Lucio Filho"}
    ]

    return(
        <div>
            <Header />

            <PageContainer>
       
                {(professors.length === 0 || professors === null) ? (
                    <NoProfessors>Erro ao carregar os professores, tente novamente!</NoProfessors>
                ) : (

                    <ContentBox>
                        <div>
                            <h1>Professores</h1>
                        </div>

                        {professors.map((subject) => (
                            <ProfessorTests
                                key={subject.id}
                                name={subject.name}
                                id={subject.id}
                            />
                        ))}
                    </ContentBox>
                )}
                
            </PageContainer>           

        </div>

    );
}

const NoProfessors = styled.h1` 
    font-family: "Lato";
    font-size: 30px;
    color: #000;
`

const ContentBox = styled.div`
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