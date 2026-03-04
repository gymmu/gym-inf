import{r as i,j as e,h as K,i as V}from"./react-vendor-DPtW2uLn.js";import{E as F}from"./Editor-BjV_XeDN.js";import{S as R}from"./Slider-gTR9_wrp.js";import{s as r}from"./Path.module-DVbTqRYs.js";import"./vendor-BscfZStV.js";import"./monaco-DSiUpym4.js";import"./CodePen.module-BfICubSo.js";function W({defaultPath:h=`M 100 100
L 200 200
L 200 100
Z`}){const[d,l]=i.useState(h),[c,x]=i.useState("black"),[a,v]=i.useState(3),[p,C]=i.useState("none"),[f,m]=i.useState(""),[g,y]=i.useState(""),b=`
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
`;i.useEffect(()=>{const s=setTimeout(()=>{m(`
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
                <path id="myPath" stroke="${c}" stroke-width="${a}" fill="${p}" d="${d}" />
                <g id="circleGroup"></g>
            </svg>
          </body>
          <style>svg { background-color: white}</style>
          <style>body { margin: 0; padding: 0; overflow: hidden;}</style>
          <script>${b}<\/script>
        </html>
      `);const n=d.split(`
`).map((u,M)=>M===0?u:`		   ${u}`).join(`
`);y(`<svg viewBox="0 0 300 300" width="300">
    <path stroke="${c}"
        stroke-width="${a}" 
        fill="${p}"
        d="
           ${n}
          "
    />
</svg>`)},500);return()=>{clearTimeout(s)}},[d,p,c,a]);function o(s){l(n=>n.match(/[zZ]$/)?`${n.split(/\n[zZ]/)[0]}
${s}
Z`:`${n}
${s}`)}function t(){return Math.floor(Math.random()*300)}function j(){o(`L ${t()} ${t()}`)}function $(){o(`M ${t()} ${t()}`)}function k(){o(`V ${t()}`)}function w(){o(`H ${t()}`)}function z(){o(`Q ${t()} ${t()} ${t()} ${t()}`)}function A(){o(`T ${t()} ${t()}`)}function S(){o(`l ${t()} ${t()}`)}function L(){o(`m ${t()} ${t()}`)}function G(){o(`v ${t()}`)}function N(){o(`h ${t()}`)}function B(){o(`q ${t()} ${t()} ${t()} ${t()}`)}function E(){o(`t ${t()} ${t()}`)}function P(){l(`M 100 100
L 200 200
L 200 100
Z`)}return e.jsxs("div",{className:r.gridContainer,children:[e.jsxs("div",{className:r.gridBox,children:[e.jsx("h2",{children:"Kontrollelemente"}),e.jsxs("div",{className:r.controlls,children:[e.jsxs("div",{className:r.formGroup,children:[e.jsx("label",{htmlFor:"fillField",children:"Füllfarbe"}),e.jsxs("select",{id:"fillField",value:p,onChange:s=>C(s.target.value),children:[e.jsx("option",{children:"none"}),e.jsx("option",{children:"red"}),e.jsx("option",{children:"green"}),e.jsx("option",{children:"blue"})]})]}),e.jsxs("div",{className:r.formGroup,children:[e.jsx("label",{htmlFor:"strokeColorField",children:"Strichfarbe"}),e.jsxs("select",{id:"strokeColorField",value:c,onChange:s=>x(s.target.value),children:[e.jsx("option",{children:"red"}),e.jsx("option",{children:"green"}),e.jsx("option",{children:"blue"})]})]}),e.jsx("div",{className:r.formGroup,children:e.jsx(R,{sliderText:"Stroke width: ",value:a,setValue:v,minVal:0,maxVal:10})}),e.jsxs("div",{className:r.formGroup,children:[e.jsx("label",{children:"Absolute Koordinaten:"}),e.jsx("button",{onClick:j,children:"Linie (absolut) hinzufügen"}),e.jsx("button",{onClick:$,children:"Bewegen (absolut) hinzufügen"}),e.jsx("button",{onClick:w,children:"Horizontale Linie (absolut) hinzufügen"}),e.jsx("button",{onClick:k,children:"Vertikale Linie (absolut) hinzufügen"}),e.jsx("button",{onClick:z,children:"Quadratische Kurve (absolut) hinzufügen"}),e.jsx("button",{onClick:A,children:"Fortsetzung quadratische Kurve (absolut) hinzufügen"})]}),e.jsxs("div",{className:r.formGroup,children:[e.jsx("label",{children:"Relative Koordinaten:"}),e.jsx("button",{onClick:S,children:"Linie (relativ) hinzufügen"}),e.jsx("button",{onClick:L,children:"Bewegen (relativ) hinzufügen"}),e.jsx("button",{onClick:N,children:"Horizontale Linie (relativ) hinzufügen"}),e.jsx("button",{onClick:G,children:"Vertikale Linie (relativ) hinzufügen"}),e.jsx("button",{onClick:B,children:"Quadratische Kurve (relativ) hinzufügen"}),e.jsx("button",{onClick:E,children:"Fortsetzung quadratische Kurve (relativ) hinzufügen"})]}),e.jsxs("div",{className:r.formGroup,children:[e.jsx("button",{onClick:P,children:"Pfad zurücksetzen"}),e.jsx("button",{onClick:()=>l(""),children:"Pfad löschen"})]})]})]}),e.jsxs("div",{className:r.gridBox,children:[e.jsx("h2",{children:"Resultat"}),e.jsx("iframe",{srcDoc:f,title:"output",sandbox:"allow-scripts",frameBorder:"0",height:"300px",width:"300px"})]}),e.jsx("div",{className:r.gridBox,children:e.jsx(F,{title:"Pfad",language:"text",value:d,handleChange:l})}),e.jsxs("div",{className:r.gridBox,children:[e.jsx("h2",{children:"SVG Code"}),e.jsx(K,{language:"css",style:V,children:g})]})]})}export{W as default};
