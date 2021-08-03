import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import MainPage from "./components/main-page/MainPage";
import GlobalStyles from "./styles/GlobalStyles";
import Subjects from "./components/subjects/Subjects";
import Professors from "./components/professors/Professors";
import TestRegister from "./components/test-register/TestRegister";
import Mission from "./components/mission/Mission";
import TestsOfProfessor from "./components/tests/TestsOfProfessor";
import TestsOfSubject from "./components/tests/TestsOfSubject";
import axios from "axios";
import { API } from "./components/config/api";
import ProfessorsContext from "./components/contexts/ProfessorsContext";
import SubjectsContext from "./components/contexts/SubjectsContext";
import ClassesContext from "./components/contexts/ClassesContext";

export default function App() {

  const [professors, setProfessors] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    getProfessors();
    getSubjects();
    getClasses();
  }, []);

  async function getProfessors(){
    const request = await axios.get(`${API}/professors`);
    setProfessors(request.data);
  }

  async function getSubjects(){
    const request = await axios.get(`${API}/subjects`);
    setSubjects(request.data);    
  }

  async function getClasses(){
    const request = await axios.get(`${API}/classes`);
    setClasses(request.data);   
  }

  return (
    <BrowserRouter>

    <GlobalStyles />
  
      <Switch>

        <ProfessorsContext.Provider value={{professors}}>        
        <SubjectsContext.Provider value={{subjects}}>
        <ClassesContext.Provider value={{classes}}>

          <Route path="/" exact component={MainPage}></Route>
          <Route path="/subjects" exact component={Subjects}></Route>
          <Route path="/subject-tests/:subjectId" exact component={TestsOfSubject}></Route>
          <Route path="/professors" exact component={Professors}></Route>
          <Route path="/professor-tests/:professorId" exact component={TestsOfProfessor}></Route>
          <Route path="/mission" exact component={Mission}></Route>
          <Route path="/test-register" exact component={TestRegister}></Route>

        </ClassesContext.Provider>       
        </SubjectsContext.Provider>          
        </ProfessorsContext.Provider>   
      
      </Switch>
      
    </BrowserRouter>
  );
}