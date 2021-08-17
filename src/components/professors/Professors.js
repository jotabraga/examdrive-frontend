import Header from "../header/Header";
import styled from "styled-components";
import PageContainer from "../page-container/PageContainer";
import ProfessorTests from "./ProfessorInfo";
import { useState, useEffect } from "react";
import { API } from "../config/api";
import axios from "axios";

export default function RegisteredProfessors() {
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    getProfessors();
  }, []);

  async function getProfessors() {
    const request = await axios.get(`${API}/professors`);
    setProfessors(request.data);
  }

  return (
    <div>
      <Header />

      <PageContainer>
        {professors.length === 0 || professors === null ? (
          <NoProfessors>
            Erro ao carregar os professores, tente novamente!
          </NoProfessors>
        ) : (
          <ContentBox>
            <div>
              <h1>Professores</h1>
            </div>

            {professors.map((professor) => (
              <ProfessorTests
                key={professor.id}
                name={professor.name}
                testsCount={professor.testsCount}
                id={professor.id}
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
  text-align: center;
`;

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
    @media (max-width: 611px){
        width: 90%;
        h1{
            font-size: 20px;
        }
`;
