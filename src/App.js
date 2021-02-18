import { Link, NavLink, Redirect, Route, Switch, useHistory } from "react-router-dom";
import Map from "./Map";
import ContactsPage from "./ContactsPage";
import HomePage from "./HomePage";
import NotFounde from "./NotFounde";

function App() {
  
  return (
    <div className="App">
     
      <NavLink exact activeClassName="selected" to="/">
       <span>Главная</span>
      </NavLink>
      <NavLink activeClassName="selected" to="/contacts">
      <span>Контакты</span>
      </NavLink>
      <Switch>
      <Route exact path="/">
        <HomePage/>
      </Route>

      <Route path="/contacts">
        <ContactsPage/>
      </Route>

      <Route path="/asd">
        <Map/>
      </Route>

      <Route>
        <NotFounde/>
      </Route>
      </Switch>

    </div>
  );
}

export default App
