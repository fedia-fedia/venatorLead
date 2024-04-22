const express = require("express")
const cors = require('cors')
const cookieParser = require('cookie-parser')

const routes = require('./routes/user')

const app = express();

// Connect with db
require('./config/database');

// PORT
const PORT = process.env.PORT || 4000;

app.use(cookieParser())
app.use(cors({
    credentials: true, //that means that the coockie that we send , the frontend should get it (credentials is true then we exchange the coockies)
    origin: ['http://localhost:4200']
}))

app.use(express.json())

app.use('/api', routes)

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});