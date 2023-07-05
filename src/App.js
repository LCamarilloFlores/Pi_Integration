import styles from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import axios from "axios";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import particlesJS from "./particulas.js";

/* eslint-disable */
particlesJS.load("particles-js", "./particles.json", function () {
  console.log("callback - particles.js config loaded");
});
/* eslint-enable */

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
      <div id="particles-js" className={!estado ? styles.noVisible : ""}></div>
      <div className={styles.contenedor}>
        <div className={!estado ? styles.fondo : styles.animado}>
          <div className={styles.topBar}>
            <Nav onSearch={onSearch} estado={estado} animar={animar} />
          </div>
          <Cards characters={characters} onClose={onClose} />
          {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
