import Header from "../header/Header";
import styled from "styled-components";
import PageContainer from "../page-container/PageContainer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../config/api";
import TestInfo from "./TestInfo";

export default function TestsOfSubject(){

    const { subjectId: id } = useParams();
    const [tests, setTests] = useState([]);

    useEffect(() =>{

        getSubjectTests(id);

    },[id]);

    async function getSubjectTests(id){        

        try {            
            const response = await axios.get(`${API}/subject-tests/${id}`);
            if (!response.status === 200) throw new Error(response.status);
            setTests(response.data);

        } catch (error) {
            console.log(error);    
        }
    }

 
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