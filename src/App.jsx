import { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { nanoid } from 'nanoid';

const initialUsers = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [filter, setFilter] = useState('');
  const [users, setUsers] = useState(() => {
    const stringifiedUsers = localStorage.getItem('users');
    const parsedUsers = JSON.parse(stringifiedUsers) ?? initialUsers;

    return parsedUsers;
  });

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  useEffect(() => {
    const stringifiedUsers = JSON.stringify(users);
    localStorage.setItem('users', stringifiedUsers);
  }, [users]);

  const onAddProfile = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };

    setUsers((prevState) => [...prevState, finalUser]);
  };

  const handleDelete = (id) => {
    setUsers(filteredUsers.filter((contactItem) => contactItem.id !== id));
  };

  const formatPhoneNumber = (number) => {
    // Видалити всі символи, окрім цифр
    const cleaned = ('' + number).replace(/\D/g, '');

    // Форматувати номер у вигляді xxx-xx-xx
    const match = cleaned.match(/^(\d{3})(\d{2})(\d{2})$/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return number; // Якщо номер не підходить, повернути оригінальний
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddProfile={onAddProfile} />
      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList
        formatPhoneNumber={formatPhoneNumber}
        handleDelete={handleDelete}
        filteredUsers={filteredUsers}
      />
    </div>
  );
};

export default App;
