import SearchBar from '../SearchBar/SearchBar.jsx';

function Nav({ onSearch, estado, animar }) {
  return (
    <div>
      <SearchBar onSearch={onSearch} estado={estado} animar={animar} />
    </div>
  );
}

export default Nav;
