const http = require('http');
const { getCharById } = require('./controllers/getCharById.js');

const PORT = process.env.PORT ?? 3001;

http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;

    if (url.includes('/rickandmorty/character/')) {
      const id = url.split('/rickandmorty/character/')[1];
      if (!id) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end(`No se especifico el id`);
      }
      return getCharById(res, id);
      // res.writeHead(200, { 'Content-Type': 'application/json' });
      // return res.end(JSON.stringify(character));
    }
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    return res.end(`No se encuentra la ruta ${url}`);
  })
  .listen(PORT, 'localhost');
