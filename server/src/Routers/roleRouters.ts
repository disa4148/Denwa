const express = require('express')
const router = express()

const roleControllers = require('../Controllers/roleControllers')

router.get('/', roleControllers.getAll)
router.get('/:id', roleControllers.getbyId)

router.post('/', roleControllers.createRole)
router.delete('/:id', roleControllers.deleteRole)

export default router