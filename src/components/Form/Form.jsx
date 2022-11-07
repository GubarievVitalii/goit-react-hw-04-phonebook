import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = event =>
    this.setState({ [event.target.name]: event.target.value });
  
  reset = () => this.setState({ name: '', number: ''})

  render() {
    const { onAddContact } = this.props;
    const { name, number } = this.state;
    return (
      <form
          className={s.form}
      onSubmit={event => {
        event.preventDefault();
        onAddContact(name, number);
        this.reset();
      }}
      >
      <label>
              <input
                  className={s.input}
          value={name}
          onChange={this.onInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
              <input
                  className={s.input}
          value={number}
          onChange={this.onInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.btn} type="submit">Add contact</button>
    </form>
  );
  }
};

Form.propTypes = {
    onAddContact: PropTypes.func.isRequired,
};

export default Form;
