const express = require('express')
const app = express()
const cors = require('cors')

const port = 3000


app.use(cors())

app.get('/v1/healthcheck', (req, res) => {
  res.send({message: "It works"})
})

app.listen(port, () => {
  console.log(`Node backend listening on port ${port}`)
})