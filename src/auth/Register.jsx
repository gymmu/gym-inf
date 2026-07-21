import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (password !== confirmPassword) {
      setError("Passw\u00f6rter stimmen nicht \u00fcberein")
      return
    }

    if (password.length < 8) {
      setError("Passwort muss mindestens 8 Zeichen lang sein")
      return
    }

    setSubmitting(true)
    const result = await register(email, password)

    if (result.success) {
      setSuccess(result.message)
      setTimeout(() => navigate("/login"), 3000)
    } else {
      setError(result.error)
    }
    setSubmitting(false)
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Registrieren</h2>

        {error && <div className="auth-error">{error}</div>}
        {success && <div className="auth-success">{success}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-field">
            <label htmlFor="email">E-Mail</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              placeholder="ihre@email.com"
            />
          </div>

          <div className="auth-field">
            <label htmlFor="password">Passwort</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
              placeholder="Mindestens 8 Zeichen"
            />
          </div>

          <div className="auth-field">
            <label htmlFor="confirmPassword">Passwort best&auml;tigen</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              autoComplete="new-password"
              placeholder="Passwort wiederholen"
            />
          </div>

          <button type="submit" className="auth-submit" disabled={submitting}>
            {submitting ? "Registrieren..." : "Registrieren"}
          </button>
        </form>

        <div className="auth-links">
          <span>
            Bereits ein Konto? <Link to="/login">Anmelden</Link>
          </span>
        </div>
      </div>
    </div>
  )
}
