const mongoose = require('mongoose');
const dotenv = require('dotenv');

// UNHANDLED EXCEPTION
process.on('uncaughtException', err => {
  console.log('UNHANDLED EXCEPTION! Shutting down');
  console.log(err.name, err.message);

  process.exit(1);
});

dotenv.config({ path: './config.env' });

const app = require('./app');

// DATABASE PASSWORD
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

// DATABASE CONFIG
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('DB connection successful!');
  });

// SERVER INITIALIZER
const port = process.env.PORT || 8000;

const server = app.listen(port, () => {
  console.log(`Running on port ${port}...`);
});

// UNHANDLED REJECTION
process.on('unhandleRejection', err => {
  console.log('UNHANDLE REJECTION Shutting down...');
  console.log(err.name, err.message);

  server.close(() => {
    process.exit(1);
  });
});

// SIGTERM
process.on('SIGTERM', () => {
  console.log('SIGTERM RECEIVING Shutting down safely');
  server.close(() => {
    console.log('Process terminated');
  });
});
