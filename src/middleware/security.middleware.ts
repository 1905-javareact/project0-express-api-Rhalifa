import { PoolClient } from 'pg';
import { connectionPool } from '../dao/index'

export function securityAuthorization(user_role: number) {


    return async (req, res, next) => {

        let isAuth = false

        let client: PoolClient

        if (!req.session.user) {
      
             res.sendStatus(401)
        } 
        if (req.session.user){
            
            try {
                client = await connectionPool.connect()

                let query = 'SELECT FROM user_table WHERE user_role = $1'
                let result = await client.query(query, [user_role])

                if(result.rows[0] === 1) {
                    next()
                }

            }catch(err) {
                console.log('error')
                return 'Internal'
            }finally {
                client && client.release()
            }
        } else {
            console.log('The incoming token has expired')
        }
        
    }
}