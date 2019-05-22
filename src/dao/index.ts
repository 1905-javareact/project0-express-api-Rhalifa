import {Pool} from 'pg'
console.log({
    user: process.env['MUSIC_API_USERNAME'],
    host: process.env['MUSIC_API_HOST'],
    database: process.env['MUSIC_API_DB_NAME'],
    password: process.env['MUSIC_API_PASSWORD'],
    port: 5432,
    max: 5 // max number of connections

})

export const connectionPool:Pool = new Pool({
    user: process.env['MUSIC_API_USERNAME'],
    host: process.env['MUSIC_API_HOST'],
    database: process.env['MUSIC_API_DB_NAME'],
    password: process.env['MUSIC_API_PASSWORD'],
    port: 5432,
    max: 5 // max number of connections

})