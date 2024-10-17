import React from "react";
import s from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import ReactInputMask from "react-input-mask";

const ContactForm = ({ setContacts }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const handleAdd = (values, options) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    setContacts((prev) => [...prev, newContact]);
    options.resetForm();
  };

  const CheckSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(7, "Too Short!")
      .max(9, "Too Long!")
      .required("Required"),
  });

  return (
    <div className={s.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleAdd}
        validationSchema={CheckSchema}
      >
        <Form>
          <label className={s.label}>
            Name
            <Field className={s.input} name="name" />
            <ErrorMessage name="name" component="div" className={s.error} />
          </label>
          <label className={s.label}>
            Number
            <Field name="number" className={s.input} />
            <ErrorMessage name="number" component="div" className={s.error} />
          </label>
          <button type="submit" className={s.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
