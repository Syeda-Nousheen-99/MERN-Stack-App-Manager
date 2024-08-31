const express = require('express');
const connectDB = require('./db/db');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const TaskRouter = require('./Routes/taskRouter');
const bodyParser = require('body-parser');
const cors = require('cors');

app.get('/', (req, res) =>{
    res.send('Hello Welcome!') 
});
app.use(cors())
app.use(bodyParser.json());
app.use('/tasks', TaskRouter);

connectDB();
app.listen(PORT, () =>{
    console.log(`server is running on PORT: ${PORT}`);
    
})
