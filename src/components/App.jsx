import { Routes, Route } from 'react-router-dom';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContactsCount,
  selectIsLoading,
  selectError,
} from 'redux/selectors';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { ColorRing } from 'react-loader-spinner';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Registration from './Registration/Registration';
import Login from './Login/Login';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import Contacts from './Contacts/Contacts';

import css from './App.module.css';

export const App = () => {
  const count = useSelector(selectContactsCount);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <PrivateRoute path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.subtitle}>Contacts</h2>
      <p className={css.total}>
        Total contacts in phonebook:
        <span className={css.total_count}> {count}</span>
      </p>
      <Filter />
      {isLoading && !error && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#4bb36a', '#80bb3d']}
        />
      )}
      {error && <p className={css.errorMessage}>An error occurred: {error}</p>}
      <ContactList />
      <Toaster position="top-right" />
    </div>
  );
};

export default App;