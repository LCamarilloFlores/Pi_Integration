import { useState } from 'react';
import styles from './Form.module.css';
import validate from './validation';

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const propiedad = event.target.name;
    const valor = event.target.value;
    setErrors(validate({ ...userData, [propiedad]: valor }));
    setUserData({ ...userData, [propiedad]: valor });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Object.values(errors).length === 0 && login(userData);
  };

  return (
    <div className={styles.contenedorForm}>
      <form onSubmit={handleSubmit}>
        <h1>Inicio de Sesión</h1>
        <div className={styles.campo}>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="mail"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.campo}>
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        <button className={styles.myButton}>Iniciar Sesión</button>
      </form>
    </div>
  );
}
