const express = require('express');
const app = express();
const morgan = require('morgan')

import userRouters from './Routers/userRouters'

app.use(express.json())
app.use(morgan('dev'))


const api: string = '/api/'
app.use(`${api}user`, userRouters)

export default app;