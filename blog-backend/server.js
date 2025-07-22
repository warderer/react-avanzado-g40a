// #1 Importar express
import express from 'express'

// #2a Crear una instancia de express (app)
const app = express()
const port = process.env.PORT || 3000

// #2b Configurar express para que entienda JSON
app.use(express.json())

// #2c Configurar express para recibir datos de formularios
app.use(express.urlencoded({ extended: true }))

// #3 Definir rutas
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// #4 Levantar el servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port} 🚀`)
})
