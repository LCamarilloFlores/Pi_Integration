/* eslint-disable multiline-ternary */
import styles from './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Particles from './components/Particles/Particles';
import Fondo from './components/Fondo/Fondo';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favourites from './components/Favourites/Favourites';
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions';
// import particlesJS from "./particulas.js";

function App() {
  const dispatch = useDispatch();
  const [estado, setEstado] = useState(true);
  const [characters, setCharacters] = useState([]);
  // const mueve = () => {
  //   const fondo = document.getElementsByClassName("fondo");
  //   fondo.className = "fondo2";
  // };
  const navigate = useNavigate();

  const [access, setAccess] = useState();

  const loginData = {
    email: 'JuanitoBanana@correo.com',
    password: '1nuncasabe',
  };

  async function login(userData) {
    const { email, password } = userData;
    try {
      const URL = 'http://localhost:3001/rickandmorty/login';
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(access);
      access ? navigate('/home') : alert('Datos incorrectos');
    } catch (error) {
      console.log(error.message);
    }
  }

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

  const onClose = (id) => {
    dispatch(removeFav(id));
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

        <Routes>
          <Route path="/" element={<Form login={login} />} />
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/favourites"
            element={<Favourites onClose={onClose} />}
          />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
