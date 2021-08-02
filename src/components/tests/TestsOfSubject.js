import Header from "../header/Header";
import styled from "styled-components";
import PageContainer from "../page-container/PageContainer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../config/api";
import TestInfo from "./TestInfo";

export default function TestsOfSubject(){

    const { id } = useParams();
    // const [tests, setTests] = useState([]);

    // useEffect(() =>{

    //     getProfessorTests(id);

    // },[id]);

    // async function getProfessorTests(id){        

    //     try {            
    //         const response = await axios.get(`${API}/professor-tests/${id}`);
    //         if (!response.status === 200) throw new Error(response.status);
    //         setTests(response.data);

    //     } catch (error) {
    //         console.log(error);    
    //     }
    // }

    const tests = [{
        "id": 1,
        "professorId": 3,
        "subjectId": 1,
        "category": "P1",
        "link": "http://www.uel.br/projetos/matessencial/superior/calc1/provas2005.pdf",
        "name": "2020.1",
        "professor": {
            "id": 3,
            "name": "Paulo Siqueira"
        },
        "subject": {
            "id": 1,
            "name": "Calculo I",
            "period": "1 ano"
        }
    },
    {
        "id": 2,
        "professorId": 3,
        "subjectId": 1,
        "category": "P1",
        "link": "http://www.uel.br/projetos/matessencial/superior/calc1/provas2005.pdf",
        "name": "2020.1",
        "professor": {
            "id": 3,
            "name": "Paulo Siqueira"
        },
        "subject": {
            "id": 1,
            "name": "Calculo I",
            "period": "1 ano"
        }
    }];




    return(
        <div>
            <Header />

            <PageContainer>

                <ContentBox>

                    {tests.map((test) => (
                        <TestInfo
                            key={test.id}
                            link={test.link}
                            subject={test.subject.name}
                            professor={test.professor.name}
                            category={test.category}
                        />
                    ))}
                
                </ContentBox>           
                
            </PageContainer>           

        </div>
    );
}

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