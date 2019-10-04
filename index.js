const express = require('express')
const app = express()
const port = 8080

app.use('/static', express.static(path.join(__dirname, 'public')))

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', (req, res) => res.send('Got a POST request'))

app.put('/user', (req, res) => res.send('Got a PUT request at /user'))

app.delete('/user', (req, res) => res.send('Got aDELETE request at /user'))

app.listen(port, () => console.log(`Listening on port ${port}!`))