import styles from './Cards.module.css';
import Card from '../Card/Card';
import agregarEventos from './functions.js';
import { useEffect, useState } from 'react';

function Cards({ characters, onClose }) {
  const [scrollState, setScrollState] = useState({
    scrollTop: 0,
    scrollHeight: 0,
    clientHeight: 0,
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
    <div className={styles.contenedorCards}>
      <button
        id="upArrow"
        className={`${styles.arrowDiv} ${
          scrollState.scrollTop < 100 && styles.invisible
        }`}
      >
        <div className={styles.arrowUp}></div>
      </button>

      <div className={styles.cards} id="cardsContainer" onScroll={handleScroll}>
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
    </div>
  );
}

export default Cards;
