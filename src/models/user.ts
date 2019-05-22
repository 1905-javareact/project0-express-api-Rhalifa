
export class User {
      user_id: number  // primary key
      username: string // not null, unique
      user_pass: string // not null
      firstname: string  // not null
      lastname: string // not null
      email: string // not null
      role_user: number // not null

      constructor(user_id:number, username:string = '', user_pass: string, firstname:string = '', lastname:string = '', email:string = '', role_user:number){
        this.user_id = user_id
        this.username = username
        this.user_pass = user_pass
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
        this.role_user = role_user
    }
}