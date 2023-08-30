import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { removeFav } from '../../redux/actions';
import About from '../About/About';
import Detail from '../Detail/Detail';
import Registro from '../Registro/Registro';
import Form from '../Form/Form';
import Favourites from '../Favourites/Favourites';
import Cards from '../Cards/Cards.jsx';
import useRoutingHook from './CustomHooks';

import axios from 'axios';
import { AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

function AnimatedRoutes({ setAccess, characters, setCharacters }) {
  const [dispatch, location, navigate, formError, setformError] =
    useRoutingHook();

  const onClose = (id) => {
    dispatch(removeFav(id));
    setCharacters(characters.filter((character) => character.id !== id));
  };

  async function login(userData) {
    const { email, password } = userData;
    try {
      const URL = 'http://localhost:3001/rickandmorty/login';
      const { data } = await axios.post(URL, { email, password });
      const { access, message } = data;
      setAccess(access);
      if (access) {
        setformError(null);
        navigate('/home');
      } else {
        setformError(message);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<Form login={login} formError={formError} />}
        />
        <Route
          path="/home"
          element={
            <Cards
              titulo="Personajes"
              characters={characters}
              onClose={onClose}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/registrar" element={<Registro />} />
        <Route path="/favourites" element={<Favourites onClose={onClose} />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
