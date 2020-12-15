const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.render('ver2', {
    title: 'Ver. 2',
    isVer2: true
  })
})


module.exports = router