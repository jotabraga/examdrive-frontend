import Header from "../header/Header";
import styled from "styled-components";
import PageContainer from "../PageContainer/PageContainer";
import DataInfo from "../DataInfo/DataInfo";

export default function SubjectsPage(){

    const subjects = [
        {"id":1, "name":"Calculo","period":1},
        {"id":2, "name":"Fisica","period":2},
        {"id":3, "name":"Dinamica","period":1},
        {"id":4, "name":"Magnetismo","period":4}
    ]

    return(
        <div>
            <Header />

            <PageContainer>
       
                {subjects.length === 0 ? (
                    <NoSubjects>Erro ao carregar as provas, tente novamente!</NoSubjects>
                ) : (

                    <ContentBox>
                        <div>
                            <h1>Disciplinas</h1>
                            <h1>Período</h1>
                        </div>



                        {subjects.map((subject) => (
                            <DataInfo
                                key={subject.id}
                                name={subject.name}
                                period={subject.period}
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
    color: #fff;
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
