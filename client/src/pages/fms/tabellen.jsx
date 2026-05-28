import ClientOnly from "@components/ClientOnly.jsx"
import Spreadsheet from "@components/Spreadsheet/Spreadsheet.jsx"

const COLUMNS = [
  { type: "text", title: "Produkt", width: 160 },
  { type: "numeric", title: "Preis (CHF)", width: 130, mask: "#.##0,00" },
  { type: "numeric", title: "Anzahl", width: 100 },
  { type: "numeric", title: "Total (CHF)", width: 150, mask: "#.##0,00" },
]

// Default data: rows with a formula in column D (index 3)
const DEFAULT_DATA = [
  ["Heft", 2.5, 3, "=B1*C1"],
  ["Bleistift", 1.2, 10, "=B2*C2"],
  ["Lineal", 4.0, 2, "=B3*C3"],
  ["Radiergummi", 0.8, 5, "=B4*C4"],
  ["Zirkel", 8.5, 1, "=B5*C5"],
  ["", "", "", ""],
  ["Summe", "", "", "=SUM(D1:D5)"],
]

export default function FmsTabellen() {
  return (
    <>
      <h1>Tabellen im Browser</h1>
      <p>
        Auf dieser Seite kannst du direkt im Browser mit einer Tabelle arbeiten
        – ähnlich wie in Excel oder Calc. Die Tabelle unterstützt{" "}
        <strong>Formeln</strong> (z. B. <code>=SUMME(D1:D5)</code>) und
        speichert alle Änderungen automatisch, sodass sie beim nächsten Besuch
        noch vorhanden sind.
      </p>

      <section>
        <h2>Einkaufsliste mit Gesamtberechnung</h2>
        <p>
          Die Tabelle enthält Produkte mit Preis und Anzahl. In der Spalte{" "}
          <strong>Total</strong> wird das Produkt automatisch berechnet (
          <code>=B1*C1</code> usw.), und in der letzten Zeile findest du die
          Gesamtsumme aller Totals (<code>=SUMME(D1:D5)</code>).
        </p>
        <p>
          Alle Zellen sind frei editierbar. Klicke eine Zelle an und gib einen
          Wert oder eine Formel (beginnend mit <code>=</code>) ein. Alle
          Änderungen werden automatisch im Browser gespeichert.
        </p>

        <ClientOnly>
          <Spreadsheet
            storageKey="fms-tabellen-einkaufsliste"
            columns={COLUMNS}
            data={DEFAULT_DATA}
            minDimensions={[4, 8]}
          />
        </ClientOnly>
      </section>

      <section>
        <h2>Formeln verwenden</h2>
        <p>
          Formeln beginnen immer mit einem <code>=</code>-Zeichen. Hier einige
          nützliche Formeln:
        </p>
        <table>
          <thead>
            <tr>
              <th>Formel</th>
              <th>Bedeutung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>=A1+B1</code>
              </td>
              <td>Addiert die Werte in Zelle A1 und B1</td>
            </tr>
            <tr>
              <td>
                <code>=B2*C2</code>
              </td>
              <td>Multipliziert Preis mit Anzahl</td>
            </tr>
            <tr>
              <td>
                <code>=SUM(D1:D5)</code>
              </td>
              <td>Summiert alle Werte von D1 bis D5</td>
            </tr>
            <tr>
              <td>
                <code>=AVERAGE(B1:B5)</code>
              </td>
              <td>Berechnet den Durchschnitt</td>
            </tr>
            <tr>
              <td>
                <code>=MAX(B1:B5)</code>
              </td>
              <td>Findet den grössten Wert</td>
            </tr>
            <tr>
              <td>
                <code>=MIN(B1:B5)</code>
              </td>
              <td>Findet den kleinsten Wert</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  )
}
