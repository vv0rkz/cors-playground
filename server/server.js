const express = require('express')
const app = express()

app.get('/api/data', (req, res) => {
  // Шаг 1: перед отправкой JSON нужно явно разрешить браузеру
  // делиться этим ответом с другим origin.
  // Используй res.set(имя_заголовка, значение) — двумя строками
  // или сразу объектом { 'Header-Name': 'value' }.

  // Шаг 2: Чтобы применить обновления, нужно перезапустить сервер
  //

  res.set({ 'Access-Control-Allow-Origin': 'http://localhost:3001' })

  res.json({ message: 'Hello from backend', timestamp: Date.now() })
})

app.listen(4000, () => {
  console.log('Backend running on http://localhost:4000')
})
