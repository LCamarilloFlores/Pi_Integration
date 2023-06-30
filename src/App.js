import styles from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import characters from "./data.js";
import BotonOnOff from "./components/BotonOnOff/BotonOnOff.jsx";
import { useState } from "react";
// import particlesJS from "./particulas.js";

/* eslint-disable */
particlesJS.load("particles-js", "./particles.json", function () {
  console.log("callback - particles.js config loaded");
});
/* eslint-enable */

function App() {
  const [estado, setEstado] = useState(true);
  // const mueve = () => {
  //   const fondo = document.getElementsByClassName("fondo");
  //   fondo.className = "fondo2";
  // };
  const animar = () => {
    setEstado(!estado);
  };
  return (
    <div className={styles.App}>
      <div id="particles-js" className={!estado ? styles.noVisible : ""}></div>
      <div className={styles.contenedor}>
        <div className={!estado ? styles.fondo : styles.animado}></div>
        <div className={styles.topBar}>
          <BotonOnOff
            estado={estado}
            nombre="Animación"
            onClick={animar}
            className={styles.BotonOnOff}
          />
          <SearchBar onSearch={(characterID) => window.alert(characterID)} />
        </div>
        <Cards characters={characters} />
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
  );
}

export default App;
