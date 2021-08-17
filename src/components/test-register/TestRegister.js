import Header from "../header/Header";
import styled from "styled-components";
import PageContainer from "../page-container/PageContainer";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Select from "./Select";
import { API } from "../config/api";
import { Storage } from "aws-amplify";

export default function SubjectsPage() {
  const [professors, setProfessors] = useState([]);
  const [professorId, setProfessor] = useState("");

  const [subjects, setSubjects] = useState([]);
  const [subjectId, setSubject] = useState("");

  const [categories, setCategories] = useState([]);
  const [categoryId, setCategory] = useState("");

  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);

  const [disabled, setDisabled] = useState(false);
  const [name, setName] = useState("");

  let history = useHistory();

  useEffect(() => {
    axios.get(`${API}/categories`).then((res) => {
      setCategories(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`${API}/subjects`).then((res) => {
      setSubjects(res.data);
    });
  }, []);

  useEffect(() => {
    setProfessors([]);

    if (subjectId) {
      getProfessorsBySubject(subjectId);
    }
  }, [subjectId]);

  async function getProfessorsBySubject(subjectId) {
    axios
      .get(`${API}/professors/${subjectId}`)
      .then((res) => {
        setProfessors(res.data);
      })
      .catch((error) => {
        alert("Erro no servidor, tente novamente");
        console.log(error);
      });
  }

  async function sendTestData(event) {
    event.preventDefault();
    setDisabled(true);

    let testUrl = "";

    if (file !== null) {
      const key = `${name}.pdf`;
      await Storage.put(key, file, {
        //upload of the file to aws s3 bucket cloud storage
        contentDisposition: "inline",
        contentType: "application/pdf",
      });
      const newFileUrl = `${process.env.REACT_APP_FILE_REPO}/${key}`;
      testUrl = newFileUrl;
    } else if (url !== null) {
      testUrl = url;
    }

    try {
      const body = {
        professorId: parseInt(professorId),
        subjectId: parseInt(subjectId),
        categoryId: parseInt(categoryId),
        link: testUrl,
        name: name,
      };
      await axios.post(`${API}/register-test`, body);
      alert("Prova cadastrada com sucesso!");
      history.push("/");
    } catch (error) {
      console.log(error);
      history.push("/test-register");
    }
  }

  return (
    <div>
      <Header />

      <PageContainer>
        <ContentBox onSubmit={sendTestData} disabled={disabled}>
          <div>
            <h1>Compartilhe uma prova</h1>
          </div>

          <input
            type="text"
            required
            placeholder="Nome"
            disabled={disabled}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Select
            options={["Selecione a categoria", ...categories]}
            required
            value={categoryId}
            setValue={setCategory}
          />

          <Select
            options={["Selecione a disciplina", ...subjects]}
            required
            value={subjectId}
            setValue={setSubject}
          />

          <Select
            disabled={subjects.length === 0}
            options={["Selecione o professor", ...professors]}
            required
            value={professorId}
            setValue={setProfessor}
          />

          <FileSendOptions>
            <FileInput
              type="file"
              title="Enviar .pdf"
              disabled={disabled}
              onChange={(e) => setFile(e.target.files[0])}
            />

            <h2>Ou</h2>

            <FileInput
              type="text"
              placeholder="Link URL"
              disabled={disabled}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </FileSendOptions>

          <SelectAction register onclick={() => history.push("/")}>
            Registrar
          </SelectAction>

          <Link to={"/"}>
            <SelectAction>Voltar</SelectAction>
          </Link>
        </ContentBox>
      </PageContainer>
    </div>
  );
}

const FileInput = styled.input`
  background: #fff;
  margin-top: 10px;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  line-height: 40px;
  height: 40px;
  color: #9f9f9f;
  padding-left: 13px;
`;

const FileSendOptions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ContentBox = styled.form`
  width: 50%;
  padding: 15px;
  height: auto;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  opacity: 0.95;
  border-radius: 8px;
  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  h1 {
    color: #fff;
    font-size: 27px;
    margin-bottom: 15px;
    font-family: "Passion One";
    font-weight: 400;
  }
  h2 {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }
  input {
    width: 100%;
    background: #fff;
    margin-top: 10px;
    font-size: 18px;
    border-radius: 5px;
    border: none;
    line-height: 40px;
    height: 40px;
    color: #9f9f9f;
    padding-left: 13px;
  }
  @media (max-width: 611px) {
    width: 90%;
  }
`;

const SelectAction = styled.button`
  font-weight: 700;
  font-size: 18px;
  margin: 0 auto;
  margin-top: 15px;
  width: 100%;
  line-height: 100%;
  text-align: center;
  color: #fff;
  background: #0f0f14;
  border-radius: 8px;
  border: 0.2px solid #fa4098;
  box-sizing: border-box;
  padding: 18px 60px;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
  :hover {
    background: #fa4098;
    color: #000;
    font-weight: 700;
  }
`;
