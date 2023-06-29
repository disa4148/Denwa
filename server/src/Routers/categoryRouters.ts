const express = require('express')
const router = express()

const categoryControllers = require('../Controllers/categoryControllers')

router.get('/', categoryControllers.getAll)
router.post('/', categoryControllers.addCategory)

export default router