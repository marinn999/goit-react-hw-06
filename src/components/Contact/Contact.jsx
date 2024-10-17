import React from "react";
import { Icon } from "@iconify/react";
import s from "./Contact.module.css";

const Contact = ({ name, number, handleDelete }) => {
  return (
    <li className={s.contact}>
      <div className={s.textContainer}>
        <p className={s.text}>
          <Icon icon="bxs:user" className={s.icon} /> {name}
        </p>
        <p>
          <Icon icon="carbon:phone-filled" className={s.icon} /> {number}
        </p>
      </div>
      <button className={s.btn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
