/* eslint-disable multiline-ternary */
import styles from './App.module.css';
import Nav from './components/Nav/Nav.jsx';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Particles from './components/Particles/Particles';
import Fondo from './components/Fondo/Fondo';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';
import { addCharacter } from './redux/actions';
import Preloader from './components/Preloader/Preloader';
import { useSelector, useDispatch } from 'react-redux';
// import particlesJS from "./particulas.js";

function App() {
  const location = useLocation();
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const [estado, setEstado] = useState(true);
  const [characters, statistics] = useSelector((state) => [
    state.characters,
    state.statistics,
  ]);
  // const mueve = () => {
  //   const fondo = document.getElementsByClassName("fondo");
  //   fondo.className = "fondo2";
  // };

  const [access, setAccess] = useState(localStorage.getItem('access'));

  const navigate = useNavigate();

  function logout() {
    setAccess('false');
    localStorage.setItem('access', 'false');
    navigate('/');
  }

  useEffect(() => {
    if (location.pathname !== '/registrar' && location.pathname !== '/')
      access !== 'true' && navigate('/');
  }, [access]);

  const onSearch = async (id) => {
    if (location.pathname !== '/home') window.location.href = '/home';
    const existente = characters.find((caracter) => caracter.id === id);
    try {
      console.log(statistics);
      if (!existente) {
        dispatch(addCharacter(id, statistics)).catch((error) =>
          alert('No se encontró en el servidor')
        );
      } else {
        window.alert(
          `¡Ya existe el caracter con id ${id} (${existente.name})!`
        );
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
      {/* Common */}
      {loading && <Preloader />}
      <Particles estado={estado} />
      <Fondo estado={estado} />
      {/* EndCommon */}
      <div className={styles.contenedor}>
        {location.pathname !== '/' && location.pathname !== '/registrar' ? (
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
        <AnimatedRoutes setAccess={setAccess} characters={characters} />
      </div>
    </div>
  );
}

export default App;
