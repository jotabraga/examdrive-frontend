import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./components/main-page/MainPage";
import GlobalStyles from "./styles/GlobalStyles";
import SubjectsPage from "./components/subjects-page/SubjectsPage";

export default function App() {

  return (
    <BrowserRouter>

    <GlobalStyles />
  
      <Switch>    

          <Route path="/" exact component={MainPage}></Route>

          <Route path="/subjects" exact component={SubjectsPage}></Route>
      
      </Switch>
      
    </BrowserRouter>
  );
}