const express = require('express')
const { database, setQuery, fileJson} = require('../database')
const router = express.Router()

router.get('/', (req, res, next) => {
    const { selectAll } = fileJson
    database.execute(setQuery(selectAll))
        .then(persons => res.render('index', {title: 'API Node Express', persons}))
})

module.exports = router