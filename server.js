const express = require('express');


const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = require('./config/connection')

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});