import StoryPart from "@/components/StoryPart";
import Biit from "@/components/gym/Biit/Biit";

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
    </>
  );
}
