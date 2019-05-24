import { getReimbursementByStatusID, getReimbursementByUserId, postReimbursement, updateReimbursement } from '../dao/reimbursement.dao';
import { Request } from "express";

export async function getReimbursementByStatusIDService(status_id: number) {
    
    return  await getReimbursementByStatusID(status_id)
}

export async function getReimbursementByUserIdService(user_id: number) {
    
    return await getReimbursementByUserId(user_id)
}

export async function postReimbursementService(amount: number, description: string, type_reimb: number, author_id: number) {
     
    let postCreation = await postReimbursement(amount, description, type_reimb, author_id)

    if (typeof(postCreation) === 'string') {
        return postCreation
    } else {
        return postCreation
    }

}

export async function updateReimbursementService(req: Request,reimbursement_id: number, reimbursement_author: number, reimbursement_amount: number, 
    date_submitted: number, date_resolved: number, description: string, resolver: number, 
    status: number, type_reimb: number){

        let reimbursement = await updateReimbursement(reimbursement_id, reimbursement_author, reimbursement_amount, date_submitted,
            date_resolved, description, resolver, status, type_reimb)

            if (typeof(reimbursement) === 'string') {
               return reimbursement
            } else {
                return reimbursement
            }

}


    
