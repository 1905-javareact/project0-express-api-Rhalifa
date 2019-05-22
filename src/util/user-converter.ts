import { User } from "../models/user";
import { UserDTO } from "../dtos/user.dto";

export function sqlUsertojsUSer(sqluser:UserDTO):User{
    console.log(sqluser)
    return new User(sqluser.user_id, sqluser.username, sqluser.user_pass, sqluser.firstname, sqluser.lastname, sqluser.email, sqluser.role_user)
}