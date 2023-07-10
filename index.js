const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');


const app = express();
const InventoryRouter = require('./server/routers/inventoryRouters');

app.engine('ejs', ejsMate);

app.set('views', path.join(__dirname, '/client/views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));

app.use('',InventoryRouter);

app.listen(7000, ()=> {
  console.log('The server is up on port 7000!');
})