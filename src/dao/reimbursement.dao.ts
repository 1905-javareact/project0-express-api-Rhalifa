import { PoolClient } from 'pg';
import { connectionPool } from '.';
import { sqlUserReimbursementToJsUserReimbursement } from '../util/reimbursement-converter';

export async function getReimbursementByStatusID(status_id: number){

     let client: PoolClient

     try {

        client = await connectionPool.connect()

         let query = 'SELECT * FROM "reimbursement".reimbursement_table WHERE status = $1'
         let result = await client.query(query, [status_id])

         return sqlUserReimbursementToJsUserReimbursement(result.rows[0])
   
     }catch(err) {
         console.log(err)
         return 'Internal server error'
     } finally {
        client && client.release()
     }
}

export async function getReimbursementByUserId(user_id: number) {

    let client: PoolClient

    try {

        client = await connectionPool.connect()

        let query = 'SELECT * FROM "reimbursement".reimbursement_table WHERE reimbursement_author = $1'
        let result = await client.query(query, [user_id])

        return await sqlUserReimbursementToJsUserReimbursement(result.rows[0])

    } catch(err) {
        console.log(err)
        return 'Internal server error'
    } finally {
        client && client.release()
    }
}

export async function postReimbursement(amount: number, description: string, type_reimb: number) {

    let client: PoolClient

    try{
        client = await connectionPool.connect() 

        let query = 'INSERT INTO "reimbursement".reimbursement_table(reimbursement_author, reimbursement_amount, date_submitted, date_resolved, description, resolver, status, type_reimb) VALUES ($1, $2, NOW(), NOW(), $3, $4, $5, $6)'
        let result = await client.query(query, [6,amount, description, 4, 4, type_reimb])

        return sqlUserReimbursementToJsUserReimbursement(result.rows[0])
    } catch(err) {
        console.log(err)
        return 'Internal server error'
    } finally {
        client && client.release()
    }
}

export async function updateReimbursement(reimbursement_author: number, reimbursement_amount: number, 
    date_submitted: number, date_resolved: number, description: string, resolver: number, 
    status: number, type_reimb: number) {

    let client:PoolClient

    try {
        client = await connectionPool.connect()

        let query = `UPDATE "reimbursement".table SET reimbursement_author = $1, reimbursement_amount = $2, 
        date_submitted = $3, date_resolved = $4, description = $4, resolver = $5, status = $6, type_reimb = $7`
        let result = await client.query(query, [reimbursement_author, reimbursement_amount,
        date_submitted, date_resolved, description, resolver, status, type_reimb])

        return await sqlUserReimbursementToJsUserReimbursement(result.rows[0])
    }catch(err) {
        console.log(err)
        return 'Internal'
    } finally {
        client && client.release()
    }
}
