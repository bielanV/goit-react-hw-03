const Contact = ({ name, number, formatPhoneNumber, onHandleDelete, id }) => {
  return (
    <div>
      <ul style={{ border: '1px solid orange', width: '200px' }}>
        <li>👤 {name}</li>
        <li>📞 {formatPhoneNumber(number)}</li>
        <button type="button" onClick={() => onHandleDelete(id)}>
          Delete
        </button>
      </ul>
    </div>
  );
};

export default Contact;
