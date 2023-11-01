const { DbConnector } = require('./database')
const path = require('path')
const fs = require('fs')

function setQuery(text, values=[], rowMode='object') {
    return {text, values, rowMode}
}

const params = {
    database: 'laboratorio',
    user: 'estudante',
    password: '212223',
    host: 'localhost',
    port: '5430'
}

const createTable = setQuery(
    `CREATE TABLE IF NOT EXISTS persons (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        birth DATE,
        height NUMERIC(3, 2),
        weight NUMERIC(6, 3)
    );`
)

module.exports.database = new DbConnector(params, createTable)
module.exports.setQuery = setQuery
module.exports.fileJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'sql/sql.json'), 'utf-8'))
