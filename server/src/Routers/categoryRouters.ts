const express = require('express')
const router = express()

const categoryControllers = require('../Controllers/categoryControllers')

router.get('/', categoryControllers.getAll)
router.get('/:id', categoryControllers.getById)

router.post('/', categoryControllers.addCategory)

router.delete('/:id', categoryControllers.deleteCategory)

export default router