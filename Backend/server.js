const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();
const bodyParser =require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');

const PORT=process.env.PORT||3001;

// Enable CORS for all routes
app.use(cors());


// Use body-parser middleware
app.use(bodyParser.json());

// Import the router files
const userRoutes = require('./Routes/UserRoutes');
const CandidateRoutes = require('./Routes/CandidateRoutes');


// Use the routers
app.use('/user', userRoutes);
app.use('/candidate',CandidateRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
