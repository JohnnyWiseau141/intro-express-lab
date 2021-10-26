// import modules

//import express module
import express from 'express'

//import vg module
import * as vgDb from './data/vg-db.js'

// Create Express app

const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')


// Mount Middleware (app.use)



// Mount routes

app.get('/', function(req, res) {
  res.redirect('/home')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/gamestodos', function(req, res) {
  vgDb.find({}, function(error, gamesTodos) {
    res.render('gamestodos/index', {
      todoGames: gamesTodos,
      error: error
    })
  })
})

// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})