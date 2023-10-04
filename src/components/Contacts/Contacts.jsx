import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operations'; // Popraw import

const Contacts = () => {
  const contacts = useSelector(state => state.contacts.items); // Popraw na odpowiednie miejsce w stanie
  const dispatch = useDispatch();

  useEffect(() => {
    // Pobierz kontakty po załadowaniu komponentu
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2>Contacts</h2>
      {/* Wyświetl listę kontaktów */}
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
