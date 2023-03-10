'use strict';
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('myFirstDatabase', 'testuser',
    'This!stestuser123', {
    host: '192.168.178.3',
    dialect: 'mysql'
});
const connectMysql = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to MySQL has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the MySQL database:',
            error);
        process.exit(1);
    }
}
module.exports = {
    Sequelize: sequelize,
    connectMysql
}
