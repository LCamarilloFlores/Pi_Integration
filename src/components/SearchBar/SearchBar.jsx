import styles from './SearchBar.module.css';
import Boton from '../Boton/Boton';
import BotonOnOff from '../BotonOnOff/BotonOnOff.jsx';
import { useState } from 'react';

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
  );
}
