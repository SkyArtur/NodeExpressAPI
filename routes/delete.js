const express = require('express')
const { database, setQuery, fileJson} = require('../database')
const router = express.Router()

router.get('/:id', (req, res, next) => {
    const { deleteByID } = fileJson
    database.execute(setQuery(deleteByID, [req.params.id]))
        .then(() => res.redirect('/'))
})

module.exports = router