import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { removeFav } from '../../redux/actions';
import { REMOVE_CHARACTER, ADD_STATISTICS } from '../../redux/actionCreators';
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

function AnimatedRoutes({ setAccess, characters }) {
  const [dispatch, statistics, location, navigate, formError, setformError] =
    useRoutingHook();

  const onClose = (id) => {
    dispatch(removeFav(id));
    // Comienza operacion para remover statistics de caracter a remover
    const data = characters.filter((character) => character.id === id)[0];
    const result = statistics.map((stat) => {
      const dataARemover = Object.keys(data).filter((key) =>
        stat.hasOwnProperty(key)
      );
      const valor = data[dataARemover].hasOwnProperty('name')
        ? data[dataARemover].name
        : data[dataARemover];
      console.log('Valor previo: ', stat[dataARemover][valor]);
      const total = stat[dataARemover][valor] - 1;
      if (total === 0) delete stat[dataARemover][valor];
      else stat[dataARemover][valor] = total;
      console.log(' total', total);
      console.log(' valor', valor);
      console.log('Stat: ', stat);
      console.log('dataARemover: ', dataARemover);
      console.log('Stat[key]: ', stat[dataARemover]);
      const conclusion = {
        ...stat,
        [dataARemover]: { ...stat[dataARemover], [valor]: total },
      };
      console.log(' conclusion: ', conclusion);
    });

    // dispatch({ type: ADD_STATISTICS, payload: result });
    dispatch({
      type: REMOVE_CHARACTER,
      payload: characters.filter((character) => character.id !== id),
    });
    // console.log('Statistics despues de remover: ' + statistics);
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
