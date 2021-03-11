import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ClubDetail from './components/ClubDetail/ClubDetail';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route path="/about/:idTeam">
        <ClubDetail></ClubDetail>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
            <NotFound/>
          </Route>
      </Switch>

  </Router>
    </div>
  );
}

export default App;
