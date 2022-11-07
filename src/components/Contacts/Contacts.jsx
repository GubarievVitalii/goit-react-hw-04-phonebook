import PropTypes from 'prop-types';
import s from './Contacts.module.css';

const Contacts = ({ contacts, deteteContact }) => {
  return (
    <>
      <ul className={s.contactsList}>
        {contacts.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <span className={s.contact}>
                    {name} - {number}                    
            </span>
            <button className={s.btn} onClick={() => deteteContact(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default Contacts;
