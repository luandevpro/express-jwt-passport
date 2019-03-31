const Sequelize = require('sequelize');

const sequelize = new Sequelize('foo', 'root', '110130173', {
   host: '198.23.215.61',
   dialect: 'mysql',
});

module.exports = sequelize