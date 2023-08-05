import SearchBar from '../SearchBar/SearchBar.jsx';

function Nav({ onSearch, estado, animar, logout }) {
  return (
    <div>
      <SearchBar
        onSearch={onSearch}
        estado={estado}
        animar={animar}
        logout={logout}
      />
    </div>
  );
}

export default Nav;
