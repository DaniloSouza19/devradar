const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const {MONGO_USER, MONGO_DB, MONGO_PASS} = require('../.env');

const app = express();

mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASS}@project01-zzohc.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);