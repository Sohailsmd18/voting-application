const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();
const bodyParser =require('body-parser');
app.use(bodyParser.json());
const PORT=process.env.PORT||3001;


// Import the router files
const userRoutes = require('./Routes/UserRoutes');
const CandidateRoutes = require('./Routes/CandidateRoutes');


// Use the routers
app.use('/user', userRoutes);
app.use('/candidate',CandidateRoutes);

 
app.listen(PORT);