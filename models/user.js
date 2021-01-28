module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true //no duplicate usernames
        },
        passwordhash: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    return User;
}