const webRouter = require('express').Router()
const dotenv = require('dotenv')
const { index, about } = require('../controllers/pagesController')

dotenv.config()

webRouter.get('/', index)
webRouter.get('/about', about)

module.exports = webRouter