import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import css from './Container/Container.module.css';

export class App extends Component {
  state = {
    contacts: [],

    // id: nanoid(),
  };

  addContact = contact => {
    console.log(contact);
  };

  render() {
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
      </div>
    );
  }
}
