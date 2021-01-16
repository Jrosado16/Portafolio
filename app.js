const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/src/public'))

app.get('/', (req, res) => {
    res.write('Esperar')
    res.end()
})

app.listen(port, (err) => {
    if (err) throw new Error(err)

    console.log(`Server on Port ${port}`)
})