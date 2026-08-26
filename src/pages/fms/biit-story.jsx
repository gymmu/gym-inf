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

      <StoryPart component={ExtendedTable} imagePosition="right">
        <p>
          Prof. ASCII nutzt dieses Wissen und erstellt damit die erweiterte
          ASCII-Tabelle, in der er seltene Zeichen unterbringt, die nicht in
          allen Sprachen existieren.
        </p>
      </StoryPart>
    </>
  );
}
