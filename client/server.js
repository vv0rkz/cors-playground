const express = require('express')
const app = express()

app.use(express.static(__dirname))

app.get('/api/data', async (req, res) => {
  const upstream = await fetch('http://localhost:5000/data')
  const data = await upstream.json()
  res.json(data)
})

app.listen(3000, () => {
  console.log('Frontend (with proxy) running on http://localhost:3000')
})
