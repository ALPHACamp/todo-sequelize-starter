module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {})

  User.associate = models => {
    // associations can be defined here
    User.hasMany(models.Todo)
  }
  return User
}
