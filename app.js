const path = require('path');
const express = require('express');
const axios = require('axios');

const app = express();

const viewRouter = require('./routes/viewRoutes.js');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// const triviaApi = async () => {
//   try {
//     const url = 'http://jservice.io/api/random';
//     const res = await axios({
//       method: 'GET',
//       url
//     });
//     console.log(res.data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// triviaApi();

// app.get('/signup', (req, res, next) => {
//   res.render('signup');
// });

// MOUNT ROUTES

app.use('/', viewRouter);

module.exports = app;
