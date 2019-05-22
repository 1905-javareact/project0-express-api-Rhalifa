import { PoolClient } from 'pg';
import { connectionPool } from '.';
import { sqlUsertojsUSer } from '../util/user-converter';

export async function getAllUser() {

    let client:PoolClient

    try {
        client = await connectionPool.connect()

         let query = 'SELECT * FROM "reimbursement".user_table'
         let result = await client.query(query)
         return result.rows.map(sqlUsertojsUSer)
    } catch (err) {
          console.log(err)
          return 'Internal'

    } finally {
        client && client.release()
    }

}

export async function logUser(username: string, user_pass: string) {

    let client:PoolClient
    
    try{

        client = await connectionPool.connect()

        let query = 'SELECT * FROM "reimbursement".user_table WHERE username = $1 AND user_pass = $2'
        let result = await client.query(query, [username, user_pass])
        return sqlUsertojsUSer(result.rows[0])

    } catch(err) {
       console.log(err)
       return 'Internal error'
    }
     finally {
       client && client.release()
    }
}

export async function getUserByID(user_id : number) {

    let client: PoolClient

    try {
        
        client = await connectionPool.connect()

        let query = 'SELECT * FROM "reimbursement".user_table WHERE user_id = $1'
        let result = await client.query(query, [user_id])
        return sqlUsertojsUSer(result.rows[0])
    } catch (err) {
        console.log('error')
        return 'Internal server error'
    } finally {
        client && client.release()
    }
}

export async function updateUser(user_id: number) {

    let client: PoolClient

    try {

        client = await connectionPool.connect()

        let query = 'UPDATE user_table SET username = $1, user_pass = $2, firstname = $3, lastname = $4, email = $5'
        let result = await client.query(query, [user_id])
        return sqlUsertojsUSer(result.rows[0])
    }
    catch(err) {
        console.log('error')
        return 'Internal server error'
    } finally {
        client && client.release()
    }
}