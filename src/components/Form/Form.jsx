import { useState } from 'react';
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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input
          type="mail"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />

        <label htmlFor="email">Password: </label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}
