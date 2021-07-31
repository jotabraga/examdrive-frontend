import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./components/main-page/MainPage";
import GlobalStyles from "./styles/GlobalStyles";
import Subjects from "./components/subjects/Subjects";
import Professors from "./components/professors/Professors";
import TestRegister from "./components/test-register/TestRegister";

export default function App() {

  return (
    <BrowserRouter>

    <GlobalStyles />
  
      <Switch>    

          <Route path="/" exact component={MainPage}></Route>

          <Route path="/subjects" exact component={Subjects}></Route>

          <Route path="/professors" exact component={Professors}></Route>

          <Route path="/test-register" exact component={TestRegister}></Route>
      
      </Switch>
      
    </BrowserRouter>
  );
}