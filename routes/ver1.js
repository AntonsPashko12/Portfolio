const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.render('ver1', {
    title: 'Ver. 1',
    isVer1: true
  })
})


module.exports = router