const express = require('express')
const app = express()

const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173']

app.get('/api/data', (req, res) => {
  const requestOrigin = req.headers.origin
  if (allowedOrigins.includes(requestOrigin)) {
    res.set({ 'Access-Control-Allow-Origin': requestOrigin })
  }

  res.json({ message: 'Hello from backend', timestamp: Date.now() })
})

app.listen(4000, () => {
  console.log('Backend running on http://localhost:4000')
})
