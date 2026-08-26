import { AsciiByteList } from "@/components/gym/AsciiByte/AsciiByte";
import Biit from "@/components/gym/Biit/Biit";
import Boundary from "@/components/gym/Boundary/Boundary";
import Byte, { default as ByteStatic } from "@/components/gym/Byte/Byte";
import { Ascii } from "@/components/gym/Character/characters.jsx";
import Dec from "@/components/gym/Dec/Dec";
import ExtendedTable from "@/components/gym/ExtendedTable/ExtendedTable";
import Formula from "@/components/gym/Formula/Formula";
import Limit from "@/components/gym/Limit/Limit";
import StoryPart from "@/components/StoryPart";

const ScaledByte = (props) => <ByteStatic scaled {...props} />;
const AsciiExamples = (props) => (
  <AsciiByteList items={["A", "m", "7", "?", " "]} {...props} />
);

export default function BiitStory() {
  return (
    <>
      <div className="page-header">
        <h1>Willkommen in der Welt der Bits und Bytes</h1>
      </div>

      <StoryPart component={Biit} imagePosition="left">
        <p>
          Das hier ist Biit. Es kommt aus dem Volk der Binären. Diese können
          immer genau einen von 2 Zuständen annehmen, 0 oder 1. Biit wird uns
          auf der Reise durch die Welt von Binaria begleiten.
        </p>
      </StoryPart>

      <StoryPart component={Byte} imagePosition="right">
        <p>
          In Binaria ist niemand alleine, die Bits reisen immer in Gruppen von
          8. Eine solche Gruppe nennt man ein <strong>Byte</strong>.
        </p>
      </StoryPart>

      <StoryPart component={ScaledByte} imagePosition="left">
        <p>
          In einer solchen Gruppe ist nicht jedes Bit gleich gross. Ganz links
          steht das <strong>grösste</strong> Bit, ganz rechts das{" "}
          <strong>kleinste</strong>. Diese Rangordnung ändert sich niemals.
        </p>
      </StoryPart>

      <StoryPart component={Ascii} imagePosition="right">
        <p>
          Einer der Bewohner von Binaria ist <strong>Professor ASCII</strong>.
          Er studiert die Bytes, wann und wo sie vorkommen. Dafür erstellt er
          die berühmte <strong>ASCII-Tabelle</strong>.
        </p>
      </StoryPart>

      <StoryPart component={AsciiExamples} imagePosition="left">
        <p>
          Professor ASCII weist jedem Byte einen <strong>Identifizierer</strong>{" "}
          zu, damit er die Gruppen einfach unterscheiden kann. So wird aus einer
          Folge von Nullen und Einsen ein Grossbuchstabe, ein Kleinbuchstabe,
          eine Ziffer, ein Satzzeichen oder sogar ein Leerschlag.
        </p>
      </StoryPart>

      <StoryPart component={Boundary} imagePosition="right">
        <p>
          Nach langer Forschung hat Professor ASCII seine Tabelle fertig und hat
          alle 128 Gruppen untersucht. Ihm fällt aber auf, dass es in der
          Theorie bis zu <strong>256</strong> unterschiedliche Gruppen geben
          müsste.
        </p>
      </StoryPart>

      <StoryPart component={Dec} imagePosition="left">
        <p>
          Dr. DEC ist ein Mitarbeiter von Prof. ASCII. Er versucht Ordnung in
          das Durcheinander zu bringen und eine Reihenfolge in die Bytes zu
          bringen.
        </p>
      </StoryPart>

      <StoryPart component={Formula} imagePosition="right" wide>
        <p>
          Dr. DEC hat eine Formel gefunden, wie man aus einem Byte auf eine
          Dezimalzahl kommt. Diese Formel verwendet er, um die Bytes zu ordnen.
        </p>
      </StoryPart>

      <StoryPart component={Limit} imagePosition="left">
        <p>
          Er wendet diese Berechnung an, um die ASCII-Tabelle in eine gute Form
          zu bringen, und konnte bestätigen, dass nur die ersten 128 Bytes
          beobachtet wurden. Dank seiner Ordnung weiss man nun, dass das grösste
          Bit nie den Zustand <strong>1</strong> annimmt.
        </p>
      </StoryPart>

      <StoryPart component={ExtendedTable} imagePosition="right" wide>
        <p>
          Prof. ASCII nutzt dieses Wissen und erstellt damit die erweiterte
          ASCII-Tabelle, in der er seltene Zeichen unterbringt, die nicht in
          allen Sprachen existieren.
        </p>
      </StoryPart>

      {/* New StoryParts */}

      <StoryPart component={} imagePosition="left" wide>
        <p>
          Dr. HEX ist ein Rivale von Dr. DEC. Er behauptet, das Zahlensystem das verwendet wird, mache keinen Sinn. Es braucht nur ca. 25% der möglichen Zahlen. Er könne das viel besser, und sogar nur mit 2 Stellen.
        </p>
      </StoryPart>

      <StoryPart component={/* Gib hier eine Tabelle an, von 0 bis 32 mit den jeweiligen dec und hexwerten.*/} imagePosition="right" wide>
        <p>
          Die 10 Ziffern reichen aber für das neue System nicht aus, also fügt er einfach die Ziffern A-F hinzu.
        </p>
      </StoryPart>

      <StoryPart component={} imagePosition="left" wide>
        <p>
          Dr. HEX behauptet das sein System so viel besser für Binaria gemacht ist, da man alle Bytes in seinem System von 00-FF durchnummerieren kann.
        </p>
      </StoryPart>
      
      <StoryPart component={} imagePosition="right" wide>
        <p>
          Aber nicht alle können in dem neuen System gut rechnen. Dr. HEX merkt das, und entwickelt eine Formel um direkt in das Dezimalsystem zu rechnen.
        </p>
      </StoryPart>

      <StoryPart component={} imagePosition="left" wide>
        <p>
          Es gibt noch weitere Forschungsgruppen die Binaria anschauen. So ist Prof. RGB aufgefallen dass sich die Bytes oftmals in 3er-Gruppen zusammen finden. Er hat seine Forschung diesen grösseren Gruppen gewidmet. Diese Gruppen nennt er Pixel.
        </p>
      </StoryPart>

      <StoryPart component={} imagePosition="right" wide>
        <p>
          NAch ein paar Abschätzungen, ist seine Arbeitsgruppe darauf gekommen das es 16777216 unterschiedliche Pixel gibt. Das ist viel zu gross um es in einer Tabelle festzuhalten, also gibt er jedem Pixel eine Farbe.
        </p>
      </StoryPart>

      <StoryPart component={} imagePosition="right" wide>
        <p>
          Damit er die übersicht nicht verliert, teilt er die Pixel in 3 Kanäle ein. Ein Kanal ist immer gerade ein Byte. So ist das erste Byte der Rot-Kanal, dann kommt der Grün-Kanal und dann der Blau-Kanal. Je höher der Zahlenwert in einem Kanal, desto mehr Farbe davon ist enthalten.
        </p>
      </StoryPart>

      <StoryPart component={} imagePosition="right" wide>
        <p>
          Dr. HEX sieht in dem Pixel-Studium seine Chance seine Arbeit weiter zu verbreiten. So entwickelt er die radikale Idee eine Farbe mit genau 7 Zeichen darzustellen. Seine Schöpfung nennt er RGB-Hex-Wert.
        </p>
      </StoryPart>

      <StoryPart component={} imagePosition="right" wide>
        <p>
          Dabei verwendet er die Kanal-Idee von Prof. RGB. Er braucht immer genau 2 Hexwerte um einen Wert von 00-FF darzustellen.
        </p>
      </StoryPart>


      <StoryPart component={} imagePosition="right" wide>
        <p>
          Dr. ALPHA ist aufgefallen das sich oftmals ein viertes Byte an ein Pixel anschliesst. Seine Entdeckung nennt er den Alpha-Kanal. Dieser gibt an wie sehr so ein Pixel sichtbar ist. Meistens schliesst sich ein Byte an, das nur aus 1 besteht.
        </p>
      </StoryPart>

      <StoryPart component={} imagePosition="right" wide>
        <p>
          Je tiefer der Wert in einem Alpha-Kanal ist, desto durchsichtiger ist das Pixel.
        </p>
      </StoryPart>

      <StoryPart component={} imagePosition="right" wide>
        <p>
          Dr. PNG und Dr. JPEG studieren das zusammenleben von Pixeln. Ihnen ist aufgefallen das sich diese Pixel alle schön aufreihen und dann ein Bild erzeugen.
        </p>
      </StoryPart>

      <StoryPart component={} imagePosition="right" wide>
        <p>
        ese Gruppen werden sehr schnell recht gross, so wird für ein normaler Bildschirm ein Bild mit 1920x1200 Pixel gebraucht. 
        </p>
      </StoryPart>

      
    </>
  );
}
