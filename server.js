const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

//import models
const models = require('./models');

// import routes
const users = require('./routes/api/users');
const transactions = require('./routes/api/transactions');
const images = require('./routes/api/images');

const app = express();

// sync database first, then start up server
models.sequelize.sync({force: false}).then(() => {
  // body parser middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // Passport middleware
  app.use(passport.initialize());

  // Passport Config
  require('./config/passport')(passport);

  // use routes
  app.use('/api/users', users);
  app.use('/api/transactions', transactions);
  app.use('/api/image', images);

  const port = process.env.PORT || 5000;

  app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  });
});
aaaaaaaaaaaaaaaaaaaaaaaaaa