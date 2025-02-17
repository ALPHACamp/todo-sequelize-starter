const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)
const db = {}

// ******    Create a new instance of Sequelize with our local database config settings   *****  //
const sequelize = new Sequelize('todo_sequelize', 'root', 'password', {
  'username': 'root',
  'password': 'password',
  'database': 'todo_sequelize',
  'host': '127.0.0.1',
  'dialect': 'mysql'
 })


fs
 .readdirSync(__dirname)
 .filter(file => {
   return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
 })
 .forEach(file => {
   const model = sequelize['import'](path.join(__dirname, file))
   db[model.name] = model
 })
Object.keys(db).forEach(modelName => {
 if (db[modelName].associate) {
   db[modelName].associate(db)
 }
})
db.sequelize = sequelize
db.Sequelize = Sequelize
// this allows other files to get access to our configured database
module.exports = db