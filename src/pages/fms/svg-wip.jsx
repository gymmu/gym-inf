import { Link } from "react-router-dom";
import Biit from "@/components/gym/Biit/Biit";

/**
 * Platzhalter für Kapitel von Vektoria, die erst in der Übersicht existieren.
 * Sobald das richtige Kapitel geschrieben ist, wird die Route ersetzt.
 */
export default function SvgWip({ title = "Dieses Kapitel entsteht noch" }) {
  return (
    <>
      <div className="page-header">
        <h1>{title}</h1>
      </div>

      <section>
        <Biit value="1" />
        <p>
          Biit ist schon unterwegs, aber dieser Ort in Vektoria wird gerade noch
          gebaut. Schau bald wieder vorbei!
        </p>
        <p>
          <Link to="/fms/binaria/vektoria">
            ← Zurück zur Karte von Vektoria
          </Link>
        </p>
      </section>
    </>
  );
}
