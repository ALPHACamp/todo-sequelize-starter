const session = require('express-session')
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const app = express()
const port = 3000

// ********    Import models     *************** 
const passport = require('./config/passport')

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

  console.log(`Example app listening on port ${port}!`)
})

require('./routes')(app, passport)
