import React, { Component } from "react";
import { connect } from "react-redux";

import contatctsAction from "../../redux/contacts/contactAction";
import Alert from "../Alert/Alert";

import style from "./ContactForm.module.css";

const INITIAL_CONTACT_STATE = {
  name: "",
  number: "",
};

class ContactForm extends Component {
  state = INITIAL_CONTACT_STATE;

  inputName = ({ target }) => {
    this.setState({
      name: target.value,
    });
  };

  inputNumber = ({ target }) => {
    this.setState({
      number: target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { onAddContact } = this.props;
    onAddContact({ name, number });
    this.setState({ ...INITIAL_CONTACT_STATE });
  };

  render() {
    const { name, number } = this.state;
    const { itemsArray } = this.props;

    const filtered = itemsArray
      .map(({ name }) => name.toLowerCase())
      .includes(name.toLowerCase());

    return (
      <>
        {filtered && <Alert text="Contact already exist" />}
        <form onSubmit={this.handleSubmit} className={style.Contact_form}>
          <label>
            Name
            <input
              className={style.inputName}
              type="text"
              value={name}
              onChange={this.inputName}
            />
          </label>
          <label>
            Number
            <input
              placeholder="XXX-XX-XX"
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
              value={number}
              onChange={this.inputNumber}
            />
          </label>

          <button type="submit">ADD CONTACT</button>
        </form>
      </>
    );
  }
}

const mapStateToProprs = (state) => {
  const { items } = state.contacts;
  return { itemsArray: items };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddContact: ({ name, number }) =>
      dispatch(contatctsAction.addContact({ name, number })),
  };
};

export default connect(mapStateToProprs, mapDispatchToProps)(ContactForm);
