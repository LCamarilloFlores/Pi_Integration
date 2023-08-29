const users = require('../utils/users');

const login = (req, res) => {
  let access = false;
  let message = '';
  const { email, password } = req.body;
  access = users.some((user) => {
    if (user.email === email.toLowerCase()) {
      if (user.password === password) {
        return true;
      } else {
        message = 'Contraseña incorrecta';
        return false;
      }
    } else message = 'Correo no registrado';
  });

  if (!access) return res.json({ message });
  return res.json({ access });
};

module.exports = login;
