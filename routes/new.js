const express = require('express')
const { database, setQuery, fileJson} = require('../database')
const router = express.Router()

router.get('/', (req, res, next) => {
    const message = {title: 'Registro', text: 'Realize um novo registro!'}
    res.render('new', {title: 'API Node Express', add_message: message})
})

router.post('/', (req, res, next) => {
    const { name, birth, height, weight } = req.body
    const { insertInto } = fileJson
    database.execute(setQuery(insertInto, [name, birth, height, weight]))
        .then(() => res.redirect('/'))
        .catch(e => res.render('new', {message: {title: 'Erro', text: e}}))
})

module.exports = router