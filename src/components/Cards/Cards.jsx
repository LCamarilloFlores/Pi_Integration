import styles from './Cards.module.css';
import Card from '../Card/Card';

function Cards({ characters, onClose }) {
  return (
    <div className={styles.cards}>
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
  );
}

export default Cards;
