const path = require('path');
const express = require('express');
var morgan = require('morgan');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
//http logger


app.use(morgan('combined'))
const handlebar = exphbs.create({
    extname: '.hbs',
});

//app.engine('php', handlebar.engine);
//app.set('view engine', 'php');
//app.set('views', path.join(__dirname, 'resources/inc/'));

//app.get('/database', (req, res) => {
//  res.render('database');
//});

//template engine
app.engine('hbs', handlebar.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views/'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/tin-tuc', (req, res) => {
    res.render('news');
})

app.get('/lien-he', (req, res) => {
    res.render('lienhe');
})

app.get('/cart', (req, res) => {
    res.render('cart');
})

app.get('/baiviet', (req, res) => {
    res.render('baiviet');
})

app.get('/sanpham', (req, res) => {
    res.render('sanpham');
})

app.get('/checkout', (req, res) => {
    res.render('checkout');
})


app.get('/', (req, res) => {
    res.render('home');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/register', (req, res) => {
    res.render('register');
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))