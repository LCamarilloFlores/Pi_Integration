const axios = require('axios');

function getCharById(res, id) {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then(({ id, name, gender, species, origin, image, status }) => {
      const character = { id, name, gender, species, origin, image, status };
      res.writeHead(200, { 'Content-type': 'application/json' });
      return res.end(JSON.stringify(character));
    })
    .catch((reason) => {
      res.writeHead(500, { 'Content-type': 'text/plain' });
      return res.end(reason.message);
    });
}

module.exports = {
  getCharById,
};
