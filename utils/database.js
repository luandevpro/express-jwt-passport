
const Sequelize = require('sequelize');

const db = new Sequelize('mytestdb', 'examplerole', '110130173', {
   host: '198.23.215.61',
   dialect: 'postgres',
});

module.exports = db