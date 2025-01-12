import { createContext, useContext, useState } from "react"

const AuthContext = createContext({
  user: null
})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const setAuth = authUser => {
    setUser(authUser)
  }

  const setUserData = userData => {
    setUser(prev => ({ ...prev, ...userData }))
  }

  return (
    <AuthContext.Provider value={{ setAuth, setUserData, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
