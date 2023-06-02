export const Searchbar = ({ submit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.query;
    submit(value);
  };

  return (
    <header className="searchbar">
      <form className="searchForm" onSubmit={handleSubmit}>
        <button type="submit" className="searchForm-button">
          <span className="searchForm-button-label">Search</span>
        </button>

        <input
          name="query"
          className="searchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
