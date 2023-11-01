const pgk = require('pg')
const { Client } = pgk

module.exports.DbConnector = class {
    constructor(database, createTable=null) {
        this.database = typeof database === 'object'
            ? database
            : null
        if (createTable) this.execute(createTable).catch(console.error)
    }
    async execute (setQuery) {
        const client = new Client(this.database)
        try {
            await  client.connect()
            const response = await client.query(setQuery)
            return response.rows
        } catch (e) {
            return e
        } finally {
            await client.end()
        }
    }

}