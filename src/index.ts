//import express from 'express'
import bodyParser = require('body-parser');
import { userRouter } from './routers/user-router'
import { sessionMiddleware } from './middleware/session.middleware';
import express = require('express');
import { reimbursementRouter } from './routers/reimburesement-router';

const app = express()

app.use(bodyParser.json())

app.use(sessionMiddleware)

app.use('/login', userRouter)

app.use('/users', userRouter)

app.use('/reimbursement', reimbursementRouter)

app.use('/', reimbursementRouter)

app.listen(9050, () => {
    console.log('app is listening')
})
