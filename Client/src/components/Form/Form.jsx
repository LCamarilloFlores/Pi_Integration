import { useState } from 'react';
import styles from './Form.module.css';
import validate from './validation';
import { motion } from 'framer-motion';

export default function Form({ login, formError }) {
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
    console.log(errors);
    Object.values(errors).length === 0 && login(userData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8, delay: 0.4 } }}
      className={styles.contenedorForm}
    >
      <form onSubmit={handleSubmit} method="POST">
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
        {formError || Object.values(errors)[0] ? (
          <div className={styles.formError}>
            {formError || Object.values(errors)[0]}
          </div>
        ) : (
          ''
        )}
        <button type="submit" className={styles.myButton}>
          Iniciar Sesión
        </button>
      </form>
    </motion.div>
  );
}
