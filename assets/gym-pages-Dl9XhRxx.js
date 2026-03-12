import{j as e,r as o,h as Y,d as X,e as ze}from"./react-vendor-Dr_i8qOj.js";import{t as ce}from"./vendor-C_cZoT-s.js";function m({children:t,classes:s=""}){return e.jsx("div",{className:`full-width content-grid highlight ${s}`,children:t})}const ye="_inline_1yelo_1",_e="_display_1yelo_5",Ee="_wrapper_1yelo_9",se={inline:ye,display:_e,wrapper:Ee};function oe({children:t}){const s=o.useRef(null);return o.useEffect(()=>{ce.render(t,s.current,{throwOnError:!1})},[s]),e.jsx("span",{className:se.inline,ref:s,children:t})}function Le({children:t}){const s=o.useRef(null);return o.useEffect(()=>{ce.render(t,s.current,{displayMode:!0,throwOnError:!1})},[s]),e.jsx("div",{className:se.wrapper,children:e.jsx("div",{ref:s,className:se.display,children:t})})}function te({children:t}){return e.jsxs("div",{className:"highlight learning full-width content-grid",children:[e.jsx("h2",{id:"goals",children:"Lernziele"}),t]})}function _({url:t}){return e.jsx("center",{children:e.jsx("iframe",{width:"560",height:"315",src:`https://www.youtube.com/embed/${t}`,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})}const De="_container_mf5zg_2",Be="_codeBlockContainer_mf5zg_13",Te="_header_mf5zg_32",Fe="_leftHeader_mf5zg_43",Ae="_language_mf5zg_50",Ce="_exampleBadge_mf5zg_60",Ie="_hintBadge_mf5zg_73",Oe="_solutionBadge_mf5zg_86",Ne="_hintButton_mf5zg_99",$e="_solutionButton_mf5zg_123",Ze="_locked_mf5zg_146",Ke="_timer_mf5zg_160",We="_closeButton_mf5zg_172",Pe="_progressBar_mf5zg_192",He="_progressFill_mf5zg_200",Me="_solutionWrapper_mf5zg_211",Ve="_copyButton_mf5zg_226",x={container:De,codeBlockContainer:Be,header:Te,leftHeader:Fe,language:Ae,exampleBadge:Ce,hintBadge:Ie,solutionBadge:Oe,hintButton:Ne,solutionButton:$e,locked:Ze,timer:Ke,closeButton:We,progressBar:Pe,progressFill:He,solutionWrapper:Me,copyButton:Ve};function j({example:t,hint:s,solution:g,language:a="javascript",taskId:p}){const[z,T]=o.useState(!1),[f,P]=o.useState(!1),[F,u]=o.useState(!1),[y,L]=o.useState(!1),[D,S]=o.useState(30),[E,O]=o.useState(!1),[N,A]=o.useState(0),w=o.useRef(null),b=o.useRef(null),H=15,B=300;o.useEffect(()=>{if(!p||typeof window>"u"||typeof localStorage>"u")return;const k=`solution_lock_${p}`,C=localStorage.getItem(k);if(C){const h=Date.now(),I=parseInt(C,10);h<I?(O(!0),A(Math.ceil((I-h)/1e3))):localStorage.removeItem(k)}},[p]),o.useEffect(()=>{if(E&&N>0)return b.current=setInterval(()=>{A(k=>k<=1?(O(!1),p&&typeof window<"u"&&typeof localStorage<"u"&&localStorage.removeItem(`solution_lock_${p}`),b.current&&clearInterval(b.current),0):k-1)},1e3),()=>{b.current&&clearInterval(b.current)}},[E,N,p]),o.useEffect(()=>{if(f&&D>0)return w.current=setInterval(()=>{S(k=>{if(k<=1){if(P(!1),O(!0),p&&typeof window<"u"&&typeof localStorage<"u"){const C=Date.now()+B*1e3;localStorage.setItem(`solution_lock_${p}`,C.toString())}return A(B),w.current&&clearInterval(w.current),H}return k-1})},1e3),()=>{w.current&&clearInterval(w.current)}},[f,D,p]);const $=re(ie(t)),J=re(ie(s)),Z=re(ie(g)),U=async()=>{await navigator.clipboard.writeText($),u(!0),setTimeout(()=>u(!1),2e3)},M=async()=>{await navigator.clipboard.writeText(J),L(!0),setTimeout(()=>L(!1),2e3)},K=()=>{T(!z)},q=()=>{if(!E)if(f){if(P(!1),O(!0),w.current&&clearInterval(w.current),p){const k=Date.now()+B*1e3;localStorage.setItem(`solution_lock_${p}`,k.toString())}A(B),S(H)}else P(!0),S(H)},G=z||f,V=D/H*100,Q=k=>{const C=Math.floor(k/60),h=k%60;return`${C}:${h.toString().padStart(2,"0")}`};return e.jsxs("div",{className:x.container,children:[e.jsxs("div",{className:x.codeBlockContainer,children:[e.jsxs("div",{className:x.header,children:[e.jsxs("div",{className:x.leftHeader,children:[e.jsx("span",{className:x.language,children:a}),e.jsx("span",{className:x.exampleBadge,children:"Beispiel"})]}),e.jsx("button",{className:x.copyButton,onClick:U,"aria-label":"Code kopieren",title:"Code in Zwischenablage kopieren",children:F?"✓ Kopiert!":"Kopieren"})]}),e.jsx(Y,{language:a,style:X,showLineNumbers:!0,wrapLines:!0,customStyle:{margin:0,borderRadius:"0 0 8px 8px",fontSize:"0.9rem"},lineNumberStyle:{minWidth:"2.5em",paddingRight:"1em",color:"#928374",userSelect:"none"},children:$})]}),e.jsxs("div",{className:x.codeBlockContainer,children:[e.jsxs("div",{className:x.header,children:[e.jsx("div",{className:x.leftHeader,children:G?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:x.language,children:a}),e.jsx("span",{className:f?x.solutionBadge:x.hintBadge,children:f?"Lösung":"Hinweis"}),f&&e.jsxs("span",{className:x.timer,children:["⏱ ",D,"s"]}),e.jsx("button",{onClick:f?q:K,className:x.closeButton,title:"Schliessen",children:"✕"})]}):e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:K,className:x.hintButton,title:"Hinweis anzeigen",children:"💡 Hinweis"}),e.jsx("button",{onClick:q,className:`${x.solutionButton} ${E?x.locked:""}`,title:E?`Gesperrt für ${Q(N)}`:"Lösung anzeigen",disabled:E,children:E?`🔒 ${Q(N)}`:"✅ Lösung"})]})}),G&&!f&&e.jsx("button",{className:x.copyButton,onClick:M,"aria-label":"Code kopieren",title:"Code in Zwischenablage kopieren",children:y?"✓ Kopiert!":"Kopieren"})]}),f&&e.jsx("div",{className:x.progressBar,children:e.jsx("div",{className:x.progressFill,style:{width:`${V}%`}})}),z&&e.jsx(Y,{language:a,style:X,showLineNumbers:!0,wrapLines:!0,customStyle:{margin:0,borderRadius:"0 0 8px 8px",fontSize:"0.9rem"},lineNumberStyle:{minWidth:"2.5em",paddingRight:"1em",color:"#928374",userSelect:"none"},children:J}),f&&e.jsx("div",{className:x.solutionWrapper,children:e.jsx(Y,{language:a,style:X,showLineNumbers:!0,wrapLines:!0,customStyle:{margin:0,borderRadius:"0 0 8px 8px",fontSize:"0.9rem",userSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},lineNumberStyle:{minWidth:"2.5em",paddingRight:"1em",color:"#928374",userSelect:"none"},children:Z})})]})]})}function ie(t){return typeof t=="string"?t:Array.isArray(t)?t.join(""):String(t)}function re(t){const s=t.split(`
`);if(s[0]?.trim()===""&&s.shift(),s[s.length-1]?.trim()===""&&s.pop(),s.length===0)return"";const g=s.filter(a=>a.trim().length>0).reduce((a,p)=>{const z=p.match(/^\s*/)[0].length;return Math.min(a,z)},1/0);return s.map(a=>a.slice(g===1/0?0:g)).join(`
`)}function Ge(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{children:[e.jsx("h2",{children:"Aufgaben: Funktionen, Listen und Schleifen"}),e.jsx("p",{children:"Hier finden Sie 20 Aufgaben um Ihr Wissen über Funktionen, Listen und Schleifen zu festigen. Die ersten 15 Aufgaben sind einfacher, die letzten 5 etwas anspruchsvoller."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Tipp:"})," Erstellen Sie für jede Aufgabe eine neue Datei (z.B. ",e.jsx("pre",{children:"aufgabe-01.js"}),") und testen Sie Ihren Code mit"," ",e.jsx("pre",{children:"node aufgabe-01.js"}),"."]})]}),e.jsxs(m,{children:[e.jsx("h2",{children:"Hinweise zum Lösen der Aufgaben"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Beginnen Sie mit den einfachen Aufgaben und arbeiten Sie sich nach oben."}),e.jsx("li",{children:"Testen Sie Ihren Code mit verschiedenen Eingaben um sicherzustellen dass er funktioniert."}),e.jsxs("li",{children:["Bei den Kommandozeilen-Aufgaben: Vergessen Sie nicht"," ",e.jsx("pre",{children:"process.argv[2]"}),", ",e.jsx("pre",{children:"process.argv[3]"})," usw. zu verwenden."]}),e.jsxs("li",{children:["Verwenden Sie ",e.jsx("pre",{children:"Number()"})," um Strings in Zahlen umzuwandeln."]}),e.jsx("li",{children:"Bei den anspruchsvolleren Aufgaben: Brechen Sie das Problem in kleinere Schritte auf."}),e.jsx("li",{children:"Es gibt oft mehrere richtige Lösungen - wichtig ist dass Ihr Code funktioniert und Sie ihn verstehen."}),e.jsx("li",{children:"Verwenden Sie die Hinweise wenn Sie nicht weiterkommen - dort steht wo Sie den Code hinzufügen müssen."}),e.jsx("li",{children:"Schauen Sie sich die Lösung erst an wenn Sie es wirklich selbst versucht haben! Die Lösung verschwindet nach 15 Sekunden und ist dann für 5 Minuten gesperrt."})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Einfache Aufgaben (1-15)"}),e.jsx("h3",{children:"Aufgabe 1: Begrüssung"}),e.jsxs("p",{children:["Schreiben Sie eine Funktion ",e.jsx("pre",{children:"greet(name)"}),", die einen Namen als Parameter erhält und eine Begrüssung ausgibt."]}),e.jsx(j,{taskId:"task-01",example:`
            // Beispiel-Aufruf:
            greet("Anna")
            // Ausgabe: Hallo Anna!
          `,hint:`
            function greet(name) {
              // TODO: Geben Sie "Hallo" gefolgt vom Namen und einem "!" aus
              // Tipp: Verwenden Sie Template Literals mit \${name}
            }
            
            greet("Anna")
          `,solution:`
            // Funktion die einen Namen entgegennimmt und eine Begrüssung ausgibt
            function greet(name) {
              // Verwende Template Literals um den Namen in die Begrüssung einzufügen
              console.log(\`Hallo \${name}!\`)
            }
            
            // Teste die Funktion
            greet("Anna")
            greet("Bob")
          `})]}),e.jsxs(m,{children:[e.jsx("h3",{children:"Aufgabe 2: Zahlen verdoppeln"}),e.jsxs("p",{children:["Schreiben Sie eine Funktion ",e.jsx("pre",{children:"double(number)"}),", die eine Zahl verdoppelt und das Ergebnis zurückgibt."]}),e.jsx(j,{taskId:"task-02",example:`
            // Beispiel-Aufruf:
            const result = double(5)
            console.log(result)  // 10
          `,hint:`
            function double(number) {
              // TODO: Multiplizieren Sie die Zahl mit 2 und geben Sie das Ergebnis zurück
              // Tipp: Verwenden Sie 'return'
            }
            
            const result = double(5)
            console.log(result)
          `,solution:`
            // Funktion die eine Zahl verdoppelt
            function double(number) {
              // Multipliziere die Zahl mit 2 und gib das Ergebnis zurück
              return number * 2
            }
            
            // Teste die Funktion mit verschiedenen Zahlen
            console.log(double(5))   // 10
            console.log(double(7))   // 14
            console.log(double(100)) // 200
          `})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Aufgabe 3: Maximum von zwei Zahlen"}),e.jsxs("p",{children:["Schreiben Sie eine Funktion ",e.jsx("pre",{children:"max(a, b)"}),", die die grössere von zwei Zahlen zurückgibt."]}),e.jsx(j,{taskId:"task-03",example:`
            // Beispiel-Aufruf:
            console.log(max(5, 10))  // 10
            console.log(max(20, 15)) // 20
          `,hint:`
            function max(a, b) {
              // TODO: Vergleichen Sie a und b mit einer if-Bedingung
              // Geben Sie die grössere Zahl zurück
              // Tipp: if (a > b) { return ... } else { return ... }
            }
            
            console.log(max(5, 10))
          `,solution:`
            // Funktion die das Maximum von zwei Zahlen zurückgibt
            function max(a, b) {
              // Prüfe welche Zahl grösser ist
              if (a > b) {
                // Wenn a grösser ist, gib a zurück
                return a
              } else {
                // Sonst gib b zurück
                return b
              }
            }
            
            // Teste die Funktion
            console.log(max(5, 10))  // 10
            console.log(max(20, 15)) // 20
            console.log(max(7, 7))   // 7
          `})]}),e.jsxs(m,{children:[e.jsx("h3",{children:"Aufgabe 4: Gerade oder ungerade"}),e.jsxs("p",{children:["Schreiben Sie eine Funktion ",e.jsx("pre",{children:"isEven(number)"}),", die"," ",e.jsx("pre",{children:"true"})," zurückgibt wenn die Zahl gerade ist, sonst"," ",e.jsx("pre",{children:"false"}),"."]}),e.jsx(j,{taskId:"task-04",example:`
            // Beispiel-Aufruf:
            console.log(isEven(4))  // true
            console.log(isEven(7))  // false
          `,hint:`
            function isEven(number) {
              // TODO: Prüfen Sie ob die Zahl durch 2 teilbar ist
              // Tipp: Verwenden Sie den Modulo-Operator %
              // Wenn number % 2 === 0, dann ist die Zahl gerade
            }
            
            console.log(isEven(4))
          `,solution:`
            // Funktion die prüft ob eine Zahl gerade ist
            function isEven(number) {
              // Der Modulo-Operator % gibt den Rest einer Division zurück
              // Wenn eine Zahl durch 2 teilbar ist, ist der Rest 0
              return number % 2 === 0
            }
            
            // Teste die Funktion
            console.log(isEven(4))  // true
            console.log(isEven(7))  // false
            console.log(isEven(0))  // true
          `})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Aufgabe 5: Zahlen von 1 bis N"}),e.jsxs("p",{children:["Schreiben Sie eine Funktion ",e.jsx("pre",{children:"printNumbers(n)"}),", die alle Zahlen von 1 bis n ausgibt."]}),e.jsx(j,{taskId:"task-05",example:`
            // Beispiel-Aufruf:
            printNumbers(5)
            // Ausgabe: 1, 2, 3, 4, 5
          `,hint:`
            function printNumbers(n) {
              // TODO: Verwenden Sie eine for-Schleife von 1 bis n
              // Tipp: for (let i = 1; i <= n; i++) { ... }
            }
            
            printNumbers(5)
          `,solution:`
            // Funktion die alle Zahlen von 1 bis n ausgibt
            function printNumbers(n) {
              // Schleife von 1 bis n (inklusive)
              for (let i = 1; i <= n; i++) {
                // Gib die aktuelle Zahl aus
                console.log(i)
              }
            }
            
            // Teste die Funktion
            printNumbers(5)
          `})]}),e.jsxs(m,{children:[e.jsx("h3",{children:"Aufgabe 6: Summe von 1 bis N"}),e.jsxs("p",{children:["Schreiben Sie eine Funktion ",e.jsx("pre",{children:"sumUpTo(n)"}),", die die Summe aller Zahlen von 1 bis n berechnet und zurückgibt."]}),e.jsx(j,{taskId:"task-06",example:`
            // Beispiel-Aufruf:
            console.log(sumUpTo(5))  // 15 (weil 1+2+3+4+5 = 15)
            console.log(sumUpTo(10)) // 55
          `,hint:`
            function sumUpTo(n) {
              // TODO: Erstellen Sie eine Variable sum = 0
              // Verwenden Sie eine Schleife und addieren Sie jede Zahl zu sum
              // Geben Sie sum am Ende zurück
            }
            
            console.log(sumUpTo(5))
          `,solution:`
            // Funktion die die Summe von 1 bis n berechnet
            function sumUpTo(n) {
              // Variable um die Summe zu speichern, startet bei 0
              let sum = 0
              
              // Schleife von 1 bis n
              for (let i = 1; i <= n; i++) {
                // Addiere die aktuelle Zahl zur Summe
                sum = sum + i
              }
              
              // Gib die finale Summe zurück
              return sum
            }
            
            // Teste die Funktion
            console.log(sumUpTo(5))   // 15
            console.log(sumUpTo(10))  // 55
          `})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Aufgabe 7: Liste ausgeben"}),e.jsxs("p",{children:["Schreiben Sie eine Funktion ",e.jsx("pre",{children:"printList(list)"}),", die alle Elemente einer Liste ausgibt."]}),e.jsx(j,{taskId:"task-07",example:`
            // Beispiel-Aufruf:
            const fruits = ["Apfel", "Banane", "Orange"]
            printList(fruits)
            // Ausgabe: Apfel, Banane, Orange
          `,hint:`
            function printList(list) {
              // TODO: Verwenden Sie eine for-Schleife um durch die Liste zu iterieren
              // Tipp: for (let i = 0; i < list.length; i++) { ... }
              // Geben Sie jedes Element mit console.log(list[i]) aus
            }
            
            const fruits = ["Apfel", "Banane", "Orange"]
            printList(fruits)
          `,solution:`
            // Funktion die alle Elemente einer Liste ausgibt
            function printList(list) {
              // Iteriere durch die gesamte Liste
              for (let i = 0; i < list.length; i++) {
                // Gib das Element am Index i aus
                console.log(list[i])
              }
            }
            
            // Teste die Funktion
            const fruits = ["Apfel", "Banane", "Orange"]
            printList(fruits)
          `})]}),e.jsxs(m,{children:[e.jsx("h3",{children:"Aufgabe 8: Summe einer Liste"}),e.jsxs("p",{children:["Schreiben Sie eine Funktion ",e.jsx("pre",{children:"sumList(numbers)"}),", die die Summe aller Zahlen in einer Liste berechnet."]}),e.jsx(j,{taskId:"task-08",example:`
            // Beispiel-Aufruf:
            const numbers = [10, 20, 30, 40]
            console.log(sumList(numbers))  // 100
          `,hint:`
            function sumList(numbers) {
              // TODO: Erstellen Sie eine Variable sum = 0
              // Durchlaufen Sie die Liste und addieren Sie jede Zahl zu sum
              // Geben Sie sum zurück
            }
            
            const numbers = [10, 20, 30, 40]
            console.log(sumList(numbers))
          `,solution:`
            // Funktion die die Summe aller Zahlen in einer Liste berechnet
            function sumList(numbers) {
              // Variable für die Summe
              let sum = 0
              
              // Durchlaufe alle Zahlen in der Liste
              for (let i = 0; i < numbers.length; i++) {
                // Addiere die aktuelle Zahl zur Summe
                sum = sum + numbers[i]
              }
              
              // Gib die Summe zurück
              return sum
            }
            
            // Teste die Funktion
            const numbers = [10, 20, 30, 40]
            console.log(sumList(numbers))  // 100
          `})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Aufgabe 9: Durchschnitt berechnen"}),e.jsxs("p",{children:["Schreiben Sie eine Funktion ",e.jsx("pre",{children:"average(numbers)"}),", die den Durchschnitt aller Zahlen in einer Liste berechnet."]}),e.jsx(j,{taskId:"task-09",example:`
            // Beispiel-Aufruf:
            const numbers = [10, 20, 30]
            console.log(average(numbers))  // 20
          `,hint:`
            function average(numbers) {
              // TODO: Berechnen Sie zuerst die Summe aller Zahlen
              // Teilen Sie dann die Summe durch die Anzahl der Elemente
              // Tipp: numbers.length gibt die Anzahl der Elemente
            }
            
            const numbers = [10, 20, 30]
            console.log(average(numbers))
          `,solution:`
            // Funktion die den Durchschnitt einer Liste berechnet
            function average(numbers) {
              // Zuerst die Summe berechnen
              let sum = 0
              for (let i = 0; i < numbers.length; i++) {
                sum = sum + numbers[i]
              }
              
              // Durchschnitt = Summe / Anzahl
              const avg = sum / numbers.length
              
              // Gib den Durchschnitt zurück
              return avg
            }
            
            // Teste die Funktion
            const numbers = [10, 20, 30]
            console.log(average(numbers))  // 20
          `})]}),e.jsxs(m,{children:[e.jsx("h3",{children:"Aufgabe 10: Maximum in Liste finden"}),e.jsxs("p",{children:["Schreiben Sie eine Funktion ",e.jsx("pre",{children:"findMax(numbers)"}),", die die grösste Zahl in einer Liste findet."]}),e.jsx(j,{taskId:"task-10",example:`
            // Beispiel-Aufruf:
            const numbers = [5, 12, 8, 130, 44]
            console.log(findMax(numbers))  // 130
          `,hint:`
            function findMax(numbers) {
              // TODO: Speichern Sie das erste Element als maximal
              // Durchlaufen Sie die Liste und vergleichen Sie jede Zahl
              // Wenn eine Zahl grösser ist, aktualisieren Sie das Maximum
            }
            
            const numbers = [5, 12, 8, 130, 44]
            console.log(findMax(numbers))
          `,solution:`
            // Funktion die die grösste Zahl in einer Liste findet
            function findMax(numbers) {
              // Starte mit dem ersten Element als Maximum
              let max = numbers[0]
              
              // Durchlaufe alle anderen Elemente
              for (let i = 1; i < numbers.length; i++) {
                // Wenn die aktuelle Zahl grösser ist als unser Maximum
                if (numbers[i] > max) {
                  // Aktualisiere das Maximum
                  max = numbers[i]
                }
              }
              
              // Gib das Maximum zurück
              return max
            }
            
            // Teste die Funktion
            const numbers = [5, 12, 8, 130, 44]
            console.log(findMax(numbers))  // 130
          `})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Aufgabe 11: Countdown"}),e.jsxs("p",{children:["Schreiben Sie eine Funktion ",e.jsx("pre",{children:"countdown(n)"}),", die von n bis 0 herunterzählt und die Zahlen ausgibt."]}),e.jsx(j,{taskId:"task-11",example:`
            // Beispiel-Aufruf:
            countdown(5)
            // Ausgabe: 5, 4, 3, 2, 1, 0
          `,hint:`
            function countdown(n) {
              // TODO: Verwenden Sie eine for-Schleife die von n bis 0 läuft
              // Tipp: for (let i = n; i >= 0; i--) { ... }
              // i-- bedeutet i wird um 1 verkleinert
            }
            
            countdown(5)
          `,solution:`
            // Funktion die von n bis 0 herunterzählt
            function countdown(n) {
              // Schleife die bei n startet und bis 0 läuft
              for (let i = n; i >= 0; i--) {
                // Gib die aktuelle Zahl aus
                console.log(i)
              }
            }
            
            // Teste die Funktion
            countdown(5)
          `})]}),e.jsxs(m,{children:[e.jsx("h3",{children:"Aufgabe 12: Liste umkehren"}),e.jsxs("p",{children:["Schreiben Sie eine Funktion ",e.jsx("pre",{children:"reverseList(list)"}),", die eine neue Liste zurückgibt mit allen Elementen in umgekehrter Reihenfolge."]}),e.jsx(j,{taskId:"task-12",example:`
            // Beispiel-Aufruf:
            const numbers = [1, 2, 3, 4, 5]
            const reversed = reverseList(numbers)
            console.log(reversed)  // [5, 4, 3, 2, 1]
          `,hint:`
            function reverseList(list) {
              // TODO: Erstellen Sie eine leere Liste
              // Durchlaufen Sie die originale Liste von hinten nach vorne
              // Fügen Sie jedes Element zur neuen Liste hinzu
              // Tipp: for (let i = list.length - 1; i >= 0; i--) { ... }
            }
            
            const numbers = [1, 2, 3, 4, 5]
            console.log(reverseList(numbers))
          `,solution:`
            // Funktion die eine Liste umkehrt
            function reverseList(list) {
              // Neue leere Liste für das Ergebnis
              const reversed = []
              
              // Durchlaufe die Liste von hinten nach vorne
              for (let i = list.length - 1; i >= 0; i--) {
                // Füge das Element zur neuen Liste hinzu
                reversed.push(list[i])
              }
              
              // Gib die umgekehrte Liste zurück
              return reversed
            }
            
            // Teste die Funktion
            const numbers = [1, 2, 3, 4, 5]
            console.log(reverseList(numbers))  // [5, 4, 3, 2, 1]
          `})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Aufgabe 13: Kommandozeilen-Rechner"}),e.jsx("p",{children:"Lesen Sie zwei Zahlen von der Kommandozeile ein und geben Sie deren Summe, Differenz, Produkt und Quotient aus."}),e.jsx(j,{taskId:"task-13",example:`
            // Aufruf: node aufgabe-13.js 10 5
            // Ausgabe:
            // Summe: 15
            // Differenz: 5
            // Produkt: 50
            // Quotient: 2
          `,hint:`
            // TODO: Lesen Sie die beiden Zahlen von der Kommandozeile
            // Tipp: const a = Number(process.argv[2])
            // Tipp: const b = Number(process.argv[3])
            // Berechnen Sie dann die vier Operationen und geben Sie sie aus
          `,solution:`
            // Lese die beiden Zahlen von der Kommandozeile
            // process.argv[0] ist node, [1] ist der Dateiname, [2] und [3] sind die Argumente
            const a = Number(process.argv[2])
            const b = Number(process.argv[3])
            
            // Berechne die vier Grundrechenarten
            const sum = a + b
            const difference = a - b
            const product = a * b
            const quotient = a / b
            
            // Gib die Ergebnisse aus
            console.log(\`Summe: \${sum}\`)
            console.log(\`Differenz: \${difference}\`)
            console.log(\`Produkt: \${product}\`)
            console.log(\`Quotient: \${quotient}\`)
          `})]}),e.jsxs(m,{children:[e.jsx("h3",{children:"Aufgabe 14: Namen aus Kommandozeile"}),e.jsx("p",{children:"Lesen Sie mehrere Namen von der Kommandozeile ein und begrüssen Sie jeden Namen einzeln."}),e.jsx(j,{taskId:"task-14",example:`
            // Aufruf: node aufgabe-14.js Anna Bob Charlie
            // Ausgabe:
            // Hallo Anna!
            // Hallo Bob!
            // Hallo Charlie!
          `,hint:`
            // TODO: Verwenden Sie eine Schleife von Index 2 bis Ende von process.argv
            // Tipp: for (let i = 2; i < process.argv.length; i++) { ... }
            // Geben Sie für jeden Namen eine Begrüssung aus
          `,solution:`
            // Durchlaufe alle Argumente ab Index 2
            // Index 0 ist node, Index 1 ist der Dateiname
            for (let i = 2; i < process.argv.length; i++) {
              // Hole den Namen am aktuellen Index
              const name = process.argv[i]
              
              // Gib eine Begrüssung aus
              console.log(\`Hallo \${name}!\`)
            }
          `})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Aufgabe 15: Zahlen zählen"}),e.jsxs("p",{children:["Schreiben Sie eine Funktion ",e.jsx("pre",{children:"countInRange(list, min, max)"}),", die zählt wie viele Zahlen in einer Liste zwischen min und max liegen (inklusive)."]}),e.jsx(j,{taskId:"task-15",example:`
            // Beispiel-Aufruf:
            const numbers = [1, 5, 10, 15, 20, 25]
            console.log(countInRange(numbers, 10, 20))  // 3 (10, 15, 20)
          `,hint:`
            function countInRange(list, min, max) {
              // TODO: Erstellen Sie eine Variable count = 0
              // Durchlaufen Sie die Liste
              // Wenn eine Zahl >= min und <= max ist, erhöhen Sie count
              // Geben Sie count zurück
            }
            
            const numbers = [1, 5, 10, 15, 20, 25]
            console.log(countInRange(numbers, 10, 20))
          `,solution:`
            // Funktion die zählt wie viele Zahlen im Bereich [min, max] liegen
            function countInRange(list, min, max) {
              // Zähler für Zahlen im Bereich
              let count = 0
              
              // Durchlaufe alle Zahlen in der Liste
              for (let i = 0; i < list.length; i++) {
                // Prüfe ob die Zahl im Bereich liegt
                if (list[i] >= min && list[i] <= max) {
                  // Erhöhe den Zähler
                  count++
                }
              }
              
              // Gib die Anzahl zurück
              return count
            }
            
            // Teste die Funktion
            const numbers = [1, 5, 10, 15, 20, 25]
            console.log(countInRange(numbers, 10, 20))  // 3
          `})]}),e.jsxs(m,{children:[e.jsx("h2",{children:"Anspruchsvollere Aufgaben (16-20)"}),e.jsx("h3",{children:"Aufgabe 16: Multiplikationstabelle"}),e.jsxs("p",{children:["Schreiben Sie eine Funktion ",e.jsx("pre",{children:"multiplicationTable(n)"}),", die eine Multiplikationstabelle von 1 bis n ausgibt."]}),e.jsx(j,{taskId:"task-16",example:`
            // Beispiel-Aufruf:
            multiplicationTable(3)
            // Ausgabe:
            // 1 x 1 = 1
            // 1 x 2 = 2
            // 1 x 3 = 3
            // 2 x 1 = 2
            // 2 x 2 = 4
            // 2 x 3 = 6
            // 3 x 1 = 3
            // 3 x 2 = 6
            // 3 x 3 = 9
          `,hint:`
            function multiplicationTable(n) {
              // TODO: Verwenden Sie zwei verschachtelte Schleifen
              // Äussere Schleife: for (let i = 1; i <= n; i++)
              // Innere Schleife: for (let j = 1; j <= n; j++)
              // Geben Sie aus: \${i} x \${j} = \${i * j}
            }
            
            multiplicationTable(3)
          `,solution:`
            // Funktion die eine Multiplikationstabelle ausgibt
            function multiplicationTable(n) {
              // Äussere Schleife für die erste Zahl
              for (let i = 1; i <= n; i++) {
                // Innere Schleife für die zweite Zahl
                for (let j = 1; j <= n; j++) {
                  // Berechne das Produkt
                  const product = i * j
                  
                  // Gib die Multiplikation aus
                  console.log(\`\${i} x \${j} = \${product}\`)
                }
              }
            }
            
            // Teste die Funktion
            multiplicationTable(3)
          `})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Aufgabe 17: Primzahl prüfen"}),e.jsxs("p",{children:["Schreiben Sie eine Funktion ",e.jsx("pre",{children:"isPrime(number)"}),", die prüft ob eine Zahl eine Primzahl ist."]}),e.jsx(j,{taskId:"task-17",example:`
            // Beispiel-Aufruf:
            console.log(isPrime(7))   // true
            console.log(isPrime(10))  // false
            console.log(isPrime(13))  // true
          `,hint:`
            function isPrime(number) {
              // TODO: Zahlen kleiner als 2 sind keine Primzahlen
              // Prüfen Sie ob die Zahl durch irgendeine Zahl von 2 bis number-1 teilbar ist
              // Wenn ja, ist es keine Primzahl
              // Wenn nein, ist es eine Primzahl
              // Tipp: Verwenden Sie den Modulo-Operator %
            }
            
            console.log(isPrime(7))
          `,solution:`
            // Funktion die prüft ob eine Zahl eine Primzahl ist
            function isPrime(number) {
              // Zahlen kleiner als 2 sind keine Primzahlen
              if (number < 2) {
                return false
              }
              
              // Prüfe ob die Zahl durch irgendeine Zahl von 2 bis number-1 teilbar ist
              for (let i = 2; i < number; i++) {
                // Wenn die Zahl durch i teilbar ist (Rest ist 0)
                if (number % i === 0) {
                  // Dann ist es keine Primzahl
                  return false
                }
              }
              
              // Wenn wir hier ankommen, ist es eine Primzahl
              return true
            }
            
            // Teste die Funktion
            console.log(isPrime(7))   // true
            console.log(isPrime(10))  // false
            console.log(isPrime(13))  // true
          `})]}),e.jsxs(m,{children:[e.jsx("h3",{children:"Aufgabe 18: Fibonacci-Folge"}),e.jsxs("p",{children:["Schreiben Sie eine Funktion ",e.jsx("pre",{children:"fibonacci(n)"}),", die die ersten n Zahlen der Fibonacci-Folge in einer Liste zurückgibt. Die Fibonacci-Folge beginnt mit 0 und 1, jede weitere Zahl ist die Summe der beiden vorherigen."]}),e.jsx(j,{taskId:"task-18",example:`
            // Beispiel-Aufruf:
            console.log(fibonacci(8))
            // [0, 1, 1, 2, 3, 5, 8, 13]
          `,hint:`
            function fibonacci(n) {
              // TODO: Erstellen Sie eine Liste mit [0, 1]
              // Verwenden Sie eine Schleife um die restlichen Zahlen zu berechnen
              // Jede Zahl ist die Summe der beiden vorherigen
              // Tipp: const next = list[list.length - 1] + list[list.length - 2]
            }
            
            console.log(fibonacci(8))
          `,solution:`
            // Funktion die die ersten n Fibonacci-Zahlen berechnet
            function fibonacci(n) {
              // Spezialfall: wenn n <= 0
              if (n <= 0) {
                return []
              }
              
              // Spezialfall: wenn n == 1
              if (n === 1) {
                return [0]
              }
              
              // Starte mit den ersten zwei Fibonacci-Zahlen
              const fib = [0, 1]
              
              // Berechne die restlichen n-2 Zahlen
              for (let i = 2; i < n; i++) {
                // Die nächste Zahl ist die Summe der beiden vorherigen
                const next = fib[fib.length - 1] + fib[fib.length - 2]
                
                // Füge sie zur Liste hinzu
                fib.push(next)
              }
              
              // Gib die Liste zurück
              return fib
            }
            
            // Teste die Funktion
            console.log(fibonacci(8))   // [0, 1, 1, 2, 3, 5, 8, 13]
          `})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Aufgabe 19: Duplikate entfernen"}),e.jsxs("p",{children:["Schreiben Sie eine Funktion ",e.jsx("pre",{children:"removeDuplicates(list)"}),", die eine neue Liste zurückgibt, in der jedes Element nur einmal vorkommt."]}),e.jsx(j,{taskId:"task-19",example:`
            // Beispiel-Aufruf:
            const numbers = [1, 2, 2, 3, 4, 4, 5]
            console.log(removeDuplicates(numbers))
            // [1, 2, 3, 4, 5]
          `,hint:`
            function removeDuplicates(list) {
              // TODO: Erstellen Sie eine leere Ergebnis-Liste
              // Durchlaufen Sie die originale Liste
              // Für jedes Element: Prüfen Sie ob es schon in der Ergebnis-Liste ist
              // Wenn nicht, fügen Sie es hinzu
              // Tipp: result.includes(element) prüft ob element in result ist
            }
            
            const numbers = [1, 2, 2, 3, 4, 4, 5]
            console.log(removeDuplicates(numbers))
          `,solution:`
            // Funktion die Duplikate aus einer Liste entfernt
            function removeDuplicates(list) {
              // Neue leere Liste für das Ergebnis
              const result = []
              
              // Durchlaufe alle Elemente der originalen Liste
              for (let i = 0; i < list.length; i++) {
                // Hole das aktuelle Element
                const element = list[i]
                
                // Prüfe ob das Element schon in der Ergebnis-Liste ist
                // includes() gibt true zurück wenn das Element gefunden wird
                if (!result.includes(element)) {
                  // Wenn es noch nicht drin ist, füge es hinzu
                  result.push(element)
                }
              }
              
              // Gib die Liste ohne Duplikate zurück
              return result
            }
            
            // Teste die Funktion
            const numbers = [1, 2, 2, 3, 4, 4, 5]
            console.log(removeDuplicates(numbers))  // [1, 2, 3, 4, 5]
          `})]}),e.jsxs(m,{children:[e.jsx("h3",{children:"Aufgabe 20: Wörter zählen"}),e.jsxs("p",{children:["Schreiben Sie eine Funktion ",e.jsx("pre",{children:"wordCount(text)"}),", die zählt wie oft jedes Wort in einem Text vorkommt. Der Text wird als String übergeben, die Wörter sind durch Leerzeichen getrennt."]}),e.jsx(j,{taskId:"task-20",example:`
            // Beispiel-Aufruf:
            const text = "der Hund und die Katze und der Vogel"
            wordCount(text)
            // Ausgabe:
            // der: 2
            // Hund: 1
            // und: 2
            // die: 1
            // Katze: 1
            // Vogel: 1
          `,hint:`
            function wordCount(text) {
              // TODO: Verwenden Sie text.split(" ") um eine Liste von Wörtern zu bekommen
              // Erstellen Sie ein leeres Objekt für die Zählung: const counts = {}
              // Durchlaufen Sie alle Wörter
              // Für jedes Wort: Wenn es noch nicht im Objekt ist, setzen Sie es auf 1
              // Sonst erhöhen Sie den Zähler um 1
              // Geben Sie am Ende alle Wörter und ihre Anzahl aus
            }
            
            const text = "der Hund und die Katze und der Vogel"
            wordCount(text)
          `,solution:`
            // Funktion die zählt wie oft jedes Wort vorkommt
            function wordCount(text) {
              // Teile den Text in einzelne Wörter auf
              const words = text.split(" ")
              
              // Objekt um die Anzahl für jedes Wort zu speichern
              const counts = {}
              
              // Durchlaufe alle Wörter
              for (let i = 0; i < words.length; i++) {
                const word = words[i]
                
                // Prüfe ob das Wort schon im Objekt ist
                if (counts[word]) {
                  // Wenn ja, erhöhe den Zähler um 1
                  counts[word] = counts[word] + 1
                } else {
                  // Wenn nein, setze den Zähler auf 1
                  counts[word] = 1
                }
              }
              
              // Gib alle Wörter und ihre Anzahl aus
              for (const word in counts) {
                console.log(\`\${word}: \${counts[word]}\`)
              }
            }
            
            // Teste die Funktion
            const text = "der Hund und die Katze und der Vogel"
            wordCount(text)
          `})]})]})}const li=Object.freeze(Object.defineProperty({__proto__:null,default:Ge},Symbol.toStringTag,{value:"Module"})),Re="_codeBlockContainer_1qps1_2",Je="_header_1qps1_13",Ue="_leftHeader_1qps1_23",qe="_language_1qps1_30",Qe="_filename_1qps1_40",Ye="_diffBadge_1qps1_48",Xe="_copyButton_1qps1_61",W={codeBlockContainer:Re,header:Je,leftHeader:Ue,language:qe,filename:Qe,diffBadge:Ye,copyButton:Xe};function r({lang:t="javascript",children:s,highlightLines:g=[],diff:a=!1,filename:p=null}){const[z,T]=o.useState(!1);let f=nn(en(s));a&&(f=f.split(`
`).map(u=>u.startsWith("+ ")||u.startsWith("- ")?u.charAt(0)+" "+u.substring(1).trimStart():u).join(`
`));const P=async()=>{await navigator.clipboard.writeText(f),T(!0),setTimeout(()=>T(!1),2e3)},F=u=>{const y={display:"block",paddingLeft:"0.5em",paddingRight:"0.5em"};if(a){const D=f.split(`
`)[u-1];D?.startsWith("+")?(y.backgroundColor="#2d3320",y.borderLeft="3px solid #b8bb26"):D?.startsWith("-")&&(y.backgroundColor="#3c1f1e",y.borderLeft="3px solid #fb4934")}return g.includes(u)&&(y.backgroundColor="rgba(131, 165, 152, 0.2)",y.borderLeft="3px solid #83a598"),{style:y}};return e.jsxs("div",{className:W.codeBlockContainer,children:[e.jsxs("div",{className:W.header,children:[e.jsxs("div",{className:W.leftHeader,children:[e.jsx("span",{className:W.language,children:t}),p&&e.jsx("span",{className:W.filename,children:p}),a&&e.jsx("span",{className:W.diffBadge,children:"diff"})]}),e.jsx("button",{className:W.copyButton,onClick:P,"aria-label":"Code kopieren",title:"Code in Zwischenablage kopieren",children:z?"✓ Kopiert!":"Kopieren"})]}),e.jsx(Y,{language:t,style:X,showLineNumbers:!0,wrapLines:!0,lineProps:F,customStyle:{margin:0,borderRadius:"0 0 8px 8px",fontSize:"0.9rem"},lineNumberStyle:{minWidth:"2.5em",paddingRight:"1em",color:"#928374",userSelect:"none"},children:f})]})}function en(t){return typeof t=="string"?t:Array.isArray(t)?t.join(""):String(t)}function nn(t){const s=t.split(`
`);if(s[0]?.trim()===""&&s.shift(),s[s.length-1]?.trim()===""&&s.pop(),s.length===0)return"";const g=s.filter(a=>a.trim().length>0).reduce((a,p)=>{const z=p.match(/^\s*/)[0].length;return Math.min(a,z)},1/0);return s.map(a=>a.slice(g===1/0?0:g)).join(`
`)}const rn="_jsTerminalWrapper_10y59_2",sn="_mainContent_10y59_14",tn="_editorSection_10y59_20",ln="_tabBar_10y59_27",an="_tab_10y59_27",on="_activeTab_10y59_65",cn="_tabName_10y59_70",dn="_closeTab_10y59_76",hn="_explorerSection_10y59_99",un="_explorerHeader_10y59_108",mn="_explorerTitle_10y59_114",gn="_explorerContent_10y59_123",pn="_explorerItem_10y59_142",fn="_activeExplorerItem_10y59_157",xn="_fileIcon_10y59_162",jn="_explorerFileName_10y59_167",bn="_editorHeader_10y59_176",Sn="_filename_10y59_185",kn="_language_10y59_192",wn="_terminalSection_10y59_202",vn="_terminalHeader_10y59_209",zn="_terminalTitle_10y59_218",yn="_terminalHint_10y59_227",_n="_terminalContent_10y59_234",En="_terminalInputLine_10y59_271",Ln="_prompt_10y59_278",Dn="_terminalInput_10y59_271",Bn="_terminalLine_10y59_303",Tn="_commandText_10y59_310",Fn="_logText_10y59_315",An="_warnText_10y59_322",Cn="_errorText_10y59_329",In="_returnText_10y59_336",On="_groupText_10y59_344",Nn="_structuredOutput_10y59_351",$n="_stackTrace_10y59_363",l={jsTerminalWrapper:rn,mainContent:sn,editorSection:tn,tabBar:ln,tab:an,activeTab:on,tabName:cn,closeTab:dn,explorerSection:hn,explorerHeader:un,explorerTitle:mn,explorerContent:gn,explorerItem:pn,activeExplorerItem:fn,fileIcon:xn,explorerFileName:jn,editorHeader:bn,filename:Sn,language:kn,terminalSection:wn,terminalHeader:vn,terminalTitle:zn,terminalHint:yn,terminalContent:_n,terminalInputLine:En,prompt:Ln,terminalInput:Dn,terminalLine:Bn,commandText:Tn,logText:Fn,warnText:An,errorText:Cn,returnText:In,groupText:On,structuredOutput:Nn,stackTrace:$n};function R(t){const{filename:s,initialCode:g,children:a,height:p="300px",terminalHeight:z="250px"}=t,T=a?Wn(Kn(a)):g||`// Your JavaScript code here
console.log('Hello World!')`,f=`jsterminal_${s}`,F=(()=>{if(typeof window>"u"||typeof localStorage>"u")return{files:{[s]:{name:s,content:T}},openFiles:[s],activeFile:s,commandHistory:[]};try{const n=localStorage.getItem(f);if(n){const i=JSON.parse(n);return{files:i.files||{[s]:{name:s,content:T}},openFiles:i.openFiles||[s],activeFile:i.activeFile||s,commandHistory:i.commandHistory||[]}}}catch{}return{files:{[s]:{name:s,content:T}},openFiles:[s],activeFile:s,commandHistory:[]}})(),[u,y]=o.useState(F.files),[L,D]=o.useState(F.openFiles),[S,E]=o.useState(F.activeFile),[O,N]=o.useState([]),[A,w]=o.useState(""),[b,H]=o.useState(F.commandHistory),[B,$]=o.useState(-1),[J,Z]=o.useState(-1),[U,M]=o.useState([]),K=o.useRef(null),q=o.useRef(null),G=o.useRef(null),V=o.useRef(null),Q=["node","clear","ls","touch","rm","reset"],k=u[S]?.content||"",C=n=>{y(i=>({...i,[S]:{...i[S],content:n}}))};o.useEffect(()=>{if(!(typeof window>"u"||typeof localStorage>"u"))try{const n={files:u,openFiles:L,activeFile:S,commandHistory:b};localStorage.setItem(f,JSON.stringify(n))}catch(n){console.error("Error saving to localStorage:",n)}},[u,L,S,b,f]),o.useEffect(()=>{V.current&&V.current.scrollTo({top:V.current.scrollHeight,behavior:"smooth"})},[O]),o.useEffect(()=>{const n=i=>{if(i.source!==K.current?.contentWindow)return;const{type:c,args:d,error:v,stack:ne,returnValue:ae}=i.data;switch(c){case"log":case"info":h({type:"log",content:I(d)});break;case"warn":h({type:"warn",content:I(d)});break;case"error":h({type:"error",content:I(d)});break;case"table":h({type:"table",content:de(d)});break;case"dir":h({type:"dir",content:he(d)});break;case"group":h({type:"group",content:I(d)});break;case"groupEnd":h({type:"groupEnd"});break;case"runtime-error":h({type:"error",content:v,stack:ne});break;case"return-value":ae!==void 0&&h({type:"return",content:ee(ae)});break}};return window.addEventListener("message",n),()=>window.removeEventListener("message",n)},[]);const h=n=>{N(i=>[...i,n])},I=n=>!n||n.length===0?"":n.map(i=>ee(i)).join(" "),ee=n=>{if(n===null)return"null";if(n===void 0)return"undefined";if(typeof n=="object")try{return JSON.stringify(n,null,2)}catch{return String(n)}return String(n)},de=n=>{if(!n||n.length===0)return"";const i=n[0];if(typeof i!="object")return ee(i);try{return Array.isArray(i),JSON.stringify(i,null,2)}catch{return String(i)}},he=n=>I(n),ue=n=>{n.preventDefault();const i=A.trim();if(!i)return;Z(-1),M([]),$(-1),i&&(b.length===0||b[b.length-1]!==i)&&H(ne=>[...ne,i]),h({type:"command",content:i}),w("");const c=i.split(/\s+/),d=c[0],v=c.slice(1);switch(d){case"node":be(v);break;case"clear":N([]);break;case"ls":pe();break;case"touch":xe(v);break;case"rm":je(v);break;case"reset":fe();break;default:h({type:"error",content:`${d}: command not found`});break}},me=n=>{if(n.key==="Tab"){n.preventDefault(),ge();return}if(n.key==="ArrowUp"){if(n.preventDefault(),b.length===0)return;const i=B===-1?b.length-1:Math.max(0,B-1);$(i),w(b[i]);return}if(n.key==="ArrowDown"){if(n.preventDefault(),b.length===0||B===-1)return;const i=B+1;i>=b.length?($(-1),w("")):($(i),w(b[i]));return}n.key!=="Tab"&&(Z(-1),M([]))},ge=()=>{const n=A,i=n.split(/\s+/),c=i[i.length-1];let d=[];if(i.length===1&&!n.endsWith(" ")?d=Q.filter(v=>v.startsWith(c)):(i[0]==="node"||i[0]==="rm")&&i.length<=2&&(d=Object.keys(u).filter(v=>v.startsWith(c))),d.length===0){Z(-1),M([]);return}if(U.length===0||U.join()!==d.join())M(d),Z(0),le(n,d[0]);else{const v=(J+1)%d.length;Z(v),le(n,d[v])}},le=(n,i)=>{const c=n.split(/\s+/);c[c.length-1]=i,w(c.join(" "))},pe=()=>{const n=Object.keys(u).sort().join(`
`);h({type:"log",content:n})},fe=()=>{try{localStorage.removeItem(f),h({type:"log",content:"Storage cleared. Reloading..."}),setTimeout(()=>{window.location.reload()},500)}catch(n){h({type:"error",content:`Failed to reset: ${n.message}`})}},xe=n=>{if(n.length===0){h({type:"error",content:"Usage: touch <filename>"});return}const i=n[0];if(u[i]){h({type:"log",content:`File '${i}' already exists`});return}y(c=>({...c,[i]:{name:i,content:`// Your JavaScript code here
console.log('Hello World!')`}})),h({type:"log",content:`Created file '${i}'`})},je=n=>{if(n.length===0){h({type:"error",content:"Usage: rm <filename>"});return}const i=n[0];if(!u[i]){h({type:"error",content:`rm: cannot remove '${i}': No such file`});return}if(i===s){h({type:"error",content:`rm: cannot remove '${i}': Initial file cannot be deleted`});return}if(y(c=>{const d={...c};return delete d[i],d}),D(c=>c.filter(d=>d!==i)),S===i){const c=Object.keys(u).filter(d=>d!==i);E(c[0]||s)}h({type:"log",content:`Removed file '${i}'`})},be=n=>{if(n.length===0){h({type:"error",content:"Usage: node <filename> [args...]"});return}const i=n[0],c=n.slice(1);if(!u[i]){h({type:"error",content:`Error: Cannot find module '${i}'`});return}Se(i,c)},Se=(n,i)=>{const c=u[n]?.content||"",d=["node",`/workspace/${n}`,...i],v=`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
        </head>
        <body>
          <script>
            // Mock process.argv
            const process = {
              argv: ${JSON.stringify(d)}
            };

            // Console interception
            const originalConsole = {
              log: console.log,
              info: console.info,
              warn: console.warn,
              error: console.error,
              table: console.table,
              dir: console.dir,
              group: console.group,
              groupEnd: console.groupEnd,
            };

            window.console = {
              log: (...args) => {
                originalConsole.log(...args);
                parent.postMessage({ type: 'log', args: args }, '*');
              },
              info: (...args) => {
                originalConsole.info(...args);
                parent.postMessage({ type: 'info', args: args }, '*');
              },
              warn: (...args) => {
                originalConsole.warn(...args);
                parent.postMessage({ type: 'warn', args: args }, '*');
              },
              error: (...args) => {
                originalConsole.error(...args);
                parent.postMessage({ type: 'error', args: args }, '*');
              },
              table: (...args) => {
                originalConsole.table(...args);
                parent.postMessage({ type: 'table', args: args }, '*');
              },
              dir: (...args) => {
                originalConsole.dir(...args);
                parent.postMessage({ type: 'dir', args: args }, '*');
              },
              group: (...args) => {
                originalConsole.group(...args);
                parent.postMessage({ type: 'group', args: args }, '*');
              },
              groupEnd: () => {
                originalConsole.groupEnd();
                parent.postMessage({ type: 'groupEnd' }, '*');
              },
            };

            // Error handling
            window.onerror = function(message, source, lineno, colno, error) {
              parent.postMessage({ 
                type: 'runtime-error', 
                error: message,
                stack: error ? error.stack : ''
              }, '*');
              return true;
            };

            // Execute user code and capture return value
            try {
              const result = (function() {
                ${c}
              })();
              
              // Send return value if it exists
              if (result !== undefined) {
                parent.postMessage({ type: 'return-value', returnValue: result }, '*');
              }
            } catch (error) {
              parent.postMessage({ 
                type: 'runtime-error', 
                error: error.message,
                stack: error.stack
              }, '*');
            }
          <\/script>
        </body>
      </html>
    `;K.current&&(K.current.srcdoc=v)},ke=()=>{G.current?.focus()},we=n=>{E(n),L.includes(n)||D(i=>[...i,n])},ve=(n,i)=>{i.stopPropagation();const c=L.filter(d=>d!==n);D(c),S===n&&c.length>0&&E(c[c.length-1])};return e.jsxs("div",{className:`${l.jsTerminalWrapper} full-width`,children:[e.jsxs("div",{className:l.mainContent,children:[e.jsxs("div",{className:l.editorSection,children:[L.length>1&&e.jsx("div",{className:l.tabBar,children:L.map(n=>e.jsxs("div",{className:`${l.tab} ${S===n?l.activeTab:""}`,onClick:()=>E(n),children:[e.jsx("span",{className:l.tabName,children:n}),L.length>1&&e.jsx("button",{className:l.closeTab,onClick:i=>ve(n,i),title:"Close",children:"×"})]},n))}),e.jsxs("div",{className:l.editorHeader,children:[e.jsx("span",{className:l.filename,children:S}),e.jsx("span",{className:l.language,children:"JavaScript"})]}),e.jsx(ze,{defaultLanguage:"javascript",value:k,theme:"vs-dark",onChange:C,height:p,options:{minimap:{enabled:!1},fontSize:14,lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0}},S)]}),Object.keys(u).length>1&&e.jsxs("div",{className:l.explorerSection,children:[e.jsx("div",{className:l.explorerHeader,children:e.jsx("span",{className:l.explorerTitle,children:"Files"})}),e.jsx("div",{className:l.explorerContent,children:Object.keys(u).sort().map(n=>e.jsxs("div",{className:`${l.explorerItem} ${S===n?l.activeExplorerItem:""}`,onClick:()=>we(n),title:n,children:[e.jsx("span",{className:l.fileIcon,children:"📄"}),e.jsx("span",{className:l.explorerFileName,children:n})]},n))})]})]}),e.jsxs("div",{className:l.terminalSection,style:{height:z},children:[e.jsxs("div",{className:l.terminalHeader,children:[e.jsx("span",{className:l.terminalTitle,children:"Terminal"}),e.jsx("span",{className:l.terminalHint,children:"Use ↑/↓ for history, Tab for completion"})]}),e.jsxs("div",{className:l.terminalContent,ref:V,onClick:ke,children:[O.map((n,i)=>e.jsx(Zn,{entry:n},i)),e.jsxs("form",{onSubmit:ue,className:l.terminalInputLine,children:[e.jsx("span",{className:l.prompt,children:"$"}),e.jsx("input",{ref:G,type:"text",className:l.terminalInput,value:A,onChange:n=>w(n.target.value),onKeyDown:me,autoComplete:"off",spellCheck:"false"})]}),e.jsx("div",{ref:q})]})]}),e.jsx("iframe",{ref:K,sandbox:"allow-scripts",style:{display:"none"},title:"code-executor"})]})}function Zn({entry:t}){const{type:s,content:g,stack:a}=t;switch(s){case"command":return e.jsxs("div",{className:l.terminalLine,children:[e.jsx("span",{className:l.prompt,children:"$"}),e.jsx("span",{className:l.commandText,children:g})]});case"log":return e.jsx("div",{className:l.terminalLine,children:e.jsx("span",{className:l.logText,children:g})});case"warn":return e.jsx("div",{className:l.terminalLine,children:e.jsx("span",{className:l.warnText,children:g})});case"error":return e.jsxs("div",{className:l.terminalLine,children:[e.jsx("span",{className:l.errorText,children:g}),a&&e.jsx("pre",{className:l.stackTrace,children:a})]});case"return":return e.jsx("div",{className:l.terminalLine,children:e.jsxs("span",{className:l.returnText,children:["← ",g]})});case"table":case"dir":return e.jsx("div",{className:l.terminalLine,children:e.jsx("pre",{className:l.structuredOutput,children:g})});case"group":return e.jsx("div",{className:l.terminalLine,children:e.jsxs("span",{className:l.groupText,children:["▼ ",g]})});case"groupEnd":return null;default:return null}}function Kn(t){return typeof t=="string"?t:Array.isArray(t)?t.join(""):String(t)}function Wn(t){const s=t.split(`
`);if(s[0]?.trim()===""&&s.shift(),s[s.length-1]?.trim()===""&&s.pop(),s.length===0)return"";const g=s.filter(a=>a.trim().length>0).reduce((a,p)=>{const z=p.match(/^\s*/)[0].length;return Math.min(a,z)},1/0);return s.map(a=>a.slice(g===1/0?0:g)).join(`
`)}function Pn(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{children:[e.jsx("h2",{children:"Bedingungen"}),e.jsx("p",{children:"Beim Programmieren kommt es ganz häufig vor, das Sie je nach Zustand des Programms, etwas unterschiedliches antworten möchten. Und dafür können Sie nicht im voraus ein eigenes Programm für jeden Fall schreiben. Also brauchen wir eine Möglichkeit wie Sie im Programm selbst eine Fallunterscheidung machen können. Das ist aber ganz einfach."}),e.jsx("p",{children:"Nehmen Sie an Sie haben ein Programm, das testen soll ob Sie bereits volljährig sind. Sie geben dem Programm über die Kommandozeile ein Alter ein. Das Programm muss dann nur noch prüfen ob das Alter über 18 ist, dann kann es eine Antwort geben, und ansonsten sagt das Programm Sie sind noch nicht volljährig. Das geht mit dem ganz einfachen Code hier:"}),e.jsx(r,{language:"javascript",children:`
            const age = process.argv[2]

            if (age >= 18) {
              console.log("Sie sind volljährig")
            } else {
              console.log("Sie sind noch nicht volljährig")
            }
          `}),e.jsxs("p",{children:["Das wichtigste hier ist das Codestück in den ",e.jsx("pre",{children:"()"}),"-Klammern. Das ist die Bedingung die erfüllt sein muss, damit der Code im ersten Block ausgeführt wird. Ist die Bedingung nicht erfüllt, wird der Code im ",e.jsx("pre",{children:"else"}),"-Block ausgeführt."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Code testen"}),e.jsx("p",{children:"Den Code können Sie gleich hier testen"}),e.jsx(R,{filename:"example-01.js",height:"300px",terminalHeight:"250px",children:`
            const age = process.argv[2]

            if (age >= 18) {
              console.log("Sie sind volljährig")
            } else {
              console.log("Sie sind noch nicht volljährig")
            }
          `})]}),e.jsxs(m,{children:[e.jsx("h2",{children:"Mehrere Fälle zusammenhängen"}),e.jsxs("p",{children:["Oftmals kommt es vor das Sie mehrere Fälle haben, die alle miteinander zu tun haben. Diese kann man dann mit Hilfe von"," ",e.jsx("pre",{children:"else if (...)"})," zusammenhängen."]}),e.jsx("p",{children:"In Amerika sind die Regeln ab wann man autofahren darf, und ab wann man Alkohol trinken darf etwas anders als bei uns, schauen wir das in einem einfachen Code-Beispiel an."}),e.jsx(r,{language:"javascript",children:`
            const age = Number(process.argv[2])
            
            if (age < 16) {
              console.log("Du darfst noch garnichts")
            } else if (16 <= age && age < 18) {
              console.log("Du darfst Autofahren, bist aber noch nicht volljährig")
            } else if ( 18 <= age && age < 21) {
              console.log("Du bist volljährig, darfst aber noch kein Alkohol trinken")
            } else {
              console.log("Du darfst Alkohol trinken.")
            }
          `}),e.jsxs("p",{children:["Der Ausdruck in den ",e.jsx("pre",{children:"()"}),"-Klammern ist ein Wahrheitswert. Das bedeutet das sein Resultat immer ",e.jsx("pre",{children:"true"})," oder ",e.jsx("pre",{children:"false"})," ","ist. Wahrheitswerte kann man mit logischen Operatoren wie"," ",e.jsx("pre",{children:"und"}),", ",e.jsx("pre",{children:"oder"}),", ",e.jsx("pre",{children:"nicht"})," kombinieren, um neue Wahrheitswerte zu bekommen."]}),e.jsxs("h3",{children:["Der ",e.jsx("pre",{children:"und"}),"-Operator"]}),e.jsxs("p",{children:["Wenn Sie möchten das 2 Bedingungen zu gleichen Zeit erfüllt sind, wie wenn zum Beispiel eine Zahl zwischen 2 anderen Zahlen liegen soll, dann können Sie das mit dem logischen ",e.jsx("pre",{children:"und"}),"-Operator machen. In Javascript ist dies ",e.jsx("pre",{children:"&&"}),". Also wenn eine Zahl zwischen 10 und 20 liegen soll, dann machen Sie das wie folgt:"," ",e.jsx("pre",{children:"(10 <= zahl && zahl < 20)"}),"."]}),e.jsxs("h3",{children:["Der ",e.jsx("pre",{children:"oder"}),"-Operator"]}),e.jsxs("p",{children:["Oftmals kommt es vor das Sie 2 Bedingungen haben, und aber nur eine davon erfüllt sein muss, dann können Sie den logischen ",e.jsx("pre",{children:"oder"}),"-Operator verwenden. In Javascript ist das ",e.jsx("pre",{children:"||"}),". Möchten Sie zum Beispiel das eine Zahl ausserhalb von einem Bereich liegt, also die Zahl ist kleiner als 10 oder grösser als 15, dann können Sie das so formulieren: ",e.jsx("pre",{children:"(zahl < 10 || 15 < zahl)"}),"."]}),e.jsxs("h3",{children:["Der ",e.jsx("pre",{children:"nicht"}),"-Operator"]}),e.jsxs("p",{children:["Diesen Operator können Sie brauchen wenn Sie eine logische Aussage umdrehen möchten. In Javascript wird dafür das Zeichen ",e.jsx("pre",{children:"!"}),"direkt vor die Aussage geschrieben. Hier müssen Sie ein wenig aufpassen mit den Klammern. Als einfaches Beispiel könnten wir sagen eine Zahl darf ",e.jsx("strong",{children:"nicht"})," grösser als 50 sein. Dann können Sie das mit der folgenden Aussage ausdrücken:"," ",e.jsx("pre",{children:"!(zahl >= 50)"})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Truthy Werte in Javascript"}),e.jsxs("p",{children:["Javascript ist ein wenig merkwürdig wenn es um Wahrheitswerte geht. Es gibt in Javascript das Konzept von einem ",e.jsx("pre",{children:"truthy"})," Wert. Das ist ein Ausdruck der ",e.jsx("pre",{children:"true"})," zurückgibt wenn er ausgewertet wird. In Javascript ist zum Beispiel der Wert von einer Zahl immer",e.jsx("pre",{children:"true"})," ausser die Zahl ist 0. Wir können also Code schreiben der in etwa so aussieht:"]}),e.jsx(r,{language:"javascript",children:`
            const number = Number(process.argv[2])

            if (number) {
              console.log("Die Zahl ist nicht 0.")
            } else {
              console.log("Sie haben eine 0 eingegeben.")
            }
          `}),e.jsx("p",{children:"Wir brauchen in Javascript also oftmals gar keinen Vergleichs-Operator, es reicht einfach einen Truthy-Wert zu haben. Dieses Konzept wird sehr oft verwendet wenn wir eine Eingabe überprüfen möchten, also ob wir überhaupt etwas vom Benutzer erhalten haben, so wie in dem folgenden Beispiel:"}),e.jsx(r,{language:"javascript",children:`
            const input = process.argv[2]

            if (!input) {
              console.log("Sie haben leider nicht eingegeben.")
            } else {
              console.log(\`Ihre Eingabe ist: \${input}\`)
            }
          `}),e.jsx("p",{children:"Dieses Konzept verwendet man oft als Funktionswächter, das werden wir später bei Funktionen noch genauer anschauen. Die Idee ist aber gleich wie oben, wenn uns eine Eingabe fehlt, dann brechen wir einfach ab."})]}),e.jsxs(m,{children:[e.jsx("h2",{children:"Ternary-Operator"}),e.jsxs("p",{children:["Oftmals kommt es beim Programmieren vor dass Sie einen oder einen anderen Wert haben möchten, je nachdem ob eine Bedingung erfüllt ist oder nicht. Das können Sie mit einem ",e.jsx("pre",{children:"if-else"})," ganz einfach machen. Oftmals verwendet man aber einen anderen Operator, der die Leserlichkeit verbessern soll. Das ist der Ternary-Operator."]}),e.jsxs("p",{children:["Ein einfaches Szenario dafür ist das folgende. Wenn ",e.jsx("pre",{children:"CAPS"}),"aktiv ist, dann möchten Sie alles gross geschrieben haben, ansonsten normal. Dafür schauen wir uns diesen einfachen Code an:"]}),e.jsx(r,{language:"javascript",children:`
            const caps = process.argv[2]
            const answer = caps ? "ALLES GROSS" : "Alles normal"

            console.log(answer)

          `}),e.jsxs("p",{children:["Der Operator funktioniert ganz einfach, wenn man ihn mal verstanden hat. Die Syntax ist wie folgt"," ",e.jsx("pre",{children:"Bedingung ? Wahr-Fall : Falsch-Fall"}),". Wenn Sie das verstanden haben, dann ist der Operator sehr einfach."]}),e.jsxs("p",{children:["Wir haben oben bereits gesagt das man diesen Operator nicht unbedingt braucht, denn Sie können alles auch mit ",e.jsx("pre",{children:"if-else"})," machen. Er wird aber sehr oft von KIs verwendet, was bedeutet dass Sie den Code zumindest lesen können müssen."]})]})]})}const ai=Object.freeze(Object.defineProperty({__proto__:null,default:Pn},Symbol.toStringTag,{value:"Module"}));function Hn(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{children:[e.jsx("h2",{children:"Funktionen"}),e.jsx("p",{children:"Funktionen sind wie kleine Unterprogramme die wir im Code laufen lassen können. Das macht es für uns super praktisch, denn wir können unseren Code in einfache kleine logische Einheiten aufteilen."}),e.jsxs("p",{children:["Sie möchten zum Beispiel wissen ob eine Zahl gerade ist oder nicht, dann können wir dafür eine eigene kleine Funktion schreiben, zum Beispiel ",e.jsx("pre",{children:"isEven(...)"}),". Diese Funktion gibt uns dann einen Wahrheitswert zurück, den können wir dann genau so verwenden wie zuvor."]}),e.jsx(r,{language:"javascript",children:`
            function isEven(number) {
              if (number % 2 === 0) {
                return true
              } else {
                return false
              }
            }

            const input = Number(process.argv[2])

            if (isEven(input)) {
              console.log("Die Zahl ist gerade")
            } else {
              console.log("Die Zahl ist nicht gerade")
            }
          `}),e.jsx("p",{children:"Wir haben nun unsere Logik in eine eigene Funktion geladen, und diese Funktion können wir immer wieder verwenden. Das praktische daran ist, der Name der Funktion beschreibt immer schön was denn passieren soll, das macht den Code deutlich lesbarer, denn wir müssen nicht unbedingt wissen wie man prüft ob eine Zahl gerade ist, wir müssen nur wissen das Die Funktion genau das macht, aber nicht wie Sie das macht. Somit wird der Code an anderen Stellen für uns einfacher zu lesen."})]}),e.jsx("section",{children:e.jsx(R,{filename:"example-01.js",height:"300px",terminalHeight:"250px",children:`
            function isOdd(number) {
              if (number % 2 === 0) {
                return false
              } else {
                return true
              }
            }

            const input = Number(process.argv[2])

            if (isEven(input)) {
              console.log("Die Zahl ist ungerade")
            } else {
              console.log("Die Zahl ist nicht ungerade")
            }
          `})}),e.jsxs(m,{children:[e.jsx("h2",{children:"Funktionswächter"}),e.jsx("p",{children:"Bei Funktionen kann es sein dass diese mit Argumenten aufgerufen werden, die keinen Sinn ergeben, oder das Argumente fehlen die Sie eigentlich brauchen. Für solche Fälle verwendet man Funktionswächter."}),e.jsxs("p",{children:["Ein Funktionswächter prüft die Argumente und bricht die Funktion ab, wenn die Argumente keinen Sinn ergeben. Nehmen Sie an Sie haben die Funktion ",e.jsx(oe,{children:"f(x) = 2 \\cdot x + 3"})," und nun möchten Sie",e.jsx(oe,{children:"f(2)"})," bestimmen. Falls keine Zahl eingegeben wird, brechen Sie die Funktion ab, und geben einfach nichts zurück."]}),e.jsx(r,{language:"javascript",children:`
            function f(input) {
              const x = Number(input)
              if (!x) {
                console.error("Sie müssen eine Zahl eingeben")
                return
              }

              return 2 * x + 3
            }


            console.log(f(process.argv[2]))
          `})]})]})}const oi=Object.freeze(Object.defineProperty({__proto__:null,default:Hn},Symbol.toStringTag,{value:"Module"}));function Mn(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{children:[e.jsx("h2",{children:"Listen"}),e.jsx("p",{children:"Listen sind eine häufig verwendete Datenstruktur. Die kommen in allen Programmiersprachen vor, und Funktionieren immer ähnlich. Eine Liste ist einfach nur eine Variable, die mehrere Einträge enthält. So müssen wir nicht für jeden einzelnen Eintrag einen neuen Namen erfinden, wir können die Einträge über die Position in der Liste ansprechen."})]}),e.jsx(te,{children:e.jsxs("ul",{children:[e.jsx("li",{children:"Sie wissen wie man eine Liste in Javascript erstellt."}),e.jsx("li",{children:"Sie wissen wie man die Länge einer Liste in Javascript bestimmt."}),e.jsx("li",{children:"Sie wissen wie man ein bestimmtes Element aus einer Liste abrufen kann."}),e.jsx("li",{children:"Sie wissen wie man ein Element vorne oder hinten in einer Liste anhängen kann."}),e.jsx("li",{children:"Sie wissen wie man ein Element in einer Liste ersetzen kann."}),e.jsx("li",{children:"Sie wissen wie man ein Element aus einer Liste löschen kann."}),e.jsxs("li",{children:["Sie wissen das ",e.jsx("pre",{children:"process.argv"})," eine Liste ist, und können bestimmte Elemente daraus auslesen."]})]})}),e.jsxs("section",{children:[e.jsx("h2",{children:"Listen erstellen"}),e.jsxs("p",{children:["Eine Liste in Javascript zu erstellen ist sehr einfach. Sie verwenden dafür eckige Klammern ",e.jsx("pre",{children:"[]"})," und schreiben die Einträge darin mit Komma getrennt. Hier ist ein einfaches Beispiel mit einer Einkaufsliste:"]}),e.jsx(r,{language:"javascript",children:`
            const shoppingList = ["Milch", "Brot", "Eier", "Butter"]
            console.log(shoppingList)
          `}),e.jsx("p",{children:"Sie können in einer Liste beliebige Werte speichern: Texte, Zahlen, oder sogar andere Listen. Hier ist eine Liste mit verschiedenen Datentypen:"}),e.jsx(r,{language:"javascript",children:`
            const mixedList = ["Text", 42, true, 3.14]
            console.log(mixedList)
          `})]}),e.jsxs(m,{children:[e.jsx("h2",{children:"Die Länge einer Liste bestimmen"}),e.jsxs("p",{children:["Oftmals möchten Sie wissen wie viele Einträge in einer Liste sind. Dafür hat jede Liste in Javascript eine Eigenschaft namens"," ",e.jsx("pre",{children:"length"}),". Diese gibt Ihnen die Anzahl der Elemente zurück:"]}),e.jsx(r,{language:"javascript",children:'\n            const shoppingList = ["Milch", "Brot", "Eier", "Butter"]\n            console.log(`Die Liste hat ${shoppingList.length} Einträge`)\n            \n            const numbers = [10, 20, 30, 40, 50]\n            console.log(`Diese Liste hat ${numbers.length} Zahlen`)\n          '})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Elemente aus einer Liste abrufen"}),e.jsxs("p",{children:["Um ein bestimmtes Element aus einer Liste zu bekommen, verwenden Sie eckige Klammern mit der Position des Elements."," ",e.jsx("strong",{children:"Wichtig:"})," In der Programmierung fangen wir immer bei 0 an zu zählen! Das erste Element ist also an Position 0, das zweite an Position 1, und so weiter."]}),e.jsx(r,{language:"javascript",children:'\n            const fruits = ["Apfel", "Banane", "Orange", "Erdbeere"]\n            \n            console.log(`Erste Frucht: ${fruits[0]}`)    // Apfel\n            console.log(`Zweite Frucht: ${fruits[1]}`)   // Banane\n            console.log(`Dritte Frucht: ${fruits[2]}`)   // Orange\n            console.log(`Vierte Frucht: ${fruits[3]}`)   // Erdbeere\n          '}),e.jsxs("p",{children:["Sie können auch vom Ende der Liste zählen. Dafür verwenden Sie negative Zahlen. ",e.jsx("pre",{children:"-1"})," ist das letzte Element, ",e.jsx("pre",{children:"-2"})," ","das vorletzte, und so weiter:"]}),e.jsx(r,{language:"javascript",children:'\n            const fruits = ["Apfel", "Banane", "Orange", "Erdbeere"]\n            \n            console.log(`Letzte Frucht: ${fruits[fruits.length - 1]}`)    // Erdbeere\n            console.log(`Vorletzte Frucht: ${fruits[fruits.length - 2]}`) // Orange\n          '})]}),e.jsxs(m,{children:[e.jsx("h2",{children:"Elemente zu einer Liste hinzufügen"}),e.jsx("p",{children:"Es gibt zwei wichtige Methoden um Elemente zu einer Liste hinzuzufügen:"}),e.jsxs("h3",{children:["Hinten anhängen mit ",e.jsx("pre",{children:"push()"})]}),e.jsxs("p",{children:["Die Methode ",e.jsx("pre",{children:"push()"})," fügt ein Element am Ende der Liste hinzu:"]}),e.jsx(r,{language:"javascript",children:"\n            const numbers = [1, 2, 3]\n            console.log(`Vorher: ${numbers}`)\n            \n            numbers.push(4)\n            console.log(`Nachher: ${numbers}`)  // [1, 2, 3, 4]\n            \n            numbers.push(5)\n            console.log(`Jetzt: ${numbers}`)    // [1, 2, 3, 4, 5]\n          "}),e.jsxs("h3",{children:["Vorne einfügen mit ",e.jsx("pre",{children:"unshift()"})]}),e.jsxs("p",{children:["Die Methode ",e.jsx("pre",{children:"unshift()"})," fügt ein Element am Anfang der Liste ein:"]}),e.jsx(r,{language:"javascript",children:"\n            const numbers = [1, 2, 3]\n            console.log(`Vorher: ${numbers}`)\n            \n            numbers.unshift(0)\n            console.log(`Nachher: ${numbers}`)  // [0, 1, 2, 3]\n            \n            numbers.unshift(-1)\n            console.log(`Jetzt: ${numbers}`)    // [-1, 0, 1, 2, 3]\n          "})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Elemente in einer Liste ersetzen"}),e.jsx("p",{children:"Um ein Element in einer Liste zu ersetzen, greifen Sie einfach über den Index darauf zu und weisen einen neuen Wert zu:"}),e.jsx(r,{language:"javascript",children:'\n            const animals = ["Katze", "Hund", "Maus"]\n            console.log(`Vorher: ${animals}`)\n            \n            animals[1] = "Vogel"\n            console.log(`Nachher: ${animals}`)  // ["Katze", "Vogel", "Maus"]\n            \n            animals[0] = "Tiger"\n            console.log(`Jetzt: ${animals}`)    // ["Tiger", "Vogel", "Maus"]\n          '})]}),e.jsxs(m,{children:[e.jsx("h2",{children:"Elemente aus einer Liste löschen"}),e.jsx("p",{children:"Es gibt mehrere Möglichkeiten um Elemente aus einer Liste zu löschen:"}),e.jsxs("h3",{children:["Letztes Element entfernen mit ",e.jsx("pre",{children:"pop()"})]}),e.jsxs("p",{children:["Die Methode ",e.jsx("pre",{children:"pop()"})," entfernt das letzte Element und gibt es zurück:"]}),e.jsx(r,{language:"javascript",children:"\n            const numbers = [1, 2, 3, 4, 5]\n            console.log(`Vorher: ${numbers}`)\n            \n            const lastItem = numbers.pop()\n            console.log(`Entfernt: ${lastItem}`)  // 5\n            console.log(`Nachher: ${numbers}`)    // [1, 2, 3, 4]\n          "}),e.jsxs("h3",{children:["Erstes Element entfernen mit ",e.jsx("pre",{children:"shift()"})]}),e.jsxs("p",{children:["Die Methode ",e.jsx("pre",{children:"shift()"})," entfernt das erste Element und gibt es zurück:"]}),e.jsx(r,{language:"javascript",children:"\n            const numbers = [1, 2, 3, 4, 5]\n            console.log(`Vorher: ${numbers}`)\n            \n            const firstItem = numbers.shift()\n            console.log(`Entfernt: ${firstItem}`)  // 1\n            console.log(`Nachher: ${numbers}`)   // [2, 3, 4, 5]\n          "}),e.jsxs("h3",{children:["Element an beliebiger Position entfernen mit ",e.jsx("pre",{children:"splice()"})]}),e.jsxs("p",{children:["Die Methode ",e.jsx("pre",{children:"splice()"})," kann Elemente an jeder Position entfernen. Der erste Parameter ist die Position, der zweite wie viele Elemente entfernt werden sollen:"]}),e.jsx(r,{language:"javascript",children:`
            const colors = ["rot", "grün", "blau", "gelb", "orange"]
            console.log(\`Vorher: \${colors}\`)
            
            // Entferne 1 Element an Position 2
            colors.splice(2, 1)
            console.log(\`Nachher: \${colors}\`)  // ["rot", "grün", "gelb", "orange"]
            
            // Entferne 2 Elemente an Position 1
            colors.splice(1, 2)
            console.log(\`Jetzt: \${colors}\`)    // ["rot", "orange"]
          `})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"process.argv ist eine Liste"}),e.jsxs("p",{children:["Sie haben bereits ",e.jsx("pre",{children:"process.argv"})," kennengelernt, um Eingaben von der Kommandozeile zu bekommen. ",e.jsx("pre",{children:"process.argv"})," ist tatsächlich eine Liste! Diese Liste enthält alle Argumente die beim Programmstart übergeben wurden."]}),e.jsx("p",{children:"Die ersten zwei Einträge sind immer der Pfad zu Node.js und der Pfad zu Ihrer Datei. Ihre eigenen Argumente fangen bei Index 2 an:"}),e.jsx(r,{language:"javascript",children:'\n            console.log("Alle Argumente:")\n            console.log(process.argv)\n            \n            console.log(`\\nDas erste Argument: ${process.argv[2]}`)\n            console.log(`Das zweite Argument: ${process.argv[3]}`)\n            console.log(`Das dritte Argument: ${process.argv[4]}`)\n            \n            console.log(`\\nAnzahl der Argumente: ${process.argv.length}`)\n          '}),e.jsx("p",{children:"Das ist besonders nützlich wenn Sie mehrere Eingaben haben. Zum Beispiel ein Programm das zwei Zahlen addiert:"}),e.jsx(r,{language:"javascript",children:`
            const number1 = Number(process.argv[2])
            const number2 = Number(process.argv[3])
            
            const sum = number1 + number2
            console.log(\`\${number1} + \${number2} = \${sum}\`)
          `})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Code testen"}),e.jsx("p",{children:"Hier können Sie mit Listen experimentieren. Probieren Sie die verschiedenen Methoden aus:"}),e.jsx(R,{filename:"example-lists.js",height:"400px",terminalHeight:"300px",children:'\n            // Erstelle eine Liste mit Ihren Lieblingsspeisen\n            const foods = ["Pizza", "Pasta", "Salat"]\n            console.log(`Meine Speisen: ${foods}`)\n            console.log(`Anzahl: ${foods.length}`)\n            \n            // Füge eine neue Speise hinzu\n            foods.push("Burger")\n            console.log(`\\nNach push: ${foods}`)\n            \n            // Greife auf einzelne Elemente zu\n            console.log(`\\nErste Speise: ${foods[0]}`)\n            console.log(`Letzte Speise: ${foods[foods.length - 1]}`)\n            \n            // Ändere eine Speise\n            foods[1] = "Lasagne"\n            console.log(`\\nNach Änderung: ${foods}`)\n            \n            // Entferne die letzte Speise\n            const removed = foods.pop()\n            console.log(`\\nEntfernt: ${removed}`)\n            console.log(`Finale Liste: ${foods}`)\n          '})]})]})}const ci=Object.freeze(Object.defineProperty({__proto__:null,default:Mn},Symbol.toStringTag,{value:"Module"}));function Vn(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{children:[e.jsx("h2",{children:"Schleifen"}),e.jsx("p",{children:"Schleifen sind eines der wichtigsten Konzepte in der Programmierung. Sie erlauben es Ihnen, Code mehrfach auszuführen, ohne ihn immer wieder schreiben zu müssen. Das ist besonders nützlich wenn Sie mit Listen arbeiten, oder wenn Sie eine Aufgabe mehrfach wiederholen möchten."})]}),e.jsx(te,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:["Sie wissen wie man eine ",e.jsx("pre",{children:"for"}),"-Schleife in Javascript schreibt."]}),e.jsxs("li",{children:["Sie wissen wie man mit einer ",e.jsx("pre",{children:"for"}),"-Schleife durch eine Liste iteriert."]}),e.jsxs("li",{children:["Sie wissen wie man eine ",e.jsx("pre",{children:"while"}),"-Schleife in Javascript schreibt."]}),e.jsxs("li",{children:["Sie verstehen den Unterschied zwischen ",e.jsx("pre",{children:"for"})," und"," ",e.jsx("pre",{children:"while"})," Schleifen."]}),e.jsxs("li",{children:["Sie wissen wie man mit ",e.jsx("pre",{children:"break"})," eine Schleife vorzeitig verlassen kann."]}),e.jsxs("li",{children:["Sie wissen wie man mit ",e.jsx("pre",{children:"continue"})," zum nächsten Schleifendurchlauf springt."]})]})}),e.jsxs("section",{children:[e.jsx("h2",{children:"Die for-Schleife"}),e.jsxs("p",{children:["Die ",e.jsx("pre",{children:"for"}),"-Schleife ist die am häufigsten verwendete Schleife. Sie besteht aus drei Teilen: dem Startwert, der Bedingung, und der Aktualisierung. Hier ist ein einfaches Beispiel das die Zahlen von 1 bis 5 ausgibt:"]}),e.jsx(r,{language:"javascript",children:`
            for (let i = 1; i <= 5; i++) {
              console.log(\`Zahl: \${i}\`)
            }
          `}),e.jsxs("p",{children:["Die ",e.jsx("pre",{children:"for"}),"-Schleife funktioniert wie folgt:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("pre",{children:"let i = 1"})," - Startwert: Die Variable ",e.jsx("pre",{children:"i"})," wird mit 1 initialisiert"]}),e.jsxs("li",{children:[e.jsx("pre",{children:"i <= 5"})," - Bedingung: Die Schleife läuft solange"," ",e.jsx("pre",{children:"i"})," kleiner oder gleich 5 ist"]}),e.jsxs("li",{children:[e.jsx("pre",{children:"i++"})," - Aktualisierung: Nach jedem Durchlauf wird"," ",e.jsx("pre",{children:"i"})," um 1 erhöht"]})]})]}),e.jsxs(m,{children:[e.jsx("h2",{children:"Durch Listen iterieren"}),e.jsx("p",{children:"Ein sehr häufiger Anwendungsfall für Schleifen ist das Durchlaufen von Listen. Sie können jeden Eintrag einer Liste besuchen und etwas damit machen:"}),e.jsx(r,{language:"javascript",children:`
            const fruits = ["Apfel", "Banane", "Orange", "Erdbeere"]
            
            for (let i = 0; i < fruits.length; i++) {
              console.log(\`Frucht \${i}: \${fruits[i]}\`)
            }
          `}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Beachten Sie dass wir bei 0 anfangen (weil Listen bei 0 beginnen) und die Bedingung"," ",e.jsx("pre",{children:"i < fruits.length"})," verwenden (nicht ",e.jsx("pre",{children:"<="}),"), weil der letzte Index immer ",e.jsx("pre",{children:"length - 1"})," ist."]}),e.jsx("p",{children:"Ein praktisches Beispiel: Summieren Sie alle Zahlen in einer Liste:"}),e.jsx(r,{language:"javascript",children:`
            const numbers = [10, 20, 30, 40, 50]
            let sum = 0
            
            for (let i = 0; i < numbers.length; i++) {
              sum = sum + numbers[i]
            }
            
            console.log(\`Die Summe ist: \${sum}\`)  // Die Summe ist: 150
          `})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Die while-Schleife"}),e.jsxs("p",{children:["Die ",e.jsx("pre",{children:"while"}),"-Schleife ist einfacher als die ",e.jsx("pre",{children:"for"}),"-Schleife. Sie läuft solange eine Bedingung erfüllt ist. Hier ist das gleiche Beispiel wie oben, aber mit einer ",e.jsx("pre",{children:"while"}),"-Schleife:"]}),e.jsx(r,{language:"javascript",children:`
            let i = 1
            
            while (i <= 5) {
              console.log(\`Zahl: \${i}\`)
              i++
            }
          `}),e.jsxs("p",{children:["Die ",e.jsx("pre",{children:"while"}),"-Schleife ist besonders nützlich wenn Sie nicht im Voraus wissen wie oft die Schleife laufen soll. Zum Beispiel wenn Sie Zahlen verdoppeln bis ein Grenzwert erreicht ist:"]}),e.jsx(r,{language:"javascript",children:`
            let number = 1
            
            while (number < 100) {
              console.log(\`Aktuelle Zahl: \${number}\`)
              number = number * 2
            }
            
            console.log(\`Endergebnis: \${number}\`)
            // Gibt aus: 1, 2, 4, 8, 16, 32, 64, dann stoppt bei 128
          `}),e.jsx("p",{children:"Ein weiteres Beispiel: Zählen Sie wie viele Schritte nötig sind, um von einem Startwert auf 0 zu kommen:"}),e.jsx(r,{language:"javascript",children:`
            let value = 100
            let steps = 0
            
            while (value > 0) {
              value = value - 7
              steps++
              console.log(\`Schritt \${steps}: Wert ist jetzt \${value}\`)
            }
            
            console.log(\`Benötigte Schritte: \${steps}\`)
          `})]}),e.jsxs(m,{children:[e.jsx("h2",{children:"Der Unterschied zwischen for und while"}),e.jsx("p",{children:"Beide Schleifentypen können das gleiche tun, aber sie haben unterschiedliche Anwendungsfälle:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Verwenden Sie ",e.jsx("pre",{children:"for"}),", wenn Sie wissen wie oft die Schleife laufen soll (z.B. durch eine Liste iterieren, von 1 bis 10 zählen)"]}),e.jsxs("li",{children:["Verwenden Sie ",e.jsx("pre",{children:"while"}),", wenn die Anzahl der Durchläufe von einer Bedingung abhängt (z.B. bis eine bestimmte Eingabe kommt, bis ein Wert erreicht wird)"]})]}),e.jsxs("p",{children:["Als Faustregel: ",e.jsx("pre",{children:"for"})," für Listen, ",e.jsx("pre",{children:"while"})," für Bedingungen."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Die Schleife vorzeitig beenden mit break"}),e.jsxs("p",{children:["Manchmal möchten Sie eine Schleife vorzeitig verlassen, wenn eine bestimmte Bedingung erfüllt ist. Dafür verwenden Sie das Schlüsselwort"," ",e.jsx("pre",{children:"break"}),":"]}),e.jsx(r,{language:"javascript",children:`
            const numbers = [5, 12, 8, 130, 44, 3]
            
            for (let i = 0; i < numbers.length; i++) {
              if (numbers[i] > 100) {
                console.log(\`Gefunden! \${numbers[i]} ist grösser als 100\`)
                break  // Stoppe die Schleife
              }
              console.log(\`Prüfe: \${numbers[i]}\`)
            }
          `}),e.jsx("p",{children:"In diesem Beispiel stoppt die Schleife sobald eine Zahl grösser als 100 gefunden wird. Die restlichen Elemente werden nicht mehr überprüft."})]}),e.jsxs(m,{children:[e.jsx("h2",{children:"Einen Durchlauf überspringen mit continue"}),e.jsxs("p",{children:["Das Schlüsselwort ",e.jsx("pre",{children:"continue"})," überspringt den restlichen Code im aktuellen Durchlauf und springt direkt zum nächsten:"]}),e.jsx(r,{language:"javascript",children:`
            const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            
            for (let i = 0; i < numbers.length; i++) {
              if (numbers[i] % 2 === 0) {
                continue  // Überspringe gerade Zahlen
              }
              console.log(\`Ungerade Zahl: \${numbers[i]}\`)
            }
          `}),e.jsxs("p",{children:["Dieses Beispiel gibt nur die ungeraden Zahlen aus. Bei geraden Zahlen wird ",e.jsx("pre",{children:"continue"})," ausgeführt und der ",e.jsx("pre",{children:"console.log"})," ","übersprungen."]}),e.jsx("p",{children:"Ein weiteres Beispiel: Filtern Sie eine Liste und ignorieren Sie leere Strings:"}),e.jsx(r,{language:"javascript",children:`
            const words = ["Hallo", "", "Welt", "", "JavaScript", ""]
            
            for (let i = 0; i < words.length; i++) {
              if (words[i] === "") {
                continue  // Überspringe leere Strings
              }
              console.log(\`Wort: \${words[i]}\`)
            }
          `})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Verschachtelte Schleifen"}),e.jsx("p",{children:"Sie können Schleifen auch ineinander verschachteln. Das ist nützlich wenn Sie mit mehrdimensionalen Daten arbeiten oder alle Kombinationen von Elementen durchgehen möchten:"}),e.jsx(r,{language:"javascript",children:`
            const colors = ["rot", "grün", "blau"]
            const sizes = ["S", "M", "L"]
            
            for (let i = 0; i < colors.length; i++) {
              for (let j = 0; j < sizes.length; j++) {
                console.log(\`\${colors[i]} in Grösse \${sizes[j]}\`)
              }
            }
          `}),e.jsx("p",{children:'Dieses Beispiel gibt alle möglichen Kombinationen von Farben und Grössen aus: "rot in Grösse S", "rot in Grösse M", usw.'})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Code testen"}),e.jsx("p",{children:"Hier können Sie mit Schleifen experimentieren. Probieren Sie verschiedene Beispiele aus:"}),e.jsx(R,{filename:"example-loops.js",height:"400px",terminalHeight:"300px",children:`
            // Zähle von 1 bis 5
            console.log("For-Schleife:")
            for (let i = 1; i <= 5; i++) {
              console.log(\`Zahl: \${i}\`)
            }
            
            // Durchlaufe eine Liste
            console.log("\\nDurch Liste iterieren:")
            const fruits = ["Apfel", "Banane", "Orange"]
            for (let i = 0; i < fruits.length; i++) {
              console.log(\`Frucht \${i}: \${fruits[i]}\`)
            }
            
            // Summiere Zahlen
            console.log("\\nSumme berechnen:")
            const numbers = [10, 20, 30]
            let sum = 0
            for (let i = 0; i < numbers.length; i++) {
              sum = sum + numbers[i]
            }
            console.log(\`Summe: \${sum}\`)
          `})]})]})}const di=Object.freeze(Object.defineProperty({__proto__:null,default:Vn},Symbol.toStringTag,{value:"Module"}));function Gn(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{children:[e.jsx("h2",{children:"Schleifen mit Funktionen"}),e.jsxs("p",{children:["In Javascript gibt es neben den klassischen ",e.jsx("pre",{children:"for"})," und"," ",e.jsx("pre",{children:"while"})," Schleifen auch spezielle Funktionen, die durch Listen iterieren können. Diese Funktionen sind eine moderne Alternative zu normalen Schleifen und werden oft verwendet, weil der Code dadurch lesbarer wird."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Diese Funktionen sind optional! Sie können alles auch mit normalen ",e.jsx("pre",{children:"for"}),"-Schleifen machen. Aber es ist gut zu wissen dass es diese Alternative gibt, weil Sie diese oft in modernem Code sehen werden."]})]}),e.jsx(te,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:["Sie kennen ",e.jsx("pre",{children:"forEach"})," als Alternative zur ",e.jsx("pre",{children:"for"}),"-Schleife."]}),e.jsxs("li",{children:["Sie wissen wie man mit ",e.jsx("pre",{children:"map"})," eine Liste transformiert."]}),e.jsxs("li",{children:["Sie wissen wie man mit ",e.jsx("pre",{children:"filter"})," eine Liste filtert."]}),e.jsx("li",{children:"Sie verstehen den Unterschied zwischen diesen Funktionen und normalen Schleifen."})]})}),e.jsxs("section",{children:[e.jsx("h2",{children:"forEach - Jedes Element durchlaufen"}),e.jsxs("p",{children:["Die ",e.jsx("pre",{children:"forEach"})," Funktion führt für jedes Element in einer Liste eine Aktion aus. Sie ist eine einfache Alternative zur ",e.jsx("pre",{children:"for"}),"-Schleife."]}),e.jsxs("p",{children:["Vergleichen wir zuerst eine normale ",e.jsx("pre",{children:"for"}),"-Schleife:"]}),e.jsx(r,{language:"javascript",children:`
            const fruits = ["Apfel", "Banane", "Orange"]
            
            // Mit for-Schleife
            for (let i = 0; i < fruits.length; i++) {
              console.log(\`Frucht: \${fruits[i]}\`)
            }
          `}),e.jsxs("p",{children:["Das gleiche mit ",e.jsx("pre",{children:"forEach"}),":"]}),e.jsx(r,{language:"javascript",children:`
            const fruits = ["Apfel", "Banane", "Orange"]
            
            // Mit forEach
            fruits.forEach(function(fruit) {
              console.log(\`Frucht: \${fruit}\`)
            })
          `}),e.jsxs("p",{children:["Beachten Sie: Bei ",e.jsx("pre",{children:"forEach"})," müssen Sie sich nicht um den Index kümmern. Die Funktion gibt Ihnen direkt jedes Element."]}),e.jsx("p",{children:"Ein weiteres einfaches Beispiel mit Zahlen:"}),e.jsx(r,{language:"javascript",children:`
            const numbers = [1, 2, 3, 4, 5]
            
            numbers.forEach(function(number) {
              console.log(\`Das Doppelte von \${number} ist \${number * 2}\`)
            })
          `}),e.jsx("h3",{children:"Alternative Syntax: for...of"}),e.jsxs("p",{children:["Es gibt noch eine weitere moderne Syntax um durch Listen zu iterieren: die ",e.jsx("pre",{children:"for...of"})," Schleife. Sie ist sehr ähnlich zu"," ",e.jsx("pre",{children:"forEach"}),", aber verwendet die klassische Schleifen-Syntax:"]}),e.jsx(r,{language:"javascript",children:`
            const fruits = ["Apfel", "Banane", "Orange"]
            
            // Mit for...of
            for (const fruit of fruits) {
              console.log(\`Frucht: \${fruit}\`)
            }
          `}),e.jsxs("p",{children:["Der Vorteil von ",e.jsx("pre",{children:"for...of"}),": Sie können ",e.jsx("pre",{children:"break"})," und"," ",e.jsx("pre",{children:"continue"})," verwenden, was bei ",e.jsx("pre",{children:"forEach"})," nicht geht."]}),e.jsx("h3",{children:"Alternative Syntax: for...in"}),e.jsxs("p",{children:["Die ",e.jsx("pre",{children:"for...in"})," Schleife iteriert über die Indizes (nicht die Werte!) einer Liste:"]}),e.jsx(r,{language:"javascript",children:`
            const fruits = ["Apfel", "Banane", "Orange"]
            
            // Mit for...in (gibt Indizes zurück)
            for (const index in fruits) {
              console.log(\`Index \${index}: \${fruits[index]}\`)
            }
          `}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," ",e.jsx("pre",{children:"for...in"})," wird hauptsächlich für Objekte verwendet, nicht für Listen. Für Listen ist"," ",e.jsx("pre",{children:"for...of"})," die bessere Wahl."]}),e.jsx("h3",{children:"Zusammenfassung der Varianten"}),e.jsx(r,{language:"javascript",children:`
            const numbers = [10, 20, 30]
            
            // 1. Klassische for-Schleife (mit Index)
            for (let i = 0; i < numbers.length; i++) {
              console.log(numbers[i])
            }
            
            // 2. forEach (ohne Index)
            numbers.forEach(function(num) {
              console.log(num)
            })
            
            // 3. for...of (ohne Index, mit break/continue möglich)
            for (const num of numbers) {
              console.log(num)
            }
            
            // 4. for...in (mit Index, nicht empfohlen für Listen)
            for (const index in numbers) {
              console.log(numbers[index])
            }
          `})]}),e.jsxs(m,{children:[e.jsx("h2",{children:"map - Eine Liste transformieren"}),e.jsxs("p",{children:["Die ",e.jsx("pre",{children:"map"})," Funktion erstellt eine neue Liste, indem sie jedes Element transformiert. Sie ist sehr nützlich wenn Sie aus einer Liste eine neue Liste machen möchten."]}),e.jsx("p",{children:"Beispiel: Verdoppeln Sie alle Zahlen in einer Liste:"}),e.jsx(r,{language:"javascript",children:`
            const numbers = [1, 2, 3, 4, 5]
            
            // Mit for-Schleife
            const doubled = []
            for (let i = 0; i < numbers.length; i++) {
              doubled.push(numbers[i] * 2)
            }
            console.log(doubled)  // [2, 4, 6, 8, 10]
          `}),e.jsxs("p",{children:["Das gleiche mit ",e.jsx("pre",{children:"map"}),":"]}),e.jsx(r,{language:"javascript",children:`
            const numbers = [1, 2, 3, 4, 5]
            
            // Mit map
            const doubled = numbers.map(function(number) {
              return number * 2
            })
            console.log(doubled)  // [2, 4, 6, 8, 10]
          `}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," ",e.jsx("pre",{children:"map"})," gibt immer eine neue Liste zurück. Die alte Liste bleibt unverändert."]}),e.jsx("p",{children:"Ein Beispiel mit Strings:"}),e.jsx(r,{language:"javascript",children:`
            const names = ["anna", "bob", "charlie"]
            
            const uppercased = names.map(function(name) {
              return name.toUpperCase()
            })
            
            console.log(uppercased)  // ["ANNA", "BOB", "CHARLIE"]
            console.log(names)       // ["anna", "bob", "charlie"] - unverändert
          `})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"filter - Eine Liste filtern"}),e.jsxs("p",{children:["Die ",e.jsx("pre",{children:"filter"})," Funktion erstellt eine neue Liste, die nur die Elemente enthält, die eine Bedingung erfüllen."]}),e.jsx("p",{children:"Beispiel: Finden Sie alle Zahlen die grösser als 10 sind:"}),e.jsx(r,{language:"javascript",children:`
            const numbers = [5, 12, 8, 130, 44, 3]
            
            // Mit for-Schleife
            const bigNumbers = []
            for (let i = 0; i < numbers.length; i++) {
              if (numbers[i] > 10) {
                bigNumbers.push(numbers[i])
              }
            }
            console.log(bigNumbers)  // [12, 130, 44]
          `}),e.jsxs("p",{children:["Das gleiche mit ",e.jsx("pre",{children:"filter"}),":"]}),e.jsx(r,{language:"javascript",children:`
            const numbers = [5, 12, 8, 130, 44, 3]
            
            // Mit filter
            const bigNumbers = numbers.filter(function(number) {
              return number > 10
            })
            console.log(bigNumbers)  // [12, 130, 44]
          `}),e.jsx("p",{children:"Ein Beispiel mit Strings:"}),e.jsx(r,{language:"javascript",children:`
            const words = ["Hallo", "Hi", "Guten Tag", "Hey", "Grüezi"]
            
            // Finde alle Wörter die länger als 4 Buchstaben sind
            const longWords = words.filter(function(word) {
              return word.length > 4
            })
            
            console.log(longWords)  // ["Hallo", "Guten Tag", "Grüezi"]
          `})]}),e.jsxs(m,{children:[e.jsx("h2",{children:"Funktionen kombinieren"}),e.jsxs("p",{children:["Das Besondere an ",e.jsx("pre",{children:"map"})," und ",e.jsx("pre",{children:"filter"})," ist, dass Sie diese kombinieren können. Weil beide eine neue Liste zurückgeben, können Sie das Resultat von ",e.jsx("pre",{children:"filter"})," direkt an ",e.jsx("pre",{children:"map"})," ","weitergeben."]}),e.jsx("p",{children:"Beispiel: Finde alle geraden Zahlen und verdopple sie dann."}),e.jsx(r,{language:"javascript",children:`
            const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            
            // Schritt 1: Filtere alle geraden Zahlen
            const evenNumbers = numbers.filter(function(number) {
              return number % 2 === 0
            })
            console.log(evenNumbers)  // [2, 4, 6, 8, 10]
            
            // Schritt 2: Verdopple diese Zahlen
            const doubled = evenNumbers.map(function(number) {
              return number * 2
            })
            console.log(doubled)  // [4, 8, 12, 16, 20]
          `}),e.jsx("p",{children:"So sehen Sie klar was in jedem Schritt passiert: Erst wird gefiltert, dann wird transformiert."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Wann welche Methode verwenden?"}),e.jsx("p",{children:"Hier ist eine einfache Übersicht:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("pre",{children:"forEach"})," - Wenn Sie für jedes Element etwas tun möchten (z.B. ausgeben, in Datenbank speichern)"]}),e.jsxs("li",{children:[e.jsx("pre",{children:"map"})," - Wenn Sie eine neue Liste mit transformierten Elementen erstellen möchten"]}),e.jsxs("li",{children:[e.jsx("pre",{children:"filter"})," - Wenn Sie eine neue Liste mit ausgewählten Elementen erstellen möchten"]}),e.jsxs("li",{children:[e.jsx("pre",{children:"for"}),"-Schleife - Wenn Sie volle Kontrolle brauchen (z.B. break, continue, Index ist wichtig)"]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Merke:"})," Alle diese Methoden erreichen das gleiche Ziel. Es ist eine Frage des Stils und der Lesbarkeit. Verwenden Sie was für Sie am verständlichsten ist."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Code testen"}),e.jsx("p",{children:"Hier können Sie mit den verschiedenen Funktionen experimentieren:"}),e.jsx(R,{filename:"example-loop-functions.js",height:"400px",terminalHeight:"300px",children:`
            const numbers = [1, 2, 3, 4, 5]
            
            // forEach - Jedes Element ausgeben
            console.log("forEach:")
            numbers.forEach(function(number) {
              console.log(\`Zahl: \${number}\`)
            })
          `})]})]})}const hi=Object.freeze(Object.defineProperty({__proto__:null,default:Gn},Symbol.toStringTag,{value:"Module"}));function Rn(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{children:[e.jsx("h2",{children:"Variablen"}),e.jsx("p",{children:"Variablen beim Programmieren sind einfache Speicherzellen. Ein Muster das beim Programmieren immer wieder vorkommt, ist es einen Wert zu speichern, und diesen später wieder zu verwenden, das wird beim Programmieren mit Variablen und Zuweisungen gelöst."}),e.jsx("p",{children:"Stellen Sie sich das einfache mathematische Problem von dieser Rechnung hier vor."}),e.jsx(Le,{children:String.raw`(5+3) \cdot 2`}),e.jsx("p",{children:"Wir müssen hier in 2 Schritten rechnen, und dem Computer jeweils sagen, dass er das Resultat speichern soll. Wir Können das einfach mit dem folgenden Code machen:"}),e.jsx(r,{lang:"javascript",children:`
            let sum = 5 + 3;
            let prod = sum * 2;

            console.log(\`Das Resultat ist \${prod}\`);
          `})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Benutzereingabe Speichern"}),e.jsx("p",{children:"Sehr oft kommt es beim Programmieren vor, das Sie einen Wert vom Benutzer erfragen müssen, bzw. einen Wert von der Kommandozeile einlesen, diesen aber erst später wieder brauchen, dann ist es nützlich wenn man diese Werte einfach nur abspeichern kann, wie zum Beispiel hier:"}),e.jsx(r,{lang:"javascript",diff:!0,children:`
          const name = process.argv[2]

          console.log(\`Hello \${name}!\`)
          `}),e.jsxs("p",{children:["Wir könnten das speichern der Variable hier auch weglassen, aber hier gibt es uns einen zusätzlichen Hinweis darauf was wir vom Code erwarten, denn ",e.jsx("pre",{children:"process.argv[2]"})," ist nicht wirklich aussagekräftig, im Code wissen wir nun aber das wir einen Namen erwarten. Das abspeichern in Variablen hilft uns also auch gleich den Code zu dokumentieren."]})]}),e.jsxs(m,{children:[e.jsxs("h2",{children:["Der Unterschied von ",e.jsx("pre",{children:"let"})," und ",e.jsx("pre",{children:"const"})]}),e.jsxs("p",{children:["In den Beispielen oben haben wir einmal ",e.jsx("pre",{children:"let"})," und einmal",e.jsx("pre",{children:"const"})," verwendet. Beides sind Schlüsselwörter und werden verwendet wenn eine neue Variable erstellt werden soll. Wenn"," ",e.jsx("pre",{children:"let"})," verwendet wird, dann kann man der Variable später einen anderen Wert zuweisen. Bei ",e.jsx("pre",{children:"const"})," ist das nicht möglich, wir können eine Variable also for dem überschreiben schützen. Wir ändern das Beispiel 1 ganz leicht ab, so dass wir nur eine Variable brauchen."]}),e.jsx(r,{lang:"javascript",highlightLines:[2],children:"let result = 5 + 3;\nresult = result * 2;\n\nconsole.log(`Das Resultat ist ${result}`);"}),e.jsxs("p",{children:["Wann sollte man ",e.jsx("pre",{children:"let"})," und wann ",e.jsx("pre",{children:"const"})," verwenden. Da gibt es ganz unterschiedliche Ansichten, und Sie könnten alles nur mit"," ",e.jsx("pre",{children:"let"})," machen. Wir versuche jedoch alles mit ",e.jsx("pre",{children:"const"})," ","zu machen, denn so müssen wir in jedem Schritt eine neue Variable erstellen, was uns zwingt explizit zu sein, und dadurch unseren Code direkt erklärt."]})]})]})}const ui=Object.freeze(Object.defineProperty({__proto__:null,default:Rn},Symbol.toStringTag,{value:"Module"}));function Jn(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{children:[e.jsx("h2",{children:"Einführung in Kaplay"}),e.jsx("p",{children:"Kaplay ist eine Game-Engine für den Webbrowser. Das Projekt ermöglicht es, einfache Spiele direkt im Webbrwoser darzustellen. Kaplay verfügt über eine sehr gute Dokumentation und eine grosse Sammlung von Beispielen, an denen man sich inspirieren kann. Wir werden in den folgenden Kapiteln noch mehr über diese Game-Engine lernen, und lernen wie man ein Spiel Projekt von Grund auf aufbaut."})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Dokumentation"}),e.jsx("p",{children:"Die Dokumentation von Kaplay ist hervorragend und man kann dort fast alles finden, besonders wenn man lange genug sucht, oder wenn man weiss wie man suchen muss. Es hilft natürlich wenn man das Framework verstanden hat, und bereits eine Übersicht hat, was es alles gibt. Falls Sie also beim ersten mal etwas nicht verstanden oder gefunden haben, schauen Sie einfach nochmals rein."}),e.jsx("p",{style:{textAlign:"center"},children:e.jsx("a",{href:"https://v4000.kaplayjs.com/docs/guides/",target:"_blank",rel:"noreferrer",children:"Kaplay Docs"})})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Sammlung von Beispielen"}),e.jsx("p",{children:"Kaplay hat neben der hervorragenden Dokumentation noch eine grosse Sammlung an guten Beispielen, wo alles mit sehr vielen Kommentaren erklärt wird. Hier ist es ebenfalls hilfreich wenn Sie sich in dem Projekt besser auskennen, denn oftmals kann man Beispiele nicht direkt übernehmen, sondern es müssen noch Anpassungen gemacht werden. Diese gelingen aber sehr einfach, je besser man sich in dem Projekt auskennt."}),e.jsx("p",{style:{textAlign:"center"},children:e.jsx("a",{href:"https://play.kaplayjs.com/?example=basicEventsObject",target:"_blank",rel:"noreferrer",children:"Kaplay Sammlung"})})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"KI-Unterstützung"}),e.jsxs("p",{children:["Oftmals ist es nicht leicht die richtigen Informationen direkt auf der Webseite zu finden, daher bekommen Sie hier ein wenig Unterstützung von einem ChatBot. Der ChatBot ist angewiesen die Dokumentation von Kaplay zu durchsuchen, und Ihnen kleine Codestücke zu geben, die Sie direkt einsetzen und anpassen können. Der ChatBot ist ",e.jsx("strong",{children:"nicht"})," dazu da um das ganze Projekt für Sie zu machen, verlangen Sie also keinen grossen Code-Stücke von dem Bot."]}),e.jsx("p",{style:{textAlign:"center"},children:e.jsx("a",{href:"https://app.fobizz.com/ai/chats/public_assistants/1864dbea-0869-4667-b88a-b4d0ba60f336?token=e1f2d087a4ed9ab17005be1a7cb5d13e",target:"_blank",rel:"noreferrer",children:"Kaplay Bot"})})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Video Hilfe"}),e.jsx("p",{children:"Sie bekommen zu jedem Abschnitt auch ein kurzes Video, welches Ihnen die Grundlagen und den Code erklärt. Die Videos sind relativ kurz gehalten, damit man sie öfters anschauen kann, falls ein Teil noch nicht richtig verstanden wurde. Die Videos sind mehr als Erklärung und Hilfe gedacht, nicht unbedingt um direkt mitzuarbeiten."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Projekt Setup"}),e.jsxs("p",{children:["Das Projekt können Sie hier unter diesem",e.jsx("a",{href:"https://classroom.github.com/a/hyWJLy2_",target:"_blank",rel:"noreferrer",children:"Github Classroom"}),"finden, und sich direkt einer Gruppe anschliessen."]}),e.jsx("p",{children:"Das folgende Video erklärt Ihnen wie das Projekt aufgebaut ist."}),e.jsx(_,{url:"fECohz732gc"})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Kaplay Spiel erstellen"}),e.jsx("p",{children:"Um ein Kaplay Spiel zu erstellen brauchen Sie ein Kaplay-Objekt, welches Sie auf Ihrer Webseite hinzufügen. Keine Angst, das ist deutlich einfacher wie es klingt. Sie finden hier den Basis Code dafür, und in dem Video wird Ihnen mehr dazu erklärt."}),e.jsx(r,{lang:"javascript",children:`
            import kaplay from "kaplay"

            const k = kaplay({...})
          `})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Video"}),e.jsx("p",{children:"In diesem Video wir Ihnen erklärt wie Sie das Kaplay-Objekt erstellen und zu Ihrer Webseite hinzufügen."}),e.jsx(_,{url:"mKyV3Ij7NOE"})]})]})}const mi=Object.freeze(Object.defineProperty({__proto__:null,default:Jn},Symbol.toStringTag,{value:"Module"}));function Un(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{children:[e.jsx("h2",{children:"Spielobjekte in Kaplay"}),e.jsxs("p",{children:["Damit ein Spiel überhaupt funktionieren kann, braucht es Objekte die vom Spieler oder dem Spiel selbst manipuliert werden können. In Kaplay werden diese Spielobjekte immer auf die gleiche Art erstellt, und zwar mit der ",e.jsx("pre",{children:"add()"}),"-Funktion."]}),e.jsx(r,{lang:"javascript",children:`
            k.add([
              k.rect(20, 20),
              k.pos(320, 240),
              k.anchor("center")
            ])
          `})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Video"}),e.jsx("p",{children:"In dem Video erfahren Sie mehr über Spielobjekte und auch wie Sie Gravitation zum Spiel hinzufügen können."}),e.jsx(_,{url:"DbM5PQPgPcY"})]})]})}const gi=Object.freeze(Object.defineProperty({__proto__:null,default:Un},Symbol.toStringTag,{value:"Module"}));function qn(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{children:[e.jsx("h2",{children:"Interaktionen mit den Spielobjekten"}),e.jsx("p",{children:"Wie im letzten Kapitel bereits angesprochen, ist ein Spiel erst spannend wenn es auch vom Benutzer manipuliert werden kann. Dazu werden meist das drücken von Tasten oder das klicken der Maus verwendet. In Kaplay geht das ganz einfach."}),e.jsx(r,{lang:"javascript",children:`
            const player = k.add([
              k.rect(20, 20),
              k.pos(320, 240),
              k.anchor("center")
            ])

            // Damit fügen wir dem Spieler einen Listener hinzu,
            // der auf die Taste "d" reagiert.
            player.onKeyDown("d", ()=> {
              // Bewegt den Spieler 320 Pixel/sek in x Richtung
              player.move(320, 0)
            })
          `})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Video"}),e.jsx("p",{children:"In dem Video erfahren Sie mehr über Inputhandler und auch wie Sie mehrere zu einem Spielobjekt hinzufügen können."}),e.jsx(_,{url:"J5nRtP1MAss"})]})]})}const pi=Object.freeze(Object.defineProperty({__proto__:null,default:qn},Symbol.toStringTag,{value:"Module"}));function Qn(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{children:[e.jsx("h2",{children:"Verschiedene Levels in Kaplay"}),e.jsxs("p",{children:["In einem Spiel haben Sie oft unterschiedliche Levels. Würde man das alles in eine Datei schreiben, wird das sehr unübersichtlich, und man könnte unterschiedliche Welten nicht gut voneinander trennen. In Kaplay wird das ganze mit ",e.jsx("pre",{children:"Szenen"})," geregelt."]}),e.jsx(r,{lang:"javascript",children:`
            k.scene("loading", () => { /* Code für diese Scene */})
            k.scene("level-01", () => { /* Code für das Level 1 */})


            k.go("loading") // Damit gehen wir zur Szene mit dem Namen "loading"
          `}),e.jsx("p",{children:"Wenn wir das ganze so organisieren, bleibt natürlich auch alles in einer Datei, das möchten wir nicht, also erstellen wir pro Szene eine eigene Datei mit folgendem Aufbau:"}),e.jsx(r,{lang:"javascript",children:`
            export default function loadingScene() {
              // Code der nur in der Szene gebraucht wird.
            }
          `}),e.jsx("p",{children:"Dann können wir in unsere Hauptdatei diese Szene importieren und hinzufügen."}),e.jsx(r,{lang:"javascript",children:`

            import loadingScene from "./scenes/loading-scene.js"

            /* Kaplay Code */

            k.scene("loading", loadingScene)

            k.go("loading")
          `})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Video"}),e.jsx("p",{children:"Hier in dem Video werden erklärt wie Szenen generell funktionieren."}),e.jsx(_,{url:"4ALgXCSkJkc"}),e.jsx("p",{children:"In diesem Video wird eine Vereinfachung der Syntax gezeigt. Sollten Sie anschauen, denn im Projekt werden beide Arten des Codes verwendet. Und der Beispiel-Code auf der Webseite hier, verwendet die einfachere Syntax vom zweiten Video."}),e.jsx(_,{url:"NCFFn_A4Gd0"})]})]})}const fi=Object.freeze(Object.defineProperty({__proto__:null,default:Qn},Symbol.toStringTag,{value:"Module"}));function Yn(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{children:[e.jsx("h2",{children:"Kaplay Komponenten"}),e.jsx("p",{children:"In Kaplay wird fast alles über Komponenten gelöst. Komponenten definieren das Aussehen und Verhalten von Spielobjekten. In dem Kapitel lernen Sie auch wie man eigene Komponenten erstellt und diese dann zum Spiel hinzufügen kann."}),e.jsx(r,{lang:"javascript",children:`
            export default function controller() {
              return {
                id: "controller",  // jede Komponente braucht eine id
                
                add() {
                  // Das wird ausgeführt wenn das Spielobjekt hinzugefügt wird.
                },
                update() {
                  // Wird bei jedem neuen Frame ausgeführt.
                  this.moveBy(k.vec2(10, 0))
                }
              }
            }
          `})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Video"}),e.jsx("p",{children:"Dieses Video erklärt Ihnen wie Sie eigene Komponenten erstellen und im Spiel verwenden können."}),e.jsx(_,{url:"QbVVgs-ncjw"})]})]})}const xi=Object.freeze(Object.defineProperty({__proto__:null,default:Yn},Symbol.toStringTag,{value:"Module"}));function Xn(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{children:[e.jsx("h2",{children:"Kaplay Ereignisse"}),e.jsx("p",{children:"Kaplay hat ein Eventsystem, das Sie bereits kennengelernt haben. Immer wenn eine Taste gedrückt wird, wird ein Event ausgelöst. Ein solches Event wird dann im nächsten Frame des Spiels verarbeitet. Also wenn ich eine Taste gedrückt halte, dann wird in jedem Frame des Spiels dieses Event ausgelöst. So können wir auch auf Kollisionen testen, oder sogar eigene Events erstellen, mit denen Objekte miteinander kommunizieren können."}),e.jsx(r,{lang:"javascript",children:`
            const player = /* Kaplay Code für Spieler */
            const npc = /* Kaplay Code für NPC */

            player.onKeyPress("l", () => {
              console.log("Player pressed L")
              k.trigger("lol", "*") // Feuert ein eigenes Event names "lol"
            })

            k.on("lol", "*", () => {
              // Code der bei dem event passieren soll.
            })
          `}),e.jsxs("p",{children:["Der Code hier ist sehr allgemein un Wahrscheinlich noch schwer zu verstehen, aber so können alle Spielobjekte auf ein Event reagieren. Das möchten Sie aber meistens nicht, sondern nur auf bestimmte Klassen von Spielobjekten. Wie das geht, sehen Sie im nächsten Kapitel mit den ",e.jsx("pre",{children:"Tags"}),"."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Video"}),e.jsx("p",{children:"Dieses Video erklärt Ihnen wie Sie eigene Komponenten erstellen und im Spiel verwenden können."}),e.jsx(_,{url:"d8PWsXCuJDw"})]})]})}const ji=Object.freeze(Object.defineProperty({__proto__:null,default:Xn},Symbol.toStringTag,{value:"Module"}));function ei(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{children:[e.jsx("h2",{children:"Kaplay Tags"}),e.jsxs("p",{children:["Kaplay verwendet ein ",e.jsx("pre",{children:"Tags"})," System um die verschiedenen Spielobjekte einer Klasse zuzuweisen. Das ist sehr praktisch, denn so kann alles was freundlich ist, eine eigene Klasse haben, und alles was feindlich ist eine andere. So können Kollisionen unterschiedlich behandelt werden."]}),e.jsx(r,{lang:"javascript",children:`
            k.add([
              k.rect(20, 20),
              k.pos(320, 240),
              "friend"
            ])
          `}),e.jsxs("p",{children:["Das ",e.jsx("pre",{children:'"friend"'})," ist das Tag das verwendet wird. Damit können wir dann diese Klasse von Objekten direkt ansprechen. Im Video unten werden wir das letzte Beispiel zu den Event erweitern und diese",e.jsx("pre",{children:"Tags"})," verwenden."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Video"}),e.jsx("p",{children:"Das Video erweitert das letzte um Tags."}),e.jsx(_,{url:"ypahTzOiuhc"})]})]})}const bi=Object.freeze(Object.defineProperty({__proto__:null,default:ei},Symbol.toStringTag,{value:"Module"}));function ni(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{children:[e.jsx("h2",{children:"Kollisionen in Kaplay"}),e.jsxs("p",{children:["Kollisionen sind ein zentraler Bestandteil vieler Spiele. In Kaplay können wir mit dem ",e.jsx("pre",{children:"area()"}),"-Komponent und Kollisions-Events einfach feststellen, wenn zwei Spielobjekte miteinander kollidieren. Dies ist besonders wichtig für die Interaktion zwischen Spieler und Gegnern, das Aufsammeln von Items oder das Erkennen von Hindernissen."]}),e.jsx(r,{lang:"javascript",children:`
            const player = k.add([
              k.rect(20, 20),
              k.pos(320, 240),
              k.area(),  // Macht das Objekt kollidierbar
              "player"
            ])

            const coin = k.add([
              k.circle(10),
              k.pos(400, 240),
              k.area(),
              "coin"
            ])

            // Reagiert auf Kollision zwischen player und coin
            player.onCollide("coin", (coin) => {
              k.destroy(coin)  // Entfernt die Münze
              console.log("Münze eingesammelt!")
            })
          `}),e.jsxs("p",{children:["Mit ",e.jsx("pre",{children:"onCollide()"})," können wir auf Kollisionen reagieren. Der erste Parameter ist das Tag des Objekts, mit dem kollidiert werden soll, und der zweite Parameter ist eine Funktion, die ausgeführt wird, wenn die Kollision stattfindet."]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Video"}),e.jsx("p",{children:"In dem Video erfahren Sie mehr über Kollisionen und wie Sie diese in Ihrem Spiel verwenden können."}),e.jsx(_,{url:"HBApXkM8aBY"})]})]})}const Si=Object.freeze(Object.defineProperty({__proto__:null,default:ni},Symbol.toStringTag,{value:"Module"}));function ii(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{children:[e.jsx("h2",{children:"Kamera zentrieren in Kaplay"}),e.jsx("p",{children:"In vielen Spielen ist die Spielwelt grösser als der sichtbare Bildschirm. Damit der Spieler immer im Zentrum bleibt und die Kamera ihm folgt, verwenden wir die Kamera-Funktionen von Kaplay. So bleibt der Spieler immer im Fokus, während sich die Welt um ihn herum bewegt."}),e.jsx(r,{lang:"javascript",children:`
            const player = k.add([
              k.rect(20, 20),
              k.pos(320, 240),
              k.anchor("center"),
              "player"
            ])

            // Kamera folgt dem Spieler
            player.onUpdate(() => {
              k.camPos(player.pos)
            })
          `}),e.jsxs("p",{children:["Mit ",e.jsx("pre",{children:"camPos()"})," können wir die Kameraposition setzen. Wenn wir dies im ",e.jsx("pre",{children:"onUpdate()"}),"-Event des Spielers machen, folgt die Kamera dem Spieler automatisch."]}),e.jsx("p",{children:"Für eine sanftere Kamerabewegung können wir auch Interpolation verwenden:"}),e.jsx(r,{lang:"javascript",children:`
            player.onUpdate(() => {
              const currentCamPos = k.camPos()
              const targetCamPos = player.pos
              
              // Sanfte Kamerabewegung (Lerp)
              k.camPos(currentCamPos.lerp(targetCamPos, 0.1))
            })
          `})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Video"}),e.jsx("p",{children:"In diesem Video wird erklärt wie die Kamera funktioniert und wie Sie diese so einstellen können, dass sie dem Spieler folgt."}),e.jsx(_,{url:"lQbuCrrBNk8"})]})]})}const ki=Object.freeze(Object.defineProperty({__proto__:null,default:ii},Symbol.toStringTag,{value:"Module"}));function ri(){return e.jsxs(e.Fragment,{children:[e.jsxs("section",{children:[e.jsx("h2",{children:"Arbeiten im Team mit Git"}),e.jsx("p",{children:"Wenn Sie an einem grösseren Projekt arbeiten, ist es wichtig im Team zusammenzuarbeiten. Git und GitHub ermöglichen es mehreren Personen gleichzeitig am selben Projekt zu arbeiten, ohne sich gegenseitig zu stören. Hier lernen Sie die Grundlagen der Zusammenarbeit mit Git."})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Branches erstellen"}),e.jsx("p",{children:"Jedes Teammitglied sollte an einem eigenen Branch arbeiten. So können alle unabhängig voneinander arbeiten und es gibt keine Konflikte."}),e.jsx(r,{lang:"bash",children:`
            # Neuen Branch erstellen und wechseln
            git checkout -b mein-feature

            # Oder in neueren Git-Versionen:
            git switch -c mein-feature
          `}),e.jsx("p",{children:"Benennen Sie Ihre Branches sinnvoll, z.B.:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("pre",{children:"feature/player-movement"})," - für neue Features"]}),e.jsxs("li",{children:[e.jsx("pre",{children:"fix/collision-bug"})," - für Bugfixes"]}),e.jsxs("li",{children:[e.jsx("pre",{children:"level/world-1"})," - für neue Levels"]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Änderungen hochladen"}),e.jsx("p",{children:"Wenn Sie Änderungen gemacht haben, committen Sie diese und laden sie auf GitHub hoch:"}),e.jsx(r,{lang:"bash",children:`
            # Änderungen hinzufügen
            git add .

            # Commit mit aussagekräftiger Nachricht
            git commit -m "Add player jump functionality"

            # Auf GitHub hochladen
            git push origin mein-feature
          `})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Video zu Git Branches"}),e.jsx("p",{children:"Das Video zeigt Ihnen wie Sie in VSCode mit einer grafischen Oberfläche mit Git arbeiten können, und erklärt Ihnen auch nochmals alle wichtigen Konzepte."}),e.jsx(_,{url:"ReuQ_Rrf7Aw"})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Änderungen von anderen holen"}),e.jsx("p",{children:"Bevor Sie mit der Arbeit beginnen, holen Sie immer die neuesten Änderungen vom Hauptbranch:"}),e.jsx(r,{lang:"bash",children:`
            # Zum Hauptbranch wechseln
            git checkout main

            # Neueste Änderungen holen
            git pull origin main

            # Zurück zu Ihrem Feature-Branch
            git checkout mein-feature

            # Hauptbranch in Ihren Branch mergen
            git merge main
          `})]}),e.jsxs("section",{children:[e.jsx("h3",{children:"Tipps für gute Zusammenarbeit"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Committen Sie oft und mit aussagekräftigen Nachrichten"}),e.jsx("li",{children:"Holen Sie regelmässig die neuesten Änderungen vom Hauptbranch"}),e.jsx("li",{children:"Kommunizieren Sie mit Ihrem Team über geplante Änderungen"}),e.jsx("li",{children:"Testen Sie Ihren Code bevor Sie einen Pull Request erstellen"}),e.jsx("li",{children:"Halten Sie Ihre Commits klein und fokussiert auf eine Aufgabe"})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Video zu Git Merges"}),e.jsx("p",{children:"Dieses Video zeigt Ihnen wie Sie die Änderungen von anderen erhalten können, und was Sie machen wenn es Konflikte gibt."}),e.jsx(_,{url:"tVWaWF6xW4U"})]})]})}const wi=Object.freeze(Object.defineProperty({__proto__:null,default:ri},Symbol.toStringTag,{value:"Module"}));export{Le as D,te as L,oe as M,m as S,_ as V,ai as a,oi as b,ci as c,di as d,hi as e,ui as f,gi as g,pi as h,fi as i,li as j,mi as k,xi as l,ji as m,bi as n,Si as o,ki as p,wi as q};
