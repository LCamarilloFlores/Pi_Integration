import SearchBar from '../SearchBar/SearchBar.jsx';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

function Nav({ onSearch, estado, animar }) {
  return (
    <div className={styles.container}>
      <SearchBar onSearch={onSearch} estado={estado} animar={animar} />
      <div className={styles.links}>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/home">
          <button>Home</button>
        </Link>
        <Link to="/">
          <button>Cards</button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
