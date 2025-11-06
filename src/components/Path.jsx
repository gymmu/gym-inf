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
        // Hier müsste man C, Q, S, T, A, H, V Befehle ebenfalls behandeln,
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
            <svg viewBox="0 0 300 300" width="300">
              <defs>
                  <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" stroke-width="0.5"/>
                  </pattern>
                  <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <rect width="50" height="50" fill="url(#smallGrid)"/>
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="gray" stroke-width="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
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
                </div>
            </div>
            <div className={style.gridBox}>
                <h2>SVG Code</h2>
                <SyntaxHighlighter language="css" style={dark}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
            <div className={style.gridBox}>
                <Editor title="Pfad" language="text" value={path} handleChange={setPath} />
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
        </div>
    )
}
