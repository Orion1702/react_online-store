const Router = require('express')
const router = new Router()
const typedController = require('../controllers/typeController')

router.post('/', typedController.create)
router.get('/', typedController.getAll)

module.exports = router