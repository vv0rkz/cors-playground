const express = require('express')
const app = express()

app.get('/api/data', (req, res) => {
  res.set({ 'Access-Control-Allow-Origin': 'http://localhost:3000' })

  res.json({ message: 'Hello from backend', timestamp: Date.now() })
})

app.patch('/api/data', (req, res) => {
  // Шаг 1: этот роут отвечает на PATCH — браузер шлёт перед ним
  // отдельный preflight-запрос методом OPTIONS.
  // Заголовок Access-Control-Allow-Origin здесь тоже нужен,
  // но одного его не хватит.

  res.set({ 'Access-Control-Allow-Origin': 'http://localhost:3000' })

  res.json({ message: 'Updated', timestamp: Date.now() })
})

app.listen(4000, () => {
  console.log('Backend running on http://localhost:4000')
})
