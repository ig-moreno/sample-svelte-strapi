const express = require('express')
const app = express()
const port = 3000

app.get('/v1/healthcheck', (req, res) => {
  res.send('It works!')
})

app.listen(port, () => {
  console.log(`Node backend listening on port ${port}`)
})