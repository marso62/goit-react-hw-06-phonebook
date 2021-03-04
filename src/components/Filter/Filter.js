import React from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

import contactActions from "../../redux/contacts/contactAction";

import "./Filter.css";

const Filter = ({ value, inputFilter, isContact }) => (
  <>
    {isContact && (
      <CSSTransition
        in={true}
        appear={true}
        classNames="find"
        timeout={500}
        unmountOnExit
      >
        <div className="findContact">
          <p>Find contacts by name or number</p>
          <input
            className="inputName"
            type="text"
            value={value}
            onChange={({ target }) => inputFilter(target.value)}
          />
        </div>
      </CSSTransition>
    )}
  </>
);

const mapStateToProps = (state) => {
  if (state.contacts.items.length > 1) {
    return { value: state.contacts.filter, isContact: true };
  }
  return { value: state.contacts.filter };
};

const mapDispatchToProps = {
  inputFilter: contactActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
