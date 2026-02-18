Obsidian ist ein Wissensverwaltungswerkzeug, oder auch einfach eine Notizapp mit vielen praktischen Funktionen. Eine Kernfunktion die bei Obsidian sehr wichtig ist, ist das verlinken von Notizen, wie man es auf der rechten Seite sehen kann.

## Verlinken

Wenn man einen Link zu einer anderen Notiz herstellen möchte, dann muss man diese Datei einfach in `[[` und `]]` angeben. Obsidian gibt auch eine Auswahl von Möglichkeiten, sobald man das macht.

Hier ist ein Link zur [[Welcome]]-Seite.

## Markdown

Obsidian verwendet das Markdown Textformat für Notizen. Dies ist ein sehr einfaches Textformat, welches mit simplen Zeichen die Formatierung im Text vornimmt. Der Text wird innerhalb von Obsidian dann auch entsprechend angezeigt, aber auch im Textformat soll es einigermassen leserlich bleiben. Zum Beispiel kann ein Wort das hervorgehoben werden soll, einfach mit `*` umschlossen werden, wie zum Beispiel *wichtig*. Das Wort wird dann kursiv angezeigt, oder wenn es sehr **wichtig** ist, können `**` verwendet werden.

### Titel

Möchten Sie einen Titel, dann können Sie einfach eine bestimmte Anzahl von `#` vor den Titel setzen. Je mehr `##` desto kleiner wird der Titel. Normalerweise haben Sie ein `# Obertitel` und der Rest sind `## Abschnittstitel` oder `### Unterabschnitstitel`. Sie können Titel bis zur Stufe 6 machen.

### Listen

Oftmals in Notizen brauchen Sie auch Listen, die können Sie ganz einfach mit 

```markdown
- Element 1
- Element 2
- usw.
```

machen. Auch nummerierte Listen gehen ganz einfach, dabei müssen Sie nicht mal die richtigen Nummern eingeben.

```markdown
1. Element 1
2. Element 2
3. usw.
```

1. Element 1
2. Element 2
3. usw.

### Links

Sie können auch Links zu anderen Notizen oder auch innerhalb der Notiz verwenden. Dazu müssen Sie nur die doppelte `[`-Klammer verwenden. Auf eine andere Seiten haben wir oben bereits mit [[Welcome]] gemacht. Möchten Sie auf einen Abschnitt im gleichen Dokument verweisen, dann machen Sie das mit [[#Links]].

### Tabellen

Sie können auch Tabellen anzeigen lassen, auch wenn die nicht ganz so praktisch ist, denn es ist oft mühsam zu tippen. Hier ist Obsidian aber sehr hilfreich, wenn Sie mal eine Tabelle haben, ist es einfach diese zu erweitern.

| Spalte 1 | Spalte 2 | Spalte 3 |
| -------- | -------- | -------- |
|          |          |          |

Der Code den Sie für eine Tabelle eingeben müssen, finden Sie hier:

```markdown
|Spalte 1|Spalte 2|
|--------|--------|
|Inhalt 1|Inhalt 2|
```

### Mathe

Obsidian hat die möglichkeit mathematische Formeln sauber darzustellen. Das werden Sie in diesen Notizen vermutlich nicht brauchen, dennoch ist es praktisch das zu wissen. Wenn Sie eine mathematische Formel eingeben müssen, dann schliessen Sie diese einfach in `$$` ein. Wie zum Beispiel die Formel für Pythagoras: 

```latex
$$ a^2 + b^2 = c^2 $$
```

Diese sieht dann schön dargestellt so aus:

$$ a^2 + b^2 = c^2 $$
## Tastenkürzel

Wenn Sie Applikationen auf dem Computer verwenden, ist es immer gut wenn man einige Tastenkürzel kennt, da man dann sehr viel schneller mit der Applikation arbeiten kann, und man muss seinen Gedankenfluss nicht immer unterbrechen. Ein wichtiges Tastenkürzel das Sie alle kennen sollten, ist `Ctrl + C` oder auf Mac `Cmd + C`. Damit können Sie den ausgewählten Text kopieren. Das nächste Tastenkürzel ist dann `Ctrl + V` bzw. `Cmd + V`, um den kopierten Text einzufügen.

> [!hint] Ab jetzt werden wir nur noch die Windowsversion von diesen Tastenkürzeln anschauen, bei Mac ist es fast immer `Cmd` statt `Ctrl`.

Es gibt aber noch viel mehr praktische Tastenkürzel. Die meisten funktionieren in allen Applikationen gleich, einige funktionieren aber nur in gewissen Applikationen, zum Beispiel `Ctrl + P` öffnet in Obsidian ein Befehlsfenster, in VSCode ein Fenster zum öffnen von Dateien und in Word oder im Browser der Befehl zum Drucken.

> [!hint] Tastenkürzrl können pro Anwendung verschieden sein, Sie müssen also jeweils wissen in welcher Anwendung Sie gerade sind.

Hier finden Sie einige Tastenkürzel die allgemein funktionieren oder nur in Obsidian. Testen Sie die Kürzel durch, und notieren Sie sich diejenigen die Sie praktisch finden.

|      Tastenkürzel      | Funktion                                    |
| :--------------------: | ------------------------------------------- |
|       `Ctrl + C`       | Kopieren                                    |
|       `Ctrl + V`       | Einfügen                                    |
|       `Ctrl + A`       | Alles auswählen                             |
|       `Ctrl + S`       | Speichern                                   |
|   `Shift + Ctrl + S`   | Speichern unter...                          |
|       `Ctrl + Z`       | Rückgängig machen                           |
|   `Shift + Ctrl + Z`   | Rückgängig machen rückgängig machen         |
|       `Ctrl + N`       | Neue Datei / Neues Fenster                  |
|       `Ctrl + P`       | Befehlsfenster öffnen                       |
|       `Ctrl + O`       | Datei suchen und öffnen                     |
|         `Home`         | Gehe zum Anfang einer Zeile                 |
|         `End`          | Gehe zum Ende einer Zeile                   |
|         `PgUp`         | Scrolle eine Seite nach oben                |
|         `PgDn`         | Scrolle eine Seite nach unten               |
|     `Crtl + Left`      | Zum Anfang des Wortes                       |
|     `Ctrl + Right`     | Zum Ende des Wortes                         |
|   `Ctrl + Backspace`   | Wort vor dem Cursor löschen                 |
|    `Ctrl + Delete`     | Wort nach dem Cursor löschen                |
|     `Shift + Left`     | Auswahl nach links verschieben              |
|    `Shift + Right`     | Auswahl nach rechts verschieben             |
|      `Shift + Up`      | Auswahl nach oben verschieben               |
|     `Shift + Down`     | Auswahl nach unten verschieben              |
| `Ctrl + Shift + Left`  | Auswahl um ein Wort nach links verschieben  |
| `Ctrl + Shift + Right` | Auswahl um ein Wort nach rechts verschieben |
> [!warning] **Aufgabe** Erstellen Sie eine neue Notiz mit `Ctrl + N` und halten Sie in einer Liste oder Tabelle fest, welche Tastenkürzel Sie in Zukunft öfters verwenden werden.

> [!warning] **Aufgabe** Finden Sie weitere praktische Tastenkürzel, wie zum Beispiel `Ctrl + X`. Suchen Sie dazu im Menu der Applikation, oder im Internet.

> [!warning] Finden Sie heraus was die Tastenkürzel `Windows + Pfeil` und `Alt + Tab` machen. Gibt es da noch weitere?


