const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser({extended: true}))

app.get('/', (req, res, next) => {
    res.status(200).send('Testando APÍ')
})

app.post('/', (req, res) => {
    res.status(201).send(req.body)
})

app.put('/:id', (req, res) => {
    res.status(202).send({
        codigo: req.param.id,
        corpo: req.body
    })
})

app.delete('/:id', () => {
    res.status(204).send(req.params.id)
})

app.listen(3000, () => {
    console.log('Api inicializada')
})

/*

200 - OK
201 - Created
202 - Accepted
204 - No Content

400 - 
*/

