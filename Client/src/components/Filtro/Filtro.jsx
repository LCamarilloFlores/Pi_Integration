import React from 'react';
import styles from './Filtro.module.css';
import Form from 'react-bootstrap/Form';

export default function Filtro() {
  return (
    <div className={styles.filtrosContainer}>
      <div className="input-group">
        <label htmlFor="filtros" className="col-xs text-3xl">
          Filtros:{' '}
        </label>
        <Form.Select id="filtros" size="sm">
          <option value="" selected disabled>
            -- Filtrar --
          </option>
          <option value="gender">Por género</option>
          <option value="status">Por estado</option>
          <option value="species">Por especie</option>
          <option value="origin">Por origen</option>
          <option value="ninguno">No filtrar</option>
        </Form.Select>
      </div>
    </div>
  );
}
