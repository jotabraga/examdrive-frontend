import Header from "../header/Header";
import styled from "styled-components";
import PageContainer from "../page-container/PageContainer";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Select from "./Select";
import { API } from "../config/api";
import { Storage } from "aws-amplify";

export default function SubjectsPage(){

    const [professors, setProfessors] = useState([]);
    const [professorId, setProfessor] = useState([]);

    const [subjects, setSubjects] = useState([]);
    const [subjectId, setSubject] = useState(null);

    const [categories, setCategories] = useState([]);
    const [categoryId, setCategory] = useState("");

    const [link, setLink] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [name, setName] = useState("");


    let history = useHistory();

    useEffect(() => {
        axios
            .get(`${API}/categories`)
            .then((res) => {
                setCategories(res.data);
            })
    }, []);

    useEffect(() => {
        axios
            .get(`${API}/subjects`)
            .then((res) => {
                setSubjects(res.data);
            })
    }, []);

    useEffect(() => {
        setProfessors([]);
        
        if(subjectId){
            getProfessorsBySubject(subjectId);
        }

    }, [subjectId]);


    async function getProfessorsBySubject(subjectId){
        axios
        .get(`${API}/professors/${subjectId}`)
        .then((res) => {
            setProfessors(res.data);            
        })
        .catch((error) => {
            alert('Erro no servidor, tente novamente');
            console.log(error);
        })
    }

    async function sendTestData(event){

        event.preventDefault();
        setDisabled(true);
        const key = `${name}.pdf`

        try{
            await Storage.put(key, link, {
                contentDisposition: 'inline',
                contentType: 'application/pdf',
            });

            const body = {
                professorId, 
                subjectId, 
                categoryId,
                link: `${process.env.REACT_APP_FILE_REPO}/${key}`, 
                name
            };
            await axios.post(`${API}/register-test`,body);                

        } catch(error){
            console.log(error);
            history.push("/test-register");
        }        
    }

    return(
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
                        options={['Selecione a categoria', ...categories]}
                        required
                        value={categoryId}
                        setValue={setCategory}
                    />

                    <Select
                        options={['Selecione a disciplina', ...subjects]}
                        required
                        value={subjectId}
                        setValue={setSubject}
                    />

                    <Select
                        disabled={subjects.length === 0}
                        options={['Selecione o professor', ...professors]}
                        required
                        value={professorId}
                        setValue={setProfessor}
                    />  

                    <FileSendOptions>

                        <FileInput
                            type="file"
                            title="Enviar .pdf"
                            required
                            disabled={disabled}
                            onChange={(e) => setLink(e.target.files[0])}
                        />

                        <h2>Ou</h2>
                    
                        <FileInput
                            type="text"
                            required
                            placeholder="Link URL"
                            disabled={disabled}
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                        /> 
                        
                    </FileSendOptions>          
           
                    <SelectAction register onclick={() => history.push("/")}>Registrar</SelectAction>

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
    color: #9F9F9F; 
    padding-left: 13px;
`

const FileSendOptions = styled.div` 
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const ContentBox = styled.form`
    width: 50%;
    padding:20px;
    height: auto;
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
    opacity: 0.95;  
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
    h2{
        color: #fff;
        font-size: 18px;
        font-weight: 400;
        margin-top: 20px;
        margin-left: 10px;
        margin-right: 10px;
    }
    input{
        width: 100%;
        background: #fff;
        margin-top: 10px;
        font-size: 18px;
        border-radius: 5px;
        border: none;
        line-height: 40px;
        height: 40px;
        color: #9F9F9F; 
        padding-left: 13px; 
    }
`

const SelectAction = styled.button` 
    font-weight: 700;
    font-size: 18px;
    margin: 0 auto;
    margin-top: 15px;
    width: 100%;
    line-height: 100%;
    text-align: center;
    color: #FFF;
    background: #0F0F14;
    border-radius: 8px;
    border: 0.2px solid #FA4098;
    box-sizing: border-box;
    padding: 18px 60px;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
    :hover{
        background: #FA4098;
        color: #000;
        font-weight: 700;
    }
`;