import{j as e,r as l}from"./react-vendor-DPtW2uLn.js";import{S as i}from"./gym-pages-CLbxl-EG.js";import"./vendor-BscfZStV.js";import"./monaco-DSiUpym4.js";function h({toggle:n,setToggle:t,labelText:r=""}){return e.jsx(e.Fragment,{children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",value:n,onChange:()=>t(!n)}),r]})})}const p="_container_hozou_1",w="_gridContainer_hozou_5",b="_optionsContainer_hozou_10",k="_border_hozou_33",c={container:p,gridContainer:w,optionsContainer:b,border:k};function s({width:n="100%",children:t}){const[r,j]=l.useState(!1),[o,g]=l.useState(!1),[d,f]=l.useState(!1),[x,u]=l.useState(!1);return e.jsx("div",{className:c.container,children:e.jsxs("div",{className:c.gridContainer,children:[e.jsxs("div",{className:c.optionsContainer,children:[e.jsx(h,{labelText:"Gitter anzeigen",toggle:r,setToggle:j}),e.jsx(h,{labelText:"Hintergrund weiss",toggle:o,setToggle:g}),e.jsx(h,{labelText:"Rand anzeigen",toggle:x,setToggle:u}),e.jsx(h,{labelText:"Maximale Breite",toggle:d,setToggle:f})]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",flexGrow:1},children:e.jsxs("svg",{className:x?c.border:"",role:"img",viewBox:"0 0 300.5 300.5",xmlns:"http://www.w3.org/2000/svg",width:d?"100%":n,children:[e.jsx("title",{children:"SVG Image"}),e.jsxs("defs",{children:[e.jsx("pattern",{id:"smallGrid",width:"10",height:"10",patternUnits:"userSpaceOnUse",children:e.jsx("path",{d:"M 10 0 L 0 0 0 10",fill:"none",stroke:"gray",strokeWidth:"0.5"})}),e.jsxs("pattern",{id:"grid",width:"50",height:"50",patternUnits:"userSpaceOnUse",children:[e.jsx("rect",{width:"50",height:"50",fill:"url(#smallGrid)"}),e.jsx("path",{d:"M 50 0 L 0 0 0 50",fill:"none",stroke:"gray",strokeWidth:"1"})]})]}),o&&e.jsx("rect",{width:"100%",height:"100%",fill:"white"}),r&&e.jsx("rect",{width:"100%",height:"100%",fill:"url(#grid)"}),t]})})]})})}function a(n){const t={h2:"h2",h3:"h3",p:"p",strong:"strong",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h2,{children:"Aufgaben"}),`
`,e.jsxs(t.p,{children:["Hier finden Sie einige Aufgaben zu einfacheren ",e.jsx(t.strong,{children:"SVG"}),`-Grafiken. Versuchen Sie
alle von diesen nach zubauen. Verwenden Sie dazu den Editor `,e.jsx("a",{href:"https://editsvgcode.com/",target:"_blank",children:"EditSVGCode"}),"."]}),`
`,e.jsxs(i,{classes:"exercise",children:[e.jsx(t.h3,{children:"Aufgabe 1"}),e.jsxs(s,{width:"300px",children:[e.jsx("rect",{x:"100",y:"150",width:"100",height:"100",fill:"lightblue"}),e.jsx("path",{d:"M 100 150 L 150 100 L 200 150 Z",fill:"brown"})]})]}),`
`,e.jsx(t.h3,{children:"Aufgabe 2"}),`
`,e.jsxs(s,{width:"300px",children:[e.jsx("rect",{x:"10",y:"10",width:"280",height:"280",fill:"#e0e0e0"}),e.jsx("rect",{x:"50",y:"50",width:"100",height:"100",fill:"#ff0000"}),e.jsx("circle",{cx:"200",cy:"200",r:"40",fill:"#0000ff"}),e.jsx("line",{x1:"20",y1:"20",x2:"280",y2:"280",stroke:"#000000",strokeWidth:"5"}),e.jsx("path",{d:"M 150 150 C 180 100, 220 200, 150 250",stroke:"#00ff00",strokeWidth:"5",fill:"none"})]}),`
`,e.jsxs(i,{classes:"exercise",children:[e.jsx(t.h3,{children:"Aufgabe 3"}),e.jsx(s,{width:"300px",children:e.jsx("path",{stroke:"black",strokeWidth:"3",fill:"none",d:`M 100 200
l 100 -100
v 100
l -100 -100
h 100
l -50 -50
l -50 50
v 100
h 100
`})})]}),`
`,e.jsx(t.h3,{children:"Aufgabe 4"}),`
`,e.jsx(s,{width:"300px",children:e.jsx("path",{stroke:"black",fill:"red",d:`M 150,300
L 275,125
c 100, -150 -125,-170 -125, -35
c 0,-155 -225,-85 -125,35
Z`})}),`
`,e.jsxs(i,{classes:"exercise",children:[e.jsx(t.h3,{children:"Aufgabe 5"}),e.jsxs(s,{width:"300px",children:[e.jsx("rect",{x:"50",y:"100",width:"200",height:"100",fill:"lightgreen"}),e.jsx("path",{d:"M 50 150 Q 150 50, 250 150",stroke:"blue",strokeWidth:"5",fill:"none"})]})]}),`
`,e.jsx(t.h3,{children:"Aufgabe 6"}),`
`,e.jsxs(s,{width:"300px",children:[e.jsx("circle",{cx:"100",cy:"150",r:"50",fill:"orange"}),e.jsx("circle",{cx:"150",cy:"150",r:"50",fill:"purple"}),e.jsx("line",{x1:"100",y1:"150",x2:"150",y2:"150",stroke:"black",strokeWidth:"5"})]}),`
`,e.jsxs(i,{classes:"exercise",children:[e.jsx(t.h3,{children:"Aufgabe 7"}),e.jsxs(s,{width:"300px",children:[e.jsx("rect",{x:"50",y:"50",width:"200",height:"200",fill:"lightcoral"}),e.jsx("circle",{cx:"150",cy:"150",r:"40",fill:"yellow"}),e.jsx("path",{d:"M 50 50 L 250 250",stroke:"black",strokeWidth:"5",fill:"none"})]})]}),`
`,e.jsx(t.h3,{children:"Aufgabe 8"}),`
`,e.jsxs(s,{width:"300px",children:[e.jsx("rect",{x:"50",y:"50",width:"200",height:"200",fill:"lightblue"}),e.jsx("path",{d:"M 150 150 C 100 100, 200 100, 150 150 S 100 200, 150 150",stroke:"red",strokeWidth:"5",fill:"none"})]}),`
`,e.jsxs(i,{classes:"exercise",children:[e.jsx(t.h3,{children:"Aufgabe 9"}),e.jsxs(s,{width:"300px",children:[e.jsx("path",{stroke:"black",strokeWidth:"10",fill:"none",d:`M 40 60
v 180
a20 20 1 0 0 20 20
h 180
a 20 -20 1 0 0 20 -20
v -180
a -20 -20 1 0 0 -20 -20
h -180
a -20 20 1 0 0 -20 20`}),e.jsx("circle",{cx:"150",cy:"150",r:"50",fill:"none",stroke:"black",strokeWidth:"10"}),e.jsx("circle",{cx:"200",cy:"75",r:"10"})]})]})]})}function M(n={}){const{wrapper:t}=n.components||{};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{M as default};
