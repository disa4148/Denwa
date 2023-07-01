const express = require('express')
const router = express()

const statusControllers = require('../Controllers/statusControllers')

router.get('/', statusControllers.getAll)
router.get('/:id', statusControllers.getById)

router.post('/', statusControllers.createStatus)
router.delete('/:id', statusControllers.deleteStatus)

export default router