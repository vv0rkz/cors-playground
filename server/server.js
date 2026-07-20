const express = require('express')
const app = express()

app.get('/api/data', (req, res) => {
  res.cookie('session', 'demo-session-id')
  res.set({
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Credentials': 'true',
  })

  res.json({ message: 'Hello from backend', timestamp: Date.now() })
})

app.options('/api/data', (req, res) => {
  res.set({
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Methods': 'GET,PATCH',
    'Access-Control-Allow-Headers': 'Content-Type',
  })
  res.sendStatus(204)
})

app.patch('/api/data', (req, res) => {
  res.set({ 'Access-Control-Allow-Origin': 'http://localhost:3000' })

  res.json({ message: 'Updated', timestamp: Date.now() })
})

app.listen(4000, () => {
  console.log('Backend running on http://localhost:4000')
})
