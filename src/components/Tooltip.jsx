import styles from "./Tooltip.module.css"

export default function Tooltip({tip, children}) {

  return (
    <div className={styles.wrapper}>
      <div className={styles.tip}>{tip}</div>
      {children}
    </div>
  )
}
