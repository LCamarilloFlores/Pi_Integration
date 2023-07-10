import { useState } from 'react';
import styles from './BotonOnOff.module.css';

function BotonOnOff({ nombre, estado, onClick }) {
  const [animOn, setAnimOn] = useState(true);
  const animate = () => {
    setAnimOn(!animOn);
    onClick();
  };

  return (
    <div className={styles.botonOnOff} onClick={animate}>
      <input
        type="checkbox"
        className={styles.input}
        onChange={() => alert('cambio')}
      />
      <div className={animOn ? styles.rail + ' ' + styles.railOn : styles.rail}>
        <span
          className={
            animOn ? styles.circle + ' ' + styles.botonOn : styles.circle
          }
        ></span>
      </div>
      <span className={styles.texto}>{nombre}</span>
    </div>
  );
}

export default BotonOnOff;
