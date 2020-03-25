import express from 'express'

const app = express()

app.get('/', (req, res) => res.send('hello world 3333'))

app.listen(3333)
