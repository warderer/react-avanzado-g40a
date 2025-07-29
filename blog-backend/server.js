// #1 Importar express
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import postRoutes from './routes/postRoutes.js'
import connectDB from './config/db.js'

dotenv.config()

// #2a Crear una instancia de express (app)
const app = express()
const port = process.env.PORT || 3000

// #2b Configurar express para que entienda JSON
app.use(express.json())

// #2c Configurar express para recibir datos de formularios
app.use(express.urlencoded({ extended: true }))

// #2d Configurar CORS para permitir peticiones desde el frontend
app.use(cors())

// #3 Definir rutas
app.get('/', (req, res) => {
  res.json({
    message: 'API del Blog Backend',
    endpoints: {
      getPosts: 'GET /api/v1/posts',
      getPost: 'GET /api/v1/posts/:id',
      createPost: 'POST /api/v1/posts',
      updatePost: 'PATCH /api/v1/posts/:id',
      deletePost: 'DELETE /api/v1/posts/:id'
    }
  })
})

// Integrar las rutas de posts
app.use('/api/v1/posts', postRoutes)

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).json({
    message: 'Endpoint not found',
    error: `La ruta ${req.originalUrl} no existe`
  })
})

// Conectar a la base de datos
connectDB()

// #4 Levantar el servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port} 🚀`)
})
