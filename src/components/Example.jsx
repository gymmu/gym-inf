import "./components.css"

export default function Example({
  children,
  title = "Beispiel",
  classes = "",
  id = "",
}) {
  return (
    <div className={`full-width content-grid highlight ${classes}`}>
      <h3 id={id}>{`${title}`}</h3>
      {children}
    </div>
  )
}
