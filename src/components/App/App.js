import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactsFilter from "../ContactsFilter/ContactsFilter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contacts from "../Contacts/Contacts";
import Phonebook from "../Phonebook/Phonebook";
import { CSSTransition } from "react-transition-group";
import styles from "./App.module.css";
import pop from "../../transition/pop.module.css";
import { filterContacts } from "../../redux/actions/filterAction";
import { deleteContact } from "../../redux/actions/contactsAction";

const App = () => {
  const dispatch = useDispatch();
  const contactsArr = useSelector((state) => state.contacts);
  const filtered = useSelector((state) => state.filter);

  const handleChangeFilter = (e) => {
    const value = e.target.value;
    dispatch(filterContacts(value));
  };

  const deleteExactContact = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contactsArr.filter(({ name }) => {
    return name.toLowerCase().includes(filtered.toLowerCase());
  });

  return (
    <>
      <div className={styles.Container}>
        <Phonebook />
        <ToastContainer autoClose={3000} />
        {contactsArr.length >= 2 && (
          <CSSTransition timeout={250} classNames={pop}>
            <ContactsFilter
              filter={filtered}
              onHandleChangeFilter={handleChangeFilter}
            />
          </CSSTransition>
        )}
        <Contacts
          filteredContacts={filteredContacts}
          onDeleteContact={deleteExactContact}
        />
      </div>
    </>
  );
};

export default App;
