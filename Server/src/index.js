const express = require('express');
const server = express();
const router = require('./routes/index.js');
const morgan = require('morgan');
const PORT = 3001;

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);

server.use(express.json());

server.use('/rickandmorty', router);

server.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});
