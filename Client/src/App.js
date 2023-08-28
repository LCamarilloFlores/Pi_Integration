/* eslint-disable multiline-ternary */
import styles from './App.module.css';
import Nav from './components/Nav/Nav.jsx';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Particles from './components/Particles/Particles';
import Fondo from './components/Fondo/Fondo';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';
import axios from 'axios';
// import particlesJS from "./particulas.js";

function App() {
  const [estado, setEstado] = useState(true);
  const [characters, setCharacters] = useState([]);
  // const mueve = () => {
  //   const fondo = document.getElementsByClassName("fondo");
  //   fondo.className = "fondo2";
  // };

  const [access, setAccess] = useState();

  const navigate = useNavigate();

  function logout() {
    setAccess(false);
    navigate('/');
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const onSearch = async (id) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (!characters.find((caracter) => caracter.id === data.id)) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert(`¡Ya existe el caracter con id ${id} (${data.name})!`);
      }
    } catch (err) {
      window.alert(err);
    }
  };

  const animar = () => {
    setEstado(!estado);
  };
  return (
    <div className={styles.App}>
      <Particles estado={estado} />
      <Fondo estado={estado} />
      <div className={styles.contenedor}>
        {useLocation().pathname !== '/' ? (
          <div className={styles.topBar}>
            <Nav
              onSearch={onSearch}
              estado={estado}
              animar={animar}
              logout={logout}
            />
          </div>
        ) : (
          ''
        )}
        <AnimatedRoutes
          setAccess={setAccess}
          characters={characters}
          setCharacters={setCharacters}
        />
      </div>
    </div>
  );
}

export default App;
