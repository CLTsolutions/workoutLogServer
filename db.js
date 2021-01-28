const Sequelize = require('sequelize');
const sequelize = new Sequelize('workoutlog', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connected to workoutlog postgres database');
    })
    .catch(err => {
        console.log('Unable to connect to the database', err);
    });

module.exports = sequelize;