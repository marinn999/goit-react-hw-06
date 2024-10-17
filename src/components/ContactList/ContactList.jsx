import React from "react";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, setContacts }) => {
  const handleDelete = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          handleDelete={() => handleDelete(contact.id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
