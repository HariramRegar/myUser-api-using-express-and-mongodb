import express from 'express';
import bodyParser from 'body-parser';
import mongodb from 'mongodb';
import mongoose from 'mongoose';
import routes from './src/routes/userRoutes.js';

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost/myUsers', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

routes(app);

app.listen(PORT, ()=>{
    console.log(`Server is running at port: ${PORT}...`)
});