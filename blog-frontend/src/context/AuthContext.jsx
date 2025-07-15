import { createContext, useState, useEffect } from 'react'

// 1. Crear el contexto
const AuthContext = createContext()

// 2. Crear el proveedor del contexto (provider)

function AuthProvider ({ children }) {
  // Lógica de autenticación
  const [isAuth, setIsAuth] = useState(false) // ¿Estoy autenticado?
  const [userPayload, setUserPayload] = useState(null) // Información del usuario autenticado

  const login = (data) => {
    localStorage.setItem('userData', JSON.stringify(data)) // Guardar datos del usuario en localStorage
    setUserPayload(data) // Actualizar el estado con los datos del usuario
    setIsAuth(true)
  }

  const logout = () => {
    localStorage.removeItem('userData') // Eliminar los datos del usuario de localStorage
    setUserPayload(null) // Limpiar el estado del usuario
    setIsAuth(false)
  }

  useEffect(() => {
    // Al cargar la aplicación, verificar si hay datos de usuario en localStorage
    const userData = localStorage.getItem('userData')
    if (userData) {
      setUserPayload(JSON.parse(userData)) // Si hay datos, actualizar el estado
      setIsAuth(true) // Y marcar como autenticado
    }
  }, [])

  // Aquí voy a colocar los datos que voy a compartir de forma global
  const data = {
    isAuth,
    userPayload,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
