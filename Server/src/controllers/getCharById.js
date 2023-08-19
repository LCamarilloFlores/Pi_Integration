const axios = require('axios');
require('dotenv').config();
const URL = 'https://rickandmortyapi.com/api/character';

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`);
    const { status, name, species, origin, image, gender } = data;
    return name
      ? res.json({ id, status, name, species, origin, image, gender })
      : res.status(404).json({ message: 'Not Found' });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = getCharById;
