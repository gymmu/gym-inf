import { useEffect, useRef, useState, useCallback, useMemo } from "react"
import { createRoot } from "react-dom/client"
import { NodeEditor, ClassicPreset } from "rete"
import { AreaPlugin, AreaExtensions } from "rete-area-plugin"
import {
  ConnectionPlugin,
  Presets as ConnectionPresets,
} from "rete-connection-plugin"
import { ReactPlugin, Presets, useRete } from "rete-react-plugin"
import ClientOnly from "@components/ClientOnly"

// ─── Shared socket ────────────────────────────────────────────────────────────

const socket = new ClassicPreset.Socket("exec")

// ─── Custom labeled control ───────────────────────────────────────────────────

class LabeledControl extends ClassicPreset.Control {
  constructor({ label, type = "text", initial, readonly = false, options }) {
    super()
    this.label = label
    this.type = type
    this.value = initial
    this.readonly = readonly
    this.options = options
    this.onChange = null
  }
  setValue(v) {
    this.value = v
    if (this.onChange) this.onChange(v)
  }
}

function LabeledControlComponent({ data }) {
  const [val, setVal] = useState(data.value)
  useEffect(() => {
    setVal(data.value)
  }, [data.value])

  const inputStyle = {
    background: "#313244",
    border: "1px solid #45475a",
    borderRadius: "4px",
    color: "#cdd6f4",
    fontSize: "13px",
    padding: "3px 6px",
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
    cursor: data.readonly ? "default" : "text",
    opacity: data.readonly ? 0.55 : 1,
  }
  const labelStyle = {
    fontSize: "11px",
    color: "#a6adc8",
    marginBottom: "2px",
    display: "block",
    userSelect: "none",
  }
  const wrapStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    minWidth: "90px",
    padding: "2px 0",
  }

  function handleChange(e) {
    if (data.readonly) return
    const raw = e.target.value
    const v = data.type === "number" ? (raw === "" ? 0 : Number(raw)) : raw
    setVal(raw)
    data.setValue(v)
  }

  if (data.type === "select" && data.options) {
    return (
      <div style={wrapStyle}>
        <span style={labelStyle}>{data.label}</span>
        <select
          value={val}
          disabled={data.readonly}
          onChange={handleChange}
          onPointerDown={(e) => e.stopPropagation()}
          style={{
            ...inputStyle,
            cursor: data.readonly ? "default" : "pointer",
          }}>
          {data.options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
    )
  }
  return (
    <div style={wrapStyle}>
      <span style={labelStyle}>{data.label}</span>
      <input
        type={data.type === "number" ? "number" : "text"}
        value={val}
        readOnly={data.readonly}
        onChange={handleChange}
        onPointerDown={(e) => e.stopPropagation()}
        style={inputStyle}
      />
    </div>
  )
}

// ─── Node classes ─────────────────────────────────────────────────────────────

class StartNode extends ClassicPreset.Node {
  width = 160
  height = 80
  constructor() {
    super("Start")
    this.addOutput("out", new ClassicPreset.Output(socket, "→"))
  }
}

// EndNode: the terminal node — must be reached for a valid path
class EndNode extends ClassicPreset.Node {
  width = 160
  height = 80
  constructor() {
    super("Ende")
    this.addInput("in", new ClassicPreset.Input(socket, "→"))
  }
}

class MoveRightNode extends ClassicPreset.Node {
  width = 170
  height = 110
  constructor() {
    super("Rechts gehen")
    this.addInput("in", new ClassicPreset.Input(socket, "→"))
    this.addOutput("out", new ClassicPreset.Output(socket, "→"))
  }
}
class MoveLeftNode extends ClassicPreset.Node {
  width = 170
  height = 110
  constructor() {
    super("Links gehen")
    this.addInput("in", new ClassicPreset.Input(socket, "→"))
    this.addOutput("out", new ClassicPreset.Output(socket, "→"))
  }
}
class MoveUpNode extends ClassicPreset.Node {
  width = 170
  height = 110
  constructor() {
    super("Hoch gehen")
    this.addInput("in", new ClassicPreset.Input(socket, "→"))
    this.addOutput("out", new ClassicPreset.Output(socket, "→"))
  }
}
class MoveDownNode extends ClassicPreset.Node {
  width = 170
  height = 110
  constructor() {
    super("Runter gehen")
    this.addInput("in", new ClassicPreset.Input(socket, "→"))
    this.addOutput("out", new ClassicPreset.Output(socket, "→"))
  }
}

class LoopNode extends ClassicPreset.Node {
  width = 190
  height = 190
  constructor(times = 3) {
    super("Wiederhole")
    this.addInput("in", new ClassicPreset.Input(socket, "→"))
    this.addControl(
      "times",
      new LabeledControl({ label: "Anzahl", type: "number", initial: times }),
    )
    this.addOutput("body", new ClassicPreset.Output(socket, "Körper →"))
    this.addOutput("done", new ClassicPreset.Output(socket, "Fertig →"))
  }
  get times() {
    return Number(this.controls["times"].value) || 1
  }
}

class SetVarNode extends ClassicPreset.Node {
  width = 210
  height = 250
  constructor(varName = "i", value = 0, op = "set") {
    const nodeLabel =
      op === "inc"
        ? "Variable += 1"
        : op === "dec"
          ? "Variable -= 1"
          : "Variable setzen"
    super(nodeLabel)
    this.addInput("in", new ClassicPreset.Input(socket, "→"))
    this.addControl(
      "varName",
      new LabeledControl({
        label: "Variablenname",
        type: "text",
        initial: varName,
      }),
    )
    if (op === "set")
      this.addControl(
        "value",
        new LabeledControl({ label: "Wert", type: "number", initial: value }),
      )
    this.addControl(
      "op",
      new LabeledControl({
        label: "Operation",
        type: "text",
        initial: op === "inc" ? "+= 1" : op === "dec" ? "-= 1" : "= Wert",
        readonly: true,
      }),
    )
    this.addOutput("out", new ClassicPreset.Output(socket, "→"))
    this._op = op
    // Adjust height for inc/dec (one less control)
    if (op === "inc" || op === "dec") this.height = 200
  }
  get varName() {
    return String(this.controls["varName"].value || "i")
  }
  get value() {
    return Number(this.controls["value"]?.value ?? 0)
  }
  get op() {
    return this._op
  }
}

class IfNode extends ClassicPreset.Node {
  width = 210
  height = 280
  constructor(varName = "i", op = "<", limit = 5) {
    super("Wenn")
    this.addInput("in", new ClassicPreset.Input(socket, "→"))
    this.addControl(
      "varName",
      new LabeledControl({ label: "Variable", type: "text", initial: varName }),
    )
    this.addControl(
      "cmpOp",
      new LabeledControl({
        label: "Vergleich",
        type: "select",
        initial: op,
        options: ["<", "<=", ">", ">=", "==", "!="],
      }),
    )
    this.addControl(
      "limit",
      new LabeledControl({
        label: "Grenzwert",
        type: "number",
        initial: limit,
      }),
    )
    this.addOutput("wahr", new ClassicPreset.Output(socket, "Wahr →"))
    this.addOutput("fertig", new ClassicPreset.Output(socket, "Fertig →"))
  }
  get varName() {
    return String(this.controls["varName"].value || "i")
  }
  get cmpOp() {
    return String(this.controls["cmpOp"].value || "<")
  }
  get limit() {
    return Number(this.controls["limit"].value ?? 5)
  }
  evaluate(vars) {
    const val = vars[this.varName] ?? 0
    const lim = this.limit
    switch (this.cmpOp) {
      case "<":
        return val < lim
      case "<=":
        return val <= lim
      case ">":
        return val > lim
      case ">=":
        return val >= lim
      case "==":
        return val === lim
      case "!=":
        return val !== lim
      default:
        return val < lim
    }
  }
}

// ─── Sequence extraction ──────────────────────────────────────────────────────
// Returns { steps, reachesEnd }
// steps: { action, nodeId }[]
// reachesEnd: true if the EndNode is reached

const MAX_STEPS = 500

function extractSequence(editor) {
  const nodes = editor.getNodes()
  const connections = editor.getConnections()

  const nextMap = {}
  for (const c of connections) {
    if (!nextMap[c.source]) nextMap[c.source] = {}
    nextMap[c.source][c.sourceOutput] = c.target
  }

  const startNode = nodes.find((n) => n instanceof StartNode)
  const endNode = nodes.find((n) => n instanceof EndNode)
  if (!startNode) return { steps: [], reachesEnd: false }

  const nodeById = Object.fromEntries(nodes.map((n) => [n.id, n]))
  const steps = []
  const vars = {}
  const loopCounters = {}
  let reachesEnd = false

  // Start node is always the first visited step (action: null = no movement)
  steps.push({ action: null, nodeId: startNode.id })

  const stack = [nextMap[startNode.id]?.["out"]]

  while (stack.length > 0 && steps.length < MAX_STEPS) {
    const nodeId = stack.pop()
    if (!nodeId) continue
    const node = nodeById[nodeId]
    if (!node) continue

    // End node: add as final step, stop traversal
    if (endNode && nodeId === endNode.id) {
      steps.push({ action: null, nodeId })
      reachesEnd = true
      break
    }

    const outs = nextMap[nodeId] ?? {}

    if (node instanceof MoveRightNode) {
      steps.push({ action: "right", nodeId })
      stack.push(outs["out"])
    } else if (node instanceof MoveLeftNode) {
      steps.push({ action: "left", nodeId })
      stack.push(outs["out"])
    } else if (node instanceof MoveUpNode) {
      steps.push({ action: "up", nodeId })
      stack.push(outs["out"])
    } else if (node instanceof MoveDownNode) {
      steps.push({ action: "down", nodeId })
      stack.push(outs["out"])
    } else if (node instanceof LoopNode) {
      // LoopNode is visible as a step each time it's entered
      steps.push({ action: null, nodeId })
      if (loopCounters[nodeId] === undefined) loopCounters[nodeId] = 0
      const max = Math.min(node.times, 100)
      if (loopCounters[nodeId] < max) {
        loopCounters[nodeId]++
        stack.push(nodeId)
        stack.push(outs["body"])
      } else {
        loopCounters[nodeId] = 0
        stack.push(outs["done"])
      }
    } else if (node instanceof SetVarNode) {
      steps.push({ action: null, nodeId })
      const name = node.varName,
        op = node.op
      if (op === "inc") vars[name] = (vars[name] ?? 0) + 1
      else if (op === "dec") vars[name] = (vars[name] ?? 0) - 1
      else vars[name] = node.value
      stack.push(outs["out"])
    } else if (node instanceof IfNode) {
      steps.push({ action: null, nodeId })
      if (node.evaluate(vars)) stack.push(outs["wahr"])
      else stack.push(outs["fertig"])
    } else {
      stack.push(outs["out"])
    }
  }

  return { steps, reachesEnd }
}

// ─── Level definitions ────────────────────────────────────────────────────────
// Each level now always includes a "end" node and a connection to it.

const LEVELS = [
  {
    id: 1,
    title: "Level 1 – Einfacher Pfad",
    description:
      "Verbinde die Bewegungsknoten in der richtigen Reihenfolge, damit die Figur das Ziel erreicht.",
    hint: "Lösung: 6× Rechts → 2× Hoch → 1× Rechts → Ende.",
    allowLoop: false,
    grid: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 0, 2, 1],
      [1, 0, 1, 1, 0, 1, 1, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    playerStart: { col: 1, row: 4 },
    defaultNodes: [
      { type: "start", x: 20, y: 180 },
      { type: "right", x: 220, y: 180 },
      { type: "right", x: 420, y: 180 },
      { type: "right", x: 620, y: 180 },
      { type: "end", x: 820, y: 180 },
    ],
    defaultConnections: [
      [0, "out", 1, "in"],
      [1, "out", 2, "in"],
      [2, "out", 3, "in"],
      // End node connected to last node — students must route through it
      [3, "out", 4, "in"],
    ],
  },
  {
    id: 2,
    title: "Level 2 – Mit Schleife",
    description:
      'Nutze den "Wiederhole"-Knoten! Verbinde den Körper-Ausgang zur Aktion und zurück. Nach N Durchläufen geht es bei "Fertig →" weiter zum Ende.',
    hint: "Lösung: Wiederhole(6): Körper → Rechts → zurück. Fertig → Hoch → Hoch → Rechts → Ende.",
    allowLoop: true,
    allowVar: false,
    grid: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 1, 1, 0, 2, 1],
      [1, 0, 1, 1, 0, 1, 1, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    playerStart: { col: 1, row: 4 },
    defaultNodes: [
      { type: "start", x: 20, y: 200 },
      { type: "loop", times: 3, x: 240, y: 180 },
      { type: "right", x: 500, y: 100 },
      { type: "up", x: 500, y: 340 },
      { type: "up", x: 700, y: 340 },
      { type: "right", x: 900, y: 340 },
      { type: "end", x: 1100, y: 340 },
    ],
    defaultConnections: [
      [0, "out", 1, "in"],
      [1, "body", 2, "in"],
      [2, "out", 1, "in"],
      [1, "done", 3, "in"],
      [3, "out", 4, "in"],
      [4, "out", 5, "in"],
      [5, "out", 6, "in"],
    ],
  },
  {
    id: 3,
    title: "Level 3 – Variablen & Wenn",
    description:
      'Nutze Variablen und den "Wenn"-Knoten als Schleife. Verbinde "Wahr →" zurück zum Wenn-Knoten. "Fertig →" führt weiter zum Ende.',
    hint: "Lösung: i=0 → Wenn(i<4): Wahr → Rechts → i+=1 → zurück. Fertig → Hoch → Hoch → Rechts×3 → Ende.",
    allowLoop: false,
    allowVar: true,
    allowIf: true,
    grid: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
      [1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 2, 1],
      [1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    playerStart: { col: 1, row: 6 },
    defaultNodes: [
      { type: "start", x: 20, y: 220 },
      { type: "setvar", varName: "i", value: 0, op: "set", x: 220, y: 220 },
      { type: "if", varName: "i", cmpOp: "<", limit: 3, x: 460, y: 180 },
      { type: "right", x: 720, y: 80 },
      { type: "setvar", varName: "i", value: 0, op: "inc", x: 720, y: 240 },
      { type: "end", x: 460, y: 360 },
    ],
    defaultConnections: [
      [0, "out", 1, "in"],
      [1, "out", 2, "in"],
      [2, "wahr", 3, "in"],
      [3, "out", 4, "in"],
      [4, "out", 2, "in"],
      [2, "fertig", 5, "in"],
    ],
  },
]

// ─── Rete editor factory ──────────────────────────────────────────────────────

function makeCreateEditor(levelConfig, onDeleteNode) {
  return async function createEditor(container) {
    const editor = new NodeEditor()
    const area = new AreaPlugin(container)
    const connection = new ConnectionPlugin()
    const render = new ReactPlugin({ createRoot })

    render.addPreset(
      Presets.classic.setup({
        customize: {
          control(data) {
            if (data.payload instanceof LabeledControl)
              return LabeledControlComponent
            return null
          },
        },
      }),
    )
    connection.addPreset(ConnectionPresets.classic.setup())

    editor.use(area)
    area.use(render)
    area.use(connection)

    AreaExtensions.selectableNodes(area, AreaExtensions.selector(), {
      accumulating: AreaExtensions.accumulateOnCtrl(),
    })
    AreaExtensions.simpleNodesOrder(area)

    // Build default nodes
    const builtNodes = []
    for (const nd of levelConfig.defaultNodes) {
      let node
      if (nd.type === "start") node = new StartNode()
      else if (nd.type === "end") node = new EndNode()
      else if (nd.type === "right") node = new MoveRightNode()
      else if (nd.type === "left") node = new MoveLeftNode()
      else if (nd.type === "up") node = new MoveUpNode()
      else if (nd.type === "down") node = new MoveDownNode()
      else if (nd.type === "loop") node = new LoopNode(nd.times ?? 3)
      else if (nd.type === "setvar")
        node = new SetVarNode(nd.varName ?? "i", nd.value ?? 0, nd.op ?? "set")
      else if (nd.type === "if")
        node = new IfNode(nd.varName ?? "i", nd.cmpOp ?? "<", nd.limit ?? 5)
      builtNodes.push(node)
      await editor.addNode(node)
      await area.translate(node.id, { x: nd.x, y: nd.y })
    }

    for (const [fi, fp, ti, tp] of levelConfig.defaultConnections) {
      await editor.addConnection(
        new ClassicPreset.Connection(builtNodes[fi], fp, builtNodes[ti], tp),
      )
    }

    // Delete selected nodes on Backspace/Delete (not Start/End)
    function handleKeyDown(e) {
      if (e.key !== "Delete" && e.key !== "Backspace") return
      const tag = document.activeElement?.tagName
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return
      onDeleteNode(editor, area)
    }
    container.addEventListener("keydown", handleKeyDown)
    container.setAttribute("tabindex", "0")

    AreaExtensions.zoomAt(area, editor.getNodes())

    return {
      editor,
      area,
      destroy: () => {
        container.removeEventListener("keydown", handleKeyDown)
        area.destroy()
      },
    }
  }
}

// ─── Helper: get view centre in canvas coordinates ───────────────────────────

function getViewCentre(area, container) {
  const t = area.area.transform
  const w = container.clientWidth
  const h = container.clientHeight
  return {
    x: (-t.x + w / 2) / t.k,
    y: (-t.y + h / 2) / t.k,
  }
}

// ─── Helper: delete node + its connections (not Start/End) ───────────────────

async function deleteNode(editor, area, nodeId) {
  const node = editor.getNode(nodeId)
  if (!node) return
  // Protect Start and End nodes from deletion
  if (node instanceof StartNode || node instanceof EndNode) return
  const conns = editor
    .getConnections()
    .filter((c) => c.source === nodeId || c.target === nodeId)
  for (const c of conns) await editor.removeConnection(c.id)
  await editor.removeNode(nodeId)
}

// ─── Phaser renderer ──────────────────────────────────────────────────────────

const TILE = 52

// Returns { game, stepForward, setAutoPlay }
// startPaused: if true, pauses immediately before the first step
// isBreakpoint(nodeId): returns true if execution should auto-pause at that node
async function launchPhaser(
  container,
  levelConfig,
  steps,
  { onStep, onResult, isBreakpoint },
  startPaused = false,
) {
  const Phaser = (await import("phaser")).default

  const grid = levelConfig.grid
  const COLS = grid[0].length
  const ROWS = grid.length
  const W = COLS * TILE
  const H = ROWS * TILE
  const { col: startCol, row: startRow } = levelConfig.playerStart

  let gateResolve = null
  let autoPlay = !startPaused

  function stepForward() {
    if (gateResolve) {
      const res = gateResolve
      gateResolve = null
      res()
    }
  }

  function setAutoPlay(val) {
    autoPlay = val
    if (val && gateResolve) stepForward()
  }

  function waitForGate() {
    return new Promise((resolve) => {
      gateResolve = resolve
    })
  }

  class GameScene extends Phaser.Scene {
    constructor() {
      super("GameScene")
    }

    create() {
      this.cameras.main.setBackgroundColor("#1e1e2e")

      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const x = c * TILE,
            y = r * TILE
          const cell = grid[r][c]
          const gfx = this.add.graphics()
          if (cell === 1) {
            gfx.fillStyle(0x45475a)
            gfx.fillRect(x + 2, y + 2, TILE - 4, TILE - 4)
            gfx.fillStyle(0x585b70, 0.5)
            gfx.fillRect(x + 2, y + 2, TILE - 4, 3)
            gfx.fillRect(x + 2, y + 2, 3, TILE - 4)
          } else if (cell === 2) {
            gfx.fillStyle(0xa6e3a1, 0.25)
            gfx.fillRect(x + 2, y + 2, TILE - 4, TILE - 4)
            this.add
              .text(x + TILE / 2, y + TILE / 2, "🏁", { fontSize: "26px" })
              .setOrigin(0.5)
          } else {
            gfx.fillStyle(0x313244)
            gfx.fillRect(x + 2, y + 2, TILE - 4, TILE - 4)
          }
        }
      }

      const gridGfx = this.add.graphics()
      gridGfx.lineStyle(1, 0x45475a, 0.3)
      for (let r = 0; r <= ROWS; r++) {
        gridGfx.moveTo(0, r * TILE)
        gridGfx.lineTo(W, r * TILE)
      }
      for (let c = 0; c <= COLS; c++) {
        gridGfx.moveTo(c * TILE, 0)
        gridGfx.lineTo(c * TILE, H)
      }
      gridGfx.strokePath()

      this.playerCol = startCol
      this.playerRow = startRow
      const px = startCol * TILE + TILE / 2
      const py = startRow * TILE + TILE / 2

      this.playerGfx = this.add.graphics()
      this.drawPlayer(this.playerGfx)
      this.playerGfx.x = px
      this.playerGfx.y = py

      this.playerLabel = this.add
        .text(px, py, "Du", {
          fontSize: "11px",
          color: "#1e1e2e",
          fontStyle: "bold",
        })
        .setOrigin(0.5)

      this.stepText = this.add
        .text(W / 2, 10, steps.length > 0 ? `0 / ${steps.length}` : "", {
          fontSize: "12px",
          color: "#6c7086",
          backgroundColor: "#1e1e2e",
          padding: { x: 6, y: 2 },
        })
        .setOrigin(0.5, 0)

      this.steps = steps
      this.stepIndex = 0

      if (steps.length === 0) {
        this.showMessage("Keine Schritte – verbinde die Knoten!", "#fab387")
        onResult("empty")
        return
      }

      // Small delay then start (gate will block immediately if startPaused)
      this.time.delayedCall(300, () => this.runNextStep())
    }

    drawPlayer(gfx) {
      gfx.clear()
      gfx.fillStyle(0xcba6f7)
      gfx.fillCircle(0, 4, TILE / 2 - 8)
      gfx.fillStyle(0xf5c2e7)
      gfx.fillCircle(0, -TILE / 4 + 2, TILE / 4 - 1)
      gfx.fillStyle(0x1e1e2e)
      gfx.fillCircle(-4, -TILE / 4 + 1, 2)
      gfx.fillCircle(4, -TILE / 4 + 1, 2)
    }

    async runNextStep() {
      if (this.stepIndex >= this.steps.length) {
        this.checkGoal()
        return
      }

      const { action, nodeId } = this.steps[this.stepIndex]
      this.stepIndex++

      // Highlight node + update counter BEFORE the gate
      onStep(nodeId, this.stepIndex)
      this.stepText.setText(`${this.stepIndex} / ${this.steps.length}`)

      // Auto-pause on breakpoint (regardless of autoPlay)
      if (isBreakpoint && isBreakpoint(nodeId) && autoPlay) {
        autoPlay = false
        onStep(nodeId, this.stepIndex) // re-notify so React can set paused state
      }

      // Wait when paused — node is highlighted, player hasn't moved yet
      if (!autoPlay) {
        await waitForGate()
      }

      // action: null means this node has no movement (Start, End, SetVar, If, Loop)
      // For End node (last step) — after gate resolves, trigger checkGoal
      if (action === null) {
        // Small pause so highlight is visible before moving on
        this.time.delayedCall(autoPlay ? 60 : 20, () => this.runNextStep())
        return
      }

      const deltas = { right: [1, 0], left: [-1, 0], up: [0, -1], down: [0, 1] }
      const [dc, dr] = deltas[action] ?? [0, 0]
      const newCol = this.playerCol + dc
      const newRow = this.playerRow + dr

      if (
        newRow < 0 ||
        newRow >= grid.length ||
        newCol < 0 ||
        newCol >= grid[0].length ||
        grid[newRow][newCol] === 1
      ) {
        this.tweens.add({
          targets: [this.playerGfx, this.playerLabel, this.stepText],
          x: `+=${action === "left" ? -8 : 8}`,
          duration: 50,
          yoyo: true,
          repeat: 3,
          onComplete: () => {
            this.showMessage("Gegen eine Wand gelaufen! 🧱", "#f38ba8")
            onResult("wall")
          },
        })
        return
      }

      this.playerCol = newCol
      this.playerRow = newRow
      const tx = newCol * TILE + TILE / 2
      const ty = newRow * TILE + TILE / 2

      this.tweens.add({
        targets: [this.playerGfx, this.playerLabel],
        x: tx,
        y: ty,
        duration: autoPlay ? 280 : 180,
        ease: "Power2",
        onComplete: () => {
          this.time.delayedCall(autoPlay ? 80 : 20, () => this.runNextStep())
        },
      })
    }

    checkGoal() {
      if (grid[this.playerRow][this.playerCol] === 2) {
        this.showMessage("Ziel erreicht! 🎉", "#a6e3a1")
        onResult("win")
      } else {
        this.showMessage(
          "Noch nicht am Ziel – versuch es nochmal! 🤔",
          "#fab387",
        )
        onResult("miss")
      }
    }

    showMessage(text, color) {
      this.add
        .text(W / 2, H - 20, text, {
          fontSize: "14px",
          color,
          fontStyle: "bold",
          backgroundColor: "#181825",
          padding: { x: 10, y: 4 },
        })
        .setOrigin(0.5, 1)
    }
  }

  const game = new Phaser.Game({
    type: Phaser.AUTO,
    width: W,
    height: H,
    parent: container,
    backgroundColor: "#1e1e2e",
    scene: [GameScene],
    scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
    render: { antialias: true },
  })

  return { game, stepForward, setAutoPlay }
}

// ─── Preview Phaser (no steps, just grid + player) ───────────────────────────

async function launchPreview(container, levelConfig) {
  const Phaser = (await import("phaser")).default
  const grid = levelConfig.grid
  const COLS = grid[0].length,
    ROWS = grid.length
  const W = COLS * TILE,
    H = ROWS * TILE
  const { col: startCol, row: startRow } = levelConfig.playerStart

  class PreviewScene extends Phaser.Scene {
    constructor() {
      super("PreviewScene")
    }
    create() {
      this.cameras.main.setBackgroundColor("#1e1e2e")
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const x = c * TILE,
            y = r * TILE
          const cell = grid[r][c]
          const gfx = this.add.graphics()
          if (cell === 1) {
            gfx.fillStyle(0x45475a)
            gfx.fillRect(x + 2, y + 2, TILE - 4, TILE - 4)
            gfx.fillStyle(0x585b70, 0.5)
            gfx.fillRect(x + 2, y + 2, TILE - 4, 3)
            gfx.fillRect(x + 2, y + 2, 3, TILE - 4)
          } else if (cell === 2) {
            gfx.fillStyle(0xa6e3a1, 0.25)
            gfx.fillRect(x + 2, y + 2, TILE - 4, TILE - 4)
            this.add
              .text(x + TILE / 2, y + TILE / 2, "🏁", { fontSize: "26px" })
              .setOrigin(0.5)
          } else {
            gfx.fillStyle(0x313244)
            gfx.fillRect(x + 2, y + 2, TILE - 4, TILE - 4)
          }
        }
      }
      const gridGfx = this.add.graphics()
      gridGfx.lineStyle(1, 0x45475a, 0.3)
      for (let r = 0; r <= ROWS; r++) {
        gridGfx.moveTo(0, r * TILE)
        gridGfx.lineTo(W, r * TILE)
      }
      for (let c = 0; c <= COLS; c++) {
        gridGfx.moveTo(c * TILE, 0)
        gridGfx.lineTo(c * TILE, H)
      }
      gridGfx.strokePath()
      const px = startCol * TILE + TILE / 2,
        py = startRow * TILE + TILE / 2
      const gfx = this.add.graphics()
      gfx.fillStyle(0xcba6f7)
      gfx.fillCircle(0, 4, TILE / 2 - 8)
      gfx.fillStyle(0xf5c2e7)
      gfx.fillCircle(0, -TILE / 4 + 2, TILE / 4 - 1)
      gfx.fillStyle(0x1e1e2e)
      gfx.fillCircle(-4, -TILE / 4 + 1, 2)
      gfx.fillCircle(4, -TILE / 4 + 1, 2)
      gfx.x = px
      gfx.y = py
      this.add
        .text(px, py, "Du", {
          fontSize: "11px",
          color: "#1e1e2e",
          fontStyle: "bold",
        })
        .setOrigin(0.5)
    }
  }

  return new Phaser.Game({
    type: Phaser.AUTO,
    width: W,
    height: H,
    parent: container,
    backgroundColor: "#1e1e2e",
    scene: [PreviewScene],
    scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
    render: { antialias: true },
  })
}

// ─── UI helpers ───────────────────────────────────────────────────────────────

function NodeButton({ label, color, onClick, disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        background: disabled ? "#45475a" : color,
        border: "none",
        borderRadius: "6px",
        padding: "6px 12px",
        color: "#1e1e2e",
        fontWeight: "bold",
        fontSize: "13px",
        cursor: disabled ? "not-allowed" : "pointer",
        boxShadow: disabled ? "none" : "0 2px 4px rgba(0,0,0,0.3)",
        opacity: disabled ? 0.5 : 1,
      }}
      onMouseDown={(e) => {
        if (!disabled) e.currentTarget.style.transform = "scale(0.95)"
      }}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
      {label}
    </button>
  )
}

// ─── Node highlight (DOM-level, no re-render) ─────────────────────────────────

function useNodeHighlight(rete, activeNodeId) {
  const prevIdRef = useRef(null)
  useEffect(() => {
    if (!rete?.area) return
    if (prevIdRef.current) {
      const v = rete.area.nodeViews.get(prevIdRef.current)
      if (v?.element) {
        v.element.style.outline = ""
        v.element.style.boxShadow = ""
      }
    }
    if (activeNodeId) {
      const v = rete.area.nodeViews.get(activeNodeId)
      if (v?.element) {
        v.element.style.outline = "2px solid #cba6f7"
        v.element.style.boxShadow = "0 0 14px #cba6f799"
      }
    }
    prevIdRef.current = activeNodeId
  }, [rete, activeNodeId])
}

// ─── Breakpoint overlay (DOM-level) ──────────────────────────────────────────
// Injects a small ◆ button into each node's DOM element.
// Clicking it toggles the breakpoint for that node.

function useBreakpointOverlay(rete, breakpoints, onToggle) {
  useEffect(() => {
    if (!rete?.area || !rete?.editor) return

    const views = rete.area.nodeViews
    const nodes = rete.editor.getNodes()
    const cleanups = []

    for (const node of nodes) {
      const view = views.get(node.id)
      if (!view?.element) continue

      const el = view.element
      // Ensure the node element has relative positioning for the absolute button
      // Only set if not already positioned (avoid overriding Rete's own transform)
      const currentPos = window.getComputedStyle(el).position
      if (currentPos === "static") el.style.position = "relative"

      // Remove any existing BP button first
      el.querySelector(".__bp_btn")?.remove()

      const btn = document.createElement("button")
      btn.className = "__bp_btn"
      const active = breakpoints.has(node.id)
      btn.textContent = "◆"
      btn.title = active ? "Breakpoint entfernen" : "Breakpoint setzen"
      Object.assign(btn.style, {
        position: "absolute",
        top: "4px",
        right: "24px", // leave room for the × delete button if present
        background: "none",
        border: "none",
        color: active ? "#f38ba8" : "#45475a",
        fontSize: "13px",
        cursor: "pointer",
        padding: "0",
        lineHeight: "1",
        zIndex: "20",
        transition: "color 0.15s",
      })

      function handleClick(e) {
        e.stopPropagation()
        e.preventDefault()
        onToggle(node.id)
      }
      btn.addEventListener("pointerdown", (e) => e.stopPropagation())
      btn.addEventListener("click", handleClick)
      el.appendChild(btn)

      cleanups.push(() => {
        btn.removeEventListener("click", handleClick)
        btn.remove()
      })
    }

    return () => cleanups.forEach((fn) => fn())
    // Re-run whenever breakpoints change so colors update
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rete, breakpoints, onToggle])
}

// ─── Editor panel ─────────────────────────────────────────────────────────────

function EditorPanel({
  levelConfig,
  onReteReady,
  activeNodeId,
  breakpoints,
  onToggleBreakpoint,
}) {
  const handleDeleteNode = useCallback(async (editor, area) => {
    const selected = editor.getNodes().filter((n) => n.selected)
    for (const node of selected) await deleteNode(editor, area, node.id)
  }, [])

  const createEditor = useMemo(
    () => makeCreateEditor(levelConfig, handleDeleteNode),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [levelConfig.id],
  )
  const [ref, rete] = useRete(createEditor)

  useEffect(() => {
    onReteReady(rete)
  }, [rete, onReteReady])
  useNodeHighlight(rete, activeNodeId)
  useBreakpointOverlay(rete, breakpoints, onToggleBreakpoint)

  const addNodeAt = useCallback(
    async (node) => {
      if (!rete) return
      await rete.editor.addNode(node)
      const container = ref.current
      if (container) {
        const centre = getViewCentre(rete.area, container)
        const jitter = () => (Math.random() - 0.5) * 60
        await rete.area.translate(node.id, {
          x: centre.x - (node.width ?? 160) / 2 + jitter(),
          y: centre.y - (node.height ?? 88) / 2 + jitter(),
        })
      }
    },
    [rete, ref],
  )

  return (
    <div
      style={{
        flex: "1 1 55%",
        display: "flex",
        flexDirection: "column",
        borderRight: "2px solid #313244",
        overflow: "hidden",
        minWidth: 0,
      }}>
      {/* Palette */}
      <div
        style={{
          background: "#181825",
          padding: "8px 12px",
          borderBottom: "1px solid #313244",
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          alignItems: "center",
        }}>
        <span style={{ fontSize: "12px", color: "#6c7086" }}>Hinzufügen:</span>
        <NodeButton
          label="→ Rechts"
          color="#89b4fa"
          onClick={() => addNodeAt(new MoveRightNode())}
        />
        <NodeButton
          label="← Links"
          color="#89dceb"
          onClick={() => addNodeAt(new MoveLeftNode())}
        />
        <NodeButton
          label="↑ Hoch"
          color="#a6e3a1"
          onClick={() => addNodeAt(new MoveUpNode())}
        />
        <NodeButton
          label="↓ Runter"
          color="#fab387"
          onClick={() => addNodeAt(new MoveDownNode())}
        />
        {levelConfig.allowLoop && (
          <NodeButton
            label="↺ Wiederhole"
            color="#cba6f7"
            onClick={() => addNodeAt(new LoopNode(3))}
          />
        )}
        {levelConfig.allowVar && (
          <>
            <NodeButton
              label="x = 0  (setzen)"
              color="#f9e2af"
              onClick={() => addNodeAt(new SetVarNode("i", 0, "set"))}
            />
            <NodeButton
              label="x += 1  (erhöhen)"
              color="#e8a87c"
              onClick={() => addNodeAt(new SetVarNode("i", 0, "inc"))}
            />
          </>
        )}
        {levelConfig.allowIf && (
          <NodeButton
            label="? Wenn"
            color="#f38ba8"
            onClick={() => addNodeAt(new IfNode("i", "<", 5))}
          />
        )}
        <span style={{ fontSize: "11px", color: "#45475a", marginLeft: 4 }}>
          Auswählen + Entf zum Löschen
        </span>
      </div>
      {/* Editor */}
      <div
        style={{ position: "relative", flex: "1 1 auto", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: 6,
            left: 8,
            fontSize: "11px",
            color: "#585b70",
            pointerEvents: "none",
            zIndex: 10,
            maxWidth: "60%",
          }}>
          Ziehen zum Bewegen • Verbindungen ziehen • Scrollen zum Zoomen
        </div>
        <div ref={ref} style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  )
}

// ─── Debug panel (always visible) ────────────────────────────────────────────

function DebugPanel({
  running,
  paused,
  stepCount,
  currentStep,
  canRun,
  onPauseResume,
  onStep,
  onStop,
}) {
  const inactive = !running

  return (
    <div
      style={{
        background: "#181825",
        borderBottom: "1px solid #313244",
        padding: "6px 20px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        flexWrap: "wrap",
        opacity: inactive ? 0.45 : 1,
      }}>
      <span
        style={{
          fontSize: "12px",
          color: "#6c7086",
          fontWeight: "bold",
          minWidth: 52,
        }}>
        Debug:
      </span>

      <button
        onClick={inactive ? undefined : onPauseResume}
        disabled={inactive}
        style={{
          background: paused ? "#a6e3a1" : "#fab387",
          border: "none",
          borderRadius: "6px",
          padding: "4px 14px",
          color: "#1e1e2e",
          fontWeight: "bold",
          fontSize: "13px",
          cursor: inactive ? "default" : "pointer",
        }}>
        {paused ? "▶ Weiter" : "⏸ Pause"}
      </button>

      <button
        onClick={paused ? onStep : undefined}
        disabled={!paused}
        style={{
          background: paused ? "#89b4fa" : "#313244",
          border: "none",
          borderRadius: "6px",
          padding: "4px 14px",
          color: paused ? "#1e1e2e" : "#6c7086",
          fontWeight: "bold",
          fontSize: "13px",
          cursor: paused ? "pointer" : "default",
        }}>
        ⏭ Schritt
      </button>

      <button
        onClick={inactive ? undefined : onStop}
        disabled={inactive}
        style={{
          background: inactive ? "#313244" : "#f38ba8",
          border: "none",
          borderRadius: "6px",
          padding: "4px 14px",
          color: inactive ? "#6c7086" : "#1e1e2e",
          fontWeight: "bold",
          fontSize: "13px",
          cursor: inactive ? "default" : "pointer",
        }}>
        ■ Stop
      </button>

      <span style={{ fontSize: "12px", color: "#a6adc8", marginLeft: 4 }}>
        {running ? `Schritt ${currentStep} / ${stepCount}` : "–"}
      </span>
    </div>
  )
}

// ─── Main inner component ─────────────────────────────────────────────────────

function ReteAlgosInner() {
  const [levelIndex, setLevelIndex] = useState(0)
  const levelConfig = LEVELS[levelIndex]

  const phaserContainerRef = useRef(null)
  // Separate refs for preview game and run game so they don't interfere
  const previewGameRef = useRef(null)
  const runGameRef = useRef(null) // { game, stepForward, setAutoPlay }
  const reteRef = useRef(null)

  const [result, setResult] = useState(null)
  const [running, setRunning] = useState(false)
  const [paused, setPaused] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [activeNodeId, setActiveNodeId] = useState(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [totalSteps, setTotalSteps] = useState(0)
  const [validationError, setValidationError] = useState(null)
  const [breakpoints, setBreakpoints] = useState(() => new Set())

  const handleToggleBreakpoint = useCallback((nodeId) => {
    setBreakpoints((prev) => {
      const next = new Set(prev)
      if (next.has(nodeId)) next.delete(nodeId)
      else next.add(nodeId)
      return next
    })
  }, [])

  // Stable ref so launchPhaser closure doesn't go stale
  const breakpointsRef = useRef(breakpoints)
  useEffect(() => {
    breakpointsRef.current = breakpoints
  }, [breakpoints])

  // Launch preview on mount / level change
  useEffect(() => {
    const container = phaserContainerRef.current
    if (!container) return

    // Destroy any previous run game first
    if (runGameRef.current?.game) {
      runGameRef.current.game.destroy(true)
      runGameRef.current = null
    }
    if (previewGameRef.current) {
      previewGameRef.current.destroy(true)
      previewGameRef.current = null
    }

    let cancelled = false
    launchPreview(container, levelConfig).then((game) => {
      if (!cancelled) previewGameRef.current = game
      else game.destroy(true)
    })
    return () => {
      cancelled = true
      if (previewGameRef.current) {
        previewGameRef.current.destroy(true)
        previewGameRef.current = null
      }
    }
  }, [levelConfig])

  const destroyRunGame = useCallback(() => {
    if (runGameRef.current?.game) {
      runGameRef.current.game.destroy(true)
    }
    runGameRef.current = null
    setActiveNodeId(null)
    setCurrentStep(0)
    setTotalSteps(0)
  }, [])

  const handleLevelChange = useCallback(
    (idx) => {
      destroyRunGame()
      setResult(null)
      setRunning(false)
      setPaused(false)
      setShowHint(false)
      setValidationError(null)
      setBreakpoints(new Set())
      setLevelIndex(idx)
    },
    [destroyRunGame],
  )

  const handleReteReady = useCallback((rete) => {
    reteRef.current = rete
  }, [])

  // Shared run logic; startPaused=true for debug mode
  const startRun = useCallback(
    async (startPaused) => {
      const rete = reteRef.current
      if (!rete || running) return

      const { steps, reachesEnd } = extractSequence(rete.editor)

      if (!reachesEnd) {
        setValidationError(
          "Der Algorithmus erreicht den Ende-Knoten nicht. Verbinde alle Knoten bis zum Ende.",
        )
        return
      }
      setValidationError(null)

      // Destroy preview, start run
      if (previewGameRef.current) {
        previewGameRef.current.destroy(true)
        previewGameRef.current = null
      }
      destroyRunGame()

      setTotalSteps(steps.length)
      setCurrentStep(0)
      setResult(null)
      setRunning(true)
      setPaused(startPaused)
      setActiveNodeId(null)

      try {
        const handle = await launchPhaser(
          phaserContainerRef.current,
          levelConfig,
          steps,
          {
            onStep: (nodeId, idx) => {
              setCurrentStep(idx)
              setActiveNodeId(nodeId)
              // If Phaser auto-paused on a breakpoint, sync React paused state
              if (breakpointsRef.current.has(nodeId)) {
                setPaused(true)
              }
            },
            onResult: (res) => {
              setResult(res)
              setRunning(false)
              setPaused(false)
              setActiveNodeId(null)
            },
            isBreakpoint: (nodeId) => breakpointsRef.current.has(nodeId),
          },
          startPaused,
        )
        runGameRef.current = handle
      } catch (e) {
        console.error("Phaser error", e)
        setRunning(false)
      }
    },
    [running, levelConfig, destroyRunGame],
  )

  const handleRun = useCallback(() => startRun(false), [startRun])
  const handleDebug = useCallback(() => startRun(true), [startRun])

  const handlePauseResume = useCallback(() => {
    if (!runGameRef.current) return
    const next = !paused
    setPaused(next)
    runGameRef.current.setAutoPlay(!next)
  }, [paused])

  const handleStep = useCallback(() => {
    if (!runGameRef.current || !paused) return
    runGameRef.current.stepForward()
  }, [paused])

  const handleStop = useCallback(() => {
    destroyRunGame()
    setResult(null)
    setRunning(false)
    setPaused(false)
    // Re-launch preview
    const container = phaserContainerRef.current
    if (container) {
      launchPreview(container, levelConfig).then((g) => {
        previewGameRef.current = g
      })
    }
  }, [destroyRunGame, levelConfig])

  const resultMsg =
    {
      win: { text: "Ziel erreicht! Ausgezeichnet! 🎉", color: "#a6e3a1" },
      wall: {
        text: "Gegen eine Wand gelaufen! Überprüfe deinen Pfad. 🧱",
        color: "#f38ba8",
      },
      miss: {
        text: "Noch nicht am Ziel. Passe den Algorithmus an und versuche es nochmal! 🤔",
        color: "#fab387",
      },
    }[result] ?? null

  return (
    <div
      className="full-width"
      style={{
        fontFamily: "sans-serif",
        background: "#181825",
        color: "#cdd6f4",
        display: "flex",
        flexDirection: "column",
        height: "var(--body-height)",
        overflow: "hidden",
      }}>
      {/* ── Header ── */}
      <div
        style={{
          background: "#1e1e2e",
          borderBottom: "2px solid #45475a",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}>
        <div style={{ flex: "1 1 auto" }}>
          <h1 style={{ margin: 0, fontSize: "20px", color: "#cba6f7" }}>
            Algorithmen spielerisch lernen
          </h1>
          <p style={{ margin: "2px 0 0", fontSize: "13px", color: "#a6adc8" }}>
            {levelConfig.description}
          </p>
        </div>
        <div style={{ display: "flex", gap: "6px" }}>
          {LEVELS.map((lv, idx) => (
            <button
              key={lv.id}
              onClick={() => handleLevelChange(idx)}
              style={{
                background: idx === levelIndex ? "#cba6f7" : "#313244",
                color: idx === levelIndex ? "#1e1e2e" : "#cdd6f4",
                border: "none",
                borderRadius: "6px",
                padding: "6px 14px",
                fontWeight: "bold",
                fontSize: "13px",
                cursor: "pointer",
                transition: "background 0.15s",
              }}>
              {lv.title}
            </button>
          ))}
        </div>
      </div>

      {/* ── Toolbar ── */}
      <div
        style={{
          background: "#1e1e2e",
          padding: "8px 20px",
          borderBottom: "1px solid #313244",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}>
        <button
          onClick={handleRun}
          disabled={running}
          style={{
            background: running ? "#45475a" : "#a6e3a1",
            border: "none",
            borderRadius: "6px",
            padding: "7px 20px",
            color: "#1e1e2e",
            fontWeight: "bold",
            fontSize: "14px",
            cursor: running ? "not-allowed" : "pointer",
            boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
          }}>
          {running && !paused ? "Läuft..." : "▶ Ausführen"}
        </button>

        <button
          onClick={handleDebug}
          disabled={running}
          style={{
            background: running ? "#45475a" : "#cba6f7",
            border: "none",
            borderRadius: "6px",
            padding: "7px 20px",
            color: "#1e1e2e",
            fontWeight: "bold",
            fontSize: "14px",
            cursor: running ? "not-allowed" : "pointer",
            boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
          }}>
          🐛 Debug
        </button>

        <button
          onClick={() => setShowHint((v) => !v)}
          style={{
            background: showHint ? "#fab387" : "#313244",
            border: "none",
            borderRadius: "6px",
            padding: "7px 14px",
            color: showHint ? "#1e1e2e" : "#cdd6f4",
            fontWeight: "bold",
            fontSize: "13px",
            cursor: "pointer",
          }}>
          💡 Hinweis
        </button>

        {showHint && (
          <span
            style={{
              fontSize: "13px",
              color: "#fab387",
              background: "#2a1f0e",
              borderRadius: "6px",
              padding: "4px 12px",
              border: "1px solid #fab38755",
            }}>
            {levelConfig.hint}
          </span>
        )}

        {validationError && (
          <span
            style={{
              fontSize: "13px",
              color: "#f38ba8",
              background: "#2d0a14",
              borderRadius: "6px",
              padding: "4px 12px",
              border: "1px solid #f38ba855",
            }}>
            ⚠ {validationError}
          </span>
        )}
      </div>

      {/* ── Debug panel (always visible) ── */}
      <DebugPanel
        running={running}
        paused={paused}
        stepCount={totalSteps}
        currentStep={currentStep}
        onPauseResume={handlePauseResume}
        onStep={handleStep}
        onStop={handleStop}
      />

      {/* ── Result banner ── */}
      {resultMsg && (
        <div
          style={{
            background: "#1e1e2e",
            borderBottom: `2px solid ${resultMsg.color}`,
            padding: "6px 20px",
            color: resultMsg.color,
            fontWeight: "bold",
            fontSize: "14px",
          }}>
          {resultMsg.text}
        </div>
      )}

      {/* ── Split view ── */}
      <div
        style={{
          display: "flex",
          flex: "1 1 auto",
          minHeight: 0,
          overflow: "hidden",
        }}>
        <EditorPanel
          key={levelConfig.id}
          levelConfig={levelConfig}
          onReteReady={handleReteReady}
          activeNodeId={activeNodeId}
          breakpoints={breakpoints}
          onToggleBreakpoint={handleToggleBreakpoint}
        />

        {/* Phaser panel */}
        <div
          style={{
            flex: "1 1 45%",
            background: "#1e1e2e",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px",
            gap: "10px",
            minWidth: 0,
          }}>
          <div
            style={{ fontSize: "12px", color: "#6c7086", textAlign: "center" }}>
            Figur startet unten links · Ziel:{" "}
            <span style={{ color: "#a6e3a1" }}>🏁</span> · Graue Blöcke = Wände
          </div>
          <div
            ref={phaserContainerRef}
            style={{
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
              maxWidth: "100%",
              maxHeight: "calc(100% - 60px)",
            }}
          />
          {!running && !result && (
            <div style={{ color: "#585b70", fontSize: "12px" }}>
              Verbinde die Knoten bis zum{" "}
              <strong style={{ color: "#cdd6f4" }}>Ende</strong>-Knoten, dann
              drücke <strong style={{ color: "#a6e3a1" }}>▶ Ausführen</strong>
            </div>
          )}
          {result === "win" && levelIndex < LEVELS.length - 1 && (
            <button
              onClick={() => handleLevelChange(levelIndex + 1)}
              style={{
                background: "#a6e3a1",
                border: "none",
                borderRadius: "6px",
                padding: "8px 20px",
                color: "#1e1e2e",
                fontWeight: "bold",
                fontSize: "14px",
                cursor: "pointer",
              }}>
              Weiter zu {LEVELS[levelIndex + 1].title} →
            </button>
          )}
        </div>
      </div>

      {/* ── Footer ── */}
      <div
        style={{
          background: "#1e1e2e",
          borderTop: "1px solid #313244",
          padding: "12px 20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "10px",
          fontSize: "12px",
          color: "#a6adc8",
        }}>
        <div>
          <strong style={{ color: "#89b4fa" }}>1. Knoten hinzufügen</strong>
          <br />
          Klicke oben auf eine Schaltfläche um einen Knoten hinzuzufügen.
        </div>
        <div>
          <strong style={{ color: "#89b4fa" }}>2. Verbinden</strong>
          <br />
          Ziehe vom Ausgangsport (rechts) zum Eingangsport (links). Der Pfad
          muss beim <strong>Ende</strong>-Knoten enden.
        </div>
        {levelConfig.allowLoop && (
          <div>
            <strong style={{ color: "#cba6f7" }}>↺ Wiederhole</strong>
            <br />
            Körper → Aktion → zurück. Fertig → weiter.
          </div>
        )}
        {levelConfig.allowVar && (
          <div>
            <strong style={{ color: "#f9e2af" }}>x = 0 · x += 1</strong>
            <br />
            Variablen speichern Werte für Schleifen.
          </div>
        )}
        {levelConfig.allowIf && (
          <div>
            <strong style={{ color: "#f38ba8" }}>? Wenn</strong>
            <br />
            Wahr → Schleifenkörper → zurück. Fertig → Ende.
          </div>
        )}
        <div>
          <strong style={{ color: "#cba6f7" }}>🐛 Debug</strong>
          <br />
          Startet pausiert – mit ⏭ Schritt einzeln durchlaufen.
        </div>
      </div>
    </div>
  )
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default function ReteAlgos() {
  return (
    <ClientOnly
      fallback={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "50vh",
            color: "#6c7086",
          }}>
          Wird geladen...
        </div>
      }>
      <ReteAlgosInner />
    </ClientOnly>
  )
}
