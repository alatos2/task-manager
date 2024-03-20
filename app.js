const express = require("express");
const dotenv = require('dotenv');
const tasks = require('./server/routers/tasks');
const connectDB = require('./server/db/connect');

dotenv.config();

const app = express();

app.get('/', (req, res) => res.send('Hallos'))

const {port, mongo_uri} = process.env;

app.use(express.json());

app.use('/api/v1/tasks', tasks);

const start = async () => {
    try {
        await connectDB(mongo_uri);
        app.listen(port, () => console.log(`server running on port ${port}`));
    } catch (err) {
        console.error(err)
    }
}

start()

