import styles from './Cards.module.css';
import Card from '../Card/Card';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { motion } from 'framer-motion';
import { contenedor } from './animations';
import Filtro from '../Filtro/Filtro';

function Cards({ characters, onClose, titulo }) {
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
        {characters.map((personaje) => {
          return (
            <Card className={styles.card} props={personaje} onClose={onClose} />
          );
        })}
      </div>
    </motion.div>
  );
}

export default Cards;
