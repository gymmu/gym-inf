import AuthWrapper from "@/auth/AuthWrapper"
import { useAuth } from "@context/AuthContext"

export default function ProtectedDemo() {
  const { user } = useAuth()

  return (
    <section>
      <h1>AuthWrapper Demo</h1>
      <p>
        Diese Seite zeigt, wie der <code>AuthWrapper</code> funktioniert. Einige
        Bereiche sind nur sichtbar wenn Sie eingeloggt sind.
      </p>

      <h2>Offener Bereich</h2>
      <p>Dieser Text ist immer sichtbar, egal ob eingeloggt oder nicht.</p>

      <h2>Nur fuer angemeldete Benutzer</h2>
      <AuthWrapper>
        <div
          style={{
            padding: "1rem",
            border: "1px solid var(--color-green)",
            borderRadius: "8px",
            marginBottom: "1rem",
          }}>
          <p>
            Sie sind eingeloggt als <strong>{user?.email}</strong> mit der Rolle{" "}
            <strong>{user?.role}</strong>.
          </p>
        </div>
      </AuthWrapper>

      <h2>Nur fuer Admins</h2>
      <AuthWrapper
        roles={["ADMIN"]}
        fallback={
          <div
            style={{
              padding: "1rem",
              border: "1px dashed var(--color-red)",
              borderRadius: "8px",
              color: "var(--color-red)",
            }}>
            Dieser Bereich ist nur fuer Administratoren sichtbar.
          </div>
        }>
        <div
          style={{
            padding: "1rem",
            border: "1px solid var(--color-purple)",
            borderRadius: "8px",
          }}>
          <p>Admin-Bereich: Hier koennten administrative Funktionen stehen.</p>
        </div>
      </AuthWrapper>

      <h2>Nur fuer verifizierte Benutzer</h2>
      <AuthWrapper requireVerified={true}>
        <div
          style={{
            padding: "1rem",
            border: "1px solid var(--color-aqua)",
            borderRadius: "8px",
          }}>
          <p>
            Dieser Inhalt ist nur fuer Benutzer mit verifizierter E-Mail-Adresse
            sichtbar.
          </p>
        </div>
      </AuthWrapper>
    </section>
  )
}
