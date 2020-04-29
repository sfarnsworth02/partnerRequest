// npm packages to import
const express = require('express');
require('dotenv').config();
const db = require('./config/database');

// constants from setting.js file
let{ PORT,APPNAME,DBURI} = require('./config/settings');
// const port = require('./config/settings').PORT;
// const appName = require('./config/settings').APPNAME;
// const dburi = require('./config/settings').DBURI;

const app = express();
// this call starts the
db();

app.listen(PORT, () =>
{
    console.log(`${APPNAME} is listening on port ${PORT}`);
});