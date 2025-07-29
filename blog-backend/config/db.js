import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('✅ Conexión a MongoDB exitosa')
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB:', error)
    process.exit(1) // Termina el proceso si no se puede conectar
  }
}

export default connectDB
