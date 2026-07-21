import style from "./DataTable.module.css"

/**
 * Wiederverwendbare Tabellen-Komponente.
 *
 * Props:
 *   headers  – string[]          – Spaltenüberschriften
 *   rows     – (string|JSX)[][]  – Tabellenzeilen (jede Zeile = Array von Zellen)
 *   caption  – string?           – optionaler Titeltext über der Tabelle
 */
export default function DataTable({ headers, rows, caption }) {
  return (
    <div className={style.wrapper}>
      {caption && <p className={style.caption}>{caption}</p>}
      <table className={style.table}>
        {headers && headers.length > 0 && (
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
