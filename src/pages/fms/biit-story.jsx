import Layout from "@components/Layout.jsx";
import StoryScroll from "@components/StoryScroll";

export default function BiitStory() {
  return (
    <Layout>
      <div className="page-header">
        <h1>Willkommen in der Welt der Bits und Bytes</h1>
        <p className="page-subtitle">
          Tauche ein in eine verspielte Geschichte über die kleinen Helden der
          digitalen Welt:
        </p>
      </div>
      <StoryScroll />
    </Layout>
  );
}
