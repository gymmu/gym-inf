import style from "./NatDiagram.module.css"

const NAT_TABLE = [
  {
    intern: "192.168.1.10:54321",
    extern: "62.0.0.1:40001",
    ziel: "142.250.74.14:443",
  },
  {
    intern: "192.168.1.20:61234",
    extern: "62.0.0.1:40002",
    ziel: "142.250.74.14:443",
  },
  {
    intern: "192.168.1.30:49152",
    extern: "62.0.0.1:40003",
    ziel: "8.8.8.8:53",
  },
]

export default function NatDiagram() {
  return (
    <div className={style.container}>
      <div className={style.diagram}>
        <div className={style.box}>
          <div className={style.boxLabel}>Ihr Computer</div>
          <div className={style.boxAddr}>192.168.1.10</div>
        </div>
        <div className={style.arrow}>→</div>
        <div className={style.routerBox}>
          <div className={style.routerLabel}>Router / NAT</div>
          <div className={style.routerDetail}>
            intern: 192.168.1.1
            <br />
            extern: 62.0.0.1
          </div>
        </div>
        <div className={style.arrow}>→</div>
        <div className={style.box}>
          <div className={style.boxLabel}>Internet</div>
          <div className={style.boxAddr}>142.250.74.14</div>
        </div>
      </div>

      <div className={style.tableTitle}>
        NAT-Tabelle (Port Address Translation):
      </div>
      <table className={style.natTable}>
        <thead>
          <tr>
            <th>Interne Adresse</th>
            <th>Externe Adresse</th>
            <th>Zieladresse</th>
          </tr>
        </thead>
        <tbody>
          {NAT_TABLE.map((row, i) => (
            <tr key={i}>
              <td>{row.intern}</td>
              <td>{row.extern}</td>
              <td>{row.ziel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
