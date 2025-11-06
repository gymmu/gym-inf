import { useEffect, useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"

import Editor from "@components/Editor.jsx"
import Slider from "./Slider"
import style from "@components/Path.module.css"

export default function Path({defaultPath = "M 100 100\nL 200 200\nL 200 100\nZ"}) {
    const [path, setPath] = useState(defaultPath)
    const [strokeColor, setStrokeColor] = useState("black")
    const [strokeWidth, setStrokeWidth] = useState(3)
    const [fill, setFill] = useState("none")
  const [srcDoc, setSrcDoc] = useState("")
    const [codeString, setCodeString] = useState("")
    const script = `
function getPathPoints(pathElement) {
    const pathData = pathElement.getAttribute('d');
    const commands = pathData.match(/[a-zA-Z][^a-zA-Z]*/g);
    const points = [];

    let prevCoords = [0, 0];
    let prevControllCoords = [0, 0];
    commands.forEach(command => {
        const type = command.charAt(0);
        // Koordinaten extrahieren und in Zahlen umwandeln
        const coords = command.substring(1).trim().replace(/( |,)+/, " ").split(" ").map(Number);

        if (type === 'M' || type === 'L') {
            // M (MoveTo) und L (LineTo) haben einfache x, y Paare
            for (let i = 0; i < coords.length; i += 2) {
                points.push({ x: coords[i], y: coords[i+1], type: type });
            }
            prevCoords = coords
        }

        if (type === "V") {
            points.push({x: prevCoords[0], y: coords[0]})
            prevCoords = [prevCoords[0], coords[0]]
        }
        if (type === "H") {
            points.push({x: coords[0], y: prevCoords[1]})
            prevCoords = [coords[0], prevCoords[1]]
        }
        if (type === "Q") {
            points.push({x: coords[0], y: coords[1]})
            points.push({x: coords[2], y: coords[3]})
            prevControllCoords = [coords[0], coords[1]]
            prevCoords = [coords[2], coords[3]]
        }

        if (type === "T") {
            points.push({x: prevCoords[0] + (prevCoords[0] - prevControllCoords[0]), y: prevCoords[1] + (prevCoords[1] - prevControllCoords[1])})
            points.push({x: coords[0], y: coords[1]})
        }

        // Hier kommen die relativen Befehle
        if (type === 'l' || type === 'm') {
            for (let i = 0; i < coords.length; i += 2) {
                points.push({ x: prevCoords[i] + coords[i], y: prevCoords[i+1] + coords[i+1], type: type });
            }
            prevCoords = [prevCoords[0] + coords[0], prevCoords[1] + coords[1]]
        }
        if (type === "v") {
            points.push({x: prevCoords[0], y: prevCoords[1] + coords[0]})
            prevCoords = [prevCoords[0], prevCoords[1] + coords[0]]
        }
        if (type === "h") {
            points.push({x: prevCoords[0] + coords[0], y: prevCoords[1]})
            prevCoords = [prevCoords[0] + coords[0], prevCoords[1]]
        }
        if (type === "q") {
            points.push({x: coords[0] + prevCoords[0], y: coords[1] + prevCoords[1]})
            points.push({x: coords[2] + prevCoords[0], y: coords[3] + prevCoords[1]})
            prevControllCoords = [coords[0] + prevCoords[0], coords[1] + prevCoords[1]]
            prevCoords = [coords[2] + prevCoords[0], coords[3] + prevCoords[1]]
        }
        if (type === "t") {
            points.push({x: prevCoords[0] + (prevCoords[0] - prevControllCoords[0]), y: prevCoords[1] + (prevCoords[1] - prevControllCoords[1])})
            points.push({x: prevCoords[0] + coords[0], y: prevCoords[1] + coords[1]})
        }
        // Hier müsste man C, Q, S, T, A Befehle ebenfalls behandeln,
        // was sehr komplex ist.
    });

    return points;
}

// Beispiel-Anwendung:
const path = document.getElementById('myPath'); 
const vertices = getPathPoints(path);
const circleGroup = document.getElementById('circleGroup')
vertices.forEach((vertex, index) => {
    // Neues Kreis-Element erstellen
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    // Attribute setzen
    circle.setAttribute("cx", vertex.x);
    circle.setAttribute("cy", vertex.y);
    circle.setAttribute("r", "16"); // Radius des Kreises
    circle.setAttribute("fill", "red");

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.textContent = index + 1;
    text.setAttribute('font-size', '20')
    text.setAttribute('font-weight', 'bold')
    text.setAttribute("x", vertex.x - 4)
    text.setAttribute("y", vertex.y + 6)

            
    // Kreis zur Gruppe im SVG hinzufügen
    circleGroup.appendChild(circle);
    circleGroup.appendChild(text);
})
`

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>
            <svg viewBox="-25 -25 350 350" width="300">
              <defs>
                  <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" stroke-width="0.5"/>
                  </pattern>
                  <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <rect width="50" height="50" fill="url(#smallGrid)"/>
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="gray" stroke-width="1"/>
                  </pattern>
                </defs>
                <rect width="301" height="301" fill="url(#grid)" />
                <g id="xAxisLabels">
                    <text x="-5" y="-5">0</text>
                    <text x="40" y="-5">50</text>
                    <text x="85" y="-5">100</text>
                    <text x="135" y="-5">150</text>
                    <text x="185" y="-5">200</text>
                    <text x="235" y="-5">250</text>
                    <text x="285" y="-5">300</text>
                </g>
                <g id="yAxisLabels">
                    <text x="-15" y="5">0</text>
                    <text x="-20" y="55">50</text>
                    <text x="-25" y="105">100</text>
                    <text x="-25" y="155">150</text>
                    <text x="-25" y="205">200</text>
                    <text x="-25" y="255">250</text>
                    <text x="-25" y="305">300</text>
                </g>
                <path id="myPath" stroke="${strokeColor}" stroke-width="${strokeWidth}" fill="${fill}" d="${path}" />
                <g id="circleGroup"></g>
            </svg>
          </body>
          <style>svg { background-color: white}</style>
          <style>body { margin: 0; padding: 0; overflow: hidden;}</style>
          <script>${script}</script>
        </html>
      `)
    const formatPath = path.split("\n").map((line, index) => {
        if (index === 0) {
            return line
        } else {
            return `\t\t   ${line}`
                }
            }).join("\n")

    setCodeString(`<svg viewBox="0 0 300 300" width="300">
    <path stroke="${strokeColor}"
        stroke-width="${strokeWidth}" 
        fill="${fill}"
        d="
           ${formatPath}
          "
    />
</svg>`)
    }, 500)
    return () => {
      clearTimeout(timeout)
    }
  }, [path, fill, strokeColor, strokeWidth])

    function appendToPath(str) {
        setPath((oldPath) => {
            if (oldPath.match(/[zZ]$/)) {
                // Append before Z
                const pathWithoutClosing = oldPath.split(/\n[zZ]/)[0]
                return `${pathWithoutClosing}\n${str}\nZ`
            } else {
                return `${oldPath}\n${str}`
            }
        })
    }

    function rand() {
        return Math.floor(Math.random() * 300)
    }

    function addLineAbsolute() {
        appendToPath(`L ${rand()} ${rand()}`)
    }

    function addMoveAbsolute() {
        appendToPath(`M ${rand()} ${rand()}`)
    }

    function addVerticalAbsolute() {
        appendToPath(`V ${rand()}`)
    }

    function addHorizontalAbsolute() {
        appendToPath(`H ${rand()}`)
    }

    function addQuadraticAbsolute() {
        appendToPath(`Q ${rand()} ${rand()} ${rand()} ${rand()}`)
    }

    function addQuadraticContinuationAbsolute() {
        appendToPath(`T ${rand()} ${rand()}`)
    }

    function addLineRelative() {
        appendToPath(`l ${rand()} ${rand()}`)
    }

    function addMoveRelative() {
        appendToPath(`m ${rand()} ${rand()}`)
    }

    function addVerticalRelative() {
        appendToPath(`v ${rand()}`)
    }

    function addHorizontalRelative() {
        appendToPath(`h ${rand()}`)
    }

    function addQuadraticRelative() {
        appendToPath(`q ${rand()} ${rand()} ${rand()} ${rand()}`)
    }

    function addQuadraticContinuationRelative() {
        appendToPath(`t ${rand()} ${rand()}`)
    }

    function resetPath() {
        setPath("")
    }

    return (
        <div className={style.gridContainer} >
            <div className={style.gridBox}>
                <h2>Kontrollelemente</h2>
                <div className={style.controlls}>
                    <div className={style.formGroup}>
                <label htmlFor="fillField">Füllfarbe</label>
                <select
                    id="fillField"
                    value={fill}
                    onChange={(e) => setFill(e.target.value)}
                >
                    <option>none</option>
                    <option>red</option>
                    <option>green</option>
                    <option>blue</option>
                </select>
                </div>
                    <div className={style.formGroup}>
                <label htmlFor="strokeColorField">Strichfarbe</label>
                <select
                    id="strokeColorField"
                    value={strokeColor}
                    onChange={(e) => setStrokeColor(e.target.value)}
                >
                    <option>red</option>
                    <option>green</option>
                    <option>blue</option>
                </select>
                </div>
                    <div className={style.formGroup}>
                <Slider
                    sliderText="Stroke width: "
                    value={strokeWidth}
                    setValue={setStrokeWidth}
                    minVal={0}
                    maxVal={10}
                />
                </div>
                <div className={style.formGroup}>
                    <label>Absolute Koordinaten:</label>
                    <button onClick={addLineAbsolute}>Linie (absolut) hinzufügen</button>
                    <button onClick={addMoveAbsolute}>Bewegen (absolut) hinzufügen</button>
                    <button onClick={addHorizontalAbsolute}>Horizontale Linie (absolut) hinzufügen</button>
                    <button onClick={addVerticalAbsolute}>Vertikale Linie (absolut) hinzufügen</button>
                    <button onClick={addQuadraticAbsolute}>Quadratische Kurve (absolut) hinzufügen</button>
                    <button onClick={addQuadraticContinuationAbsolute}>Fortsetzung quadratische Kurve (absolut) hinzufügen</button>
                </div>
                <div className={style.formGroup}>
                    <label>Relative Koordinaten:</label>
                        <button onClick={addLineRelative}>Linie (relativ) hinzufügen</button>
                        <button onClick={addMoveRelative}>Bewegen (relativ) hinzufügen</button>
                        <button onClick={addHorizontalRelative}>Horizontale Linie (relativ) hinzufügen</button>
                        <button onClick={addVerticalRelative}>Vertikale Linie (relativ) hinzufügen</button>
                    <button onClick={addQuadraticRelative}>Quadratische Kurve (relativ) hinzufügen</button>
                    <button onClick={addQuadraticContinuationRelative}>Fortsetzung quadratische Kurve (relativ) hinzufügen</button>
                </div>
                <div className={style.formGroup}>
                    <button onClick={resetPath}>Pfad löschen</button>
                </div>
                </div>
            </div>
            <div className={style.gridBox}>
                <h2>Resultat</h2>
                <iframe
                    srcDoc={srcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    height="300px"
                    width="300px"
                />
            </div>
            <div className={style.gridBox}>
                <Editor title="Pfad" language="text" value={path} handleChange={setPath} />
            </div>
            <div className={style.gridBox}>
                <h2>SVG Code</h2>
                <SyntaxHighlighter language="css" style={dark}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}
