import styles from './SearchBar.module.css';
import Boton from '../Boton/Boton';
import BotonOnOff from '../BotonOnOff/BotonOnOff.jsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SearchBar({ onSearch, estado, animar, logout }) {
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
          placeholder="Ingresa el ID del personaje"
          id={styles.inputSearch}
          value={id}
          type="search"
          onChange={handleChange}
          onKeyUp={enviar}
        />
        <Boton value="Agregar" callback={handleSearch} />
      </div>
      <div className={styles.links}>
        <Link to="/home" style={{ textDecoration: 'none' }}>
          <button className={`${styles.item} ${styles.primero}`}>
            Principal
          </button>
        </Link>
        <Link to="/favourites" style={{ textDecoration: 'none' }}>
          <button className={styles.item}>Favoritos</button>
        </Link>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <button className={styles.item}>Acerca de</button>
        </Link>
        <Boton
          estilo={`${styles.item} ${styles.ultimo}`}
          value="Cerrar Sesión"
          callback={logout}
        />
      </div>
    </div>
  );
}
