import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react"
import * as authApi from "../services/api"

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const checkAuth = useCallback(async () => {
    try {
      const data = await authApi.checkAuth()
      if (data.authenticated) {
        setUser(data.user)
      } else {
        setUser(null)
      }
    } catch {
      setUser(null)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  const login = async (email, password) => {
    setError(null)
    try {
      const data = await authApi.login(email, password)
      setUser(data.user)
      return { success: true }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    }
  }

  const register = async (email, password) => {
    setError(null)
    try {
      const data = await authApi.register(email, password)
      return { success: true, message: data.message }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    }
  }

  const logout = async () => {
    try {
      await authApi.logout()
    } catch {
      // Logout locally even if server call fails
    }
    setUser(null)
  }

  const hasRole = (roles) => {
    if (!user) return false
    if (!Array.isArray(roles)) roles = [roles]
    return roles.includes(user.role)
  }

  const value = {
    user,
    loading,
    error,
    setError,
    login,
    register,
    logout,
    checkAuth,
    hasRole,
    isAuthenticated: !!user,
    isVerified: user?.isVerified || false,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
