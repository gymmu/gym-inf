import JSTerminalFullscreen from "@components/JSTerminalFullscreen";
import { AppProvider } from "@context/AppContext";
import { NavProvider } from "@context/NavContext";

export default function EFEditor() {
  const defaultCode = `// Deine JavaScript-Datei
// Schreibe hier deinen Code und klicke "▶ Ausführen"

console.log("Hallo Welt!");
console.log("Willkommen zum JavaScript-Editor!");

// Probiere es aus:
const name = "Lena";
console.log("Hallo " + name + "!");

// Berechnungen
const a = 5;
const b = 3;
console.log(a + " + " + b + " = " + (a + b));
console.log(a + " * " + b + " = " + (a * b));`;

  return (
    <AppProvider>
      <NavProvider>
        <JSTerminalFullscreen filename="editor.js" defaultCode={defaultCode} />
      </NavProvider>
    </AppProvider>
  );
}
