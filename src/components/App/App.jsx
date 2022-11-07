import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './App.module.css';
import Contacts from '../Contacts/Contacts';
import Form from '../Form/Form';
import Filter from '../Filter/Filter';

const initialContacts = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]

class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  componentDidMount() {
    const data = localStorage.getItem('contacts') ? JSON.parse(localStorage.getItem('contacts')) : initialContacts;
    this.setState({ contacts: data });
  }

  componentDidUpdate(prevProps, prevState) { 
    if (this.state.contacts.length !== prevState.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  
    onAddContact = (name, number) => {
    const newContact = this.state.contacts.find(el => el.name.toLowerCase() === name.toLowerCase())
    if (newContact) {
    alert(`${name} is already is in contacts.`);
      return;
    }  
    this.setState(prevState => ({ contacts: [...prevState.contacts, { id: nanoid(), name, number }] }))
  };

  onFilterContact = event => this.setState({ filter: event.target.value });

  deteteContact = id => {
    this.setState(prevState => ({ contacts: prevState.contacts.filter(el => el.id !== id) }))
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(({name})=>name.toLowerCase().includes(filter.toLowerCase()))
    return (
      <div>
        <div  className={s.wrapper}>
        <h1 className={s.title}>Phonebook</h1>
          <Form
            onAddContact={this.onAddContact}
          />
          </div>
        <div  className={s.wrapper}>
        <h2 className={s.title}>Contacts</h2>
          <Filter onFilterContact={this.onFilterContact} filter={filter}/>
          <Contacts contacts={filteredContacts} deteteContact={this.deteteContact} />
        </div>  
      </div>
    );
  }
}

export default App;
