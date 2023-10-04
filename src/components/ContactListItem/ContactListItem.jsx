import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import { FcPhone } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { AiOutlineDelete } from 'react-icons/ai';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.list_item} key={contact.id}>
      <div className={css.contact_wrp}>
        <FcPhone size={'1.5em'} />
        {contact.name}: {contact.phone}
      </div>
      <button
        className={css.button_delete}
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))} 
      >
        <AiOutlineDelete size={'1.5em'} />
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
