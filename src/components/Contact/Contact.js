import React from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.css";

const Contact = ({ name, number, onDeleteContact, id }) => {
  return (
    <li className={styles.Item} key={id}>
      <div className={styles.Item__container}>
        <div className={styles.Text}>{name}</div>
        <span className={styles.Number}>{number}</span>
      </div>
      <button className={styles.Btn} onClick={onDeleteContact}>
        X
      </button>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
