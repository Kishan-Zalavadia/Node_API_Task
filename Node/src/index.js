const express = require('express')
const app = express()

const personRoutes = require('./routes/user')
const port = 5000

app.use(express.json())
app.use('/', personRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})