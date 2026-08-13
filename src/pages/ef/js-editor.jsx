import JSTerminalFullscreen from "@components/JSTerminalFullscreen";
import { AppProvider } from "@context/AppContext";
import { NavProvider } from "@context/NavContext";

export default function EFEditor() {
  return (
    <AppProvider>
      <NavProvider>
        <JSTerminalFullscreen filename="editor.js" />
      </NavProvider>
    </AppProvider>
  );
}
