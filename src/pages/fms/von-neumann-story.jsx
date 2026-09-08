import { Link } from "react-router-dom";
import Biit from "@/components/gym/Biit/Biit";
import ByteAddition from "@/components/gym/ByteAddition/ByteAddition";
import ByteLogic from "@/components/gym/ByteLogic/ByteLogic";
import ByteXor from "@/components/gym/ByteXor/ByteXor";
import {
  Add,
  And,
  File as FileChar,
  Float,
  Neg,
  Neumann,
  Not,
  Or,
  Sub,
  Text as TextChar,
  Xor,
} from "@/components/gym/Character/characters.jsx";
import FileConcept from "@/components/gym/FileConcept/FileConcept";
import FloatBits from "@/components/gym/FloatBits/FloatBits";
import Memory from "@/components/gym/Memory/Memory";
import MultiByte from "@/components/gym/MultiByte/MultiByte";
import Overflow from "@/components/gym/Overflow/Overflow";
import PngFile from "@/components/gym/PngFile/PngFile";
import SignedByte from "@/components/gym/SignedByte/SignedByte";
import Subtraction from "@/components/gym/Subtraction/Subtraction";
import TextMemory from "@/components/gym/TextMemory/TextMemory";
import VonNeumann from "@/components/gym/VonNeumann/VonNeumann";
import StoryPart from "@/components/StoryPart";

export default function VonNeumannStory() {
  return (
    <>
      <div className="page-header">
        <h1>Wie ein Computer denkt – die von-Neumann-Architektur</h1>
      </div>

      <StoryPart component={Biit} imagePosition="left">
        <p>
          Biit hat viel über Bits und Bytes gelernt. Jetzt fragt es sich: Wo{" "}
          <strong>wohnen</strong> all diese Byte-Gruppen eigentlich, und wer
          bringt sie dazu, etwas zu tun? Zeit für eine Reise ins Innere des
          Computers.
        </p>
      </StoryPart>

      <StoryPart component={Neumann} imagePosition="right">
        <p>
          Am Eingang wartet <strong>Baumeister VON NEUMANN</strong>. Vor langer
          Zeit hat er den Bauplan entworfen, nach dem noch heute fast jeder
          Computer gebaut wird – die <strong>von-Neumann-Architektur</strong>.
        </p>
      </StoryPart>

      <StoryPart component={VonNeumann} imagePosition="left" wide>
        <p>
          Sein Bauplan hat vier Teile: das <strong>Steuerwerk</strong>, das
          alles steuert, das <strong>Rechenwerk</strong>, das rechnet, den{" "}
          <strong>Speicher</strong> und die <strong>Ein- und Ausgabe</strong>.
          Steuerwerk und Rechenwerk zusammen bilden die <strong>CPU</strong> –
          den Prozessor.
        </p>
      </StoryPart>

      <StoryPart component={VonNeumann} imagePosition="right" wide>
        <p>
          Das Besondere: Alle Teile hängen am selben <strong>Bus</strong>. Über
          diesen gemeinsamen Weg reisen sämtliche Daten hin und her – immer
          schön der Reihe nach. Deshalb reicht die CPU immer nur ein Päckchen
          Daten auf einmal weiter.
        </p>
      </StoryPart>

      <StoryPart component={Memory} imagePosition="left" wide>
        <p>
          Biit folgt dem Bus bis zum <strong>Speicher</strong>. Hier ist es
          also, das grosse Zuhause der Bytes! Der Speicher ist ein Raster aus
          unzähligen <strong>Zellen</strong> – und in jeder Zelle wohnt genau
          ein Byte.
        </p>
      </StoryPart>

      <StoryPart component={Memory} imagePosition="right" wide>
        <p>
          Damit man jede Gruppe wiederfindet, hat jede Zelle eine feste{" "}
          <strong>Adresse</strong>. Will das Rechenwerk ein Byte, nennt es dem
          Speicher nur die Adresse – und schon kommt das richtige Byte über den
          Bus zurück.
        </p>
      </StoryPart>

      <StoryPart component={Add} imagePosition="left">
        <p>
          Im Rechenwerk trifft Biit <strong>Frau ADD</strong>. Ihre
          Lieblingsaufgabe ist das <strong>Addieren</strong> von Bytes. „Zeig
          mir zwei Gruppen“, sagt sie, „und ich mache eine neue daraus.“
        </p>
      </StoryPart>

      <StoryPart component={ByteAddition} imagePosition="right" wide>
        <p>
          Frau ADD rechnet Bit für Bit von rechts nach links. Werden es in einer
          Spalte zu viele, entsteht ein <strong>Übertrag</strong>, der eine
          Stelle nach links weiterwandert – genau wie beim schriftlichen
          Addieren, das Biit aus der Schule kennt.
        </p>
      </StoryPart>

      <StoryPart component={Overflow} imagePosition="left" wide>
        <p>
          Doch dann probiert Biit grosse Zahlen. Beim Addieren entsteht ein
          Übertrag aus dem <strong>grössten Bit</strong> – aber im Byte ist kein
          Platz mehr! Das neunte Bit <strong>fällt heraus</strong> und geht
          verloren.
        </p>
      </StoryPart>

      <StoryPart component={Overflow} imagePosition="right" wide>
        <p>
          Frau ADD nickt ernst: Ein Byte kann nur bis <strong>255</strong>{" "}
          zählen. Wird es mehr, kommt es zum <strong>Überlauf</strong> – das
          Ergebnis wird plötzlich falsch. Der verlorene Übertrag müsste
          eigentlich in eine <strong>andere Gruppe</strong> geschoben werden.
        </p>
      </StoryPart>

      <StoryPart component={Xor} imagePosition="right">
        <p>
          <strong>Frau XOR</strong> zeigt Biit noch einen anderen Trick. Statt
          zu addieren, vergleicht sie zwei Bytes Bit für Bit mit{" "}
          <strong>XOR</strong> („exklusiv oder“). Kein Übertrag, keine Sorgen –
          ein blitzschneller Handgriff, der später bei der Verschlüsselung
          wichtig wird.
        </p>
      </StoryPart>

      <StoryPart component={ByteXor} imagePosition="left" wide>
        <p>
          Ihre Regel ist einfach: Sind zwei Bits <strong>gleich</strong>, wird
          das Ergebnis 0. Sind sie <strong>verschieden</strong>, wird es 1.
          Probier es aus – jedes Ergebnis-Bit hängt nur von der Spalte darüber
          ab.
        </p>
      </StoryPart>

      <StoryPart component={And} imagePosition="right">
        <p>
          Neben XOR gibt es noch weitere <strong>logische Operationen</strong>.{" "}
          <strong>Frau AND</strong> („und“) ist die strengste: Ihr Ergebnis-Bit
          wird nur dann 1, wenn <strong>beide</strong> Bits 1 sind. Sie eignet
          sich, um einzelne Bits gezielt <strong>auszublenden</strong>.
        </p>
      </StoryPart>

      <StoryPart
        component={ByteLogic}
        componentProps={{ op: "and" }}
        imagePosition="left"
        wide
      >
        <p>
          Vergleiche zwei Bytes Spalte für Spalte: Nur wo oben{" "}
          <strong>und</strong> unten eine 1 steht, bleibt unten eine 1 stehen.
          Überall sonst wird es 0. Probier es aus!
        </p>
      </StoryPart>

      <StoryPart component={Or} imagePosition="right">
        <p>
          <strong>Herr OR</strong> („oder“) ist grosszügiger: Sein Ergebnis-Bit
          wird schon 1, wenn <strong>mindestens eines</strong> der beiden Bits
          eine 1 ist. Damit kann man Bits gezielt <strong>einschalten</strong>.
        </p>
      </StoryPart>

      <StoryPart
        component={ByteLogic}
        componentProps={{ op: "or" }}
        imagePosition="left"
        wide
      >
        <p>
          Hier genügt eine einzige 1 in der Spalte, damit das Ergebnis-Bit 1
          wird. Nur wenn oben <strong>und</strong> unten eine 0 steht, bleibt
          das Ergebnis 0.
        </p>
      </StoryPart>

      <StoryPart component={Not} imagePosition="right">
        <p>
          <strong>Dr. NOT</strong> („nicht“) braucht nur <strong>ein</strong>{" "}
          Byte. Er <strong>dreht jedes Bit um</strong>: aus 0 wird 1, aus 1 wird
          0. Genau dieses Umdrehen kennt Biit schon vom Zweierkomplement.
        </p>
      </StoryPart>

      <StoryPart
        component={ByteLogic}
        componentProps={{ op: "not" }}
        imagePosition="left"
        wide
      >
        <p>
          Mit <strong>AND</strong>, <strong>OR</strong>, <strong>NOT</strong>{" "}
          und <strong>XOR</strong> hat das Rechenwerk alle{" "}
          <strong>logischen Grundbausteine</strong> beisammen – aus ihnen lässt
          sich jede Rechnung eines Computers zusammensetzen.
        </p>
      </StoryPart>

      <StoryPart component={Neg} imagePosition="left">
        <p>
          <strong>Dr. NEG</strong> hat noch eine andere Sorge: Wie schreibt man
          eigentlich <strong>negative Zahlen</strong> hin, wenn es doch nur
          Nullen und Einsen gibt? Seine Antwort: Man muss die Bytes nur richtig{" "}
          <strong>deuten</strong>.
        </p>
      </StoryPart>

      <StoryPart component={SignedByte} imagePosition="right" wide>
        <p>
          Dr. NEG erklärt sein <strong>Zweierkomplement</strong>: Das grösste
          Bit wird zum <strong>Vorzeichen</strong>. Ist es eine 1, gilt die Zahl
          als negativ. So beschreibt dasselbe Byte einmal 0 bis 255 und einmal
          −128 bis 127 – je nachdem, wie man es liest. Probier es aus!
        </p>
      </StoryPart>

      <StoryPart component={Sub} imagePosition="left">
        <p>
          <strong>Herr SUB</strong> freut sich: „Jetzt kann ich auch{" "}
          <strong>subtrahieren</strong>!“ Sein Geheimnis: Ein Computer{" "}
          subtrahiert gar nicht wirklich – er <strong>addiert</strong> einfach
          die negative Zahl.
        </p>
      </StoryPart>

      <StoryPart
        component={Subtraction}
        componentProps={{ part: 1 }}
        imagePosition="right"
        wide
      >
        <p>
          Zuerst wird nur <strong>übersetzt</strong>: Aus <strong>b</strong>{" "}
          wird <strong>−b</strong>. Dafür dreht Dr. NEG alle Bits um und addiert
          1 – das <strong>Zweierkomplement</strong>. Gerechnet wird hier noch
          gar nichts.
        </p>
      </StoryPart>

      <StoryPart
        component={Subtraction}
        componentProps={{ part: 2 }}
        imagePosition="left"
        wide
      >
        <p>
          Erst jetzt kommt die <strong>Rechnung</strong>: Aus{" "}
          <strong>a − b</strong> wird <strong>a + (−b)</strong>. So genügt dem
          Rechenwerk eine einzige Fähigkeit – das <strong>Addieren</strong>.
        </p>
      </StoryPart>

      <StoryPart component={MultiByte} imagePosition="left" wide>
        <p>
          „Und wenn meine Zahl grösser als 255 ist?“, fragt Biit. Ganz einfach:
          Man nimmt <strong>mehr als ein Byte</strong>. Zwei Bytes zusammen sind{" "}
          <strong>16 Bit</strong> und reichen schon bis <strong>65'535</strong>.
          Das linke Byte zählt in grossen Schritten, das rechte die Einer.
        </p>
      </StoryPart>

      <StoryPart
        component={ByteAddition}
        componentProps={{ bytes: 2, a: 4321, b: 12345 }}
        imagePosition="right"
        wide
      >
        <p>
          Frau ADD rechnet auch mit grossen Zahlen genau gleich: Bit für Bit von
          rechts nach links, und der <strong>Übertrag</strong> wandert eine
          Stelle weiter. Wird das <strong>niedrige Byte</strong> voll, springt
          der Übertrag einfach über die <strong>Byte-Grenze</strong> ins hohe
          Byte – nichts geht verloren.
        </p>
      </StoryPart>

      <StoryPart component={Float} imagePosition="right">
        <p>
          Zuletzt kommt <strong>Prof. FLOAT</strong> dazu. Sie beschäftigt sich
          mit <strong>Kommazahlen</strong> wie 6,25 oder 0,1 – den{" "}
          <strong>Gleitkommazahlen</strong>.
        </p>
      </StoryPart>

      <StoryPart component={FloatBits} imagePosition="left" wide>
        <p>
          Für eine solche Zahl reserviert sie <strong>4 Bytes</strong> und teilt
          sie geschickt auf: ein Bit für das <strong>Vorzeichen</strong>, acht
          Bit für den <strong>Exponenten</strong> und der Rest für die{" "}
          <strong>Mantisse</strong>. Die Mantisse sind die Ziffern (immer als
          1,irgendwas), der Exponent die Zweierpotenz – er sagt, wohin das{" "}
          <strong>Komma rutscht</strong>: 6,25 = 1,1001₂ · 2².
        </p>
      </StoryPart>

      <StoryPart component={TextChar} imagePosition="right">
        <p>
          <strong>Frau TEXT</strong> winkt Biit zu einem langen Regal im
          Speicher. „Auch <strong>Wörter</strong> wohnen hier“, sagt sie, „ganz
          einfach als Bytes nebeneinander.“
        </p>
      </StoryPart>

      <StoryPart component={TextMemory} imagePosition="left" wide>
        <p>
          Ein Text ist ein <strong>zusammenhängender Bereich</strong> im
          Speicher: In jeder Zelle liegt ein Byte, das über die{" "}
          <strong>ASCII-Tabelle</strong> als Zeichen gelesen wird. Nebeneinander
          ergeben die Zellen ein Wort. Tippe etwas ein!
        </p>
      </StoryPart>

      <StoryPart component={FileChar} imagePosition="right">
        <p>
          Zuletzt stellt sich der <strong>Archivar DATEI</strong> vor. „Alles,
          was ihr gesehen habt, speichere ich als <strong>Dateien</strong>“,
          erklärt er. „Und eine Datei ist nichts anderes als{" "}
          <strong>ordentlich abgelegter Speicher</strong>.“
        </p>
      </StoryPart>

      <StoryPart component={FileConcept} imagePosition="left" wide>
        <p>
          Für jede Datei merkt sich der Archivar drei Dinge: <strong>wo</strong>{" "}
          im Speicher sie beginnt, <strong>wie lang</strong> sie ist und{" "}
          <strong>wie</strong> ihre Bytes zu deuten sind – als Text, als Zahl
          oder als Farbe. Klick dich durch die Dateien!
        </p>
      </StoryPart>

      <StoryPart component={FileChar} imagePosition="right">
        <p>
          „Und ein <strong>Bild</strong>?“, fragt Biit. Der Archivar lächelt:
          „Auch nur eine Datei aus Bytes – aber am Anfang steht ein{" "}
          <strong>Header</strong>, der alles Wichtige verrät.“ Er zeigt Biit ein
          winziges <strong>PNG</strong>.
        </p>
      </StoryPart>

      <StoryPart component={PngFile} imagePosition="left" wide>
        <p>
          Zuerst eine <strong>Signatur</strong>, an der man die PNG-Datei
          erkennt. Dann der <strong>Header</strong> mit <strong>Breite</strong>{" "}
          und <strong>Höhe</strong>. Und erst danach die <strong>Pixel</strong>{" "}
          – je drei Bytes für Rot, Grün und Blau. Klick die Abschnitte an!
        </p>
      </StoryPart>

      <StoryPart component={Biit} imagePosition="right">
        <p>
          Biit ist beeindruckt: Ein paar einfache Bausteine, ein gemeinsamer
          Bus, ein Speicher voller adressierter Bytes – und mit den richtigen{" "}
          <strong>Deutungen</strong> lassen sich Buchstaben, grosse Zahlen,
          negative Zahlen, Kommazahlen, ganze Texte und sogar Dateien
          darstellen.
        </p>
      </StoryPart>

      <section>
        <h2>Weiterlernen</h2>
        <p>
          Zurück zur ersten Reise:{" "}
          <Link to="/fms/biit-story">Willkommen in der Welt der Bits</Link>.
        </p>
      </section>
    </>
  );
}
