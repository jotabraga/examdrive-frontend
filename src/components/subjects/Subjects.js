import Header from "../header/Header";
import styled from "styled-components";
import PageContainer from "../page-container/PageContainer";
import SubjectTests from "./SubjectTests";
import { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../config/api";

export default function SubjectsPage(){

    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        getSubjects();
      }, []);
   
    async function getSubjects(){
    const request = await axios.get(`${API}/subjects`);
    setSubjects(request.data);    
    }

    return(
        <div>
            <Header />

            <PageContainer>
       
                {(subjects.length === 0 || subjects === null) ? (
                    <NoSubjects>Erro ao carregar as disciplinas, tente novamente!</NoSubjects>
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
                                period={subject.termId}
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
