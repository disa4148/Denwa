const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.userSQL,
    password: process.env.passwordSQL,
    host: 'localhost',
    port: 5432,
    database: process.env.databaseSQL
})

module.exports = pool 