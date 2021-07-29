import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./components/main-page/MainPage";
import GlobalStyles from "./styles/GlobalStyles";

export default function App() {

  return (
    <BrowserRouter>

    <GlobalStyles />
  
      <Switch>    

          <Route path="/" exact component={MainPage}></Route>
      
      </Switch>
      
    </BrowserRouter>
  );
}