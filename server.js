require('dotenv').config()
const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const session = require('express-session')
const SESSION_SECRET = process.env.SESSION_SECRET
const PORT = process.env.PORT || 3000

const app = express()
require('./config/db.connection')
const whitelist = ['http://localhost:3000']

const corsOptions = {
    origin: function (origin, callback) {
      console.log(origin, 'ORIGIN')
      console.log(whitelist.indexOf(origin), 'INDEX')
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    credentials:true
}
  
app.use(cors(corsOptions));

app.use(session({
      secret:SESSION_SECRET,
      resave: false,
      saveUninitialized:false
}))

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/spotussy', routes.spotussys);
app.use('/spotussy', routes.users);

app.listen(PORT, () =>{
    console.log('Listening on port', PORT)
})
