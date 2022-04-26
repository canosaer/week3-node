const express = require('express')
const app = express()
const port = 1337

//creates front-end
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true})) // for oldschool forms

app.get('/api', (req, res) => {
  res.send('Hello World on the back-end!')
})

app.get('/api/message', (req, res) => {
    res.send(messages)
})

app.post('/api/message', (req, res) => {
    console.log(req.body.content)

    messages.push({
        content: req.body.content,
        username: 'test user',
        timestamp: Date.now(),
    })
    res.send(messages)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

let messages = [
    {
        content: 'Hello',
        username: 'test user',
        timestamp: Date.now(),
    }
]