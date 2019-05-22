//import session from 'express-session'
import session = require('express-session');
const sess =  {
    secret: 'secret',
    cookie: { secure: false },
    resave: false,
    saveUninitialized: false
}

export const sessionMiddleware = session(sess)