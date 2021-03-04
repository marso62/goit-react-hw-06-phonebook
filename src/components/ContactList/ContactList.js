import React from "react";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import ContactListItem from "./ContactListItem";
import Alert from "../Alert/Alert";

import "./ContacList.css";

const ContactList = ({ contacts, listNull }) => {
  return (
    <>
      {listNull && <Alert text="No have contact" />}
      <TransitionGroup component="ul" className="contact_list">
        {contacts.map(({ id, name, number }) => (
          <CSSTransition key={id} timeout={250} classNames="list">
            <ContactListItem id={id} name={name} number={number} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

const mapStateToProps = (state, prop) => {
  const { items, filter } = state.contacts;
  const listNull = items.length === 0;

  const visibleContacts = items.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return { contacts: visibleContacts, listNull: listNull };
};

export default connect(mapStateToProps, null)(ContactList);
