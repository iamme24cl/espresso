const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const errorhandler = require('errorhandler');
const express = require('express');
const employeesRouter = require('./api/employees');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
});

app.use(cors());

app.use('/employees', employeesRouter);

app.use(errorhandler());

app.listen(PORT, () => {
  console.log(`The server is listening on port: ${PORT}`);
});

module.exports = app;
