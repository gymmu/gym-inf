# Biit und die Welt der Bytes – Eine Geschichte

## Die Hauptfigur

**Biit** ist aus dem Volk der Binären. Er kann einen von 2 Zuständen annehmen: 0 oder 1.

## Die Binären

Die Binären – auch Bits genannt – kommen immer in Gruppen vor.
Die Gruppengrösse ist immer 8. So eine Gruppe nennt man **Byte**.

Bits sind zwar binär, aber immer wenn sie beobachtet werden, haben sie einen festen Zustand, den sie nicht mehr verändern.
Wenn sie in Gruppen unterwegs sind, also als Byte, dann nimmt jedes Bit seinen eigenen Zustand an, und dieser wird nicht mehr gewechselt.

Bei Bytes ist die Rangordnung in der Gruppe sehr wichtig und ändert sich niemals.
Der höchste Rang ist das linke Bit und der tiefste Rang ist das rechte Bit.

## Professor ASCII

Professor ASCII untersucht diese Bytes. Ihm ist aufgefallen, dass es genau 256 unterschiedliche Gruppen geben kann.
Damit er diese Gruppen besser untersuchen kann, ordnet er sie in einer Tabelle an.
Diese Tabelle ist als die **ASCII-Tabelle** bekannt.

Er hat allerdings nur die ersten 128 Gruppen untersucht.
Die weiteren Gruppen existieren nur in seiner Theorie und sind daher nicht in seiner Tabelle vermerkt.

## Dr. Dezimal und Dr. Hex

Professor ASCII hat 2 weitere Forschungskollegen: **Dr. Dezimal** und **Dr. Hex**.

Beiden ist aufgefallen, dass die Tabelle, die Professor ASCII erstellt hat, keine richtige Reihenfolge aufweist, und für die meisten Menschen verwirrend ist.
So haben sich beide daran gemacht, die Tabelle zu sortieren.

### Dr. Dezimal

Dr. Dezimal verwendet dafür das Zehnersystem.
Dabei ist ihm aufgefallen, dass die Bytes in Professor ASCIIs Tabelle eine einfache Rechenregel bilden, die genau der Nummerierung im Zehnersystem entspricht.

Dabei ist die Rangfolge der Bits entscheidend.
Er gibt jedem Bit von links nach rechts einen Rang:
- Das linke Bit hat den Rang 7
- Das rechte Bit hat den Rang 0

Nun kann man die Position in der Tabelle mit der folgenden Formel berechnen:
1. Wir nehmen alle Bits mit dem Zustand 1
2. Dann rechnen wir immer 2<sup>Rang</sup>
3. Und addieren alles zusammen

### Dr. Hex

Dr. Hex ist mit dieser Nummerierung nicht einverstanden.
Er findet, dass es zu viel Platz braucht, da man 3-stellige Zahlen hat.

Dr. Hex forscht an einer Möglichkeit, wie man die Nummerierung mit genau nur 2 Stellen schreiben kann.
Dafür erweitert er einfach die Ziffern auf **0-F**.

Er behauptet, so können alle 256 theoretisch möglichen Bytes von **00** bis **FF** durchnummeriert werden.
Besonders stolz ist er darauf, dass keine einzige Zahl übrig bleibt.

Dies kritisiert er auch immer wieder an der Nummerierung von Dr. Dezimal:
> Dieser verwendet nur ca. 25% aller dreistelligen Zahlen!

Seine Theorie ist also viel besser und kann dank der Zweistelligkeit auch viel kompakter geschrieben werden.
