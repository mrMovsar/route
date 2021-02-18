import ContactMoscow from "./ContactMoscow";

const { Route, Link } = require("react-router-dom");
const { default: ContactGrozny } = require("./ContactGrozny");

function ContactsPage() {
    return (
      <div className="ContactsPage">
        <h1>Contacts Page</h1>
        <Route exact path="/contacts">
        < Link to="/contacts/grozny">
            <span>Grozny</span>
        </Link>
        < Link to="/contacts/moscow">
            <span>Moscow</span>
        </Link>
        </Route>

        <Route path="/contacts/grozny">
            <ContactGrozny/>
        </Route>
        <Route path="/contacts/moscow">
            <ContactMoscow/>
        </Route>

      </div>
    );
  }
  
  export default ContactsPage;
  