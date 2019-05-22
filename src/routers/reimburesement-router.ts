import express = require('express');
import { getReimbursementByStatusIDService, getReimbursementByUserIdService, postReimbursementService, updateReimbursementService } from '../service/reimbursement.service';


export const reimbursementRouter = express.Router()

reimbursementRouter.get('/status/:statusId', async (req, res) => {
    let params = +req.params.statusId
    if (req.session.user.role_user === 1) {
        res.json(await getReimbursementByStatusIDService(params))
    } else {
      res.sendStatus(401)
   }

})

reimbursementRouter.get('/author/userId/:userId', async (req, res) =>{
    
    let params = +req.params.userId

    if (req.session.user.role_user === 1 || req.session.user.user_id === params) {
        res.json(await getReimbursementByUserIdService(params))
    } else {
        res.sendStatus(401)
    }

})


reimbursementRouter.post('/postreimbursement', async (req, res) => {
    
    const { amount, description, type_reimb} = req.body 
     
    let createPost = await postReimbursementService( amount, description, type_reimb)
    
    if (typeof(createPost) === 'string')  {
        res.sendStatus(401)
    } else {
        res.sendStatus(201)
    }
})

reimbursementRouter.patch('reimbursement/users', async(req,res) => {
    const { reimbursement_author, reimbursement_amount,
        date_submitted, date_resolved, description, resolver, status, type_reimb } = req.body

    if(req.session.user.role_user === 1){
        let reimbursement = await updateReimbursementService(req, reimbursement_author, reimbursement_amount,
            date_submitted, date_resolved, description, resolver, status, type_reimb)

            res.json(reimbursement)
    }else{
        res.sendStatus(401)
    }
    
})
