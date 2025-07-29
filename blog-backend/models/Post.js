import mongoose from 'mongoose'
import postSchema from '../schemas/postSchema.js'

// Creo el modelo a partir del esquema
const Post = mongoose.model('Post', postSchema)

// CREATE
export const createPost = async (postData) => {
  const newPost = new Post({
    userId: postData.userId,
    title: postData.title,
    body: postData.body,
    imageUrl: postData.imageUrl,
    ...postData
  })

  return await newPost.save()
}

// READ
export const getPosts = async () => {
  return await Post.find().sort({ createdAt: -1 }) // Ordenar por fecha de creación descendente
}

export const getPost = async (id) => {
  return await Post.findById(id)
}

// UPDATE
export const updatePost = async (id, postDataToUpdate) => {
  const updatedPost = await Post.findByIdAndUpdate(
    id,
    { $set: postDataToUpdate }, // $set-> Actualiza solo los campos especificados
    { new: true, runValidators: true } // Devuelve el documento actualizado y valida los cambios
  )
  return updatedPost
}

// DELETE
export const deletePost = (id) => {
//   const postIndex = postsData.findIndex(post => post.id === parseInt(id))
//   if (postIndex === -1) {
//     return null
//   }

//   postsData.splice(postIndex, 1)
//   return true
}
