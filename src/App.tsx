import Articles from "./components/Articles";
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import  SingleArticle from "./components/SingleArticle";
import Main from "./components/Main";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/:text" exact>
          <Articles />
          </Route>
          <Route path="/news/:title">
            <SingleArticle />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
