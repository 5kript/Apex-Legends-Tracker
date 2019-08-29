const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT || 5000;

const app = express();

// cors config
const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));

// DEVLOG
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/profile', require('./routes/profile'));

app.listen(PORT, () => {
  console.log(
    `\nSERVER RUNNING IN ${process.env.NODE_ENV} MODE ON PORT ${PORT}\n`
  );
});
