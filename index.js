require('dotenv').config()

const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

// Templating Engine
app.engine('.hbs', exphbs.engine({ extname: '.hbs'}));

app.set('view engine', 'hbs');


app.listen(PORT, (req,res)=>{ console.log(`server is running on ${PORT}`)})

app.get('/',(req,res)=>{res.render('home');})