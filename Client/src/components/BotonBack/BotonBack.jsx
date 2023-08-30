import React from 'react';
import styles from './BotonBack.module.css';
import backImage from './back.png';
import { useNavigate } from 'react-router-dom';

export default function BotonBack({ grande }) {
  const navigate = useNavigate();
  console.log(grande);
  return (
    <div
      className={grande ? styles.botonBack : styles.botonBacksm}
      onClick={() => navigate(-1)}
    >
      <img src={backImage} alt="Boton back" className={styles.pepino} /> Volver
    </div>
  );
}
