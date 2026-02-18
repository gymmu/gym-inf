import { useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import * as authApi from "../services/api"

export default function ResetPassword() {
  const { token } = useParams()
  const navigate = useNavigate()
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [submitting, setSubmitting] = useState(false)

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

    try {
      const data = await authApi.resetPassword(token, password)
      setSuccess(data.message)
      setTimeout(() => navigate("/login"), 3000)
    } catch (err) {
      setError(err.message)
    }
    setSubmitting(false)
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Neues Passwort setzen</h2>

        {error && <div className="auth-error">{error}</div>}
        {success && <div className="auth-success">{success}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-field">
            <label htmlFor="password">Neues Passwort</label>
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
            {submitting ? "Speichern..." : "Passwort speichern"}
          </button>
        </form>

        <div className="auth-links">
          <Link to="/login">Zur&uuml;ck zur Anmeldung</Link>
        </div>
      </div>
    </div>
  )
}
