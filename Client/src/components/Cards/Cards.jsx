import styles from './Cards.module.css';
import Card from '../Card/Card';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { motion } from 'framer-motion';
import { contenedor } from './animations';
import Filtro from '../Filtro/Filtro';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Cards({ characters, onClose, titulo }) {
  const { filter, activeFilter } = useSelector((state) => state);
  const [parent] = useAutoAnimate({
    // Animation duration in milliseconds (default: 250)
    duration: 350,
    // Easing for motion (default: 'ease-in-out')
  });
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

      <div className={styles.cards} id="cardsContainer" ref={parent}>
        {filter !== 'all' &&
          filter !== 'origin' &&
          characters
            .filter((personaje) => personaje[filter] === activeFilter)
            .map((personaje) => {
              return (
                <Card
                  className={styles.card}
                  props={personaje}
                  onClose={onClose}
                />
              );
            })}
        {filter !== 'all' &&
          filter === 'origin' &&
          characters
            .filter((personaje) => personaje[filter].name === activeFilter)
            .map((personaje) => {
              return (
                <Card
                  className={styles.card}
                  props={personaje}
                  onClose={onClose}
                />
              );
            })}
        {filter === 'all' &&
          characters.map((personaje) => {
            return (
              <Card
                className={styles.card}
                props={personaje}
                onClose={onClose}
              />
            );
          })}
      </div>
    </motion.div>
  );
}

export default Cards;
