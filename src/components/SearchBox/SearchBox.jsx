const SearchBox = ({ filter, setFilter }) => {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        style={{ margin: '10px auto', border: '1px solid red' }}
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
