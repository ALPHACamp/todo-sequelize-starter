const session = require('express-session')
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const app = express()
const port = 3000
// const path = require('path')

// ********    Import models     *************** 
const db = require('./models')

const passport = require('./config/passport')
app.use(express.static(__dirname + '/assets'));
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(express.static('assets'))
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }))
app.use(passport.initialize())
app.use(passport.session())

app.listen(port, () => {
// ******  sync sequelize with express server   **********
  db.sequelize.sync()

  console.log(`Example app listening on port ${port}!`)
})

require('./routes')(app, passport)
