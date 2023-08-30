import styles from './Cards.module.css';
import Card from '../Card/Card';
import agregarEventos from './functions.js';
import { useEffect, useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { motion } from 'framer-motion';
import { contenedor } from './animations';
import Filtro from '../Filtro/Filtro';

function Cards({ characters, onClose, titulo }) {
  const [scrollState, setScrollState] = useState({
    scrollTop: 0,
    scrollHeight: 0,
    clientHeight: 0,
  });

  const [parent] = useAutoAnimate({
    // Animation duration in milliseconds (default: 250)
    duration: 350,
    // Easing for motion (default: 'ease-in-out')
  });

  const handleScroll = () => {
    const contenedor = document.getElementById('cardsContainer');
    setScrollState({
      scrollTop: contenedor.scrollTop,
      scrollHeight: contenedor.scrollHeight,
      clientHeight: contenedor.clientHeight,
    });
  };

  useEffect(() => {
    agregarEventos();
    handleScroll();
  }, [characters]);

  return (
    <motion.div
      variants={contenedor}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={styles.contenedorCards}
    >
      <div className={styles.headerBar}>
        <Filtro />
        <h3 className={styles.tituloCards}>{titulo}</h3>
      </div>
      <button
        id="upArrow"
        className={`${styles.arrowDiv} ${
          scrollState.scrollTop < 100 && styles.invisible
        }`}
      >
        <div className={styles.arrowUp}></div>
      </button>

      <div
        className={styles.cards}
        id="cardsContainer"
        onScroll={handleScroll}
        ref={parent}
      >
        {characters.map((personaje) => {
          return (
            <Card
              className={styles.card}
              key={personaje.id}
              props={personaje}
              onClose={onClose}
            />
          );
        })}
      </div>
      <button
        id="downArrow"
        className={`${styles.arrowDiv} ${
          scrollState.scrollHeight <=
            scrollState.scrollTop + scrollState.clientHeight + 12 &&
          styles.invisible
        }`}
      >
        <div className={styles.arrowDown}></div>
      </button>
    </motion.div>
  );
}

export default Cards;
