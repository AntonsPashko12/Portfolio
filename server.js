const express = require('express')
const app = express()
let http = require('http').Server(app)
const exphbs = require('express-handlebars')
const path = require('path')
const keys = require('./keys')
const mainRoutes = require('./routes/main')
const ver1Routes = require('./routes/Ver1')
const ver2Routes = require('./routes/ver2')
const port = process.env.PORT || 3000

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
    helpers: require('./utils/hbs-helpers')
  })

app.use(express.static('public'))

http.listen(port, () => {
    console.log('listening on', port)
})


app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
  secret: keys.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store
}))
app.

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

// app.use('/', mainRoutes)
app.use('/', mainRoutes)
app.use('/ver1', ver1Routes)
app.use('/ver2', ver2Routes)