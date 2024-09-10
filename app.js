const express = require('express');
const app = express();
const port = 8211;

app.get('/', (req, res) => {
  res.send('Bienvenido a la página principal');
});

app.get('/clientes', (req, res) => {
  res.json(['Cliente 1', 'Cliente 2', 'Cliente 3']);
});

app.get('/productos', (req, res) => {
  res.json(['Producto 1', 'Producto 2', 'Producto 3']);
});

app.listen(port, () => {
  console.log(`Aplicación ejecutándose en http://localhost:${port}`);
});
