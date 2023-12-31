import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FavButton from '../FavButton/FavButton';
import styles from './Detail.module.css';
import styled, { keyframes } from 'styled-components';
import { SHOW_LOADING, HIDE_LOADING } from '../../redux/actionCreators';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import BotonBack from '../BotonBack/BotonBack';
const breatheAnimation = keyframes`
    0% { scale:1 }
    30% { scale:1.03}
    40% { scale:1.03 }
    100% { scale: 1 }
   `;

const brillar = keyframes`
  50% {
    border-color: #ff0f0f;
    -moz-box-shadow: 0px 0px 30px #ff0f0f;
    -webkit-box-shadow: 0px 0px 30px #ff0f0f;
    box-shadow: 0px 0px 30px #ff0f0f;
  }
`;
const Imagen = styled.div`
  height: 20rem;
  width: 15rem;
  margin: 0 2rem;
  border-radius: 1.5rem;
  background-image: url(${(props) => props.imagen});
  background-size: cover;
  background-repeat: none;
  background-position: center center;
  border: 4px solid #a3ff0f;
  -moz-box-shadow: 0px 0px 30px #a3ff0f;
  -webkit-box-shadow: 0px 0px 30px #a3ff0f;
  box-shadow: 0px 0px 30px #a3ff0f;
  user-select: none;
  animation: ${brillar} 4s ease-in-out infinite,
    ${breatheAnimation} 4s ease-in-out infinite;
  @media (max-width: 900px) {
    height: 15rem;
    width: 60%;
  }
`;

function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    dispatch({ type: SHOW_LOADING });

    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
        dispatch({ type: HIDE_LOADING });
      }
    );

    return setCharacter({});
  }, [id]);
  if (character.origin) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4 } }}
        exit={{ opacity: 0 }}
        className={styles.contenedor}
      >
        <div className={styles.contenedorImagen}>
          <BotonBack grande={true} />
          <Imagen imagen={character.image} />
        </div>
        <div className={styles.info}>
          <h1 className={styles.titulo}>{character.name}</h1>
          <FavButton texto="Agregar a Favoritos" character={character} />
          <div>
            <ul>
              <li>
                Status: <span>{character.status}</span>
              </li>
              <li>
                Gender: <span>{character.gender}</span>
              </li>
              <li>
                Specie: <span>{character.species}</span>
              </li>
              <li>
                Origin: <span>{character.origin.name}</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default Detail;
