import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Form.module.css';

export default function Form({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInputChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        console.log("There isn't such case");
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form
      className={s.form}
      onSubmit={event => {
        event.preventDefault();
        onAddContact(name, number);
        reset();
      }}
    >
      <label>
        <input
          className={s.input}
          value={name}
          onChange={onInputChange}
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
          onChange={onInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

Form.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
