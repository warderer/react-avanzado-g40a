// #1 Importar express
import express from 'express'
import postsData from './data/posts.json' with { type: 'json' }

// #2a Crear una instancia de express (app)
const app = express()
const port = process.env.PORT || 3000

// #2b Configurar express para que entienda JSON
app.use(express.json())

// #2c Configurar express para recibir datos de formularios
app.use(express.urlencoded({ extended: true }))

// #3 Definir rutas
app.get('/', (req, res) => {
  res.send('Saludos G40A! 👋')
})

app.get('/api/v1/posts', (req, res) => {
  res.json(postsData)
})

/* PARAMS */
// Un param sirve para hacer una ruta dinámica. Por ejemplo, si quiero traer la información de un post en especifico, puedo hacer que una ruta reciba el id del post y me regrese la información de ese post.
// Params: /api/v1/posts/:postId

app.get('/api/v1/posts/:postId', (req, res) => {
  // const postId = req.params.postId
  const { postId } = req.params // Desestructuración de objetos
  console.log(`Recibí una petición GET en la ruta /api/v1/posts/${postId}`)

  const post = postsData.find((post) => post.id === parseInt(postId))

  if (post) {
    res.json(post)
  } else {
    res.status(404).json({ error: 'Post not found' })
  }
})

// #4 Levantar el servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port} 🚀`)
})
