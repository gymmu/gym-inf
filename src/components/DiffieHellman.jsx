import style from "@components/DiffieHellman.module.css";

// Gemeinsame Parameter für alle Schritte
const p = 23; // Primzahl
const g = 5; // Generator
const a = 6; // Alices Geheimzahl
const b = 15; // Bobs Geheimzahl

// Hilfsfunktion für modulare Potenzierung (effizient für große Zahlen)
function modPow(base, exponent, modulus) {
  if (modulus === 1) return 0;
  let result = 1;
  base = base % modulus;
  while (exponent > 0) {
    if (exponent % 2 === 1) {
      result = (result * base) % modulus;
    }
    exponent = Math.floor(exponent / 2);
    base = (base * base) % modulus;
  }
  return result;
}

// Hilfsfunktion für Schweizer Zahlenformat (mit Leerzeichen als Tausendertrennzeichen)
function formatNumberCH(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
}

export function DH1() {
  return (
    <div className={style.dhContainer}>
      <div className={style.dhGrid}>
        {/* Alice Spalte */}
        <div className={style.party}>
          <h3 className={style.partyName}>Alice</h3>
          <div className={style.values}>
            <div className={`${style.valueBox} ${style.secret}`}>
              <span className={style.label}>Geheimzahl</span>
              <span className={style.variable}>a</span>
              <span className={style.value}>{a}</span>
            </div>
          </div>
        </div>

        {/* Public/Mitte Spalte */}
        <div className={style.public}>
          <h3 className={style.partyName}>Öffentlich</h3>
          <div className={style.values}>
            <div className={`${style.valueBox} ${style.publicValue}`}>
              <span className={style.label}>Primzahl</span>
              <span className={style.variable}>p</span>
              <span className={style.value}>{p}</span>
            </div>
            <div className={`${style.valueBox} ${style.publicValue}`}>
              <span className={style.label}>Generator</span>
              <span className={style.variable}>g</span>
              <span className={style.value}>{g}</span>
            </div>
          </div>
        </div>

        {/* Bob Spalte */}
        <div className={style.party}>
          <h3 className={style.partyName}>Bob</h3>
          <div className={style.values}>
            <div className={`${style.valueBox} ${style.secret}`}>
              <span className={style.label}>Geheimzahl</span>
              <span className={style.variable}>b</span>
              <span className={style.value}>{b}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={style.explanation}>
        <p>
          <strong>Schritt 1: Initialisierung</strong>
        </p>
        <p>
          Alice und Bob einigen sich auf öffentliche Werte: die Primzahl{" "}
          <em>p = {p}</em> und den Generator <em>g = {g}</em>. Diese Werte
          können offen übertragen werden.
        </p>
        <p>
          Jede Partei wählt zusätzlich eine geheime Zahl: Alice wählt{" "}
          <em>a = {a}</em>, Bob wählt <em>b = {b}</em>. Diese Zahlen werden{" "}
          <strong>niemals</strong> übertragen.
        </p>
      </div>
    </div>
  );
}

export function DH2() {
  // Berechne öffentliche Werte
  const A = modPow(g, a, p); // A = g^a mod p = 5^6 mod 23
  const B = modPow(g, b, p); // B = g^b mod p = 5^15 mod 23

  // Für die Anzeige: zeige auch die "rohen" Werte vor Modulo
  const gPowA = Math.pow(g, a); // 5^6 = 15625
  const gPowB = Math.pow(g, b); // 5^15 = 30517578125

  return (
    <div className={style.dhContainer}>
      <div className={style.dhGrid}>
        {/* Alice Spalte */}
        <div className={style.party}>
          <h3 className={style.partyName}>Alice</h3>
          <div className={style.values}>
            <div className={`${style.valueBox} ${style.secret}`}>
              <span className={style.label}>Geheimzahl</span>
              <span className={style.variable}>a</span>
              <span className={style.value}>{a}</span>
            </div>
            <div className={`${style.valueBox} ${style.computed}`}>
              <span className={style.label}>Berechnet</span>
              <span className={style.calculation}>
                A = g<sup>a</sup> mod p
              </span>
              <span className={style.calculation}>
                = {g}
                <sup>{a}</sup> mod {p}
              </span>
              <span className={style.calculation}>
                = {formatNumberCH(gPowA)} mod {p}
              </span>
              <span className={style.variable}>A</span>
              <span className={style.value}>{A}</span>
            </div>
          </div>
        </div>

        {/* Public/Mitte Spalte */}
        <div className={style.public}>
          <h3 className={style.partyName}>Öffentlich</h3>
          <div className={style.values}>
            <div className={`${style.valueBox} ${style.publicValue}`}>
              <span className={style.label}>Primzahl</span>
              <span className={style.variable}>p</span>
              <span className={style.value}>{p}</span>
            </div>
            <div className={`${style.valueBox} ${style.publicValue}`}>
              <span className={style.label}>Generator</span>
              <span className={style.variable}>g</span>
              <span className={style.value}>{g}</span>
            </div>
          </div>
        </div>

        {/* Bob Spalte */}
        <div className={style.party}>
          <h3 className={style.partyName}>Bob</h3>
          <div className={style.values}>
            <div className={`${style.valueBox} ${style.secret}`}>
              <span className={style.label}>Geheimzahl</span>
              <span className={style.variable}>b</span>
              <span className={style.value}>{b}</span>
            </div>
            <div className={`${style.valueBox} ${style.computed}`}>
              <span className={style.label}>Berechnet</span>
              <span className={style.calculation}>
                B = g<sup>b</sup> mod p
              </span>
              <span className={style.calculation}>
                = {g}
                <sup>{b}</sup> mod {p}
              </span>
              <span className={style.calculation}>
                = {formatNumberCH(gPowB)} mod {p}
              </span>
              <span className={style.variable}>B</span>
              <span className={style.value}>{B}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={style.explanation}>
        <p>
          <strong>Schritt 2: Berechnung der öffentlichen Werte</strong>
        </p>
        <p>
          Alice berechnet: A = g<sup>a</sup> mod p = {g}
          <sup>{a}</sup> mod {p} = {formatNumberCH(gPowA)} mod {p} ={" "}
          <strong>{A}</strong>
        </p>
        <p>
          Bob berechnet: B = g<sup>b</sup> mod p = {g}
          <sup>{b}</sup> mod {p} = {formatNumberCH(gPowB)} mod {p} ={" "}
          <strong>{B}</strong>
        </p>
        <p>
          Diese berechneten Werte <em>A</em> und <em>B</em> sind{" "}
          <strong>öffentlich</strong> und können über das unverschlüsselte
          Netzwerk ausgetauscht werden. Die Modulo-Operation sorgt dafür, dass
          aus diesen Werten nicht auf die geheimen Zahlen <em>a</em> und{" "}
          <em>b</em> zurückgeschlossen werden kann.
        </p>
      </div>
    </div>
  );
}
