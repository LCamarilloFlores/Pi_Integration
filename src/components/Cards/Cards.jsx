import styles from './Cards.module.css';
import Card from '../Card/Card';
import agregarEventos from './functions.js';
import { useEffect } from 'react';

function Cards({ characters, onClose }) {
  const handleScroll = (event) => {};

  useEffect(() => {
    agregarEventos();
  }, []);

  return (
    <div className={styles.contenedorCards}>
      <button id="upArrow" className={`${styles.arrowDiv}`}>
        <div className={styles.arrowUp}></div>
      </button>
      <div className={styles.cards} onScroll={handleScroll} id="cardsContainer">
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
      <button id="downArrow" className={`${styles.arrowDiv}`}>
        <div className={styles.arrowDown}></div>
      </button>
    </div>
  );
}

export default Cards;
