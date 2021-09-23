const express = require('express')
const mongoose = require("mongoose")
require("dotenv").config();
const userRoutes = require("./routes/user");

const app = express()
// toma el puerto que da el servicio externo, si no toma el que le decimos 
const port = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use('/api', userRoutes);

//route
app.get('/', (req,res) =>{
    res.send("Welcome to my API");
})

//mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('server listening on port', port));