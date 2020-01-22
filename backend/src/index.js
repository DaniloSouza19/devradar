const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const {MONGO_USER, MONGO_DB, MONGO_PASS} = require('../.env');
const cors = require('cors');
const http = require('http');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASS}@project01-zzohc.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);