import{j as e}from"./react-vendor-DPtW2uLn.js";import{L as t}from"./gym-pages-B1WatTOA.js";import{F as s}from"./Figure-CusA9wj0.js";import"./vendor-BscfZStV.js";import"./monaco-DSiUpym4.js";function r(i){const n={br:"br",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"VPN - Virtual Private Network"}),`
`,e.jsxs(n.p,{children:[`Haben Sie sich schon einmal gefragt, wie Sie im Internet wirklich anonym sein
können? Oder wie Sie sicher im öffentlichen WLAN surfen können? Die Antwort auf
beide Fragen lautet: `,e.jsx(n.strong,{children:"VPN"}),`. In diesem Kapitel schauen wir uns an, was ein VPN
ist, wie es funktioniert und wann Sie es verwenden sollten.`]}),`
`,e.jsx(t,{children:e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Sie wissen was ein VPN ist und wie es funktioniert."}),`
`,e.jsx(n.li,{children:"Sie verstehen den Unterschied zwischen verschlüsselten Daten und anonymen Daten."}),`
`,e.jsx(n.li,{children:"Sie wissen wann der Einsatz eines VPN sinnvoll ist."}),`
`,e.jsx(n.li,{children:"Sie kennen die Vor- und Nachteile von VPN-Verbindungen."}),`
`]})}),`
`,e.jsx(n.h2,{children:"Was ist ein VPN?"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"VPN"})," steht für ",e.jsx(n.strong,{children:"Virtual Private Network"}),` - zu Deutsch: virtuelles privates
Netzwerk. Ein VPN erstellt einen verschlüsselten "Tunnel" zwischen Ihrem Gerät
und einem VPN-Server. Alle Daten, die Sie senden oder empfangen, laufen durch
diesen Tunnel und sind somit vor fremden Blicken geschützt.`]}),`
`,e.jsx(n.p,{children:`Stellen Sie sich vor, Sie schicken einen Brief durch eine undurchsichtige Röhre
direkt zu Ihrem Empfänger, statt ihn offen auf der Strasse zu transportieren.
Niemand auf dem Weg kann sehen, was in dem Brief steht oder wohin er genau geht.`}),`
`,e.jsx(s,{src:"https://www.auvik.com/wp-content/uploads/2021/01/pasted-image-1.png",alt:"VPN Tunnel Visualisierung",caption:"Ein VPN erstellt einen verschlüsselten Tunnel für Ihre Daten",origin:"https://www.auvik.com/franklyit/blog/vpn-split-tunneling/"}),`
`,e.jsx(n.h2,{children:"Wie funktioniert ein VPN?"}),`
`,e.jsx(n.p,{children:"Die Funktionsweise eines VPN ist relativ einfach:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Sie verbinden sich mit einem VPN-Server"}),`: Statt direkt eine Webseite
aufzurufen, verbinden Sie sich zuerst mit einem VPN-Server.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Ihre Daten werden verschlüsselt"}),`: Alle Daten, die Sie senden, werden
verschlüsselt, bevor sie Ihren Computer verlassen.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Der VPN-Server leitet Ihre Anfrage weiter"}),`: Der VPN-Server entschlüsselt
Ihre Anfrage und sendet sie an die gewünschte Webseite weiter.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Die Antwort kommt zurück"}),`: Die Webseite schickt die Antwort an den
VPN-Server, der sie verschlüsselt und an Sie zurückschickt.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Sie entschlüsseln die Daten"}),`: Ihr Computer entschlüsselt die Daten und
zeigt Ihnen die Webseite an.`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{children:"Was sieht wer?"}),`
`,e.jsx(n.p,{children:"Das Wichtige bei einem VPN ist zu verstehen, wer was sehen kann:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Ohne VPN:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Ihr ",e.jsx(n.strong,{children:"ISP"})," sieht: Welche Webseiten Sie besuchen (auch bei HTTPS)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Router"})," auf dem Weg sehen: Wohin Ihre Anfragen gehen"]}),`
`,e.jsxs(n.li,{children:["Die ",e.jsx(n.strong,{children:"Webseite"})," sieht: Ihre echte IP-Adresse und Ihren Standort"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Mit VPN:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Ihr ",e.jsx(n.strong,{children:"ISP"}),` sieht: Nur dass Sie mit einem VPN-Server verbunden sind (nicht
welche Webseiten Sie besuchen)`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Router"})," auf dem Weg sehen: Nur verschlüsselte Daten zum VPN-Server"]}),`
`,e.jsxs(n.li,{children:["Die ",e.jsx(n.strong,{children:"Webseite"})," sieht: Die IP-Adresse des VPN-Servers (nicht Ihre echte IP)"]}),`
`,e.jsxs(n.li,{children:["Der ",e.jsx(n.strong,{children:"VPN-Anbieter"})," sieht: Alle Ihre Aktivitäten (Vertrauen ist wichtig!)"]}),`
`]}),`
`,e.jsx(s,{src:"https://blog.resch.cloud/wp-content/uploads/2023/08/Mit-VPN-vs.-ohne-VPN-1.jpg.pagespeed.ce.I7v6UEc1u6.jpg",alt:"Datenfluss mit und ohne VPN",caption:"Vergleich: Was kann der ISP sehen mit und ohne VPN?",origin:"https://blog.resch.cloud/2023/08/30/warum-vpn-meist-nutzlos-sind-und-wie-man-einen-eigenen-vpn-server-aufsetzt/"}),`
`,e.jsx(n.h2,{children:"Wofür brauche ich ein VPN?"}),`
`,e.jsx(n.p,{children:"Es gibt verschiedene Situationen, in denen ein VPN sinnvoll ist:"}),`
`,e.jsx(n.h3,{children:"1. Öffentliche WLANs"}),`
`,e.jsx(n.p,{children:`In öffentlichen WLANs (Café, Flughafen, Hotel) können andere Personen im
gleichen Netzwerk Ihren Datenverkehr abfangen. Mit einem VPN sind Ihre Daten
verschlüsselt und somit geschützt.`}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Beispiel:"}),` Sie sitzen im Café und möchten Ihre E-Mails abrufen. Ohne VPN
könnte jemand im gleichen WLAN Ihre Passwörter stehlen. Mit VPN sind alle Daten
verschlüsselt.`]}),`
`,e.jsx(n.h3,{children:"2. Schutz vor dem ISP"}),`
`,e.jsx(n.p,{children:`Ihr Internet-Anbieter kann sehen, welche Webseiten Sie besuchen. In manchen
Ländern werden diese Daten gespeichert oder an Regierungen weitergegeben. Mit
einem VPN sieht der ISP nur, dass Sie mit einem VPN-Server verbunden sind.`}),`
`,e.jsx(n.h3,{children:"3. Umgehung von geografischen Sperren"}),`
`,e.jsx(n.p,{children:`Manche Webseiten oder Streaming-Dienste sind nur in bestimmten Ländern
verfügbar. Mit einem VPN können Sie einen Server in einem anderen Land wählen
und so auf diese Inhalte zugreifen.`}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Beispiel:"}),` Eine Serie ist nur in den USA verfügbar. Mit einem VPN-Server in
den USA können Sie die Serie trotzdem schauen.`]}),`
`,e.jsx(n.h3,{children:"4. Anonymität im Internet"}),`
`,e.jsx(n.p,{children:`Webseiten sehen nicht Ihre echte IP-Adresse, sondern die des VPN-Servers. So
können Sie anonymer im Internet surfen.`}),`
`,e.jsx(n.h2,{children:"VPN vs. HTTPS - Was ist der Unterschied?"}),`
`,e.jsx(n.p,{children:`Viele verwechseln VPN und HTTPS. Beide verschlüsseln Daten, aber sie schützen
vor unterschiedlichen Dingen:`}),`
`,e.jsx(n.h3,{children:"HTTPS"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Verschlüsselt:"})," Den Inhalt Ihrer Kommunikation mit einer Webseite"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Schützt vor:"})," Mitlesern auf dem Weg (z.B. in öffentlichen WLANs)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ihr ISP sieht:"})," Welche Webseite Sie besuchen (aber nicht was Sie dort tun)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Die Webseite sieht:"})," Ihre echte IP-Adresse"]}),`
`]}),`
`,e.jsx(n.h3,{children:"VPN"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Verschlüsselt:"})," Alle Daten zwischen Ihnen und dem VPN-Server"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Schützt vor:"})," ISP, Router auf dem Weg, lokales Netzwerk"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ihr ISP sieht:"})," Nur dass Sie mit einem VPN-Server verbunden sind"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Die Webseite sieht:"})," Die IP-Adresse des VPN-Servers"]}),`
`]}),`
`,e.jsx(n.h3,{children:"Kombination: HTTPS + VPN"}),`
`,e.jsx(n.p,{children:"Am sichersten sind Sie mit beiden zusammen:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"VPN"})," schützt vor Ihrem ISP und lokalen Netzwerken"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"HTTPS"})," schützt vor dem VPN-Anbieter (der kann den Inhalt nicht lesen)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Wichtig:"}),` Verwenden Sie immer noch HTTPS, auch mit VPN! So sind Ihre Daten
selbst vor dem VPN-Anbieter geschützt.`]}),`
`,e.jsx(n.h2,{children:"Vor- und Nachteile von VPN"}),`
`,e.jsx(n.h3,{children:"Vorteile"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Verschlüsselung:"}),` Alle Daten sind verschlüsselt und vor Mitlesern
geschützt`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Privatsphäre:"})," Ihr ISP kann nicht sehen, welche Webseiten Sie besuchen"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Anonymität:"})," Webseiten sehen nicht Ihre echte IP-Adresse"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Schutz in öffentlichen WLANs:"}),` Auch in unsicheren Netzwerken sind Sie
geschützt`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Umgehung von Sperren:"})," Zugriff auf geografisch gesperrte Inhalte"]}),`
`]}),`
`,e.jsx(n.h3,{children:"Nachteile"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Geschwindigkeit:"}),` VPN kann die Internetgeschwindigkeit verlangsamen
(zusätzliche Verschlüsselung und längerer Weg)`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Kosten:"})," Gute VPN-Dienste kosten Geld (kostenlose VPNs sind oft unsicher)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Vertrauen:"}),` Sie müssen dem VPN-Anbieter vertrauen (er sieht alle Ihre
Aktivitäten)`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Komplexität:"})," Muss eingerichtet und aktiviert werden"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keine 100% Anonymität:"})," Der VPN-Anbieter kennt Ihre echte IP-Adresse"]}),`
`]}),`
`,e.jsx(n.h2,{children:"Worauf sollte ich bei einem VPN-Anbieter achten?"}),`
`,e.jsx(n.p,{children:"Nicht alle VPN-Dienste sind gleich gut. Achten Sie auf folgende Punkte:"}),`
`,e.jsx(n.h3,{children:"1. No-Logs-Policy"}),`
`,e.jsx(n.p,{children:`Der VPN-Anbieter sollte keine Logs (Aufzeichnungen) Ihrer Aktivitäten speichern.
Prüfen Sie die Datenschutzrichtlinien!`}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Gut:"}),' "Wir speichern keine Logs Ihrer Internetaktivitäten"',e.jsx(n.br,{}),`
`,e.jsx(n.strong,{children:"Schlecht:"}),' "Wir speichern temporäre Logs für 30 Tage"']}),`
`,e.jsx(n.h3,{children:"2. Verschlüsselung"}),`
`,e.jsx(n.p,{children:`Moderne VPNs sollten starke Verschlüsselung verwenden (z.B. AES-256, OpenVPN,
WireGuard).`}),`
`,e.jsx(n.h3,{children:"3. Standort des Unternehmens"}),`
`,e.jsx(n.p,{children:`VPN-Anbieter unterliegen den Gesetzen des Landes, in dem sie registriert sind.
Länder mit strengen Datenschutzgesetzen sind besser (z.B. Schweiz, Island).`}),`
`,e.jsx(n.h3,{children:"4. Geschwindigkeit"}),`
`,e.jsx(n.p,{children:`Ein guter VPN-Dienst sollte Ihre Internetgeschwindigkeit nicht zu stark
beeinträchtigen.`}),`
`,e.jsx(n.h3,{children:"5. Kosten"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Kostenlose VPNs sind oft gefährlich!"})," Sie verdienen Geld durch:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Verkauf Ihrer Daten"}),`
`,e.jsx(n.li,{children:"Einblendung von Werbung"}),`
`,e.jsx(n.li,{children:"Begrenzte Geschwindigkeit und Datenvolumen"}),`
`]}),`
`,e.jsx(n.h2,{children:"VPN einrichten"}),`
`,e.jsx(n.p,{children:"Die meisten VPN-Anbieter haben einfache Apps für alle Geräte:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"VPN-Anbieter wählen"})," und Abo abschliessen"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"App herunterladen"})," für Ihr Gerät (Windows, Mac, iOS, Android)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Anmelden"})," mit Ihren Zugangsdaten"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Server wählen"})," (meistens automatisch der schnellste)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Verbinden"})," - fertig!"]}),`
`]}),`
`,e.jsx(n.p,{children:`Viele Anbieter bieten auch Browser-Erweiterungen an, die nur den Browser-Traffic
über VPN leiten.`}),`
`,e.jsx(n.h2,{children:"Wann sollte ich KEIN VPN verwenden?"}),`
`,e.jsx(n.p,{children:`Es gibt auch Situationen, in denen ein VPN nicht nötig oder sogar hinderlich
ist:`}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Online-Banking in vertrauenswürdigen Netzwerken:"}),` Manche Banken blockieren
VPN-Verbindungen aus Sicherheitsgründen`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Lokale Dienste:"})," Manche Webseiten funktionieren nur mit lokaler IP-Adresse"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Gaming:"})," VPN kann die Latenz (Ping) erhöhen"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Streaming mit lokalem Content:"}),` Manche Streaming-Dienste blockieren
VPN-Verbindungen`]}),`
`]}),`
`,e.jsx(n.h2,{children:"Mythen über VPN"}),`
`,e.jsx(n.h3,{children:'Mythos 1: "Mit VPN bin ich 100% anonym"'}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Falsch!"}),` Der VPN-Anbieter kennt Ihre echte IP-Adresse. Ausserdem können Sie
über Browser-Fingerprinting, Cookies und Login-Daten trotzdem identifiziert
werden.`]}),`
`,e.jsx(n.h3,{children:'Mythos 2: "VPN schützt vor Viren"'}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Falsch!"}),` VPN verschlüsselt nur die Datenübertragung. Gegen Viren und Malware
hilft nur ein Antivirusprogramm.`]}),`
`,e.jsx(n.h3,{children:'Mythos 3: "VPN ist illegal"'}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Falsch!"}),` In den meisten Ländern ist VPN völlig legal. Nur in manchen
autoritären Staaten ist VPN verboten oder eingeschränkt.`]}),`
`,e.jsx(n.h3,{children:'Mythos 4: "Kostenlose VPNs sind genauso gut"'}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Falsch!"}),` Kostenlose VPNs verdienen oft Geld durch den Verkauf Ihrer Daten -
genau das Gegenteil von dem, was ein VPN erreichen soll!`]}),`
`,e.jsx(n.h2,{children:"Zusammenfassung"}),`
`,e.jsxs(n.p,{children:["Ein ",e.jsx(n.strong,{children:"VPN"}),` erstellt einen verschlüsselten Tunnel zwischen Ihrem Gerät und einem
VPN-Server. Dadurch sind Ihre Daten vor Ihrem ISP, Ihrem lokalen Netzwerk und
anderen Mitlesern geschützt. Die Webseite sieht nicht Ihre echte IP-Adresse,
sondern die des VPN-Servers.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Wann VPN verwenden:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"In öffentlichen WLANs"}),`
`,e.jsx(n.li,{children:"Wenn Sie nicht möchten, dass Ihr ISP Ihre Aktivitäten sieht"}),`
`,e.jsx(n.li,{children:"Für mehr Anonymität im Internet"}),`
`,e.jsx(n.li,{children:"Zum Umgehen geografischer Sperren"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Wichtig:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Vertrauen Sie nur seriösen VPN-Anbietern"}),`
`,e.jsx(n.li,{children:"Vermeiden Sie kostenlose VPNs"}),`
`,e.jsx(n.li,{children:"Verwenden Sie immer noch HTTPS, auch mit VPN"}),`
`,e.jsx(n.li,{children:"VPN garantiert keine 100% Anonymität"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Die beste Kombination:"})," HTTPS + VPN + gesunder Menschenverstand beim Surfen!"]})]})}function a(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{a as default};
