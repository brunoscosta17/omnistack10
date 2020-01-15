const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack10:omnistack10@cluster0-utter.mongodb.net/omnistack10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT E DELETE
// Por quê usá-los?
// Pois um padrão Restfull requer que sejam separados semanticamente os métodos
// e assim, dá um significado semanticamente no código

// Tipos de parâmetros:
// Query Params: 90% utilizados no método GET; GET não aceita body; req.query (filtros, ordenação, paginação)
// Route Params: Utilizados nos métodos PUT e DELETE; identifica um recurso na alteração ou remoção
// Body: Utilizados nos métodos POST ou PUT; Dados para criação ou alteração de um registro

app.listen(3333);