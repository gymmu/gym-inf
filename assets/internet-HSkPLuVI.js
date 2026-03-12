import{j as e}from"./react-vendor-B6C3K7RQ.js";import{L as t}from"./gym-pages-BwB6KAce.js";import{F as i}from"./Figure-0UPeRRbM.js";import"./vendor-DID4YVBO.js";import"./monaco-B8ymEbop.js";function r(s){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Das Internet"}),`
`,e.jsx(n.p,{children:`Das Internet ist ein gefährlicher Ort, Sie können sich einen Virus holen, Ihre
persönlichen Daten können gestohlen werden und an jeder Ecke wird versucht Ihr
Passwort zu knacken. Wieso genau das Internet so gefährlich ist, und wie wir uns
davor schützen können, schauen wir in den folgenden Kapiteln an. Denn das
Internet ist nicht nur gefährlich, sondern auch ein sehr toller Ort, wo wir
allerlei Informationen austauschen können.`}),`
`,e.jsx(t,{children:e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Sie Wissen wie Daten prinzipiell übertragen werden."}),`
`,e.jsx(n.li,{children:"Sie wissen dass alle Übertragungen öffentlich einsehbar sind."}),`
`,e.jsx(n.li,{children:"Sie wissen dass was das HTTP und HTTPS Protokoll sind."}),`
`,e.jsx(n.li,{children:"Sie wissen wann Daten verschlüsselt / sicher versendet werden."}),`
`]})}),`
`,e.jsx(n.h2,{children:"Was ist das Internet?"}),`
`,e.jsx(n.p,{children:`Das Internet ist das Netzwerk das alle Geräte miteinander verknüpft. Das
Grundprinzip ist ganz einfach, ein Computer sendet ein elektrisches Signal über
Kabel- oder Kabelloseverbindungen, und alle Geräte die am gleichen Kabel hängen,
können das Signal mithören. Aber nicht alle Geräte sind direkt miteinander
verbunden, sonst wäre das Datenchaos ja viel zu gross, sondern im Internet gibt
es Verteilerknoten - diese nennt man Router - die verschiedene Netzwerke
miteinander verbinden.`}),`
`,e.jsx(i,{src:"https://media.geeksforgeeks.org/wp-content/uploads/20230420093202/Internet-image-(2).webp",alt:"Darstellung des Internets",caption:"Darstellung des Internets",origin:"https://www.geeksforgeeks.org/computer-science-fundamentals/what-is-internet-definition-uses-working-advantages-and-disadvantages/"}),`
`,e.jsx(n.h2,{children:"Router"}),`
`,e.jsx(n.p,{children:`Router verbinden unterschiedliche Teile des Internets miteinander. Sie sind
essentiell für die Funktionsweise des modernen Internets, denn dank den Routern,
können Sie jeden anderen Computer im Internet erreichen.`}),`
`,e.jsxs(n.p,{children:[`Theoretisch ist wirklich jeder andere Computer im Internet erreichbar, aber
natürlich möchten Sie das nicht. Sie möchten zum Beispiel nicht das alle Ihre
Computer von aussen erreichbar sind, so funktionieren viele von diesen Routern
aus als Gateway zum Internet, und unterbinden den direkten Kontakt von aussen.
Genau das ist zum Beispiel die Rolle von einem `,e.jsx(n.strong,{children:"Modem"}),`, welches Sie von Ihrem
ISP zu Hause haben.`]}),`
`,e.jsx(n.h2,{children:"Internet Service Provider (ISP)"}),`
`,e.jsxs(n.p,{children:[`Ein Internet Service Provider, ist wie der Name bereits sagt, der Dienstanbieter
für das Internet. Jeder Haushalt der an das Internet angeschlossen ist, hat zu
Hause ein Gerät - das `,e.jsx(n.strong,{children:"Modem"}),` - welches Ihr zu Hause mit dem Internet
verbindet. Diese `,e.jsx(n.strong,{children:"Modems"})," sind gleichzeitig auch immer ",e.jsx(n.strong,{children:"Router"}),`, sie
verbinden unterschiedliche Teile das Internets miteinander.`]}),`
`,e.jsx(i,{src:"https://kinsta.com/wp-content/uploads/2022/02/ISP-Work-768x256.png",alt:"Visualisierung einer Internet Service Providers",caption:"Visualisierung einer Internet Service Providers",origin:"https://kinsta.com/blog/what-is-isp/"}),`
`,e.jsxs(n.p,{children:[`Das Modem zu Hause funktioniert als Gateway - eine Art Torwächter zwischen Ihrem
privaten Netzwerk zu Hause und dem grossen Internet. Alle Geräte in Ihrem
Haushalt (Computer, Smartphone, Tablet) haben private IP-Adressen, die nur
innerhalb Ihres Netzwerks funktionieren. Das Modem übersetzt diese privaten
Adressen in eine öffentliche IP-Adresse - dieser Prozess heisst `,e.jsx(n.strong,{children:"NAT"}),` (Network
Address Translation). So können viele Geräte mit nur einer öffentlichen
IP-Adresse ins Internet.`]}),`
`,e.jsx(n.p,{children:`Der ISP sieht alle Daten, die über sein Netzwerk laufen. Das ist wichtig zu
verstehen, denn es bedeutet: Ihr Internet-Anbieter kann theoretisch sehen,
welche Webseiten Sie besuchen und welche Daten Sie versenden - ausser die Daten
sind verschlüsselt. Dazu kommen wir später.`}),`
`,e.jsx(n.h2,{children:"Wie werden Daten übertragen?"}),`
`,e.jsxs(n.p,{children:[`Wenn Sie eine Webseite aufrufen oder eine Nachricht versenden, werden Ihre Daten
nicht als ganzes Stück verschickt, sondern in viele kleine `,e.jsx(n.strong,{children:"Pakete"}),`
aufgeteilt. Stellen Sie sich vor, Sie möchten ein Buch per Post versenden, aber
Sie dürfen nur einzelne Seiten verschicken. Jede Seite bekommt eine Nummer, die
Adresse des Empfängers und Ihre eigene Adresse als Absender.`]}),`
`,e.jsx(n.p,{children:"Genau so funktioniert das Internet:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Daten werden in Pakete aufgeteilt"}),`: Ein Bild, eine E-Mail oder eine
Webseite wird in viele kleine Pakete zerlegt (meist 1-1.5 KB gross).`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Jedes Paket bekommt Adressen"}),": Auf jedem Paket steht die ",e.jsx(n.strong,{children:"IP-Adresse"}),`
des Absenders und des Empfängers. Eine IP-Adresse ist wie eine Postadresse
für Computer, zum Beispiel `,e.jsx(n.code,{children:"192.168.1.1"})," oder ",e.jsx(n.code,{children:"172.217.168.46"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Router leiten die Pakete weiter"}),`: Jeder Router auf dem Weg schaut sich die
Zieladresse an und entscheidet, wohin das Paket als nächstes geschickt werden
soll. Die Pakete nehmen nicht unbedingt alle den gleichen Weg!`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Pakete werden wieder zusammengesetzt"}),`: Am Ziel angekommen werden alle
Pakete wieder in der richtigen Reihenfolge zusammengesetzt.`]}),`
`]}),`
`]}),`
`,e.jsx(i,{src:"https://cdn.kastatic.org/ka-perseus-images/337190cba133e19ee9d8b5878453f915971a59cd.svg",alt:"Visualisierung von IP-Paketen",caption:"Daten werden in Pakete aufgeteilt und über verschiedene Wege zum Ziel geschickt",origin:"https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:the-internet/xcae6f4a7ff015e7d:routing-with-redundancy/a/ip-packets"}),`
`,e.jsx(n.h2,{children:"Das Problem: Alles ist öffentlich"}),`
`,e.jsxs(n.p,{children:[`Hier kommt das grosse Sicherheitsproblem: Standardmässig sind alle diese Pakete
`,e.jsx(n.strong,{children:"unverschlüsselt"}),`. Das ist, als würden Sie Ihre Nachrichten auf Postkarten
schreiben statt in einem verschlossenen Brief. Jeder Router, jeder ISP, jeder
Knotenpunkt auf dem Weg kann die Daten lesen.`]}),`
`,e.jsx(n.p,{children:"Das bedeutet konkret:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Ihr ",e.jsx(n.strong,{children:"ISP"})," kann sehen, welche Webseiten Sie besuchen"]}),`
`,e.jsxs(n.li,{children:["Jeder ",e.jsx(n.strong,{children:"Router"})," auf dem Weg kann die Daten lesen"]}),`
`,e.jsxs(n.li,{children:["In einem ",e.jsx(n.strong,{children:"öffentlichen WLAN"}),` kann jeder im gleichen Netzwerk Ihre Daten
abfangen`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Passwörter"}),", ",e.jsx(n.strong,{children:"Kreditkartennummern"})," und ",e.jsx(n.strong,{children:"private Nachrichten"}),` können
gestohlen werden`]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Das klingt beängstigend - und das ist es auch! Aber zum Glück gibt es eine
Lösung: `,e.jsx(n.strong,{children:"Verschlüsselung"}),"."]}),`
`,e.jsx(n.h2,{children:"HTTP vs. HTTPS - Der entscheidende Unterschied"}),`
`,e.jsxs(n.p,{children:["Sie haben sicher schon das kleine ",e.jsx(n.strong,{children:"Vorhängeschloss"}),` in der Adresszeile Ihres
Browsers gesehen. Dieses Symbol zeigt an, ob eine Verbindung sicher ist oder
nicht.`]}),`
`,e.jsx(n.h3,{children:"HTTP - Unverschlüsselt und unsicher"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"HTTP"}),` steht für "HyperText Transfer Protocol" und ist das grundlegende
Protokoll für die Übertragung von Webseiten. Das Problem: HTTP ist
`,e.jsx(n.strong,{children:"unverschlüsselt"}),`. Alles, was Sie eingeben oder empfangen, kann von jedem
gelesen werden, der Zugriff auf die Datenübertragung hat.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`http://www.beispiel-shop.com/login
`})}),`
`,e.jsxs(n.p,{children:[`Wenn Sie auf einer Webseite mit HTTP Ihr Passwort eingeben, ist das so, als
würden Sie Ihr Passwort laut in einem vollen Raum rufen. Verwenden Sie `,e.jsx(n.strong,{children:"nie"}),`
HTTP für sensible Daten!`]}),`
`,e.jsx(n.h3,{children:"HTTPS - Verschlüsselt und sicher"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"HTTPS"}),` ist die sichere Version von HTTP. Das "S" steht für "Secure" und
bedeutet, dass alle Daten `,e.jsx(n.strong,{children:"verschlüsselt"}),` werden, bevor sie versendet werden.
Die Verschlüsselung basiert auf `,e.jsx(n.strong,{children:"SSL/TLS"}),` - Sie müssen nicht verstehen wie das
technisch funktioniert, aber wichtig ist: Nur der Sender und der Empfänger
können die Daten lesen.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`https://www.beispiel-shop.com/login
`})}),`
`,e.jsx(n.p,{children:"Mit HTTPS:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Kann Ihr ",e.jsx(n.strong,{children:"ISP"})," nur sehen, dass Sie ",e.jsx(n.code,{children:"beispiel-shop.com"}),` besuchen, aber nicht
was Sie dort tun`]}),`
`,e.jsxs(n.li,{children:["Können ",e.jsx(n.strong,{children:"Router"})," auf dem Weg die Daten nicht mitlesen"]}),`
`,e.jsxs(n.li,{children:["Sind Ihre ",e.jsx(n.strong,{children:"Passwörter"})," und ",e.jsx(n.strong,{children:"Kreditkartendaten"})," geschützt"]}),`
`,e.jsx(n.li,{children:`Können Sie sicher sein, dass Sie wirklich mit der echten Webseite verbunden
sind (keine Fälschung)`}),`
`]}),`
`,e.jsx(i,{src:"https://www.cloudflare.com/img/learning/security/glossary/what-is-ssl/http-vs-https.svg",alt:"HTTP vs HTTPS",caption:"Vergleich zwischen unverschlüsselter (HTTP) und verschlüsselter (HTTPS) Verbindung",origin:"https://www.cloudflare.com/de-de/learning/ssl/why-is-http-not-secure/"}),`
`,e.jsx(n.h2,{children:"Wann bin ich sicher?"}),`
`,e.jsx(n.p,{children:"Die Faustregel ist ganz einfach:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"HTTPS mit Vorhängeschloss"})," = Sicher"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"HTTP ohne Vorhängeschloss"})," = Unsicher"]}),`
`]}),`
`,e.jsx(n.p,{children:"Achten Sie besonders auf HTTPS:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Beim ",e.jsx(n.strong,{children:"Online-Banking"})]}),`
`,e.jsxs(n.li,{children:["Beim ",e.jsx(n.strong,{children:"Online-Shopping"})," (Kreditkartendaten!)"]}),`
`,e.jsxs(n.li,{children:["Beim ",e.jsx(n.strong,{children:"Einloggen"})," auf Webseiten"]}),`
`,e.jsxs(n.li,{children:["Bei ",e.jsx(n.strong,{children:"E-Mail"})," und ",e.jsx(n.strong,{children:"sozialen Netzwerken"})]}),`
`]}),`
`,e.jsx(n.p,{children:`Die meisten modernen Browser warnen Sie mittlerweile, wenn Sie eine unsichere
Webseite besuchen. Nehmen Sie diese Warnungen ernst!`}),`
`,e.jsx(i,{src:"https://www.ra-plutte.de/wp-content/uploads/2017/01/https_plutte_schwenke_titelbild_schloss-800x426.png.webp",alt:"Browser Vorhängeschloss",caption:"Das Vorhängeschloss zeigt eine sichere HTTPS-Verbindung an",origin:"https://www.ra-plutte.de/gastbeitrag-warum-sie-ihre-website-auf-https-umstellen-sollten/"}),`
`,e.jsx(n.h3,{children:"Öffentliche WLANs - Besondere Vorsicht"}),`
`,e.jsx(n.p,{children:`In öffentlichen WLANs (Café, Flughafen, Hotel) ist die Gefahr besonders gross.
Hier können andere Personen im gleichen Netzwerk Ihren Datenverkehr abfangen.
Selbst mit HTTPS sollten Sie in öffentlichen WLANs vorsichtig sein und niemals
auf HTTP-Seiten surfen.`}),`
`,e.jsxs(n.p,{children:["Noch sicherer sind Sie mit einem ",e.jsx(n.strong,{children:"VPN"}),` (Virtual Private Network). Ein VPN
verschlüsselt Ihren gesamten Datenverkehr zusätzlich und schützt Sie auch vor
neugierigen Blicken Ihres ISPs.`]}),`
`,e.jsx(i,{src:"https://www.bsi.bund.de/SharedDocs/Bilder/DE/Video/BSI/VerbraucherInnen/Sicher_im_Internet/WLAN.jpg?__blob=normal&v=1",alt:"Gefahren in öffentlichen WLANs",caption:"In öffentlichen WLANs können andere Nutzer Ihren Datenverkehr mitlesen",origin:"https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Router-WLAN-VPN/Sicherheitstipps-fuer-privates-und-oeffentliches-WLAN/sicherheitstipps-fuer-privates-und-oeffentliches-wlan_node.html"}),`
`,e.jsx(n.h2,{children:"Zusammenfassung"}),`
`,e.jsxs(n.p,{children:[`Das Internet ist ein offenes Netzwerk, in dem Daten in kleinen Paketen von
Router zu Router weitergeleitet werden. Standardmässig sind diese Daten für
jeden lesbar, der Zugriff auf die Übertragung hat. Mit `,e.jsx(n.strong,{children:"HTTPS"}),` werden die
Daten verschlüsselt und sind somit sicher vor fremden Blicken.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Wichtigste Regel"}),`: Achten Sie immer auf das Vorhängeschloss und HTTPS,
besonders bei sensiblen Daten!`]})]})}function o(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{o as default};
