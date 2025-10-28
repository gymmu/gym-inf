import { useEffect } from "react"
import Prism from "./prism"
import "./prism.css"

import styles from "@components/PrismBlock.module.css"

export default function PrismBlock({ children }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return <div className={styles.codeBlock}>{children}</div>
}
