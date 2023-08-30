import React from 'react';
import styles from './Registro.module.css';
import { motion } from 'framer-motion';
import BotonBack from '../BotonBack/BotonBack';
import { useState } from 'react';

export default function Registro() {
  const [formError, setFormError] = useState(null);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.8 } }}
      exit={{ opacity: 0 }}
      className={styles.contenedor}
    >
      <form className={styles.formRegistro}>
        <h1 className={styles.titulo}>Registrar</h1>

        <div className={styles.campo}>
          <label htmlFor="nombre">Nombre: </label>
          <input
            className="form-control mb-4"
            type="text"
            name="nombre"
            placeholder="Tu nombre"
          />
        </div>

        <div className={styles.campo}>
          <label htmlFor="correo">Correo: </label>
          <input
            className="form-control mb-4"
            type="mail"
            name="correo"
            placeholder="Tu correo"
          />
        </div>

        <div className={styles.campo}>
          <label htmlFor="password">Contraseña: </label>
          <input
            className="form-control mb-4"
            type="password"
            name="password"
            placeholder="Tu contraseña"
          />
        </div>

        <div className={styles.campo}>
          <label htmlFor="nombre">Confirmar contraseña: </label>
          <input
            className="form-control mb-4"
            type="password"
            name="password2"
            placeholder="Repita su contraseña"
          />
        </div>

        {formError && <div className={styles.error}></div>}

        <div className="d-flex gap-4 mt-3">
          <button type="submit" className="btn btn-success p-2 px-4">
            Registrar
          </button>
          <BotonBack grande={false} />
        </div>
      </form>
    </motion.div>
  );
}
