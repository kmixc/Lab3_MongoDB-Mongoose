const express = require('express')
const mongoose = require('mongoose');
const restRouter = require('../Lab3_MongoDB-Mongoose/routes/RestaurantRoutes.js');

const app = express();
app.use('/', express.json());

mongoose.connect('mongodb+srv://kmixc:Reloop2001@cluster0.ijglg.mongodb.net/restaurant?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(restRouter);

app.listen(3000, () => {
    console.log('Server is running...')
});
