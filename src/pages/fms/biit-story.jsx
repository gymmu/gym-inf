import Biit from "@/components/gym/Biit/Biit";
import Byte from "@/components/gym/Byte/Byte";
import StoryPart from "@/components/StoryPart";

export default function BiitStory() {
  return (
    <>
      <div className="page-header">
        <h1>Willkommen in der Welt der Bits und Bytes</h1>
        <p className="page-subtitle">
          Tauche ein in eine verspielte Geschichte über die kleinen Helden der
          digitalen Welt:
        </p>
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
    </>
  );
}
