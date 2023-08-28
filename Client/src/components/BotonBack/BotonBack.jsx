import React from 'react';
import styles from './BotonBack.module.css';
import backImage from './back.png';
import { useNavigate } from 'react-router-dom';

export default function BotonBack() {
  const navigate = useNavigate();
  return (
    <div className={styles.botonBack} onClick={() => navigate(-1)}>
      <img src={backImage} alt="Boton back" className={styles.pepino} /> Volver
    </div>
  );
}
