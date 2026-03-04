import{j as e}from"./react-vendor-DPtW2uLn.js";import{L as c,S as r}from"./gym-pages-CLbxl-EG.js";import d from"./RegexEditor-I_eFeTa-.js";import{P as i}from"./fms-pages-JOU2ocRE.js";import"./vendor-BscfZStV.js";import"./monaco-DSiUpym4.js";import"./CodePen.module-BfICubSo.js";function l(s){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Reguläre Ausdrücke (Regex)"}),`
`,e.jsx(n.p,{children:"Reguläre Ausdrücke sind ein wichtiger Teil von Grammatiken und Sprachen. Man kann Reguläre Ausdrücke als eine eigene Sprache ansehen, mit deren Hilfe man die Syntaxdiagramme aus den Grammatiken sehr kompakt beschreiben kann."}),`
`,e.jsx(c,{children:e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Sie wissen was Reguläre Ausdrücke sind."}),`
`,e.jsx(n.li,{children:"Sie können eine Regex erkennen, wenn Sie eine Sehen."}),`
`,e.jsx(n.li,{children:"Sie können einfache Regex selber erstellen."}),`
`,e.jsx(n.li,{children:"Sie können entscheiden ob ein Ausdruck von einer Regex abgedeckt wird."}),`
`]})}),`
`,e.jsx(n.h2,{children:"Hexadezimalzahlen erkennen"}),`
`,e.jsxs(n.p,{children:["Im vorherigen Kapitel, haben wir Syntaxdiagramme erstellt, mit deren Hilfe wir Hexadezimalzahlen erkennen konnten. Nun packen wir das ganze in eine einfache Regex ",e.jsx(n.code,{children:"[0-9A-F][0-9A-F]"}),"."]}),`
`,e.jsx(d,{defaultInput:"A3 B3 777 90G d0D",defaultRegex:"[0-9A-F][0-9A-F]"}),`
`,e.jsx(n.p,{children:"Sie können hier sehen dass diese Regex genau eine 2-stellige Hexadezimalzahl matched, aber nur wenn die Buchstaben grossgeschrieben sind. Anstatt ein kompliziertes Syntaxdiagramm aufzustellen, können wir diesen relativ kurzen Ausdruck angeben, der uns dann exakt einen Teil des Textes matched."}),`
`,e.jsxs(r,{children:[e.jsx(n.h2,{children:"Reguläre Ausdrücke lesen können"}),e.jsxs(n.p,{children:["Wie oben bereits erwähnt, sind Reguläre Ausdrücke wie eine eigene Sprache. Da gibt es einige Regeln die man beachten muss. Diese Regeln werden im folgenden erklärt. Ganz generell gilt die Regel, wenn ein Buchstabe einfach so da steht, dann wird genau dieser Buchstabe gematched, genau wie bei einer normalen Textsuche. Am besten ist es sowieso als Textsuche über diese Regulären Ausdrücke nachzudenken. Möchten Sie zum Beispiel das Wort ",e.jsx(n.code,{children:"cat"})," in einem Text suchen, dann machen Sie das mit der Regex ",e.jsx(n.code,{children:"cat"}),". Möchten Sie nun aber auch diejenigen finden, die grossgeschrieben sind, dann machen Sie das mit ",e.jsx(n.code,{children:"[C|c]at"}),". Hier sind ",e.jsx(n.code,{children:"at"})," ganz normale Buchstaben die im Wort vorkommen müssen, und ",e.jsx(n.code,{children:"[C|c]"})," ist eine Regel die sagt: entweder ein grosses oder ein kleines ",e.jsx(n.code,{children:"c"}),"."]}),e.jsx(n.h3,{children:"Regeln"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"[abc]"})," genau ein Buchstabe aus ",e.jsx(n.code,{children:"a"}),",  ",e.jsx(n.code,{children:"b"})," oder ",e.jsx(n.code,{children:"c"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"[^abc]"})," genau ein Buchstabe, aber ",e.jsx(n.strong,{children:"nicht"})," ",e.jsx(n.code,{children:"a"}),", ",e.jsx(n.code,{children:"b"})," oder ",e.jsx(n.code,{children:"c"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"[a-z]"})," genau ein Buchstabe von ",e.jsx(n.code,{children:"a"})," bis ",e.jsx(n.code,{children:"z"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"[^a-z]"})," genau ein Buchstabe, aber ",e.jsx(n.strong,{children:"nicht"})," ",e.jsx(n.code,{children:"a"})," bis ",e.jsx(n.code,{children:"z"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"[a-zA-Z]"})," genau ein Buchstabe von ",e.jsx(n.code,{children:"a"})," bis ",e.jsx(n.code,{children:"z"}),", oder ",e.jsx(n.code,{children:"A"})," bis ",e.jsx(n.code,{children:"Z"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"."})," irgend ein einzelnes Zeichen."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"a|b"})," entweder ",e.jsx(n.code,{children:"a"})," oder ",e.jsx(n.code,{children:"b"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"\\s"})," irgend eine Art von Leerzeichen (Leerschlag oder Tab)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"\\S"})," alles ausser ein Leerzeichen."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"\\d"})," eine Ziffer. Kann man auch als ",e.jsx(n.code,{children:"[0-9]"})," angeben."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"\\D"})," alles ausser eine Ziffer. Kann man auch als ",e.jsx(n.code,{children:"[^0-9]"})," angeben."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"\\w"})," irgend ein Zeichen das in einem Wort vorkommen kann. Das sind Buchstaben und ",e.jsx(n.code,{children:"-"})," und weitere Spezialzeichen."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"\\W"})," alles ausser einem Wortzeichen. Also Leerzeichen, Punkt, Komma, etc."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"\\b"})," alle Zeichen die ein Wort begrenzen."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"\\B"})," alle Zeichen die ein Wort ",e.jsx(n.strong,{children:"nicht"})," begrenzen."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"\\n"})," Zeilenumbruch."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"\\t"})," Tabulatorzeichen."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"a?"})," 0 oder 1 ",e.jsx(n.code,{children:"a"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"a*"})," 0 oder mehrere ",e.jsx(n.code,{children:"a"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"a+"})," 1 oder mehrere ",e.jsx(n.code,{children:"a"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"a{3}"})," genau 3 ",e.jsx(n.code,{children:"a"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"a{3,}"})," 3 oder mehr ",e.jsx(n.code,{children:"a"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"a{3,6}"})," zwischen 3 und 6 ",e.jsx(n.code,{children:"a"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"^a"})," es muss ein ",e.jsx(n.code,{children:"a"})," ganz am Anfang haben."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"a$"})," es muss ein ",e.jsx(n.code,{children:"a"})," ganz am Ende haben."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"(...)"})," erfasst den Inhalt in einer Gruppe. Gruppen werden einfach durchnummeriert, startet mit 1."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"(?:...)"})," Gruppe die nicht erfasst wird."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"(?<name>...)"})," benannte Gruppe, kann später mit ",e.jsx(n.code,{children:"<name>"})," abgerufen werden."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$1"})," Inhalt der Gruppe 1. Wird oftmals auch als ",e.jsx(n.code,{children:"\\1"})," geschrieben."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$$"})," das Zeichen ",e.jsx(n.code,{children:"$"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$`"})," Inhalt vor einem Match."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$'"})," Inhalt nach einem Match."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$&"})," alles was gematched wurde."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"$<name>"})," Inhalt der benannten Gruppe ",e.jsx(n.code,{children:"<name>"}),". Diese Form wird nicht überall unterstützt, wir verwenden Sie nur in der Theorie."]}),`
`]}),e.jsx(n.h3,{children:"Zeichen escapen"}),e.jsxs(n.p,{children:["Dafür gibt es leider keine gute deutsche Übersetzung. Ein Zeichen ",e.jsx(n.strong,{children:"escapen"})," bedeutet es von seiner eigentlichen Funktion zu sperren. Wenn wir also einen Punkt (",e.jsx(n.code,{children:"."}),") matchen möchten, dann müssen wir das so schreiben: ",e.jsx(n.code,{children:"\\."}),". Damit wird die eigentliche Funktion des Zeichens ",e.jsx(n.code,{children:"."})," in einem regulären Ausdruck unterdrückt, und wir können es als das Zeichen selbst nehmen. Das müssen wir mit allen Zeichen machen, die eine spezielle Bedeutung in regulären Ausdrücken haben."]})]}),`
`,e.jsx(n.h2,{children:"Einfache Beispiele"}),`
`,e.jsx(n.p,{children:"Schauen wir uns ein paar einfache Beispiele an. Wenn wir einen regulären Ausdruck angeben möchten, dann möchten wir das immer für eine ganze Reihe von ausdrücken machen, und alle sollen gematched werden. Daher geben wir immer ein paar Einträge an, für diese erstellen wir dann eine Regex, die alle matchen kann."}),`
`,e.jsxs(n.p,{children:["Sie können alle diese Ausdrücke auf ",e.jsx("a",{href:"https://regex101.com/",target:"_blank",children:"Regex101"})," testen."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Uhrzeit"}),": Wir nehmen das 24-Stunden-Format, ohne Sekunden."]}),`
`]}),`
`,e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`1:23
12:45
9:01
06:25
23:59
`})})}),`
`,e.jsxs(n.p,{children:["Diese können wir alle mit dem folgenden Ausdruck matchen: ",e.jsx(n.code,{children:"^[0-2]?[0-9]:[0-5][0-9]$"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Telefonnummer"}),": Wir gehen Hier von schweizer Handy-Nummern aus, die können in unterschiedlichen Formaten angegeben werden, wir möchten alle treffen."]}),`
`]}),`
`,e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`+41 78 665 23 45
076 334 21 89
+4179 663 1234
072 5554433
0791112233
`})})}),`
`,e.jsxs(n.p,{children:["Diese können wir alle mit dem folgenden Ausdruck matchen: ",e.jsx(n.code,{children:"^(\\+41 ?|0)7\\d ?\\d{3} ?\\d{2} ?\\d{2}$"})]}),`
`,e.jsxs(r,{classes:"exercise",children:[e.jsx(n.h2,{children:"Aufgaben"}),e.jsxs(n.p,{children:["Öffnen Sie die Webseite ",e.jsx("a",{href:"https://regex101.com/",target:"_blank",children:"Regex101"}),". Und erstellen Sie reguläre Ausdrücke für die folgenden Listen von Ausdrücken. Versuchen Sie möglichst alle Ausdrücke zu treffen."]}),e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Datum"}),`
`]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`31.12.2023
01.01.2024
15.08.2023
28.02.2022
07.07.2021
22.11.2020
30.06.2025
17.03.2023
05.05.2024
12.12.2022
`})})}),e.jsxs(n.ol,{start:"2",children:[`
`,e.jsx(n.li,{children:"Uhrzeit"}),`
`]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`18:30:45
07:15:22
12:00:00
23:59:59
00:01:01
15:45:30
09:30:15
22:10:05
16:25:40
03:05:33
`})})}),e.jsxs(n.ol,{start:"3",children:[`
`,e.jsx(n.li,{children:"Vollnamen"}),`
`]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`Max Mustermann
Anna Müller
Peter Schneider
Sofia Weber
Thomas Schmid
Laura Fischer
Felix Meier
Clara Zimmermann
Daniela Roth
Michael Steiner
`})})}),e.jsxs(n.ol,{start:"4",children:[`
`,e.jsx(n.li,{children:"Email-Adressen"}),`
`]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`hier.sind@beispiel.ch
kontakt@firma.ch
info@service.ch
support@unternehmen.ch
team@projekt.ch
mail@anbieter.ch
service@webseite.ch
verwaltung@organisation.ch
anfragen@firma.ch
newsletter@portal.ch
`})})}),e.jsxs(n.ol,{start:"5",children:[`
`,e.jsx(n.li,{children:"Adressen"}),`
`]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`Musterstrasse 1, 8000 Zürich
Bahnhofplatz 5, 6003 Luzern
Hauptstrasse 10, 2000 Neuenburg
Zürcherstrasse 15, 8134 Adliswil
Lindenweg 2, 4051 Basel
Kirchweg 21, 3000 Bern
Schulstrasse 7, 9010 St. Gallen
Industriestrasse 9, 8400 Winterthur
Römerstrasse 4, 1201 Genf
Dorfplatz 3, 4125 Riehen
`})})}),e.jsxs(n.ol,{start:"6",children:[`
`,e.jsx(n.li,{children:"Webadressen"}),`
`]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`https://www.beispiel.ch
http://www.example.ch
https://www.testseite.ch
http://beispiel.ch
https://test.example.ch
http://www.meine-seite.ch
https://www.domain.ch/news
https://shop.beispiel.ch
http://testseiten.ch
https://www.anderedomain.ch/produkte
`})})}),e.jsxs(n.ol,{start:"7",children:[`
`,e.jsx(n.li,{children:"IBAN-Nummern"}),`
`]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`CH12 3456 7890 1234 5678 9
CH98 7654 3210 9876 5432 1
CH76 1234 5678 9123 4567 8
CH45 6789 0123 4567 8901 2
CH22 1111 2222 3333 4444 5
CH33 5555 6666 7777 8888 0
CH99 0000 1111 2222 3333 3
CH87 4444 5555 6666 7777 6
CH11 9999 8888 7777 6666 4
CH66 2222 3333 4444 5555 7
`})})}),e.jsxs(n.ol,{start:"8",children:[`
`,e.jsx(n.li,{children:"RGB-Farbwerte"}),`
`]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`#FF5733
#33FF57
#3357FF
#F1C40F
#E74C3C
#8E44AD
#3498DB
#2ECC71
#E67E22
#C0392B
`})})}),e.jsxs(n.ol,{start:"9",children:[`
`,e.jsx(n.li,{children:"Einfache Gleichungen"}),`
`]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`x + 5 = 10
3y - 7 = 11
z / 2 = 4
8 = a + 2
b - 3 = 6
2c + 9 = 15
d / 4 + 1 = 3
e - 5 = 2e
7 = f / 3 + 1
g + 8 = 12
`})})}),e.jsxs(n.ol,{start:"10",children:[`
`,e.jsx(n.li,{children:"Komplexere Gleichungen"}),`
`]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`x + 5 = 10
3y - 7 = 2y + 5
2(x - 3) = 8
5a + 2 = 3a + 10
4(x + 2) = 3(x - 1) + 4
7 - 2b = 3(b + 1)
6(x + 3) - 5 = 2x + 15
8 = 4y - 12 + 2y
x/2 + 4 = 6
9 - 3z = 2(z + 6)
`})})}),e.jsxs(n.ol,{start:"11",children:[`
`,e.jsx(n.li,{children:"RGB Farbwerte, aber jeder Farbkanal ist eine Schnappszahl"}),`
`]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`#FF00CC
#00FF88
#CC0099
#6600FF
#FF3300
#00CC55
#9900FF
#FF6666
#00CC99
#FFCC00
`})})}),e.jsxs(n.ol,{start:"12",children:[`
`,e.jsx(n.li,{children:"Doppelte Wörter"}),`
`]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`Ich liebe die Berge und Berge sind schön.
Der Hund bellt, denn der Hund ist freundlich.
Käse schmeckt gut, denn guter Käse ist lecker.
Die Blume blüht und blüht den ganzen Tag.
Wir gehen essen, denn essen macht Spass.
Das Wasser ist klar, weil klares Wasser wichtig ist.
Freunde sind wichtig, denn wichtige Freunde sind rar.
Der Zug fährt schnell, denn schnelle Züge sind top.
Das Wetter ist schön, denn schönes Wetter ist selten.
Ein Buch ist spannend, denn spannende Bücher bringen Freude.
`})})})]}),`
`,e.jsx(n.h2,{children:"Suche und ersetzen"}),`
`,e.jsxs(n.p,{children:["Reguläre Ausdrücke werden nicht nur im Programmieren eingesetzt, sie können auch bei einfachen Anwendungen wie Google Docs, Google Sheets und auch VSCode zum suchen und ersetzen verwendet werden. Testen können Sie das aber auch auf der Webseite ",e.jsx("a",{href:"https://regex101.com/",target:"_blank",children:"Regex101"}),"."]}),`
`,e.jsx(n.p,{children:"Mit normalem suchen und ersetzen, sind Sie sehr eingeschränkt. Mit regulären Ausdrücken, sind Sie aber sehr flexibler. Sie können sogar das gesuchte in ein anderes Format bringen."}),`
`,e.jsxs(r,{classes:"exercise",children:[e.jsx(n.h2,{children:"Aufgaben"}),e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Finden Sie alle vorkommen von ",e.jsx(n.code,{children:"cat"})," oder ",e.jsx(n.code,{children:"Cat"})," und ersetzen Sie diese mit Katze."]}),`
`]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`Katzen sind faszinierende Tiere, die in vielen Haushalten als geliebte
Begleiter leben. Eine Cat ist bekannt für ihre Unabhängigkeit und ihren
spielerischen Charakter. Oft sieht man eine cat, die neugierig durch die
Wohnung schleicht oder sich in der Sonne räkelt. Ihre Geschmeidigkeit und
Eleganz machen sie zu einem beliebten Motiv in der Kunst und Fotografie.
Ausserdem haben Katzen die Fähigkeit, die Stimmung ihrer Besitzer zu spüren,
was sie zu wunderbaren Begleitern in stressigen Zeiten macht. Egal ob es eine
grosse oder kleine Cat ist, ihre Präsenz bereichert das Leben vieler Menschen.
`})})}),e.jsxs(n.ol,{start:"2",children:[`
`,e.jsxs(n.li,{children:["Bringen Sie das Datum in das Format ",e.jsx(n.code,{children:"YYYY-MM-DD"}),"."]}),`
`]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`31.12.2023
01.01.2024
15.02.2024
28.02.2024
05.03.2024
10.04.2024
20.07.2024
09.11.2024
24.12.2024
01.05.2025
`})})}),e.jsxs(n.ol,{start:"3",children:[`
`,e.jsxs(n.li,{children:["Bringen Sie die Telefonnummern in das Format ",e.jsx(n.code,{children:"+41 7x xxx xx xx"}),"."]}),`
`]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`+41 78 123 45 67
+41 791234567
+41 78-123-45-67
+41 781234567
+41 78 123 4567
078 123 45 67
+41 (0)78 123 45 67
0781234567
+41 78/123 45 67
+41 78.123.45.67
`})})}),e.jsxs(n.ol,{start:"4",children:[`
`,e.jsxs(n.li,{children:["Bringen Sie die Preisliste in das Format ",e.jsx(n.code,{children:"CHF \\d+.\\d{2}"}),". Sie müssen den Wechselkurs nicht beachten, es geht nur um das Format."]}),`
`]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`10.50€
19.00€
25.75€
50.00€
100,99€
200,05€
350.80€
500,20€
999.99€
1'500.00€
`})})}),e.jsxs(n.ol,{start:"5",children:[`
`,e.jsxs(n.li,{children:["Bringen Sie die folgenden Emailadressen in das Format: ",e.jsx(n.code,{children:"Vorname: ..., Nachname: ..., Provider: ..., Top-Level-Domain: ..."})]}),`
`]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`max.mueller@webmail.ch
anna.meier@gmx.ch
peter.meier@example.com
laura.wagner@live.ch
oliver.krause@mail.ch
maria.fischer@posteo.ch
jan.schneider@t-online.ch
sophie.zimmermann@example.ch
michael.schmid@example.ch
`})})}),e.jsxs(n.ol,{start:"6",children:[`
`,e.jsx(n.li,{children:"Entfernen Sie die Nummerierung aus der Liste."}),`
`]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`1. Äpfel
2. Taschenbuch
3. Wanderung
4. Spaghetti Bolognese
5. Konzertkarten
6. Kaffeetasse
7. Fahrrad
8. Bluetooth-Kopfhörer
9. Puzzle
10. Eintrittskarte fürs Kino
`})})}),e.jsxs(n.ol,{start:"7",children:[`
`,e.jsxs(n.li,{children:["Bringen Sie diese Aufzählung in eine Listenform mit dem Format: ",e.jsx(n.code,{children:"- Eintrag 1\\n - Eintrag 2\\n"})]}),`
`]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`Fussball, Tennis, Basketball, Volleyball, Badminton, Hockey, Golf, Tischtennis, Squash, Rugby
`})})}),e.jsxs(n.ol,{start:"8",children:[`
`,e.jsxs(n.li,{children:["Setzen Sie alle Einträge dieser TODO-Liste zurück, ausser es hat ein ",e.jsx(n.code,{children:"[x]"}),"."]}),`
`]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`[ ] Einkaufen gehen
[o] Projektbericht fertigstellen
[.] E-Mails beantworten
[ ] Arzttermin vereinbaren
[! ] Website aktualisieren
[o] Meeting mit dem Team leiten
[ ] Präsentation vorbereiten
[.] Buch lesen
[!] Wohnung putzen
[ ] Neues Rezept ausprobieren
`})})})]}),`
`,e.jsx(n.h2,{children:"Syntax prüfen"}),`
`,e.jsxs(n.p,{children:["Wenn Sie Computer Code schreiben, dann muss dieser einer bestimmten Syntax folgen, dam der Computer den Code überhaupt lesen kann. Da können sehr oft bereits Fehler passieren, und der Computer kann mit dem Code gar nichts anfangen. Damit dies nicht passiert, gibt es Hilfsprogramme wie ",e.jsx(n.code,{children:"Linter"})," die den Code anschauen und eine Fehlermeldung zurückgeben, wenn etwas mit der Syntax nicht stimmt. Wir möchten nun auch ganz einfache ",e.jsx(n.code,{children:"Linter"})," erstellen, die für uns einige Objekte in ",e.jsx(n.strong,{children:"SVG"})," erkennen können."]}),`
`,e.jsxs(r,{classes:"exercise",children:[e.jsx(n.h2,{children:"Aufgabe"}),e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Erkennen Sie alle gültigen ",e.jsx(n.code,{children:"circle"}),"-Elemente."]}),`
`]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-xml",children:`<circle cx="10" cy="10" fill="red" r="5" />
<circle cx="20" cy="20" fill="blue" r="10" stroke="black" stroke-width="2" />
<circle cx="30" cy="30" r="15" />
<circle cx="40" cy="40" fill="green" r="20" stroke="yellow" />
<circle cx="50" cy="50" radius="25" />
<circle cx="60" cy="60" fill="purple" r="30" stroke="white" stroke-width="1" />
<circle cx="70" cy="70" fill="orange" />
<circle cx="80" cy="80" fill="pink" r="8" opacity="0.5" />
<circle cx="90" cy="90" rx="10" ry="5" />
<circle cx="100" cy="100" r="12" stroke="gray" stroke-width="3" />
`})})}),e.jsxs(n.ol,{start:"2",children:[`
`,e.jsxs(n.li,{children:["Erkennen Sie alle gültigen ",e.jsx(n.code,{children:"rect"}),"-Elemente."]}),`
`]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-xml",children:`<rect fill="red" height="100" width="200" x="10" y="10"/>
<rect height="100" width="200" x="10" y="10" z="5"/>
<rect fill="blue" height="50" width="150" rx="10" y="20"/>
<rect fill="green" height="100" width="200" x="10"/>
<rect fill="yellow" x="50" y="50"/>
<rect height="100" width="200" x="10" y="10" stroke="black" stroke-width="2"/>
<rect alpha="0.5" fill="orange" height="100" width="200" x="10" y="10"/>
<rect height="150" width="300" x="20" y="20" viewBox="0 0 100 100"/>
<rect fill="purple" height="80" width="180" z="10" x="15" y="15"/>
<rect fill="cyan" height="100" width="200" x="-10" y="-10" opacity="0.75"/>
`})})}),e.jsxs(n.ol,{start:"3",children:[`
`,e.jsxs(n.li,{children:["Erkenne ob dies ein gültiges ",e.jsx(n.code,{children:"d"}),"-Attribut für ein ",e.jsx(n.code,{children:"path"}),"-Element ist."]}),`
`]}),e.jsx(i,{children:e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`M10 10 H 90 V 90 H 10 Z
M20,20 C40,10 60,10 80,20 S100,30 120,20
M30 30 L 60 30 L 60 60 L 30 60 Z
M40 40 Q 50 10 60 40 T 80 80
M50 50 A 40 40 0 0 1 90 50
M70 70 M 80 80 L 90 90
M0 0 L 100 100
M10 10 H 90 Z
M20,20 C40,10 G60,10 80,20 S100,30 120,20
M30 30 L 60 Z 60 60 L 30 60
`})})})]})]})}function g(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{g as default};
