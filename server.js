const express = require("express");
const app = express();
const path = require('path');
const customLogger = require('./middleware/logEvents');
const corsOtions = require('./config/corsOptions');
const cors = require('cors');
const credentials = require("./middleware/credentials");

const PORT = process.env.PORT || 3500;

app.use(customLogger);
app.use('/', require("./routes/api/root"))
app.use(express.urlencoded({ extended: true }))
app.use(credentials)
app.use(cors(corsOtions));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))