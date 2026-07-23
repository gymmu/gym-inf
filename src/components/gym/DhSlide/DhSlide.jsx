import katex from "katex";
import "katex/dist/katex.css";
import { useEffect, useRef, useState } from "react";
import s from "./DhSlide.module.css";

// -- local KaTeX helpers (re-render on content change) --------------------

function Tex({ children, display = false }) {
  const el = useRef(null);
  useEffect(() => {
    if (!el.current) return;
    katex.render(children, el.current, {
      throwOnError: false,
      displayMode: display,
    });
  }, [children, display]);
  return display ? (
    <div ref={el} className={s.displayMath} />
  ) : (
    <span ref={el} className={s.inlineMath} />
  );
}

// -- math helpers ---------------------------------------------------------

function modPow(base, exp, mod) {
  if (mod === 1) return 0;
  let result = 1;
  base = base % mod;
  while (exp > 0) {
    if (exp % 2 === 1) result = (result * base) % mod;
    exp = Math.floor(exp / 2);
    base = (base * base) % mod;
  }
  return result;
}

function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) if (n % i === 0) return false;
  return true;
}

function primeFactors(n) {
  const factors = new Set();
  for (let d = 2; d * d <= n; d++) {
    while (n % d === 0) {
      factors.add(d);
      n = Math.floor(n / d);
    }
  }
  if (n > 1) factors.add(n);
  return factors;
}

function isPrimitiveRoot(g, p) {
  if (!isPrime(p)) return false;
  const order = p - 1;
  for (const f of primeFactors(order))
    if (modPow(g, order / f, p) === 1) return false;
  return true;
}

function findNextPrime(n) {
  let c = n % 2 === 0 ? n + 1 : n + 2;
  while (!isPrime(c)) c += 2;
  return c;
}

function findGenerator(p) {
  if (!isPrime(p)) return null;
  for (let g = 2; g < p; g++) if (isPrimitiveRoot(g, p)) return g;
  return null;
}

function orderOf(g, p) {
  let val = 1;
  for (let k = 1; k < p; k++) {
    val = (val * g) % p;
    if (val === 1) return k;
  }
  return p - 1;
}

function useNumberInput(defaultValue) {
  const [raw, setRaw] = useState(String(defaultValue));
  const parsed = parseInt(raw, 10);
  const valid = !isNaN(parsed) && parsed === Number(raw);
  return { raw, setRaw, value: valid ? parsed : NaN };
}

function invalidReason(
  pValid,
  gValid,
  aValid,
  bValid,
  p,
  g,
  pRaw,
  gRaw,
  aRaw,
  bRaw,
) {
  const pNum = parseInt(pRaw, 10);
  const gNum = parseInt(gRaw, 10);
  const aNum = parseInt(aRaw, 10);
  const bNum = parseInt(bRaw, 10);
  if (!pValid) {
    if (isNaN(pNum) || pNum < 2) return "p muss eine ganze Zahl >= 2 sein.";
    if (pNum < 5) return "p muss mindestens 5 sein.";
    return `${pNum} ist keine Primzahl. Versuche z.B. ${findNextPrime(pNum)}.`;
  }
  if (!gValid) {
    if (isNaN(gNum) || gNum < 2) return "g muss eine ganze Zahl >= 2 sein.";
    if (gNum >= p) return `g muss kleiner als p (${p}) sein.`;
    return `g = ${gNum} ist kein gueltiger Generator fuer p = ${p}. Versuche g = ${findGenerator(p)}.`;
  }
  if (!aValid) {
    if (isNaN(aNum) || aNum < 2) return "a muss eine ganze Zahl >= 2 sein.";
    return `a muss kleiner als p-1 = ${p - 1} sein.`;
  }
  if (!bValid) {
    if (isNaN(bNum) || bNum < 2) return "b muss eine ganze Zahl >= 2 sein.";
    return `b muss kleiner als p-1 = ${p - 1} sein.`;
  }
  return "Ungueltige Eingabe.";
}

// -- component ------------------------------------------------------------

export default function DhSlide() {
  const pField = useNumberInput(23);
  const gField = useNumberInput(5);
  const aField = useNumberInput(6);
  const bField = useNumberInput(15);

  const p = pField.value;
  const g = gField.value;
  const a = aField.value;
  const b = bField.value;

  const pValid = !isNaN(p) && isPrime(p) && p >= 5;
  const gValid = !isNaN(g) && g >= 2 && g < p && isPrimitiveRoot(g, p);
  const aValid = !isNaN(a) && a >= 2 && a < p - 1;
  const bValid = !isNaN(b) && b >= 2 && b < p - 1;
  const ready = pValid && gValid && aValid && bValid;

  const lastValid = useRef(null);
  if (ready) {
    const A = modPow(g, a, p);
    const B = modPow(g, b, p);
    lastValid.current = { p, g, a, b, A, B, K: modPow(B, a, p) };
  }
  const d = lastValid.current;

  return (
    <div className={s.root}>
      {/* -- inputs -- */}
      <div className={s.inputs}>
        <InputField
          label="p"
          desc="Primzahl (oeffentlich)"
          field={pField}
          valid={pValid}
        />
        <InputField
          label="g"
          desc="Generator (oeffentlich)"
          field={gField}
          valid={gValid}
        />
        <div className={s.inputDivider} />
        <InputField
          label="a"
          desc="Alices Geheimzahl"
          field={aField}
          valid={aValid}
          color="var(--c-alice)"
        />
        <InputField
          label="b"
          desc="Bobs Geheimzahl"
          field={bField}
          valid={bValid}
          color="var(--c-bob)"
        />
      </div>

      {/* -- main content -- */}
      <div className={s.resultWrapper}>
        <div className={`${s.content} ${!ready ? s.stale : ""}`}>
          {d && (
            <>
              <div className={s.flow}>
                {/* Alice */}
                <PersonBox
                  color="var(--c-alice)"
                  name="Alice"
                  borderClass={s.aliceBox}
                >
                  <Section label="Geheimzahl" secret color="var(--c-alice)">
                    <Tex>{`a = ${d.a}`}</Tex>
                  </Section>
                  <Section label="Oeffentlichen Wert berechnen">
                    <Tex display>{`A = g^{a} \\bmod p`}</Tex>
                    <Tex display>{`= ${d.g}^{${d.a}} \\bmod ${d.p}`}</Tex>
                    <Tex display>{`= ${d.A}`}</Tex>
                  </Section>
                  <div className={s.divider} />
                  <Section label="Empfaengt von Bob">
                    <Tex>{`B = ${d.B}`}</Tex>
                  </Section>
                  <Section label="Gemeinsamen Schluessel berechnen" shared>
                    <Tex display>{`K = B^{a} \\bmod p`}</Tex>
                    <Tex display>{`= ${d.B}^{${d.a}} \\bmod ${d.p}`}</Tex>
                    <Tex display>{`= ${d.K}`}</Tex>
                  </Section>
                </PersonBox>

                {/* Channel */}
                <div className={s.channel}>
                  <div className={s.channelTitle}>Oeffentlicher Kanal</div>

                  <div className={s.sendBlock}>
                    <div
                      className={s.sendTag}
                      style={{
                        background: "var(--c-alice)",
                        color: "#1d2021",
                      }}
                    >
                      Alice sendet A
                    </div>
                    <div className={s.sendValue}>
                      <Tex>{`A = ${d.A}`}</Tex>
                    </div>
                    <Arrow dir="right" color="var(--c-alice)" />
                  </div>

                  <div className={s.channelDivider} />

                  <div className={s.sendBlock}>
                    <div
                      className={s.sendTag}
                      style={{ background: "var(--c-bob)", color: "#1d2021" }}
                    >
                      Bob sendet B
                    </div>
                    <div className={s.sendValue}>
                      <Tex>{`B = ${d.B}`}</Tex>
                    </div>
                    <Arrow dir="left" color="var(--c-bob)" />
                  </div>

                  <div className={s.channelDivider} />

                  <div className={s.eveBox}>
                    <div className={s.eveTag}>&#128373; Eve sieht</div>
                    <div className={s.eveValues}>
                      <Tex>{`p=${d.p},\\;g=${d.g}`}</Tex>
                    </div>
                    <div className={s.eveValues}>
                      <Tex>{`A=${d.A},\\;B=${d.B}`}</Tex>
                    </div>
                    <div className={s.eveLock}>K = ? &#128274;</div>
                  </div>
                </div>

                {/* Bob */}
                <PersonBox
                  color="var(--c-bob)"
                  name="Bob"
                  borderClass={s.bobBox}
                >
                  <Section label="Geheimzahl" secret color="var(--c-bob)">
                    <Tex>{`b = ${d.b}`}</Tex>
                  </Section>
                  <Section label="Oeffentlichen Wert berechnen">
                    <Tex display>{`B = g^{b} \\bmod p`}</Tex>
                    <Tex display>{`= ${d.g}^{${d.b}} \\bmod ${d.p}`}</Tex>
                    <Tex display>{`= ${d.B}`}</Tex>
                  </Section>
                  <div className={s.divider} />
                  <Section label="Empfaengt von Alice">
                    <Tex>{`A = ${d.A}`}</Tex>
                  </Section>
                  <Section label="Gemeinsamen Schluessel berechnen" shared>
                    <Tex display>{`K = A^{b} \\bmod p`}</Tex>
                    <Tex display>{`= ${d.A}^{${d.b}} \\bmod ${d.p}`}</Tex>
                    <Tex display>{`= ${modPow(d.A, d.b, d.p)}`}</Tex>
                  </Section>
                </PersonBox>
              </div>

              {/* shared key banner */}
              <div className={s.result}>
                <span className={s.resultLabel}>Gemeinsamer Schluessel:</span>
                <span className={s.sharedKey}>
                  <Tex>{`K = ${d.K}`}</Tex>
                </span>
                <span className={s.resultNote}>— wurde nie uebertragen</span>
              </div>
            </>
          )}
        </div>

        {!ready && d && (
          <div className={s.overlay}>
            <span className={s.overlayIcon}>!</span>
            <span>
              {invalidReason(
                pValid,
                gValid,
                aValid,
                bValid,
                p,
                g,
                pField.raw,
                gField.raw,
                aField.raw,
                bField.raw,
              )}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

// -- sub-components -------------------------------------------------------

function InputField({ label, desc, field, valid, color }) {
  return (
    <div className={s.inputGroup}>
      <div className={s.inputMeta}>
        <span className={s.varName} style={color ? { color } : undefined}>
          {label}
        </span>
        <span className={s.varDesc}>{desc}</span>
      </div>
      <input
        className={`${s.input} ${!valid ? s.inputErr : ""}`}
        type="number"
        value={field.raw}
        onChange={(e) => field.setRaw(e.target.value)}
      />
    </div>
  );
}

function PersonBox({ color, name, borderClass, children }) {
  return (
    <div className={`${s.person} ${borderClass}`}>
      <div
        className={s.personHeader}
        style={{ color, borderBottomColor: color + "55" }}
      >
        {name}
      </div>
      <div className={s.personBody}>{children}</div>
    </div>
  );
}

function Section({ label, secret, shared, color, children }) {
  const labelStyle = {};
  if (secret && color) labelStyle.color = color;
  if (shared) labelStyle.color = "var(--c-shared)";
  return (
    <div
      className={`${s.section} ${secret ? s.secretSection : ""} ${shared ? s.sharedSection : ""}`}
    >
      <span className={s.sectionLabel} style={labelStyle}>
        {label}
      </span>
      <div className={s.sectionValue}>{children}</div>
    </div>
  );
}

function Arrow({ dir, color }) {
  // full-width horizontal arrow
  return (
    <div className={s.arrowRow} style={{ "--arrow-color": color }}>
      {dir === "right" ? (
        <svg viewBox="0 0 80 16" className={s.arrowSvg}>
          <line x1="0" y1="8" x2="72" y2="8" stroke={color} strokeWidth="2.5" />
          <polygon points="70,3 80,8 70,13" fill={color} />
        </svg>
      ) : (
        <svg viewBox="0 0 80 16" className={s.arrowSvg}>
          <line x1="80" y1="8" x2="8" y2="8" stroke={color} strokeWidth="2.5" />
          <polygon points="10,3 0,8 10,13" fill={color} />
        </svg>
      )}
    </div>
  );
}
