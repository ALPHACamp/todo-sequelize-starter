module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    name: DataTypes.STRING,
    done: DataTypes.BOOLEAN,
  }, {})

// ****  Insert Associations Here  ******//
Todo.associate = models => {
  // associations can be defined here
  Todo.belongsTo(models.User)
 }
 return Todo
}
