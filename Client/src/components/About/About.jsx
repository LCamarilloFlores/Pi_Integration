import styles from './About.module.css';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.8 } }}
      exit={{ opacity: 0 }}
      className={styles.container}
    >
      <h1 className={styles.titulo}>Sobre la Aplicacion</h1>
      <p>
        Aplicacion creada por Luis Alberto Camarillo Flores en el bootcamp de{' '}
        <span>SoyHenry</span>
      </p>
    </motion.div>
  );
}

export default About;
