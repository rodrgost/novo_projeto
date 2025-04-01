const express = require('express');
const app = express();
const port = 3000;

// Importar rotas
const indexRouter = require('./routes/index');

// Usar rotas
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});