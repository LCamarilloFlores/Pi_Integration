const users = require('../utils/users');

const login = (req, res) => {
  let access = false;
  let message = '';
  console.log(req.body);
  const { email, password } = req.body;
  access = users.some((user) => {
    console.log(
      'Comparacion: ',
      user.email,
      ' y ',
      email,
      ' resultado: ',
      user.email === email
    );
    if (user.email === email.toLowerCase()) {
      if (user.password === password) {
        return true;
      } else {
        message = 'Contraseña incorrecta';
        return false;
      }
    } else message = 'Correo no registrado';
  });
  console.log(access);

  if (!access) return res.json({ message });
  return res.json({ access });
};

module.exports = login;
