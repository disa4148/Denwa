const express = require('express');
const app = express();
const morgan = require('morgan')

import userRouters from './Routers/userRouters';
import categoryRouters from './Routers/categoryRouters';

app.use(express.json())
app.use(morgan('dev'))


const api: string = '/api/'
app.use(`${api}user`, userRouters)
app.use(`${api}category`, categoryRouters)

export default app;