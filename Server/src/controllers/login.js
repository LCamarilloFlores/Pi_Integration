const users = require('../utils/users');

const login = (req, res) => {
  return res.json(req);
  let access = false;
  const { email, password } = req.query;
  users.forEach((user) => {
    if (user.email === email && user.password === password) access = true;
  });
  if ((access = false))
    return res
      .status('400')
      .json({ message: 'Datos de inicio de sesión incorrectos' });
  return res.json({ access });
};

module.exports = login;
