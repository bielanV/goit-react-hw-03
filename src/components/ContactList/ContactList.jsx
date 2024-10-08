import Contact from '../Contact/Contact';

const ContactList = ({ filteredUsers, handleDelete, formatPhoneNumber }) => {
  return filteredUsers.map((contactItem) => {
    return (
      <Contact
        id={contactItem.id}
        onHandleDelete={handleDelete}
        key={contactItem.id}
        name={contactItem.name}
        number={contactItem.number}
        formatPhoneNumber={formatPhoneNumber}
      />
    );
  });
};

export default ContactList;
