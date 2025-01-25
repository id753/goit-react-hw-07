// import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";

// import { addContact, deleteContact } from "./redux/contactsSlice";
import { changeFilter } from "./redux/filtersSlice";

import "./App.css";
import { addContact, deleteContact, fetchContacts } from "./redux/contactsOps";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filters = useSelector((state) => state.filters.name);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // Фильтруем контакты по введенному имени
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  // Добавление нового контакта
  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  // Удаление контакта
  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  // Обработка изменений в поисковом фильтре
  const handleSearchChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={filters} onChange={handleSearchChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
