require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/lIn', (req, res) => {
	res.send(' dear request register!')
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
     




// console.log("lets build grading-platform")
