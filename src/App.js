import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./components/main-page/MainPage";
import GlobalStyles from "./styles/GlobalStyles";
import Subjects from "./components/subjects/Subjects";
import Professors from "./components/professors/Professors";
import TestRegister from "./components/test-register/TestRegister";
import Mission from "./components/mission/Mission";
import TestsOfProfessor from "./components/tests/TestsOfProfessor";
import TestsOfSubject from "./components/tests/TestsOfSubject";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Switch>
        <Route path="/" exact component={MainPage} />

        <Route path="/subjects" exact component={Subjects} />

        <Route path="/subject-tests/:subjectId" exact component={TestsOfSubject} />

        <Route path="/professors" exact component={Professors} />

        <Route path="/professor-tests/:professorId" exact component={TestsOfProfessor} />

        <Route path="/mission" exact component={Mission} />
        
        <Route path="/test-register" exact component={TestRegister} />
      </Switch>
    </BrowserRouter>
  );
}
