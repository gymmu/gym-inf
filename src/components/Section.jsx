export default function Section({ children, classes = "" }) {
  return (
    <div className={`full-width content-grid highlight ${classes}`}>
      {children}
    </div>
  )
}
