// import { Component } from "react";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import ContactForm from "./components/ContactForm//ContactForm";
import Filter from "./components/Filter/Filter";
import ContactsList from "./components/ContactList/ContactList";
import { connect } from "react-redux";
import actions from "./redux/phonebook/phonebookAction";

const Contacts = ({
  filter,
  handleChange,
  handleDelete,
  contacts,
  addContact,
  setContacts,
}) => {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState("");

  // const handleDelete = (id) => {
  //   setContacts((prevContacts) => {
  //     return prevContacts.filter((contact) => contact.id !== id);
  //   });
  // };

  const onHandleDelete = (id) => {
    handleDelete(id);
  };

  const handleFilter = (evt) => {
    const { value } = evt.target;
    handleChange(value);
  };

  const handleSubmit = (term) => {
    if (!term) {
      alert("Поле не может быть пустым!");
      return;
    }

    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === term.name.toLowerCase()
    );
    if (isDuplicate) {
      alert("Контакт: " + term.name + " уже существует ");
      return;
    }

    const newTodo = {
      id: uuid(),
      name: term.name,
      number: term.number,
    };

    // setContacts((prevContacts) => [newTodo, ...prevContacts]);
    addContact(newTodo);
  };

  const formattedFilter = filter.toLowerCase().trim();

  const filteredItems = contacts.filter((item) =>
    item.name.toLowerCase().includes(formattedFilter)
  );

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
      <ContactForm handleSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <div>
        <Filter filter={filter} handleFilter={handleFilter} />
        <ContactsList items={filteredItems} handleDelete={onHandleDelete} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.contacts.filter,
    contacts: state.contacts.items,
  };
};

export default connect(mapStateToProps, {
  handleChange: actions.handleChange,
  handleDelete: actions.handleDelete,
  addContact: actions.addContact,
  setContacts: actions.setContacts,
})(Contacts);
