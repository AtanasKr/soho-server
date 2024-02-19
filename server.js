require('dotenv').config();
const express = require("express");
const app = express();
const path = require('path');
const customLogger = require('./middleware/logEvents');
const corsOtions = require('./config/corsOptions');
const cors = require('cors');
const credentials = require("./middleware/credentials");
const connectDB = require('./config/dbConn');

//Connect to mongoDB
connectDB();

const PORT = process.env.PORT || 3500;

app.use(customLogger);
app.use(credentials);
app.use(cors(corsOtions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//routes
app.use('/', require("./routes/root"))
app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));
app.use('/logout', require('./routes/logout'))


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))