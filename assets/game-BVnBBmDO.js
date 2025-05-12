import{j as e}from"./index-BRecbWAn.js";import{C as a}from"./Chapter-Dgqpvu0h.js";import{E as r}from"./Example-Bzr6aeG-.js";import{I as t}from"./Img-Co6-dI6H.js";import{V as d}from"./Video-CtKpE8UZ.js";function s(i){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...i.components};return e.jsxs(a,{children:[e.jsx(n.h2,{children:"Spiel mit Phaser3 entwickeln"}),e.jsxs(n.p,{children:[`In diesem Kapitel werden wir uns Stück für Stück anschauen wie man ein Spiel
selber programmieren kann. Wir werden dafür eine `,e.jsx(n.code,{children:"Javascript"}),`-GameEngine namens
`,e.jsx(n.code,{children:"Phaser"})," einsetzen, und die Karten dann mit dem Editor ",e.jsx(n.code,{children:"Tiled"}),` erstellen. Dafür
müssen wir aber zuerst lernen wie alles funktioniert, und welche Spieltypen alle
möglich sind.`]}),e.jsx(n.p,{children:`Als Einführung in das Demo-Projekt, können Sie das folgende Video anschauen, das
führt Sie auch durch alles was auf der Webseite hier besprochen wird. Dennoch
sollten Sie hier alles lesen, denn nicht alle Informationen kommen im Video
gleich vor wie hier.`}),e.jsx(d,{url:"41m_XZJb3UM"}),e.jsxs("section",{children:[e.jsx(n.h3,{children:"Spieltypen"}),e.jsxs(n.p,{children:["Generell können fast alle Typen von Spielen auch mit ",e.jsx(n.code,{children:"Phaser"}),` erstellt werden.
Oftmals hat das dann aber mehr mit Grafiken wie mit der Spiellogik zu tun. Daher
beschränken wir uns auf Top-Down-RPG-Like-Spiele wie Zelda oder Pokemon. Mit den
gleichen Techniken können wir natürlich auch Jump-and-Run-Sidescroller wie Mario
erstellen, oder auch Flappy-Bird und Doodle-Jump. Das wird alles von `,e.jsx(n.code,{children:"Phaser"}),`
unterstützt. Wir konzentrieren uns aber auf das RPG.`]}),e.jsx(n.h3,{children:"Wieso RPG?"}),e.jsx(n.p,{children:`Wir möchten uns vorallem mit dem Zusammenspiel von verschiedenen Spielelementen
und der Spiellogik beschäftigen. Dafür eignet sich ein RPG fast am besten. Hier
können wir uns frei in der Welt bewegen und mit Spielobjekten interagieren.
Dabei können wir Eigenschaften auf dem Spieler und an anderen Objekten verändern
und somit ein spannendes Erlebnis erzeugen. Wir müssen dabei das Zusammenspiel
von all den verschiedenen Komponenten von einem Spiel verstehen, und dies auch
richtig einsetzen. Dabei lernen wir nicht nur Programmieren, sondern vorallem
auch den Umgang mit einem komplexen System.`})]}),e.jsx(n.h2,{children:"Grundlagen einer Game Engine"}),e.jsxs(n.p,{children:[`Bevor wir uns das erstellen eines Spiels anschauen können, müssen wir die
Grundlagen einer Game Engine verstehen. Eine Game Engine lauft immer in einer
Endlossschlaufe, so lange das Spiel nicht beednet ist. Die Schlaufe nennt man
auch `,e.jsx(n.strong,{children:"Game-Loop"}),`. Die Schlaufe hat 2 Teile, zuerst werden alle Spielobjekte
angepasst. Also die Positionen neu berechnet, falls es Kollisionen gibt werden
diese aufgelöst. Wenn bei den Kollisionen die Lebenspunkte von Spielobjekten
verändert werden, wird das auch dort gemacht. Dann werden auch die Objekte
zerstörrt oder neu erstellt.`]}),e.jsx(n.p,{children:`Das klingt jetzt alles nach sehr viel Arbeit und auch sehr kompliziert, aber die
Game-Engine nimmt uns da fast alles ab, für uns ist er recht einfach wie sie
sehen werden.`}),e.jsx(n.p,{children:`Der zweite Teil des Game-Loops beschäftigt sich mit dem zeichnen von allen
Spielobjekten. Das kann auch sehr kompliziert sein wenn man das selber macht,
aber auch hier macht die Game-Engine wieder die ganze Arbeit für uns. Das ist
hier auch extrem wichtig, denn damit ein Spiel flüssig läuft, muss es ca. 60 mal
pro Sekunde dieses Game-Loop durchlaufen. Wir möchten also 60FPS erhalten wenn
das möglich ist. Da darf ein Durchlauf von diesem Game-Loop nur 16ms dauern. Wir
sollten also wenn möglich keine aufwendigen Berechnungen machen, und das
Zeichnen sollte auch möglichst einfach ausfallen. Wir müssen uns dank der
Game-Engine nicht zu sehr darum kümmern, wir sollten einfahc im Kopf behalten
das wir weniger Spielobjekte verwenden sollten, falls das ganze Spiel langsam
wird.`}),e.jsx(n.h3,{children:"Szenen in Phaser"}),e.jsx(n.p,{children:`In Phaser, der Game-Engine die wir verwenden werden, gibt es Szenen. Eine Szene
ist einfach nur ein Teil von dem Spiel und kann unterschiedlich verwendet
werden. Zum Beispiel kann eine Szene zum laden von allen Spielressourcen
verwendet werden. Man kann in einer anderen Szene den Spieler begrüssen und
Anleitungen geben. Man kann auch Szenen gleichzeitig verwenden um ein Level zu
spielen, und in einer weiteren Szene werden Informationen wie Lebenspunkte
angezeigt. Wir werden das später so verwenden. Aber für den Anfang ist es am
einfachsten wenn Sie über Szenen einfach nur al Level in einem Spiel nachdenken.`}),e.jsxs(r,{title:"Lade Szene",children:[e.jsx(n.p,{children:`In diesem Beispiel schauen wir uns eine Szene an, die verwendet werden kann um
einen Spieler zu begrüssen, und aber auch schon Grafiken für das Spiel zu laden.
Sobald Grafiken geladen wurden, können diese in allen Szenen verwendet werden.
Besser ist es Grafiken in den Szenen zu laden wo sie auch gebraucht werden, da
wir aber nur einfache Grafiken haben, können wir die auch ganz am Anfang des
Spiels laden.`}),e.jsx(n.p,{children:`Einige Stellen im Code sind für Sie noch sehr merkwürdig, und verwenden Syntax
und Schlüsselwörter die Sie noch nicht kennen. Das macht aber nicht, Sie müssen
einfach den Code kopieren und anpassen, wenn Sie eine Szene abändern möchten.
Ansonsten sind alle Stellen im Code die Sie verstehen müssen, sehr ausführlich
dokumentiert.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Damit importieren wir die Game-Engine phaser
import Phaser from "phaser"

// Damit erstellen wir die Klasse für die Lade-Szene und übernehmen die Eigenschaften von \`Phaser.Szene\`.
// Das müssen Sie noch nicht genau verstehen.
export default class LoadingScene extends Phaser.Scene {
  /**
   * Das ist eine spezielle Methode die bei der Instanziierung der Klasse
   * aufgerufen wird. Wir brauchen diese Methode hier, damit wir \`Phaser\`
   * den Namen/Schlüssel für unsere Szene übergeben können, damit wir die
   * Szene später selber aufrufen können.
   */
  constructor() {
    // Damit wir der Konstuktor von \`Phaser.Scene\` aufgerufen, und wir übergeben
    // den Schlüssel/Namen.
    super({ key: "loading" })
  }

  /**
   * Mit der \`preload\`-Methode werden alle Ressourcen wie Grafiken und Musik
   * ins Spiel geladen. Das passiert noch vor der Erstellung der Szene, damit
   * die Ressourcen dann im Game-Loop verwendet werden können.
   */
  preload() {
    // Lade das Tileset für die Karten und die Objekte.
    this.load.image("tileset", "./assets/tileset.png")

    // Lade einen Atlas von einem Tileset. Damit können einzelne Kacheln aus
    // einem Tileset definiert werden.
    this.load.atlas(
      "pickups",
      "./assets/tileset.png",
      "./assets/atlas/atlas-pickups.json",
    )

    // Wir möchten auf das Drücken der Leertaste reagieren können, daher müssen
    // wir das hier registrieren.
    this.SPACE = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE,
    )
  }

  /**
   * Auch diese Methode wird von \`Phaser\` automatisch aufgerufen. In dieser
   * Methode erstellen wir alle Spielobjekte, die in der Szene verwendet werden.
   * Auch diese Methode wird noch vor dem Game-Loop aufgerufen.
   *
   * Meistens wird in dieser Methode die Spielkarte oder ähnliches erstellt. Für
   * die Lade-Szene brauchen wir aber nur einen Text.
   */
  create() {
    // Damit erstellen wir ein Spielobjekt Text. Wir geben die Position in x und y
    // an, und geben den Text der angezeigt werden soll an.
    const text = this.add.text(320, 240, "Press SPACE to start the Game.")

    // Damit setzen wir den Ankerpunkt von dem Textelement auf die Mitte des Elements.
    // Würden wir das nicht machen, ist die obere lenke Ecke der Ankerpunkt, und es wird
    // schwierig den Text zu zentrieren.
    text.setOrigin(0.5, 0.5)
  }

  /**
   * Diese Methode gehört zum Game-Loop und sollte 60 mal pro Sekunde aufgerufen werden.
   * In dieser Methode berechnen wir die Positionen von den Spielobjekten neu und reagieren
   * auf Eingaben.
   */
  update() {
    // Wenn die Leertaste gedrückt wird, möchten wir darauf reagieren.
    if (this.SPACE.isDown) {
      // Die Leertaste wurde gedrückt, jetzt möchten wir eine neue Szene laden.
      // Das was wir hier übergeben, ist der Schlüssel/Name der Szene, so wie
      // es im Konstruktor angegeben wurde.
      this.scene.start("level-00")
    }
  }
}
`})})]}),e.jsx(n.p,{children:`Gratulation, damit haben Sie Ihr erstes "Level" erstellt. Bis jetzt passiert
noch nicht so viel, aber das kommt dann bald sehr schnell. Damit das ganze Spiel
aber überhaupt geladen wird, brauchen wir noch die Hauptdatei wo wir das Spiel
erstellen lassen, und die Szenen angeben die geladen werden sollen.`}),e.jsxs(r,{title:"Hauptdatei / Spiel erstellen",children:[e.jsxs(n.p,{children:[`Hier schauen wir uns kurz an wie Sie das Spiel überhaupt erstellen müssen, und
wie man die verschiedenen Szenen zu einem Spiel hinzufügen kann. Den Code hier
finden Sie meistens in einer `,e.jsx(n.code,{children:"main.js"})," oder ",e.jsx(n.code,{children:"game.js"})," Datei in Ihrem Projekt."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Auch hier müssen wir wieder unsere Game-Engine importieren.
import Phaser from "phaser"

// Hier können wir unsere eigenen Klassen importieren. Das ist die Datei die
// Sie im letzten Beispiel geschrieben haben.
import LoadingScene from "./scenes/loading-scene.js"

// Das hier ist die Konfiguration für das Spiel. Sie müssen nicht alle Teile
// davon verstehen. Die meisten sind recht selbsterklärend.
const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  width: 640, // Sollten möglichst vielfache von 32 sein, da unsere Tileset 32x32 Pixel gross sind.
  height: 480, // Gleich wie bei width.
  parent: "game-canvas", // Die ID von dem HTML-Element, in das das Spiel gezeichnet wird.
  scene: [LoadingScene], // Die Szenen des Spiels, hier können noch weitere Szenen angehängt werden.
  physics: {
    default: "arcade", // Eine einfache Physik die auf kollisionen testen kann.
    arcade: {
      debug: true, // Zeichnet zusätzliche Informationen wie Geschwindigkeit und Hitboxes
      gravity: { y: 0 }, // Keine Gravitation, da wir uns in alle 4 Richtungen bewegen möchten. Muss für Jump'n'Run geändert werden.
    },
  },
}

// Hier wird das Spiel erstellt, und startet mit der ersten Szenen in der Liste von \`scene\`.
const game = new Phaser.Game(config)
`})})]}),e.jsxs(n.p,{children:[`Nun haben wir das Spiel gestartet und werden mit der Ladeszene begrüsst. Wenn
wir dann die Leertaste drücken, passiert noch nichts, das Spiel stürtzt sogar
ab. Das liegt daran dass wir die "level-00" Szene noch nicht laden. Das machen
wir auch noch nicht, zuerst möchten wir noch `,e.jsx(n.strong,{children:"Tilesets"}),` verstehen und einfach
mal eine Karte zeichnen lassen.`]}),e.jsx(n.h3,{children:"Neues Level erstellen"}),e.jsx(n.p,{children:`Im nächsten Beispiel schauen wir uns an wie man ein weiteres eigenes Level
erstellt. Das müssen wir dann natürlich noch in der Hauptdatei oben einfügen,
damit es geladen wird.`}),e.jsxs(r,{title:"Level 00",children:[e.jsxs(n.p,{children:[`Hier stellen wir einfach nur eine Karte, und versuchen zu verstehen wie die
`,e.jsx(n.strong,{children:"Tilesets"})," funktionieren."]}),e.jsx(n.p,{children:`Schauen Sie sich die Kommentare im Code an und versuchen Sie alles so gut es
geht zu verstehen. sie können nocht nicht so viel ändern, das kommt erst später.
Sie können hier auch nicht alles verstehen, einige Dinge werden einfach von der
Game-Engine so gemacht, da müssen Sie nur die Muster kennen.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import Phaser from "phaser"

/**
 * Erstelle die Szene für das Level00.
 */
export default class Level00 extends Phaser.Scene {
  /**
   * Erstellt eine Instanz einer Phaser.Szene.
   */
  constructor() {
    super({ key: "level-00" })
  }

  preload() {
    // Lade die Karte für das aktuelle Level. Der erste Parameter ist der Name
    // unter dem die Karte gespeichert wird. Der zweite Parameter ist die
    // Kartendatei mit allen Daten drin.
    this.load.tilemapTiledJSON(
      "map-level-00",
      "./assets/maps/map-level-00.json",
    )
  }

  create() {
    // Erstelle die Karte so wie sie in der geladenen Datei angegeben wird.
    const map = this.make.tilemap({ key: "map-level-00" })

    // Bestimme das "Tileset" das für diese Karte verwendet werden soll. Wir
    // haben nur eines, bei uns heisst es immer "tileset". Wir könnten aber
    // mehrere verwenden, um Jahreszeiten zu simulieren, ohne eine neue Karte
    // zeichnen zu müssen.
    const tiles = map.addTilesetImage("tileset")

    // Erstellt den "Background" Layer
    map.createLayer("Background", tiles, 0, 0)

    // Erstellt den "Obstacles" Layer. Hier kann der Spieler nicht durchlaufen.
    map.createLayer("Obstacles", tiles, 0, 0)
  }
}
`})}),e.jsxs(n.p,{children:["Schauen wir uns einmal das ",e.jsx(n.strong,{children:"Tileset"}),` das hier verwendet wird genau an, das
macht einiges klarer.`]}),e.jsx(t,{src:"tileset.png",alt:"tileset"}),e.jsxs(n.p,{children:[`Wie Sie hier erkennen können, kommen alle Teile die wir in der Karte verwenden,
als Teile von diesem einen Bild vor. Das wird bei Spielen häufig so gemacht,
denn so muss nur ein Bild in den Speicher geladen werden, und die Game-Engine
kann effizienter damit umgehen. Für uns heisst das, wir können aber die Grafiken
von einem Spiel einfach austauschen, erweitern oder verbessern. Dafür müssen wir
nur ein Zeichenprogramm haben, das mit Pixeln zeichnen kann. Sie müssen dabei
nur beachten das Sie in dem `,e.jsx(n.code,{children:"32x32 Pixel"}),` Feld bleiben und einen Absand von
`,e.jsx(n.code,{children:"2 Pixeln"})," zur nächsten Kachel haben."]})]}),e.jsxs(n.p,{children:["Wann welches Tile gezeichnet wird, steht in der Datei ",e.jsx(n.code,{children:"map-level-00.json"}),` die
wir weiter oben laden. Wir werden mal einen Blick in diese Datei und versuchen
von Hand ein paar weitere Kacheln einzuzeichnen.`]}),e.jsxs(r,{title:"Kartendatei",children:[e.jsxs(n.p,{children:[`Diese Datei wird eigentlich nie von Hand bearbeitet, sondern aus dem
Karteneditor `,e.jsx(n.code,{children:"Tiled"}),` exportiert. Wir scheun uns die Datei trotzdem mal genau an,
denn dadurch können wir den Editor besser verstehen, und auch so schon leichte
Änderungen am Spiel vornehmen.`]}),e.jsxs(n.p,{children:[`Was uns sofort auffällt, sind die beiden Layers, die sehr viele Einträge in
`,e.jsx(n.code,{children:'"data"'}),` haben. Diese Liste von Daten die wir da finden, ist die Anleitung wir
die Karte gezeichnet wird. Der erste `,e.jsx(n.code,{children:"layer"}),` den wir sehen, hat den Namen
`,e.jsx(n.code,{children:'"Background"'}),`, und hier wir überall das gleiche Tile gezeichnet. Wir versuchen
mal den ersten Eintrag auf 0 zu setzen, und schauen uns an was mit dem Spiel
passiert.`]}),e.jsxs(n.p,{children:["Im zweiten Layer, bei den ",e.jsx(n.code,{children:'"Obstacles"'}),` sehen Sie andere Zahlen. VErsuchen Sie
auch hier mal die Zahlen zu ändern, so das Sie eine andere Karte bekommen.
Versuchen Sie dafür die obere Kante der Karte mit einer Wand zu ersetzen, so das
an einem Ort eine Höhle vorkommt.`]}),e.jsxs(n.p,{children:["Versuchen Sie dann auch noch einen Stein im ",e.jsx(n.code,{children:'"Background"'}),`-Layer zu platzieren,
und im `,e.jsx(n.code,{children:'"Obstacles"'}),"-Layer dann einen Pilz."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`{
  "compressionlevel": -1,
  "height": 15,
  "infinite": false,
  "layers": [
    {
      "data": [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
      ],
      "height": 15,
      "id": 1,
      "name": "Background",
      "opacity": 1,
      "type": "tilelayer",
      "visible": true,
      "width": 20,
      "x": 0,
      "y": 0
    },
    {
      "data": [
        2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0,
        0, 6, 6, 6, 2, 2, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 4, 6,
        6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 2, 5, 5, 3, 3, 3, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 6, 6, 6, 6, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ],
      "height": 15,
      "id": 2,
      "name": "Obstacles",
      "opacity": 1,
      "type": "tilelayer",
      "visible": true,
      "width": 20,
      "x": 0,
      "y": 0
    }
  ],
  "nextlayerid": 3,
  "nextobjectid": 1,
  "orientation": "orthogonal",
  "renderorder": "right-down",
  "tiledversion": "1.11.0",
  "tileheight": 32,
  "tilesets": [
    {
      "columns": 4,
      "firstgid": 1,
      "image": "../tileset.png",
      "imageheight": 68,
      "imagewidth": 136,
      "margin": 1,
      "name": "tileset",
      "spacing": 2,
      "tilecount": 8,
      "tileheight": 32,
      "tiles": [
        {
          "id": 1,
          "properties": [
            {
              "name": "collides",
              "type": "bool",
              "value": true
            }
          ]
        },
        {
          "id": 4,
          "properties": [
            {
              "name": "collides",
              "type": "bool",
              "value": true
            }
          ]
        },
        {
          "id": 5,
          "properties": [
            {
              "name": "collides",
              "type": "bool",
              "value": true
            }
          ]
        },
        {
          "id": 7,
          "properties": [
            {
              "name": "collides",
              "type": "bool",
              "value": true
            }
          ]
        }
      ],
      "tilewidth": 32
    }
  ],
  "tilewidth": 32,
  "type": "map",
  "version": "1.10",
  "width": 20
}
`})})]}),e.jsxs(n.p,{children:[`Jetzt haben wir fast alles was wir brauchen, wir müssen nur noch einen Spieler
haben, der sich in der Welt bewegen kann. Das kann recht kompliziert werden, da
ein solches Spielobjekt oft auch Animationen haben soll. Wir fügen einfach mal
ein Objekt ein, das wir durch die Welt bewegen können. Dafür erweitern wir die
Funktion `,e.jsx(n.code,{children:"create"})," einfach mit den folgenden Zeilen:"]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Erstelle einen Cursor um auf die Eingaben des Spielers zu reagieren.
this.cursor = this.input.keyboard.createCursorKeys()

// Erstelle das Spielerobjekt als rotes Rechteck.
this.player = this.add.rectangle(3 * 32, 4 * 32, 32, 32, 0xff0000)

// Stelle die Kamera so ein, dass sie dem Spieler folgt.
this.cameras.main.startFollow(this.player)
`})}),e.jsxs(n.p,{children:[`Damit macht der Spieler aber noch nicht viel, das müssen wir in der
`,e.jsx(n.code,{children:"update"}),"-Methode noch ergänzen."]}),e.jsxs(r,{title:"Spieler steuern",children:[e.jsxs(n.p,{children:["Wir fügen die Methode ",e.jsx(n.code,{children:"update"}),` zur Szene hinzu. Die wird im Game-Loop augerufen
um die Positionen von Objekten neu zu berechnen. Hier können wir auf die Eingabe
des Spielers reagieren und die Positionen neu berechnen.`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`update() {
  // Hole die teile left, right, up und down aus dem Cursor-Objekt
  const { left, right, up, down } = this.cursor

  // Wenn links gedrückt wird...
  if (left.isDown) {
    // Links wurde gedrückt, verschiebe den Spieler einen Pixel nach rechts.
    this.player.x -= 1
  }
  if (right.isDown) {
    this.player.x += 1
  }
  if (up.isDown) {
    this.player.y -= 1
  }
  if (down.isDown) {
    this.player.y += 1
  }
}
`})})]}),e.jsxs(n.p,{children:[`Damit haben wir alle Teile zusammen mit denen man ein Spiel erstellen kann. In
den nächsten Kapitel schauen wir uns an wie man Spielobjekte mit Animationen
erstellen kann, wie man Karten erstellt mit der Hilfe von `,e.jsx(n.code,{children:"Tiled"}),` und wie man
Interaktion zwischen Spielobjekten herstellen kann.`]})]})}function m(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{m as default};
