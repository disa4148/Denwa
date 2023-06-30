const express = require('express');
const app = express();
const morgan = require('morgan')

import userRouters from './Routers/userRouters';
import categoryRouters from './Routers/categoryRouters';
import roleRouters from './Routers/roleRouters'

app.use(express.json())
app.use(morgan('dev'))


const api: string = '/api/'
app.use(`${api}user`, userRouters)
app.use(`${api}category`, categoryRouters)
app.use(`${api}role`, roleRouters)

export default app;