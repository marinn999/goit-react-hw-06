import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import { useEffect, useState } from "react";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  });

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // Обробка пошуку: oновлює значення inputValue кожного разу, коли починаю щось вводити у поле пошуку.
  const handleSearch = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  // Фільтрація контактів на основі значення пошуку
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue)
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm setContacts={setContacts} />
      <SearchBox handleSearch={handleSearch} inputValue={inputValue} />
      <ContactList contacts={filteredContacts} setContacts={setContacts} />
    </div>
  );
};

export default App;
