import React from "react";
import { connect } from "react-redux";

import contactAction from "../../redux/contacts/contactAction";
import "./ContacList.css";

const ContactListItem = ({ name, number, onDeleteContact }) => (
  <li className="phone_Item">
    <span className="phone_name">{name}</span>
    <span className="phone_number">{number}</span>
    <button type="button" onClick={onDeleteContact}></button>
  </li>
);

const mapStateToProps = (state, { id }) => {
  const item = state.contacts.items.find((item) => item.id === id);
  // console.log(item);
  return {
    ...item,
  };
};

const mapDispatchToProps = (dispatch, { id }) => ({
  onDeleteContact: () => dispatch(contactAction.removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
