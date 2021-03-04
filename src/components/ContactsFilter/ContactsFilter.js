import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import styles from "./ContactFilter.module.css";

const ContactsFilter = ({ onHandleChangeFilter }) => {
  const filter = useSelector((state) => state.filter);

  return (
    <div className={styles.Container}>
      <label htmlFor="filter" className={styles.Label}>
        Find contacts by name
        <input
          className={styles.PhonebookForm__filter}
          type="text"
          name="filter"
          value={filter}
          onChange={onHandleChangeFilter}
        />
      </label>
    </div>
  );
};

ContactsFilter.propTypes = {
  filter: PropTypes.string,
  onHandleChangeFilter: PropTypes.func.isRequired,
};

export default ContactsFilter;
