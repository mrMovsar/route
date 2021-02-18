import { useHistory, Route } from "react-router-dom";
import Map from "./Map";

function ContactGrozny() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/asd")
  }
    return (
      <div className="ContactGrozny">
        Grozny, Krasnoznamennaya street, 7 <br/>
        <button onClick={handleClick}>
        Показать на карте
      </button>
      <Route exact path="/asd">
        <Map/>
      </Route>
      </div>
    );
  }
  
  export default ContactGrozny;
  