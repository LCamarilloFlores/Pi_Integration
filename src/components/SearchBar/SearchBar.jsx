import styles from './SearchBar.module.css';
import Boton from '../Boton/Boton';
import BotonOnOff from '../BotonOnOff/BotonOnOff.jsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SearchBar({ onSearch, estado, animar }) {
  const [id, setId] = useState('');

  const handleChange = (event) => setId(event.target.value);

  const handleSearch = () => {
    id !== '' && onSearch(id);
    setId('');
  };
  const enviar = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.contenedor}>
      <div className={styles.searchBar}>
        <BotonOnOff estado={estado} nombre="Animación" onClick={animar} />
        <input
          id={styles.inputSearch}
          value={id}
          type="search"
          onChange={handleChange}
          onKeyUp={enviar}
        />
        <Boton value="Agregar" callback={handleSearch} />
      </div>
      <div className={styles.links}>
        <Link to="/about">
          <button className={styles.myButton}>About</button>
        </Link>
        <Link to="/home">
          <button className={styles.myButton}>Home</button>
        </Link>
        <Link to="/">
          <button className={styles.myButton}>Cards</button>
        </Link>
      </div>
    </div>
  );
}
