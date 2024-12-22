require('dotenv').config()
console.log("haa thik hai");
const express = require('express')
const app = express()
const port = 7000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('pk every thing right')
})
app.get('/on', (req, res) => {
    res.send('kya bol rhe ho haa ye thik hai')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
}) 