import { createContext } from 'react'

// 1. Crear el contexto
const AuthContext = createContext()

// 2. Crear el proveedor del contexto (provider)

function AuthProvider ({ children }) {
  // Aquí voy a colocar los datos que voy a compartir de forma global
  const data = {

  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
