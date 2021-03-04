import React, { useState, useEffect, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Phonebook.module.css";
import "../../transition/title.css";
import { addContact, getContacts } from "../../redux/actions/contactsAction";
import storage from "../../utils/storage";

const formState = {
  name: "",
  number: "",
};

const Phonebook = () => {
  const [form, setForm] = useState(formState);
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const handlerChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const { name, number } = form;
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    const isExist = contacts.some(
      (savedContact) =>
        savedContact.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isExist) {
      toast.error(`${contact.name} is already in contacts.`);
      return;
    } else if (contact.name.length > 2 && contact.number.length > 5) {
      dispatch(addContact(contact));
    } else if (contact.name.length <= 2) {
      toast.warn("Small contact name!");
    } else if (contact.number.length <= 4) {
      toast.warn("Small contact number!");
    }

    reset();
  };

  const reset = () => {
    setForm({ ...formState });
  };

  const storageList = useCallback(() => {
    storage.save("contacts", contacts);
  }, [contacts]);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  useEffect(() => {
    storageList();
  }, [contacts, storageList]);

  return (
    <form className={styles.PhonebookForm} onSubmit={handlerSubmit}>
      <CSSTransition in classNames="title" timeout={500} appear>
        <h2 className={styles.Title}>Phonebook</h2>
      </CSSTransition>

      <label htmlFor="name" className={styles.Label}>
        Name
        <input
          className={styles.PhonebookForm__input}
          type="text"
          name="name"
          value={form.name}
          onChange={handlerChange}
        />
      </label>

      <label htmlFor="number" className={styles.Label}>
        Number
        <input
          className={styles.PhonebookForm__input}
          type="text"
          name="number"
          value={form.number}
          onChange={handlerChange}
        />
      </label>

      <button className={styles.PhonebookForm__btn} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default Phonebook;
