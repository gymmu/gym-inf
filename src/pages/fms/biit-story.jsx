import Alpha from "@/components/gym/Alpha/Alpha";
import AlphaScale from "@/components/gym/AlphaScale/AlphaScale";
import { AsciiByteList } from "@/components/gym/AsciiByte/AsciiByte";
import Biit from "@/components/gym/Biit/Biit";
import Boundary from "@/components/gym/Boundary/Boundary";
import Byte, { default as ByteStatic } from "@/components/gym/Byte/Byte";
import { Ascii } from "@/components/gym/Character/characters.jsx";
import ColorSpace from "@/components/gym/ColorSpace/ColorSpace";
import Dec from "@/components/gym/Dec/Dec";
import ExtendedTable from "@/components/gym/ExtendedTable/ExtendedTable";
import Formula from "@/components/gym/Formula/Formula";
import Hex from "@/components/gym/Hex/Hex";
import HexChannels from "@/components/gym/HexChannels/HexChannels";
import HexColor from "@/components/gym/HexColor/HexColor";
import HexFormula from "@/components/gym/HexFormula/HexFormula";
import HexNibble from "@/components/gym/HexNibble/HexNibble";
import HexRange from "@/components/gym/HexRange/HexRange";
import HexTable from "@/components/gym/HexTable/HexTable";
import ImageFormats from "@/components/gym/ImageFormats/ImageFormats";
import ImageSize from "@/components/gym/ImageSize/ImageSize";
import Limit from "@/components/gym/Limit/Limit";
import Resolution from "@/components/gym/Resolution/Resolution";
import Rgb from "@/components/gym/Rgb/Rgb";
import RgbChannels from "@/components/gym/RgbChannels/RgbChannels";
import StoryPart from "@/components/StoryPart";

const ScaledByte = (props) => <ByteStatic scaled {...props} />;
const AsciiExamples = (props) => (
  <AsciiByteList items={["A", "m", "7", "?", " "]} {...props} />
);
const HexNibbleAlt = (props) => <HexNibble value={0x3f} {...props} />;
const ImageBytes = (props) => <ImageSize unit="byte" {...props} />;
const ImageBits = (props) => <ImageSize unit="bit" {...props} />;

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

      <StoryPart component={Hex} imagePosition="left">
        <p>
          <strong>Dr. HEX</strong> ist der Rivale von Dr. DEC. Er findet das
          bisherige Zahlensystem unpraktisch: Für ein Byte braucht es drei
          Stellen, und davon werden nur etwa 25% der möglichen Zahlen genutzt.
          Er könne das besser – mit nur <strong>2 Stellen</strong>.
        </p>
      </StoryPart>

      <StoryPart component={HexTable} imagePosition="right" wide>
        <p>
          Die zehn bekannten Ziffern reichen für sein System aber nicht aus.
          Also erfindet er kurzerhand sechs neue dazu: <strong>A bis F</strong>.
        </p>
      </StoryPart>

      <StoryPart component={HexRange} imagePosition="left">
        <p>
          Dr. HEX ist überzeugt, dass sein System perfekt zu Binaria passt: Mit
          zwei Ziffern lässt sich jedes Byte von <strong>00</strong> bis{" "}
          <strong>FF</strong> durchnummerieren.
        </p>
      </StoryPart>

      <StoryPart component={HexFormula} imagePosition="right" wide>
        <p>
          Doch nicht alle können im neuen System gut rechnen. Dr. HEX merkt das
          und entwickelt eine Formel, mit der man direkt in das Dezimalsystem
          umrechnen kann.
        </p>
      </StoryPart>

      <StoryPart component={HexNibble} imagePosition="left" wide>
        <p>
          Doch Dr. HEX geht noch einen Schritt weiter. Ihm fällt auf, dass ein
          Byte genau in zwei Hälften zerfällt: <strong>4 Bits</strong> links und{" "}
          <strong>4 Bits</strong> rechts. Und jede dieser Hälften – ein{" "}
          <strong>Halbbyte</strong> – kann Werte von 0 bis 15 annehmen. Genau so
          viele, wie er Ziffern hat!
        </p>
      </StoryPart>

      <StoryPart component={HexNibbleAlt} imagePosition="right" wide>
        <p>
          Damit braucht er die grosse Formel gar nicht mehr: Man betrachtet
          jeweils nur das <strong>halbe Byte</strong> und rechnet darin mit den
          Werten <strong>8, 4, 2, 1</strong>. Die linke Hälfte ergibt die erste
          Hex-Ziffer, die rechte Hälfte die zweite. Zusammengeschrieben stehen
          sie für das ganze Byte.
        </p>
      </StoryPart>

      <StoryPart component={Rgb} imagePosition="left">
        <p>
          Auch andere Forschungsgruppen beobachten Binaria. So fällt{" "}
          <strong>Prof. RGB</strong> auf, dass sich die Bytes oft zu
          Dreier-Gruppen zusammenfinden. Diesen grösseren Gruppen widmet er
          seine Forschung – er nennt sie <strong>Pixel</strong>.
        </p>
      </StoryPart>

      <StoryPart component={ColorSpace} imagePosition="right" wide>
        <p>
          Seine Arbeitsgruppe rechnet nach: Es gibt <strong>16'777'216</strong>{" "}
          verschiedene Pixel. Viel zu viele für eine Tabelle. Also gibt er jedem
          Pixel stattdessen eine <strong>Farbe</strong>.
        </p>
      </StoryPart>

      <StoryPart component={RgbChannels} imagePosition="left" wide>
        <p>
          Damit er die Übersicht behält, teilt er jeden Pixel in drei{" "}
          <strong>Kanäle</strong> ein – jeder Kanal ist genau ein Byte. Das
          erste Byte ist der Rot-Kanal, dann folgen Grün und Blau. Je höher der
          Wert in einem Kanal, desto mehr von dieser Farbe steckt im Pixel.
        </p>
      </StoryPart>

      <StoryPart component={HexColor} imagePosition="right" wide>
        <p>
          Dr. HEX sieht im Pixel-Studium seine Chance. Er entwickelt die
          radikale Idee, eine Farbe mit genau <strong>7 Zeichen</strong>{" "}
          darzustellen. Seine Schöpfung nennt er <strong>RGB-Hex-Wert</strong>.
        </p>
      </StoryPart>

      <StoryPart component={HexChannels} imagePosition="left" wide>
        <p>
          Dabei greift er die Kanal-Idee von Prof. RGB auf: Pro Kanal braucht er
          genau zwei Hex-Ziffern, um einen Wert von 00 bis FF darzustellen.
        </p>
      </StoryPart>

      <StoryPart component={Alpha} imagePosition="right">
        <p>
          <strong>Dr. ALPHA</strong> fällt auf, dass sich oft ein viertes Byte
          an einen Pixel anschliesst. Seine Entdeckung nennt er den{" "}
          <strong>Alpha-Kanal</strong>: Er gibt an, wie sichtbar ein Pixel ist.
          Meistens besteht dieses Byte nur aus Einsen.
        </p>
      </StoryPart>

      <StoryPart component={AlphaScale} imagePosition="left" wide>
        <p>
          Je tiefer der Wert im Alpha-Kanal, desto durchsichtiger wird der
          Pixel.
        </p>
      </StoryPart>

      <StoryPart component={ImageFormats} imagePosition="right" wide>
        <p>
          <strong>Dr. PNG</strong> und <strong>Dr. JPEG</strong> studieren das
          Zusammenleben der Pixel. Ihnen fällt auf, dass sich die Pixel
          ordentlich aufreihen und gemeinsam ein <strong>Bild</strong> ergeben.
        </p>
      </StoryPart>

      <StoryPart component={Resolution} imagePosition="left" wide>
        <p>
          Diese Gruppen werden schnell sehr gross: Ein Bild für einen normalen
          Bildschirm braucht schon <strong>1920 x 1200</strong> Pixel.
        </p>
      </StoryPart>

      <StoryPart component={ImageBytes} imagePosition="right" wide>
        <p>
          Dr. PNG will genauer wissen, wie schwer so ein Bild wiegt. Er zählt
          nach: Jeder Pixel bringt <strong>3 Bytes</strong> mit – eines pro
          Kanal. Bei einem Bild in dieser Grösse kommen so über{" "}
          <strong>6 Millionen Bytes</strong> zusammen.
        </p>
      </StoryPart>

      <StoryPart component={ImageBits} imagePosition="left" wide>
        <p>
          Biit rechnet weiter: In jedem Byte stecken ja <strong>8 Bits</strong>.
          Ein einziges Bild besteht also aus über{" "}
          <strong>55 Millionen Bits</strong> – 55 Millionen Nullen und Einsen,
          die alle sauber der Reihe nach stehen müssen.
        </p>
      </StoryPart>
    </>
  );
}
