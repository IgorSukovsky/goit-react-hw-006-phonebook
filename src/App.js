import { useEffect } from "react";
import ContactForm from "./components/ContactForm//ContactForm";
import ContactsList from "./components/ContactList/ContactList";
import { connect } from "react-redux";
import actions from "./redux/phonebook/phonebookAction";
import FilterContainer from "./components/Filter/FilterContainer";

const App = ({ contacts, setContacts }) => {
  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, [setContacts]);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <div>
        <FilterContainer />
        <ContactsList />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.items,
  };
};

export default connect(mapStateToProps, {
  setContacts: actions.setContacts,
})(App);
