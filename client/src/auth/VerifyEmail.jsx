import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import * as authApi from "../services/api"

export default function VerifyEmail() {
  const { token } = useParams()
  const [status, setStatus] = useState("loading")
  const [message, setMessage] = useState("")

  useEffect(() => {
    async function verify() {
      try {
        const data = await authApi.verifyEmail(token)
        setStatus("success")
        setMessage(data.message)
      } catch (err) {
        setStatus("error")
        setMessage(err.message)
      }
    }
    verify()
  }, [token])

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>E-Mail Verifizierung</h2>

        {status === "loading" && <p>Verifizierung l&auml;uft...</p>}

        {status === "success" && (
          <>
            <div className="auth-success">{message}</div>
            <div className="auth-links">
              <Link to="/login">Jetzt anmelden</Link>
            </div>
          </>
        )}

        {status === "error" && (
          <>
            <div className="auth-error">{message}</div>
            <div className="auth-links">
              <Link to="/login">Zur Anmeldung</Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
