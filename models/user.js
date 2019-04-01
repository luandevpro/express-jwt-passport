const Sequelize = require('sequelize');
     db  = require("../utils/database");

const User = db.define("user" , {
   id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
   },
   name: {
      type: Sequelize.STRING
   },
   age: {
      type: Sequelize.INTEGER
   },
   email: {
      type: Sequelize.STRING
   },
   password: {
      type: Sequelize.STRING
   }
})

module.exports = User