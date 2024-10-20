import { Icon } from "@iconify/react";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <li className={s.contact}>
      <div className={s.textContainer}>
        <p className={s.text}>
          <Icon icon="bxs:user" className={s.icon} /> {contact.name}
        </p>
        <p>
          <Icon icon="carbon:phone-filled" className={s.icon} />{" "}
          {contact.number}
        </p>
      </div>
      <button className={s.btn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

export default Contact;
