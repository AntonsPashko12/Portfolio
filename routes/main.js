const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.render('main', {
    title: 'Main',
  })
})


module.exports = router