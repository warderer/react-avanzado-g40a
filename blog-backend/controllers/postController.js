import { getPost, getPosts } from '../models/Post.js'

// CREATE

// READ
export const getAllPosts = async (req, res) => {
  try {
    const posts = await getPosts()
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving posts', error: error.message })
  }
}

export const getPostById = async (req, res) => {
  try {
    const posts = await getPost(req.params.id)
    if (!posts) {
      return res.status(404).json({ message: 'Post not found' })
    }
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving posts', error: error.message })
  }
}

// UPDATE

// DELETE
