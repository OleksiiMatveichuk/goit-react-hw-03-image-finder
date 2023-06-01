export const Searchbar = ({ submit }) => {
  return (
    <header className="searchbar">
      <form className="form" onSubmit={submit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          name="query"
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
