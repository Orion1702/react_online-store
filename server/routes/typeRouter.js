const Router = require('express')
const router = new Router()
const typedController = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), typedController.create)
router.get('/', typedController.getAll)

module.exports = router