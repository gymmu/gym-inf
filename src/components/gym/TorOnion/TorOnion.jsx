import style from "./TorOnion.module.css";

const NODES = [
  { label: "Absender", name: "Sie", cls: style.you },
  { label: "Entry Node", name: "Knoten 1", cls: style.entry },
  { label: "Middle Node", name: "Knoten 2", cls: style.middle },
  { label: "Exit Node", name: "Knoten 3", cls: style.exit },
  { label: "Ziel", name: "Webseite", cls: style.dest },
];

const KNOWLEDGE = [
  {
    node: "Entry Node",
    cls: style.entry,
    knows: "Ihre echte IP-Adresse",
    notKnows: "das Ziel (Webseite)",
  },
  {
    node: "Middle Node",
    cls: style.middle,
    knows: "Entry Node & Exit Node",
    notKnows: "weder Sie noch das Ziel",
  },
  {
    node: "Exit Node",
    cls: style.exit,
    knows: "das Ziel (Webseite)",
    notKnows: "Ihre echte IP-Adresse",
  },
];

export default function TorOnion() {
  return (
    <div className={style.container}>
      <div className={style.path}>
        {NODES.map((n, i) => (
          <>
            <div key={n.name} className={`${style.node} ${n.cls}`}>
              <div className={style.nodeLabel}>{n.label}</div>
              <div className={style.nodeName}>{n.name}</div>
            </div>
            {i < NODES.length - 1 && (
              <span key={`arr-${i}`} className={style.arrow}>
                →
              </span>
            )}
          </>
        ))}
      </div>

      <div className={style.knowledgeGrid}>
        {KNOWLEDGE.map((k) => (
          <div key={k.node} className={style.knowledgeRow}>
            <span className={`${style.knowledgeNode} ${k.cls}`}>{k.node}</span>
            <span>
              <span className={style.knows}>kennt: {k.knows}</span>
              {" · "}
              <span className={style.notKnows}>nicht: {k.notKnows}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
