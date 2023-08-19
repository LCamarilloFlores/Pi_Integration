const axios = require('axios');
require('dotenv').config();
const { URL } = process.env;

const getCharById = (req, res) => {
  const { id } = req.params;
  axios(`${URL}/${id}`)
    .then(({ data }) => {
      const { id, status, name, species, origin, image, gender } = data;
      return name
        ? res.json({ id, status, name, species, origin, image, gender })
        : res.status(404).json({ message: 'Not Found' });
    })
    .catch((error) => {
      return res.status(500).json({ error: error.message });
    });
};

module.exports = getCharById;
