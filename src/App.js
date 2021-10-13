// import { Component } from "react";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import ContactForm from "./components/ContactForm//ContactForm";
import Filter from "./components/Filter/Filter";
import ContactsList from "./components/ContactList/ContactList";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const handleDelete = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id);
    });
  };

  const handleFilter = (evt) => {
    const { value } = evt.target;
    setFilter(value);
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

    setContacts((prevContacts) => [newTodo, ...prevContacts]);
  };

  const formattedFilter = filter.toLowerCase().trim();

  const filteredItems = contacts.filter((item) =>
    item.name.toLowerCase().includes(formattedFilter)
  );

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
    console.log(parsedContacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

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
        <ContactsList items={filteredItems} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Contacts;
