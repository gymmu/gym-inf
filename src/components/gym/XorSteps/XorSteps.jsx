import { useMemo, useState } from "react"
import style from "./XorSteps.module.css"

// ── Helpers ───────────────────────────────────────────────

function toBin8(n) {
  return n.toString(2).padStart(8, "0")
}

function formatBin(b) {
  // "01001000" → "0100 1000"
  return b.slice(0, 4) + "\u202F" + b.slice(4)
}

function onlyPrintable(str) {
  return str
    .split("")
    .filter((c) => {
      const code = c.charCodeAt(0)
      return code >= 32 && code <= 126
    })
    .join("")
}

// ── Main component ────────────────────────────────────────

export default function XorSteps() {
  const [plaintext, setPlaintext] = useState("HALLO")
  const [keytext, setKeytext] = useState("KEY")
  const [activeTab, setActiveTab] = useState("ascii") // "ascii" | "xor"

  const plain = onlyPrintable(plaintext).slice(0, 10)
  const key = onlyPrintable(keytext) || "K"

  const chars = useMemo(() => {
    return plain.split("").map((ch, i) => {
      const keyChar = key[i % key.length]
      const pCode = ch.charCodeAt(0)
      const kCode = keyChar.charCodeAt(0)
      const eCode = pCode ^ kCode
      return {
        plain: ch,
        keyChar,
        pCode,
        kCode,
        eCode,
        pBin: toBin8(pCode),
        kBin: toBin8(kCode),
        eBin: toBin8(eCode),
        printable: eCode >= 32 && eCode <= 126,
      }
    })
  }, [plain, key])

  return (
    <div className={style.wrapper}>
      {/* ── Inputs ── */}
      <div className={style.inputRow}>
        <div className={style.inputGroup}>
          <label className={style.inputLabel} htmlFor="xor-plain">
            Klartext
          </label>
          <input
            id="xor-plain"
            className={style.input}
            type="text"
            value={plaintext}
            maxLength={10}
            onChange={(e) => setPlaintext(e.target.value)}
            placeholder="HALLO"
          />
        </div>
        <div className={style.inputGroup}>
          <label className={style.inputLabel} htmlFor="xor-key">
            Schlüssel
          </label>
          <input
            id="xor-key"
            className={style.input}
            type="text"
            value={keytext}
            maxLength={10}
            onChange={(e) => setKeytext(e.target.value)}
            placeholder="KEY"
          />
        </div>
      </div>

      {/* ── Tabs ── */}
      <div className={style.tabs}>
        <button
          className={`${style.tab} ${activeTab === "ascii" ? style.tabActive : ""}`}
          onClick={() => setActiveTab("ascii")}>
          Schritt 1: Text → Binär
        </button>
        <button
          className={`${style.tab} ${activeTab === "xor" ? style.tabActive : ""}`}
          onClick={() => setActiveTab("xor")}>
          Schritt 2: XOR-Verschlüsselung
        </button>
      </div>

      {/* ── Tab: ASCII ── */}
      {activeTab === "ascii" && chars.length > 0 && (
        <div className={style.tabContent}>
          <p className={style.explain}>
            Computer kennen keine Buchstaben — nur Zahlen. Die{" "}
            <strong>ASCII-Tabelle</strong> ordnet jedem Zeichen eine Zahl
            (0–127) zu. Diese Zahl wird als <strong>8-Bit-Binärzahl</strong>{" "}
            gespeichert. So wird aus dem Text eine Folge von Nullen und Einsen.
          </p>

          <div className={style.scrollBox}>
            <table className={style.asciiTable}>
              <thead>
                <tr>
                  <th className={style.thRow}>Zeichen</th>
                  {chars.map((c, i) => (
                    <td key={i} className={style.charCell}>
                      {c.plain}
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className={style.thRow}>ASCII (dez.)</th>
                  {chars.map((c, i) => (
                    <td key={i} className={style.decCell}>
                      {c.pCode}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th className={style.thRow}>Binär (8 Bit)</th>
                  {chars.map((c, i) => (
                    <td key={i} className={style.binCell}>
                      <BinByte value={c.pBin} />
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <div className={style.hint}>
            Jedes Zeichen belegt genau <strong>1 Byte = 8 Bit</strong>. Das Wort
            «{plain}» benötigt {plain.length} Byte = {plain.length * 8} Bit
            Speicher.
          </div>
        </div>
      )}

      {/* ── Tab: XOR ── */}
      {activeTab === "xor" && chars.length > 0 && (
        <div className={style.tabContent}>
          <p className={style.explain}>
            Das <strong>XOR-Verfahren</strong> (
            <span className={style.xorSymbol}>⊕</span>) arbeitet bitweise: Sind
            zwei Bits <em>gleich</em> → 0, sind sie <em>verschieden</em> → 1.
            Jedes Bit des Klartexts wird mit dem entsprechenden Bit des
            Schlüssels verknüpft.
          </p>

          <div className={style.xorRulebox}>
            <span>0 ⊕ 0 = 0</span>
            <span>1 ⊕ 1 = 0</span>
            <span>0 ⊕ 1 = 1</span>
            <span>1 ⊕ 0 = 1</span>
          </div>

          <div className={style.scrollBox}>
            <div className={style.columns}>
              {chars.map((c, i) => (
                <div key={i} className={style.col}>
                  <div className={style.colChar}>{c.plain}</div>
                  <BinByte value={c.pBin} color="plain" />
                  <div className={style.xorSign}>⊕</div>
                  <div className={style.colChar}>{c.keyChar}</div>
                  <BinByte value={c.kBin} color="key" />
                  <div className={style.divider} />
                  <BinByte value={c.eBin} color="cipher" />
                  <div
                    className={`${style.colCharOut} ${!c.printable ? style.nonPrint : ""}`}>
                    {c.printable ? String.fromCharCode(c.eCode) : "·"}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={style.resultRow}>
            <span className={style.resultLabel}>Geheimtext (Bytes):</span>
            <span className={style.resultBytes}>
              {chars
                .map((c) => c.eCode.toString(16).padStart(2, "0"))
                .join(" ")}
            </span>
          </div>

          <div className={style.aesBridge}>
            <div className={style.aesBridgeTitle}>Von XOR zu AES</div>
            <p>
              Das XOR-Verfahren allein ist unsicher: Wird derselbe Schlüssel
              zweimal verwendet, kann ein Angreifer den Klartext rekonstruieren.
              Kurze oder einfache Schlüssel lassen sich leicht erraten.
            </p>
            <p>
              <strong>AES (Advanced Encryption Standard)</strong> — der
              weltweite Standard für symmetrische Verschlüsselung — baut auf XOR
              auf, wendet es aber in <strong>10 bis 14 Runden</strong> an und
              kombiniert es mit:{" "}
            </p>
            <ul className={style.aesList}>
              <li>
                <span className={style.aesTerm}>SubBytes</span> — jedes Byte
                wird durch eine feste Tabelle ersetzt (wie Caesar, aber für
                Bytes)
              </li>
              <li>
                <span className={style.aesTerm}>ShiftRows</span> — Bytes werden
                innerhalb von Zeilen verschoben
              </li>
              <li>
                <span className={style.aesTerm}>MixColumns</span> — Spalten
                werden mathematisch gemischt
              </li>
              <li>
                <span className={style.aesTerm}>AddRoundKey</span> — XOR mit
                einem Rundenschlüssel (aus dem eigentlichen Schlüssel
                abgeleitet)
              </li>
            </ul>
            <p>
              Das Ergebnis: 2<sup>128</sup> mögliche Schlüssel — kein Computer
              der Welt kann alle durchprobieren. Dennoch ist die Grundoperation
              immer dasselbe einfache XOR.
            </p>
          </div>
        </div>
      )}

      {chars.length === 0 && (
        <div className={style.empty}>
          Bitte Klartext und Schlüssel eingeben.
        </div>
      )}
    </div>
  )
}

// ── Sub-component: coloured binary byte ──────────────────

function BinByte({ value, color }) {
  const cls =
    color === "plain"
      ? style.binPlain
      : color === "key"
        ? style.binKey
        : color === "cipher"
          ? style.binCipher
          : style.binNeutral

  return (
    <span className={`${style.bin8} ${cls}`}>
      <span className={style.nibble}>{value.slice(0, 4)}</span>
      <span className={style.nibbleSep} />
      <span className={style.nibble}>{value.slice(4)}</span>
    </span>
  )
}
