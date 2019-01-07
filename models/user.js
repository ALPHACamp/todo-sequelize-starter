module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
    }, {});

    // association relationship definition
    User.associate = models => {
        User.hasMany(models.Todo)
    };
    return User;
}