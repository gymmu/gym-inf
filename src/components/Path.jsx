import { useEffect, useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"

import Editor from "@components/Editor.jsx"

export default function Path({defaultPath = "M 100 100\nL 200 200"}) {
    const [path, setPath] = useState(defaultPath)
    const [strokeColor, setStrokeColor] = useState("black")
    const [strokeWidth, setStrokeWidth] = useState(3)
    const [fill, setFill] = useState("none")
  const [srcDoc, setSrcDoc] = useState("")
    const [codeString, setCodeString] = useState("hello World")
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
                <path id="myPath" stroke="black" stroke-width="3" fill="none" d="${path}" />
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
    }, 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [path])

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 300px",
            gap: "1rem"
        }}>
            <div style={{flexGrow: 1}}>
          <SyntaxHighlighter language="css" style={dark}>
            {codeString}
          </SyntaxHighlighter>
            <Editor title="Pfad" language="text" value={path} handleChange={setPath} />
            </div>
            <div>
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
