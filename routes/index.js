const bcrypt = require('bcrypt-nodejs')

module.exports = (app, passport) => {
  const authenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/signin')
  }

  app.get('/', authenticated, (req, res) => res.render('index'))

  app.get('/users', (req, res) => userController.getUsers(req, res))
  
  app.get('/signin', (req, res) => res.render('signin'))

  app.post('/signin',
  passport.authenticate('local', {failureRedirect: '/signin'}),
  (req, res) => res.redirect('/'))

  app.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/signin')
  })
  
  app.get('/signup', (req, res) => res.render('signup') )
  app.post('/signup', (req, res) => {
    User.create({
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10), null)
    }).then(user => res.redirect('/signin') )
  })
  // ******************************************
  // ****** Place todo routes here *******
  // ******************************************







}
