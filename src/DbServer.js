const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog-server', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conectado a MongoDB');
});

module.exports = db;
