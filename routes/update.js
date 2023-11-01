const express = require('express')
const { database, setQuery, fileJson} = require("../database");
const router = express.Router()

router.get('/:id', (req, res, next) => {
    const { selectByID } = fileJson
    if (Number(req.params.id) === 0) {
        res.redirect('/')
    } else {
        database.execute(setQuery(selectByID, [req.params.id]))
            .then(response => {
                res.render(`update`, {user: response[0]})
            })
    }
})

router.post('/', (req, res, next) => {
    const { height, weight, id } = req.body
    const { updateByID } = fileJson
    database.execute(setQuery(updateByID, [height, weight, id]))
        .then(() => res.redirect('/'))
})

module.exports = router
