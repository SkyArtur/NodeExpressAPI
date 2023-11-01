const express = require('express')
const { database, setQuery, fileJson} = require('../database')
const router = express.Router()

router.get('/:id', (req, res, next) => {
    const { selectByID } = fileJson
    database.execute(setQuery(selectByID, [req.params.id]))
        .then(person => res.render('person', {title: 'API Node Express', person: person[0]}))
})

module.exports = router