import styles from './About.module.css';

function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Sobre la Aplicacion</h1>
      <p>
        Aplicacion creada por Luis Alberto Camarillo Flores en el bootcamp de{' '}
        <span>SoyHenry</span>
      </p>
    </div>
  );
}

export default About;
