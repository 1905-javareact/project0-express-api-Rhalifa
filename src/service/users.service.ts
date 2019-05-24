import {getAllUser, logUser, getUserByID, updateUser} from "../dao/user.dao";
import { Request } from "express";

export async function getAllUserService() {

    return await getAllUser()
}

export async function logUserService(req:Request, username: string, user_pass: string) {
      
      let user = await logUser(username, user_pass) 

      if (typeof(user) === 'string') {
           return user
      } else {
          req.session.user = user
          return user
      }


}

export async function getUserByIDService(user_id: number) {

    return await getUserByID(user_id)
}

export async function updateUserService(user_id: number, username:string, user_pass: string, firstname: string, 
    lastname: string, email: string, role_user: string) {

    return await updateUser(user_id, username, user_pass, firstname, lastname, email, role_user)
}