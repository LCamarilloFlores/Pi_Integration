import React from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFav } from '../../redux/actions';
import About from '../About/About';
import Detail from '../Detail/Detail';
import Form from '../Form/Form';
import Favourites from '../Favourites/Favourites';
import Cards from '../Cards/Cards.jsx';
import { useState } from 'react';
import axios from 'axios';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes({ setAccess, characters, setCharacters }) {
  const [formError, setformError] = useState(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

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
      access ? navigate('/home') : setformError(message);
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
        <Route path="/favourites" element={<Favourites onClose={onClose} />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
