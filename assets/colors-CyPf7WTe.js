import{r as l,j as e,d as D}from"./react-vendor-DPtW2uLn.js";import{E as B}from"./Example-BQNCrbIs.js";import"./vendor-BscfZStV.js";import"./monaco-DSiUpym4.js";import"./gym-pages-CLbxl-EG.js";const P="_container_fr3gu_1",_="_colorinput_fr3gu_11",z="_inputgroup_fr3gu_20",C="_red_fr3gu_26",y="_green_fr3gu_29",E="_blue_fr3gu_32",I="_huge_fr3gu_36",N="_box_fr3gu_44",r={container:P,colorinput:_,inputgroup:z,red:C,green:y,blue:E,huge:I,box:N};function L(){const[s,n]=l.useState("#000000"),[o,g]=l.useState("00"),[t,F]=l.useState("00"),[d,p]=l.useState("00");l.useEffect(()=>{n(`#${u(o)}${u(t)}${u(d)}`)},[o,t,d]);const u=i=>{let a=`${i}`;for(;a.length<2;)a=`0${a}`,console.log(a);return a},f=i=>{g(i.target.value)},S=i=>{F(i.target.value)},h=i=>{p(i.target.value)};return e.jsxs("div",{className:r.container,children:[e.jsx("div",{className:r.huge,children:"#"}),e.jsxs("div",{className:r.inputgroup,children:[e.jsx("label",{className:r.red,htmlFor:"red",children:"Rot"}),e.jsx("input",{className:r.colorinput,id:"red",maxLength:"2",type:"text",name:"red",value:o,onChange:f})]}),e.jsxs("div",{className:r.inputgroup,children:[e.jsx("label",{className:r.green,htmlFor:"green",children:"Grün"}),e.jsx("input",{className:r.colorinput,id:"green",maxLength:"2",type:"text",name:"green",value:t,onChange:S})]}),e.jsxs("div",{className:r.inputgroup,children:[e.jsx("label",{className:r.blue,htmlFor:"blue",children:"Blau"}),e.jsx("input",{className:r.colorinput,id:"blue",maxLength:"2",type:"text",name:"blue",value:d,onChange:h})]}),e.jsx("div",{className:r.huge,children:"="}),e.jsx("div",{className:r.box,style:{backgroundColor:s},children:" "})]})}function b({hex:s}){return e.jsx("div",{style:{backgroundColor:s,height:"1.5em",width:"1.5em"}})}function A({ppmS:s}){const[n,o]=l.useState(s),g=l.useRef(null),t=16;l.useEffect(()=>{if(!n)return;const d=n.split(`
`),[p,u,f,S]=d.slice(0,4);if(p!=="P3"){console.error("Unsupported PPM format");return}const h=d.slice(4).join(" ").split(" ").map(c=>parseInt(c,t)),i=g.current,a=i.getContext("2d");a.clearRect(0,0,i.width,i.height),a.imageSmoothingEnabled=!1;const w=parseInt(u,t)||1,v=parseInt(f,t)||1,x=a.createImageData(w,v);for(let c=0,m=0;c<h.length;c+=3,m+=4)x.data[m]=parseInt(h[c],t),x.data[m+1]=parseInt(h[c+1],t),x.data[m+2]=parseInt(h[c+2],t),x.data[m+3]=255;const j=document.createElement("canvas");j.width=w,j.height=v,j.getContext("2d").putImageData(x,0,0),a.drawImage(j,0,0,w,v,0,0,i.width,i.height)},[n]);const F=d=>{o(d)};return e.jsxs("div",{style:{display:"flex",alignItems:"center",flexDirection:"row",justifyContent:"center",width:"100%",gap:"1em"},children:[e.jsx(D,{defaultLanguage:"json",value:n,height:"300px",theme:"vs-dark",onChange:F,options:{minimap:{enabled:!1}}}),e.jsx("canvas",{ref:g,style:{border:"1px solid white",width:"300px",height:"300px",imageRendering:"pixelated"}})]})}function k(s){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Farben"}),`
`,e.jsxs(n.p,{children:["Da ein Computer nur mit ",e.jsx(n.code,{children:"Bits"}),` arbeiten kann, müssen wir dem Computer
beibringen wie er `,e.jsx(n.code,{children:"Bits"}),` zusammen gruppieren kann, damit wir diese Daten weiter
interpretieren können. Wir haben bereits gesehen das wir mit dem `,e.jsx(n.code,{children:"Byte 0110 0001"})," den Buchstaben ",e.jsx(n.code,{children:"a"})," abbilden können. Wir können also mit ",e.jsx(n.code,{children:"Bytes"}),` bereits
Text abbilden. Nun möchten wir aber noch Bilder beschreiben können. Dafür
müssen wir die `,e.jsx(n.code,{children:"Bits"}),` so gruppieren, das wir die Farben von einzelnen Pixeln
beschreiben können. Das kommt daher, das Computerdisplays pro Pixel 3 LEDs
haben, die jeweils `,e.jsx(n.code,{children:"rot"}),", ",e.jsx(n.code,{children:"grün"})," und ",e.jsx(n.code,{children:"blau"}),` sind. Wenn Sie das Licht von diesen
LEDs mischen, dann können Sie jede beliebige Farbe darstellen. Sie müssen nur
sagen wie stark jedes LED leuchten soll. Aus dieser Idee ergibt sich das
`,e.jsx(n.code,{children:"RBG"}),"-Farbschema."]}),`
`,e.jsxs(n.p,{children:["Wir müssen nun also die Intensitäten von ",e.jsx(n.code,{children:"rot"}),", ",e.jsx(n.code,{children:"grün"})," und ",e.jsx(n.code,{children:"blau"}),` jeweils in
`,e.jsx(n.code,{children:"Bits"}),` angeben. Damit mir möglichst feine Abstufungen haben, hat man sich für
256 Werte pro Farbe entschieden. Wir können ein Pixel also mit genau 3 `,e.jsx(n.code,{children:"Bytes"}),`
beschreiben. Wenn wir also nur Rot möchten, dann können wir das mit den
folgenden 3 `,e.jsx(n.code,{children:"Bytes"})," beschreiben."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`11111111 00000000 00000000
`})}),`
`,e.jsxs(n.p,{children:[`Das ist aber unglaublich aufwendig und Fehler können schnell passieren, wenn
man mal in einer Stelle verrutscht. Deshalb nehmen wir das Hexadezimalsystem
zur Hilfe und können die gleiche Farbe dann einfach so schreiben: `,e.jsx(n.code,{children:"FF 00 00"}),`.
Dieses Format ist so verbreitet, das man dafür eine eigene Schreibweise
eingeführt hat: `,e.jsx(n.code,{children:"#FF0000"}),"."]}),`
`,e.jsx(n.p,{children:"Hier finden Sie eine Anwendung die Ihnen die Farbe direkt darstellen kann."}),`
`,e.jsx(L,{}),`
`,e.jsxs(B,{title:"Farben mischen",children:[e.jsx(n.p,{children:`Sie kennen bereits das mischen von Wasserfarben. Diese Art von Farben
mischen, nennt man Farbsubtraktion, da die unterschiedlichen Farbpigmente
das Licht absorbieren. Also jede weitere Farbe absorbiert mehr Licht.`}),e.jsxs(n.p,{children:[`Die Mischung von Farben die wir auf dem Bildschirm haben, funktioniert ganz
anders. Da kommt immer mehr Licht dazu, deshalb sagt man zu dieser Art
Farbaddition. Mit Farbaddition kommen Sie auf ganz andere Farben wie mit
der Farbsubtraktion. Zum Beispiel erreichen Sie weiss, indem Sie alle
Farben voll aktivieren, also mit `,e.jsx(n.code,{children:"#FFFFFF"}),`. Und schwarz erhalten Sie wenn
Sie alle Farben komplett deaktivieren, also `,e.jsx(n.code,{children:"#000000"}),"."]}),e.jsxs(n.p,{children:["Finden Sie heraus was die folgenden ",e.jsx(n.code,{children:"Bytes"}),` für eine Farbe ergeben.
Versuchen Sie zuerst zu raten, geben Sie es dann in den Farbrechner oben
ein.`]}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"#FF00FF"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"#00FFFF"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"#A33ECE"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"#626262"})}),`
`]}),e.jsx(n.p,{children:"Versuchen Sie die Hexwerte für die folgenden Farben zu finden:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(b,{hex:"#FFFF00"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(b,{hex:"#FF00FF"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(b,{hex:"#00FFFF"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(b,{hex:"#000000"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(b,{hex:"#FFFFFF"}),`
`]}),`
`]})]}),`
`,e.jsx(n.h3,{children:"Bilder"}),`
`,e.jsxs(n.p,{children:[`Wir wissen nun wie man Farben beschreiben kann, jetzt möchten wir aber Bilder
beschreiben. Wir schauen uns dafür ein Bildformat an, das so eigentlich nicht
mehr verwendet wird, das aber praktisch zum lernen ist. Das Format heisst `,e.jsx(n.code,{children:"PPM"}),`
und steht für `,e.jsx(n.code,{children:"Portable Pixmap Format"}),`. Im Gegensatz zu den häufig verwendeten
Formaten wir `,e.jsx(n.code,{children:"JPG"})," oder ",e.jsx(n.code,{children:"PNG"}),", ist ",e.jsx(n.code,{children:"PPM"}),` nicht komprimiert. Das bedeutet das
jedes einzelne Pixel mit all seinen Farbwerten beschrieben wird. Das Format
selber ist sehr einfach aufgebaut, hier finden Sie ein Beispiel dazu:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`P3
2
2
FF
00 FF 00 FF 00 00
A2 B5 18 3F 3F 3F
`})}),`
`,e.jsxs(n.p,{children:[`Die erste Zeile beschreibt welche Version von dem Format verwendet werden soll.
`,e.jsx(n.code,{children:"P1"})," und ",e.jsx(n.code,{children:"P2"}),` wären Binär oder nur Graustufen. Daher arbeiten wir nur mit dem
`,e.jsx(n.code,{children:"P3"}),` Format. In unserer Anwendung sind die anderen Formate gar nicht definiert.
Die nächsten beiden Zeilen geben die `,e.jsx(n.code,{children:"Breite"})," und die ",e.jsx(n.code,{children:"Höhe"}),` des Bildes in
Pixeln an. Die Zeile 4 gibt den maximalen Wert an. Der ist bei uns immer `,e.jsx(n.code,{children:"FF"}),`,
angeben müssen wir ihn dennoch. Alles was danach kommt, sind die einzelnen
Pixel. Hier spielt es keine Rolle ob Sie diese auf einer Zeile oder auf
mehreren verteilt schreiben. Hier wird einfach ein `,e.jsx(n.code,{children:"Byte"}),` nach dem anderen
gelesen und als Farbkanal für den entsprechenden Pixel interpretiert. Das
Format das hier gewählt wurde, soll das ganze ein wenig übersichtlicher machen.
So entspricht das Format genau der Anordnung der Pixel im Bild selber.`]}),`
`,e.jsx(A,{ppmS:String.raw`P3
2
2
FF
00 FF 00 FF 00 00
A2 B5 18 3F 3F 3F`}),`
`,e.jsxs(B,{title:"Aufgaben: Bilder erstellen",children:[e.jsx(n.p,{children:"Erstellen Sie eigene Bilder mit diesem Format."}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Erstellen Sie ein ",e.jsx(n.code,{children:"2x2"})," Bild, das alle Grundfarben und weiss enhält."]}),`
`,e.jsxs(n.li,{children:["Erstellen Sie ein ",e.jsx(n.code,{children:"2x2"})," Bild, das 4 unterschiedliche Grüntöne enthält."]}),`
`,e.jsxs(n.li,{children:["Erstellen Sie ein ",e.jsx(n.code,{children:"3x3"})," Bild, mit 9 unterschiedlichen Farben."]}),`
`,e.jsxs(n.li,{children:["Erstellen Sie ein ",e.jsx(n.code,{children:"4x4"}),` Bild, mit einem Farbverlauf. Starten Sie oben
links mit Ihrer Lieblingsfarbe und unten rechts mit einer weiteren Farbe.
Der Farbverlauf soll diagnal sein, von Ihrer Lieblingsfarbe zur zweiten
Farbe.`]}),`
`]})]})]})}function $(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(k,{...s})}):k(s)}export{$ as default};
