import styles from './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import axios from 'axios';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Particles from './components/Particles/Particles';
import Fondo from './components/Fondo/Fondo';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
// import particlesJS from "./particulas.js";

function App() {
  const [estado, setEstado] = useState(true);
  const [characters, setCharacters] = useState([]);
  // const mueve = () => {
  //   const fondo = document.getElementsByClassName("fondo");
  //   fondo.className = "fondo2";
  // };
  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (!characters.find((caracter) => caracter.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert(`¡Ya existe el caracter con id ${id} (${data.name})!`);
        }
      })
      .catch((err) => window.alert(err));
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };
  const animar = () => {
    setEstado(!estado);
  };
  return (
    <div className={styles.App}>
      <Particles estado={estado} />
      <Fondo estado={estado} />
      <div className={styles.contenedor}>
        <div className={styles.topBar}>
          <Nav onSearch={onSearch} estado={estado} animar={animar} />
        </div>
        <Routes>
          <Route
            path="/"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
