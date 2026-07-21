import { useState } from "react"
import { Link } from "react-router-dom"
import * as authApi from "../services/api"

export default function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    setSubmitting(true)

    try {
      const data = await authApi.forgotPassword(email)
      setSuccess(data.message)
    } catch (err) {
      setError(err.message)
    }
    setSubmitting(false)
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Passwort vergessen</h2>
        <p>
          Geben Sie Ihre E-Mail-Adresse ein und wir senden Ihnen einen Link zum
          Zur&uuml;cksetzen Ihres Passworts.
        </p>

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

          <button type="submit" className="auth-submit" disabled={submitting}>
            {submitting ? "Senden..." : "Link senden"}
          </button>
        </form>

        <div className="auth-links">
          <Link to="/login">Zur&uuml;ck zur Anmeldung</Link>
        </div>
      </div>
    </div>
  )
}
