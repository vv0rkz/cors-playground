const express = require('express')
const app = express()

// Представь, что это чужой сервис: у тебя нет доступа к его коду
// и ты не можешь добавить сюда никаких CORS-заголовков.
app.get('/data', (req, res) => {
  res.json({ message: 'Hello from a third-party API', timestamp: Date.now() })
})

app.listen(5000, () => {
  console.log('External API running on http://localhost:5000')
})
