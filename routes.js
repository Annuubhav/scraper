const express = require('express')
const router = express.Router()
const pageController = require('./pageController')

router.get('/', pageController)

module.exports = router
