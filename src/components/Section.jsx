export default function Section({ children, classes = "" }) {
  return <div className={`highlight ${classes}`}>{children}</div>
}
