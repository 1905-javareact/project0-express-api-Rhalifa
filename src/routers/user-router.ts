//import express from 'express'
import { securityAuthorization } from '../middleware/security.middleware'

import {getAllUserService, logUserService, getUserByIDService, updateUserService} from '../service/users.service';
import express = require('express');

export const userRouter = express.Router()

//end point that handle login

userRouter.post('', async (req, res) => {
      
      const {username, user_pass} = req.body 

      let user = await logUserService(req, username, user_pass)

      req.session.user = user
    
      if (typeof(user) === 'string') {
           res.sendStatus(401)
     } else {
        res.json(user)
     }

})

userRouter.get('', async (req, res) => {
    if ((req.session.user.role_user === 1) || (req.session.user.role_user === 2)) {
        res.json(await getAllUserService())
    }else {
       res.sendStatus(401)
    }
})

userRouter.get('/:id', async (req, res) => {
    let params = +req.params.id

    if ((req.session.user.role_user === 1)|| (req.session.user.role_user === 2)) {
        
        let user = await getUserByIDService(params)
        res.json(user)
    } else {
        res.sendStatus(401)
    }
    
})

userRouter.patch('/users/id', async (req, res) => {

    //let params = +req.params.id

    const { user_id, username, user_pass, firstname, lastname, email, role_user } = req.body

    if (req.session.user.role_user === 2) {
        let user = await updateUserService(user_id, username, user_pass, firstname, lastname, email, role_user)  
        res.json(user)
    } else {
        res.sendStatus(401)
    }
})