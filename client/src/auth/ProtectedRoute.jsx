import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function ProtectedRoute({
  children,
  roles = ["USER", "ADMIN"],
  requireVerified = false,
}) {
  const { user, loading, isAuthenticated, isVerified } = useAuth()
  const location = useLocation()

  if (loading) {
    return <div className="page-loading">Laden...</div>
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  if (requireVerified && !isVerified) {
    return <Navigate to="/verify-email-notice" replace />
  }

  const hasRequiredRole = roles.includes(user.role)

  if (!hasRequiredRole) {
    return <Navigate to="/" replace />
  }

  return children
}
