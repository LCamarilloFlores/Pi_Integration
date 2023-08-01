import styles from './Cards.module.css';
import Card from '../Card/Card';

function Cards({ characters, onClose }) {
  const handleScroll = (event) => {
    console.log('Se hizo scroll', event.target);
  };

  return (
    <div className={styles.contenedorCards}>
      <button className={`${styles.arrowDiv}`}>
        <div className={styles.arrowUp}></div>
      </button>
      <div className={styles.cards} onScroll={handleScroll}>
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
      <button className={`${styles.arrowDiv}`}>
        <div className={styles.arrowDown}></div>
      </button>
    </div>
  );
}

export default Cards;
