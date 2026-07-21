import { useAuth } from "../context/AuthContext"
import { Link } from "react-router-dom"

export default function AuthWrapper({
  children,
  roles = ["USER", "ADMIN"],
  requireVerified = false,
  fallback = null,
}) {
  const { user, loading, isAuthenticated, isVerified } = useAuth()

  if (loading) {
    return <div className="auth-loading">Laden...</div>
  }

  if (!isAuthenticated) {
    return (
      fallback || (
        <div className="auth-required">
          <h3>Anmeldung erforderlich</h3>
          <p>Sie m&uuml;ssen angemeldet sein, um diesen Inhalt zu sehen.</p>
          <Link to="/login">Jetzt anmelden</Link>
        </div>
      )
    )
  }

  if (requireVerified && !isVerified) {
    return (
      <div className="auth-verify-required">
        <h3>E-Mail-Verifizierung erforderlich</h3>
        <p>
          Bitte verifizieren Sie Ihre E-Mail-Adresse, um auf diesen Inhalt
          zuzugreifen.
        </p>
      </div>
    )
  }

  const hasRequiredRole = roles.includes(user.role)

  if (!hasRequiredRole) {
    return (
      <div className="auth-no-permission">
        <h3>Keine Berechtigung</h3>
        <p>
          Sie haben nicht die erforderlichen Berechtigungen f&uuml;r diesen
          Inhalt.
        </p>
      </div>
    )
  }

  return <>{children}</>
}
