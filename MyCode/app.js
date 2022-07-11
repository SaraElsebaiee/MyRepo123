const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');



const PORT = process.env.PORT || 4000; 
const app = express();
const productsRouter = require('./src/routers/productsRouter');
const adminRouter = require('./src/routers/adminRouter');


app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use(express.json());


app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));

app.use('/products', productsRouter);
app.use('/admin', adminRouter);

app.get('/home', (req, res) => {
  res.render('index');
  
 });

 app.get('/', (req, res) => {
  res.render('index');
  
 });



app.listen(PORT, () => {
  debug(`listening on port ${chalk.green(PORT)}`);
});
