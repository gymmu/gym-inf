import{r as s,j as t}from"./react-vendor-7TcISLYx.js";import"./vendor-BpcXj_Y6.js";import"./monaco-CPFjTESt.js";import"./reveal-Rylxx4kG.js";const k=[{id:"intro",title:"Willkommen in der Welt der Bits und Bytes!",sceneHeight:180,illustration:`
      <svg viewBox="0 0 400 600" class="story-scroll__scene-illustration">
        <rect x="0" y="300" width="400" height="300" fill="#8ec07c" opacity="0.3"/>
        <circle cx="320" cy="100" r="60" fill="#fabd2f" opacity="0.6"/>
        <text x="200" y="280" text-anchor="middle" font-size="56" font-weight="bold" fill="#d3869b">Binaria</text>
        <text x="200" y="320" text-anchor="middle" font-size="20" fill="#8ec07c">🏰 Das Land der kleinen Bits</text>
        <circle cx="50" cy="200" r="20" fill="#fb4934" opacity="0.5"/>
        <circle cx="350" cy="220" r="15" fill="#83a598" opacity="0.5"/>
        <rect x="80" y="150" width="30" height="30" fill="#b8bb26" opacity="0.4" rx="5"/>
        <rect x="300" y="140" width="30" height="30" fill="#d3869b" opacity="0.4" rx="5"/>
        <text x="200" y="450" text-anchor="middle" font-size="24" fill="#8ec07c">✨ Willkommen ✨</text>
        <text x="200" y="490" text-anchor="middle" font-size="18" fill="#fabd2f">Scroll um die Geschichte zu entdecken</text>
      </svg>
    `,facts:[{text:"Ganz weit weg, in einem winzigen Land namens **Binaria**, lebt ein kleiner Kerl namens Biit.",highlight:"Binaria"},{text:"Biit ist winzig klein, aber hat eine enorme Eigenschaft: Er kann genau **zwei Zustände** annehmen – **0** oder **1**.",highlight:"zwei Zustände"},{text:"Nie mehr, nie weniger! Biit ist ein echtes Mitglied des Volkes der **Binären**.",highlight:"Binären"}]},{id:"bytes",title:"Bits kommen nie allein!",sceneHeight:180,illustration:`
      <svg viewBox="0 0 400 600" class="story-scroll__scene-illustration">
        <rect x="0" y="400" width="400" height="200" fill="#8ec07c" opacity="0.2"/>
        ${[0,1,2,3,4,5,6,7].map(e=>`
          <rect x="${50+e*42}" y="200" width="36" height="36" fill="#fe8019" rx="4" opacity="0.7"/>
          <text x="${68+e*42}" y="224" text-anchor="middle" font-size="18" font-weight="bold" fill="#282828">${e%2===0?"1":"0"}</text>
        `).join("")}
        <rect x="40" y="250" width="320" height="35" fill="none" stroke="#d3869b" stroke-width="2" stroke-dasharray="8,6" rx="12"/>
        <text x="200" y="274" text-anchor="middle" font-size="18" fill="#d3869b" font-weight="bold">←────── Byte (8 Bits) ──────→</text>
        <text x="200" y="380" text-anchor="middle" font-size="28" fill="#8ec07c" font-weight="bold">8 Bits = 1 Byte</text>
        <circle cx="100" cy="480" r="12" fill="#fabd2f" opacity="0.5"/>
        <circle cx="300" cy="480" r="12" fill="#83a598" opacity="0.5"/>
      </svg>
    `,facts:[{text:"Die Binären – oder auch **Bits** genannt – kommen immer in Gruppen vor.",highlight:"immer in Gruppen"},{text:"Und diese Gruppen sind immer genau **8 Bits** gross.",highlight:"8 Bits"},{text:"So eine Gruppe nennt man ein **Byte**.",highlight:"Byte"}]},{id:"beobachtung",title:"Das seltsame Verhalten der Bits",sceneHeight:200,illustration:`
      <svg viewBox="0 0 400 600" class="story-scroll__scene-illustration">
        <ellipse cx="200" cy="100" rx="80" ry="50" fill="#8ec07c" opacity="0.6"/>
        <circle cx="200" cy="100" r="35" fill="#282828"/>
        <circle cx="210" cy="90" r="10" fill="#ffffff" opacity="0.8"/>
        ${[1,2,3,4,5,6,7,8].map(e=>`
          <line x1="200" y1="150" x2="${80+e*28}" y2="250" stroke="#fabd2f" stroke-width="1.5" opacity="0.4"/>
        `).join("")}
        ${[0,1,2,3,4,5,6,7].map(e=>`
          <rect x="${60+e*38}" y="250" width="32" height="32" fill="#fe8019" rx="4"/>
          <text x="${76+e*38}" y="273" text-anchor="middle" font-size="16" font-weight="bold" fill="#282828">${e%2===0?"1":"0"}</text>
        `).join("")}
        <text x="200" y="380" text-anchor="middle" font-size="22" fill="#d3869b">👁️ Beobachtung = Festlegung</text>
        <text x="200" y="420" text-anchor="middle" font-size="18" fill="#83a598">Danach: Nie wieder wechseln!</text>
        <circle cx="100" cy="500" r="15" fill="#fabd2f" opacity="0.4"/>
        <circle cx="300" cy="500" r="15" fill="#83a598" opacity="0.4"/>
      </svg>
    `,facts:[{text:"Hier kommt etwas **Very Seltsames**: Bits sind zwar binär, aber immer wenn sie **beobachtet** werden, haben sie einen festen Zustand.",highlight:"beobachtet"},{text:"Diesen Zustand können sie **nicht mehr verändern**! Wenn sie in Gruppen unterwegs sind, nimmt jedes Bit seinen eigenen Zustand an.",highlight:"nicht mehr verändern"},{text:"Und dieser Zustand wird **nie gewechselt** – für immer!",highlight:"nie gewechselt"}]},{id:"rangordnung",title:"Die unumstössliche Rangordnung",sceneHeight:180,illustration:`
      <svg viewBox="0 0 400 600" class="story-scroll__scene-illustration">
        <rect x="0" y="450" width="400" height="150" fill="#8ec07c" opacity="0.2"/>
        ${[0,1,2,3,4,5,6,7].map(e=>`
          <rect x="${40+e*44}" y="${350-e*25}" width="36" height="36" fill="#fe8019" rx="4" opacity="${.5+e/8*.5}"/>
          <text x="${58+e*44}" y="${372-e*25}" text-anchor="middle" font-size="16" font-weight="bold" fill="#282828">${e%2===0?"1":"0"}</text>
        `).join("")}
        <text x="200" y="200" text-anchor="middle" font-size="22" fill="#fabd2f" font-weight="bold">Rang 7 ← Höchster</text>
        <line x1="140" y1="210" x2="260" y2="210" stroke="#fabd2f" stroke-width="1.5" opacity="0.5"/>
        <text x="200" y="400" text-anchor="middle" font-size="22" fill="#83a598" font-weight="bold">Rang 0 → Tiefster</text>
        <text x="200" y="500" text-anchor="middle" font-size="20" fill="#d3869b">Die Rangordnung ändert sich NIEMALS!</text>
      </svg>
    `,facts:[{text:"Bei Bytes ist die **Rangordnung** in der Gruppe sehr wichtig und ändert sich **niemals**.",highlight:"Rangordnung"},{text:"Der höchste Rang ist das **linke Bit** – es hat den Rang **7**.",highlight:"linke Bit"},{text:"Der tiefste Rang ist das **rechte Bit** – es hat den Rang **0**.",highlight:"rechte Bit"}]},{id:"professor",title:"Professor ASCII taucht auf!",sceneHeight:200,illustration:`
      <svg viewBox="0 0 400 600" class="story-scroll__scene-illustration">
        <rect x="0" y="450" width="400" height="150" fill="#8ec07c" opacity="0.2"/>
        <circle cx="200" cy="100" r="55" fill="#83a598" opacity="0.8"/>
        <circle cx="182" cy="88" r="8" fill="#282828"/>
        <circle cx="218" cy="88" r="8" fill="#282828"/>
        <rect x="170" y="115" width="60" height="10" fill="#ffffff" rx="3"/>
        <text x="200" y="170" text-anchor="middle" font-size="24" font-weight="bold" fill="#fabd2f">Prof. ASCII</text>
        <rect x="50" y="200" width="300" height="220" fill="#3c3836" rx="10" stroke="#d3869b" stroke-width="2"/>
        ${[0,1,2,3,4].map(e=>[0,1,2,3,4,5,6,7].map(i=>`<rect x="${58+i*36}" y="${208+e*42}" width="32" height="36" fill="#504945" rx="2"/>`).join("")).join("")}
        <text x="200" y="460" text-anchor="middle" font-size="20" fill="#8ec07c">Die ASCII-Tabelle (Auszug)</text>
        <text x="200" y="510" text-anchor="middle" font-size="18" fill="#d3869b">256 Gruppen zu erforschen!</text>
      </svg>
    `,facts:[{text:"**Professor ASCII** untersucht diese Bytes. Ihm ist aufgefallen, dass es genau **256 unterschiedliche Gruppen** geben kann!",highlight:"256 Gruppen"},{text:"Um diese besser zu erforschen, ordnet er sie in einer grossen Tabelle an – der berühmten **ASCII-Tabelle**.",highlight:"ASCII-Tabelle"},{text:"Aber er hat nur die ersten **128 Gruppen** untersucht. Die weiteren Gruppen existieren nur in seiner Theorie!",highlight:"128 Gruppen"}]},{id:"grenze",title:"Die geheimnisvolle Grenze",sceneHeight:180,illustration:`
      <svg viewBox="0 0 400 600" class="story-scroll__scene-illustration">
        <rect x="0" y="400" width="400" height="200" fill="#8ec07c" opacity="0.2"/>
        <rect x="50" y="80" width="300" height="300" fill="#3c3836" rx="10" stroke="#d3869b" stroke-width="2"/>
        ${[0,1,2,3,4].map(e=>[0,1,2,3,4,5,6,7].map(i=>{const l=e*8+i<128;return`<rect x="${58+i*36}" y="${88+e*58}" width="32" height="52" fill="${l?"#504945":"#1d2021"}" rx="2" opacity="${l?1:.3}"/>`}).join("")).join("")}
        <line x1="200" y1="80" x2="200" y2="380" stroke="#fb4934" stroke-width="3" stroke-dasharray="10,6"/>
        <text x="200" y="60" text-anchor="middle" font-size="18" fill="#fb4934" font-weight="bold">← Erforscht | Theoretisch →</text>
        <text x="330" y="250" font-size="64" fill="#fabd2f" opacity="0.6">?</text>
      </svg>
    `,facts:[{text:"Professor ASCII hat allerdings nur die ersten **128 Gruppen** untersucht.",highlight:"128 Gruppen"},{text:"Die weiteren Gruppen existieren nur in seiner **Theorie** und sind daher nicht in seiner Tabelle vermerkt.",highlight:"Theorie"},{text:"Was mag sich hinter dieser **geheimnisvollen Grenze** verbergen?",highlight:"geheimnisvollen Grenze"}]},{id:"kollegen",title:"Zwei neue Forscher kommen hinzu!",sceneHeight:180,illustration:`
      <svg viewBox="0 0 400 600" class="story-scroll__scene-illustration">
        <rect x="0" y="450" width="400" height="150" fill="#8ec07c" opacity="0.2"/>
        <circle cx="120" cy="120" r="55" fill="#83a598" opacity="0.8"/>
        <circle cx="102" cy="108" r="8" fill="#282828"/>
        <circle cx="138" cy="108" r="8" fill="#282828"/>
        <rect x="95" y="135" width="50" height="8" fill="#b8bb26" rx="4"/>
        <text x="120" y="200" text-anchor="middle" font-size="20" font-weight="bold" fill="#8ec07c">Dr. Dezimal</text>
        <text x="120" y="235" text-anchor="middle" font-size="32" fill="#fabd2f">10</text>
        <circle cx="280" cy="120" r="55" fill="#d3869b" opacity="0.8"/>
        <circle cx="262" cy="108" r="8" fill="#282828"/>
        <circle cx="298" cy="108" r="8" fill="#282828"/>
        <rect x="255" y="135" width="50" height="8" fill="#fe8019" rx="4"/>
        <text x="280" y="200" text-anchor="middle" font-size="20" font-weight="bold" fill="#d3869b">Dr. Hex</text>
        <text x="280" y="235" text-anchor="middle" font-size="32" fill="#fe8019">16</text>
        <text x="200" y="350" text-anchor="middle" font-size="22" fill="#fabd2f">😵‍💫 Verwirrte Tabelle</text>
        <text x="200" y="390" text-anchor="middle" font-size="18" fill="#83a598">+ 😊 = 📐 Ordnung</text>
      </svg>
    `,facts:[{text:"Professor ASCII hat **2 weitere Forschungskollegen**: **Dr. Dezimal** und **Dr. Hex**.",highlight:"2 Forschungskollegen"},{text:"Beiden ist aufgefallen, dass Professor ASCIIs Tabelle **keine richtige Reihenfolge** aufweist.",highlight:"keine richtige Reihenfolge"},{text:"Und für die meisten Menschen ist sie **total verwirrend**! Also machen sie sich ans Werk.",highlight:"total verwirrend"}]},{id:"dezimal_rechnung",title:"Dr. Dezimals cleverer Trick",sceneHeight:200,illustration:`
      <svg viewBox="0 0 400 600" class="story-scroll__scene-illustration">
        <rect x="0" y="450" width="400" height="150" fill="#8ec07c" opacity="0.2"/>
        <text x="200" y="50" text-anchor="middle" font-size="22" fill="#fabd2f" font-weight="bold">Beispiel: 10110000</text>
        ${[1,0,1,1,0,0,0,0].map((e,i)=>`
          <rect x="${60+i*40}" y="70" width="34" height="34" fill="${e?"#fe8019":"#504945"}" rx="4"/>
          <text x="${77+i*40}" y="93" text-anchor="middle" font-size="18" font-weight="bold" fill="#282828">${e}</text>
          <text x="${77+i*40}" y="125" text-anchor="middle" font-size="14" fill="#8ec07c">${7-i}</text>
        `).join("")}
        <text x="77" y="145" text-anchor="middle" font-size="12" fill="#83a598">Rang</text>
        <rect x="30" y="160" width="340" height="280" fill="#3c3836" rx="10" stroke="#8ec07c" stroke-width="2"/>
        <text x="200" y="210" text-anchor="middle" font-size="20" fill="#fabd2f" font-weight="bold">2⁷ + 2⁵ + 2⁴</text>
        <text x="200" y="245" text-anchor="middle" font-size="20" fill="#d3869b">= 128 + 32 + 16</text>
        <text x="200" y="290" text-anchor="middle" font-size="28" fill="#8ec07c" font-weight="bold">= 176</text>
        <text x="200" y="340" text-anchor="middle" font-size="18" fill="#83a598">Position in der ASCII-Tabelle!</text>
        <text x="200" y="480" text-anchor="middle" font-size="20" fill="#8ec07c">Dr. Dezimal 🧮</text>
      </svg>
    `,facts:[{text:"Dr. Dezimal gibt jedem Bit von links nach rechts einen **Rang**: Das linke Bit hat Rang **7**, das rechte Bit hat Rang **0**.",highlight:"Rang 7 bis 0"},{text:"Die Position berechnet sich so: Alle Bits mit Zustand **1** nehmen, immer **2<sup>Rang</sup>** rechnen, und alles **addieren**!",highlight:"2<sup>Rang</sup>"},{text:"Für **10110000** ergibt das: **2⁷ + 2⁵ + 2⁴ = 128 + 32 + 16 = 176**!",highlight:"176"}]},{id:"hex_kritik",title:"Dr. Hex ist nicht zufrieden!",sceneHeight:180,illustration:`
      <svg viewBox="0 0 400 600" class="story-scroll__scene-illustration">
        <rect x="0" y="400" width="400" height="200" fill="#8ec07c" opacity="0.2"/>
        <circle cx="200" cy="120" r="60" fill="#d3869b" opacity="0.8"/>
        <circle cx="180" cy="108" r="8" fill="#282828"/>
        <circle cx="220" cy="108" r="8" fill="#282828"/>
        <path d="M175 145 Q200 125 225 145" stroke="#282828" stroke-width="3" fill="none"/>
        <rect x="130" y="220" width="140" height="60" fill="#504945" rx="8"/>
        <text x="200" y="260" text-anchor="middle" font-size="36" font-weight="bold" fill="#fb4934">256</text>
        <text x="200" y="310" text-anchor="middle" font-size="20" fill="#fabd2f">3 Stellen?!</text>
        <text x="200" y="360" text-anchor="middle" font-size="18" fill="#d3869b">😤 "Das geht besser!"</text>
      </svg>
    `,facts:[{text:'Dr. Hex findet das viel zu umständlich! **"3-stellige Zahlen? Das ist doch viel zu viel Platz!"**',highlight:"3-stellige Zahlen"},{text:"Er forscht an einer Möglichkeit, die Nummerierung mit **genau nur 2 Stellen** zu schreiben.",highlight:"genau nur 2 Stellen"},{text:"Dafür muss er die Ziffern erweitern – aber welche?",highlight:"Ziffern erweitern"}]},{id:"hex_loesung",title:"Dr. Hexs brillante Lösung",sceneHeight:180,illustration:`
      <svg viewBox="0 0 400 600" class="story-scroll__scene-illustration">
        <rect x="0" y="450" width="400" height="150" fill="#8ec07c" opacity="0.2"/>
        ${"0123456789ABCDEF".split("").map((e,i)=>{const a=30+i*26,l=60+i%4*45,f=i<10;return`<rect x="${a}" y="${l}" width="22" height="35" fill="${f?"#83a598":"#fe8019"}" rx="4" opacity="0.7"/>
                  <text x="${a+11}" y="${l+25}" text-anchor="middle" font-size="18" font-weight="bold" fill="#282828">${e}</text>`}).join("")}
        <rect x="80" y="250" width="240" height="60" fill="#3c3836" rx="10" stroke="#fabd2f" stroke-width="2"/>
        <text x="200" y="285" text-anchor="middle" font-size="28" font-weight="bold" fill="#fabd2f">00 bis FF</text>
        <text x="200" y="320" text-anchor="middle" font-size="18" fill="#8ec07c">= 256 Werte ✓</text>
        <text x="200" y="400" text-anchor="middle" font-size="22" fill="#8ec07c">Dr. Hex 😎</text>
      </svg>
    `,facts:[{text:"Seine Idee ist genial: Er erweitert die Ziffern auf **0-F**!",highlight:"0-F"},{text:"Damit können alle **256 Bytes** von **00** bis **FF** mit genau **zwei Stellen** durchnummeriert werden.",highlight:"00 bis FF"},{text:"Und das Beste: **Keine einzige Zahl bleibt übrig!**",highlight:"Keine einzige Zahl"}]},{id:"hex_pride",title:"Der Stolz von Dr. Hex",sceneHeight:180,illustration:`
      <svg viewBox="0 0 400 600" class="story-scroll__scene-illustration">
        <rect x="0" y="450" width="400" height="150" fill="#8ec07c" opacity="0.2"/>
        <circle cx="200" cy="100" r="60" fill="#d3869b" opacity="0.8"/>
        <circle cx="180" cy="88" r="8" fill="#282828"/>
        <circle cx="220" cy="88" r="8" fill="#282828"/>
        <path d="M175 120 Q200 145 225 120" stroke="#282828" stroke-width="3" fill="none"/>
        <text x="200" y="175" text-anchor="middle" font-size="22" font-weight="bold" fill="#fabd2f">Dr. Hex 😎</text>
        <rect x="30" y="200" width="160" height="180" fill="#3c3836" rx="10" stroke="#83a598" stroke-width="2"/>
        <text x="110" y="240" text-anchor="middle" font-size="18" fill="#8ec07c" font-weight="bold">Dr. Dezimal</text>
        <text x="110" y="290" text-anchor="middle" font-size="32" fill="#fabd2f">~25%</text>
        <text x="110" y="325" text-anchor="middle" font-size="14" fill="#83a598">von 1000</text>
        <rect x="210" y="200" width="160" height="180" fill="#3c3836" rx="10" stroke="#fe8019" stroke-width="2"/>
        <text x="290" y="240" text-anchor="middle" font-size="18" fill="#d3869b" font-weight="bold">Dr. Hex</text>
        <text x="290" y="290" text-anchor="middle" font-size="32" fill="#fabd2f">100%</text>
        <text x="290" y="325" text-anchor="middle" font-size="14" fill="#fe8019">von 256</text>
      </svg>
    `,facts:[{text:"Dr. Hex ist besonders stolz darauf, dass **keine einzige Zahl übrig bleibt**.",highlight:"keine einzige Zahl"},{text:'Er kritisiert Dr. Dezimal: **"Du verwendest nur ca. 25% aller dreistelligen Zahlen!"**',highlight:"25%"},{text:'**"Meine Theorie ist viel besser und dank der Zweistelligkeit auch viel kompakter!"**',highlight:"Zweistelligkeit"}]},{id:"ende",title:"Das Ende – oder nur der Anfang?",sceneHeight:150,illustration:`
      <svg viewBox="0 0 400 600" class="story-scroll__scene-illustration">
        <circle cx="200" cy="150" r="80" fill="#fabd2f" opacity="0.3"/>
        <circle cx="100" cy="300" r="25" fill="#d3869b" opacity="0.7"/>
        <text x="100" y="306" text-anchor="middle" font-size="14" fill="#282828">Biit</text>
        <circle cx="170" cy="300" r="25" fill="#83a598" opacity="0.7"/>
        <text x="170" y="306" text-anchor="middle" font-size="12" fill="#282828">ASCII</text>
        <circle cx="240" cy="300" r="25" fill="#8ec07c" opacity="0.7"/>
        <text x="240" y="306" text-anchor="middle" font-size="12" fill="#282828">Dez</text>
        <circle cx="310" cy="300" r="25" fill="#fe8019" opacity="0.7"/>
        <text x="310" y="306" text-anchor="middle" font-size="12" fill="#282828">Hex</text>
        <text x="200" y="400" text-anchor="middle" font-size="24" fill="#fabd2f">✨ Die Welt der Bits wartet! ✨</text>
        <text x="200" y="450" text-anchor="middle" font-size="20" fill="#8ec07c">Was möchtest du als Nächstes entdecken?</text>
      </svg>
    `,facts:[{text:"Die Welt der Bits und Bytes ist voller **faszinierender Geheimnisse**.",highlight:"faszinierender Geheimnisse"},{text:"Biit, die Binären, Professor ASCII, Dr. Dezimal und Dr. Hex – sie alle haben uns gezeigt, wie kleinste Helden die Grundlage unserer digitalen Welt bilden.",highlight:"kleinste Helden"},{text:"**Was möchtest du als Nächstes entdecken?**",highlight:"Was möchtest du?"}]}];function B(){const e=s.useRef(null),[i,a]=s.useState(0),[l,f]=s.useState(0),[y,g]=s.useState(new Set);return s.useEffect(()=>{const n=()=>{if(!e.current)return;const r=window.scrollY;f(r);const h=document.documentElement.scrollHeight-window.innerHeight,d=h>0?r/h:0;a(d)};return window.addEventListener("scroll",n,{passive:!0}),()=>window.removeEventListener("scroll",n)},[]),s.useEffect(()=>{const n=new IntersectionObserver(h=>{h.forEach(d=>{if(d.isIntersecting){const x=d.target.getAttribute("data-section-id");x&&g(m=>new Set([...m,x]))}})},{threshold:.2}),r=document.querySelectorAll("[data-section-id]");for(const h of r)n.observe(h);return()=>n.disconnect()},[]),t.jsxs("div",{className:"story-scroll",ref:e,children:[t.jsx("div",{className:"story-scroll__progress",children:t.jsx("div",{className:"story-scroll__progress-bar",style:{width:`${i*100}%`}})}),t.jsx("section",{className:"story-scroll__hero",children:t.jsxs("div",{className:"story-scroll__hero-content",style:{transform:`translateY(${l*.4}px)`,opacity:Math.max(0,1-l/400)},children:[t.jsx("h1",{className:"story-scroll__title",children:"Biit und die Welt der Bytes"}),t.jsx("p",{className:"story-scroll__subtitle",children:"Eine verspielte Geschichte über die kleinen Helden der digitalen Welt"}),t.jsxs("div",{className:"story-scroll__scroll-indicator",children:[t.jsx("span",{children:"Scroll nach unten"}),t.jsx("div",{className:"story-scroll__arrow",children:"↓"})]})]})}),k.map((n,r)=>t.jsx(D,{section:n,index:r,scrollY:l,isVisible:y.has(n.id)},n.id)),t.jsxs("footer",{className:"story-scroll__footer",children:[t.jsx("p",{children:"✨ Die Geschichte von Biit und der Welt der Bytes ✨"}),t.jsx("p",{className:"story-scroll__footer-note",children:t.jsxs("em",{children:["Quelle:"," ",t.jsx("a",{href:"/src/data/biit-und-die-welt-der-bytes.md",children:"biit-und-die-welt-der-bytes.md"})]})})]})]})}function D({section:e,index:i,isVisible:a}){const l=s.useRef(null),[f,y]=s.useState(0),g=e.facts.length;s.useEffect(()=>{const c=()=>{if(!l.current)return;const o=l.current.getBoundingClientRect(),u=o.top+window.scrollY,v=o.height,w=window.innerHeight,z=window.scrollY-u+w,_=Math.max(0,Math.min(1,z/(v-w)));y(_)};return window.addEventListener("scroll",c,{passive:!0}),c(),()=>window.removeEventListener("scroll",c)},[]);const n=f*(g-1),r=Math.floor(n),h=Math.min(r+1,g-1),d=n-r,x=s.useRef(null),[m,p]=s.useState(0);return s.useEffect(()=>{const c=()=>{if(!x.current)return;const u=x.current.getBoundingClientRect().top-window.innerHeight/2;p(u*.15)};return window.addEventListener("scroll",c,{passive:!0}),()=>window.removeEventListener("scroll",c)},[]),t.jsxs("section",{ref:x,className:`story-scroll__section ${a?"is-visible":""}`,"data-section-id":e.id,style:{"--section-index":i,"--section-height":`${e.sceneHeight}vh`},children:[t.jsx("div",{className:"story-scroll__section-bg",style:{transform:`translateY(${m}px)`},children:t.jsx("div",{className:"story-scroll__section-illustration",dangerouslySetInnerHTML:{__html:e.illustration}})}),t.jsxs("div",{className:"story-scroll__facts-stack",children:[t.jsx("div",{className:"story-scroll__facts-container",style:{transform:`translateY(${-d*100}%)`},children:e.facts.map((c,o)=>t.jsxs("div",{className:`story-scroll__fact ${o===r?"is-active":""} ${o===h&&d>.5?"is-entering":""}`,children:[t.jsx("div",{className:"story-scroll__fact-content",dangerouslySetInnerHTML:{__html:c.text}}),c.highlight&&t.jsx("span",{className:"story-scroll__fact-highlight",children:c.highlight})]},`fact-${e.id}-${o}`))}),t.jsx("div",{className:"story-scroll__fact-progress",children:e.facts.map((c,o)=>t.jsx("div",{className:`story-scroll__fact-dot ${o===r?"is-active":""}`},`dot-${e.id}-${o}`))})]}),t.jsx("h2",{className:"story-scroll__section-title",children:e.title})]})}function b(e){const i={h2:"h2",h3:"h3",p:"p",...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(i.h2,{children:"FMS Theorie"}),`
`,t.jsx(i.p,{children:"Theorie für die FMS."}),`
`,t.jsx(i.h3,{children:"Willkommen in der Welt der Bits und Bytes"}),`
`,t.jsx(i.p,{children:"Tauche ein in eine verspielte Geschichte über die kleinen Helden der digitalen Welt:"}),`
`,t.jsx(B,{})]})}function I(e={}){const{wrapper:i}=e.components||{};return i?t.jsx(i,{...e,children:t.jsx(b,{...e})}):b(e)}export{I as default};
