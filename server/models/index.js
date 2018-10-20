const Sequelize = require('sequelize');
const environment = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/config.json')[environment];
const HolidayModel = require('./holiday'); 


const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
});

// Models
const Holiday = HolidayModel(sequelize, Sequelize)

// Sync the database models
// sequelize.sync({
//   force: true
// });

module.exports = {
  Holiday
}