import React from 'react';
import styles from './Filtro.module.css';

export default function Filtro() {
  return (
    <div className={styles.filtrosContainer}>
      <label htmlFor="filtros">Filtros: </label>
      <select id="filtros">
        <option value="" selected disabled>
          -- Filtrar --
        </option>
        <option value="gender">Por género</option>
        <option value="status">Por estado</option>
        <option value="species">Por especie</option>
        <option value="origin">Por origen</option>
        <option value="ninguno">No filtrar</option>
      </select>
    </div>
  );
}
