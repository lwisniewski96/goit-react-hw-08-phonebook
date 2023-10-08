import { FcCustomerSupport } from 'react-icons/fc';
import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook App</h1>
      <FcCustomerSupport size={'30em'} />
    </div>
  );
}
