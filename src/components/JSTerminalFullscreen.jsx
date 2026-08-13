import JSTerminalLayout from "@components/JSTerminalLayout";

/**
 * JSTerminalFullscreen — full-viewport wrapper for the JavaScript terminal.
 *
 * Used on the dedicated `/ef/editor` page where the terminal should
 * stretch to fill the entire browser window with no header, nav, or footer.
 *
 * @param {Object} props
 * @param {string} props.filename - Initial filename
 * @param {string} [props.initialCode] - Fallback code
 * @param {ReactNode} [props.defaultCode] - Default code (priority over initialCode)
 */
export default function JSTerminalFullscreen({
  filename,
  initialCode,
  defaultCode,
}) {
  // Monaco height: 100vh – terminal (200px) – headers/padding (~80px)
  // We use a CSS calc so it stays dynamic.
  return (
    <JSTerminalLayout
      filename={filename}
      initialCode={initialCode}
      defaultCode={defaultCode}
      monacoHeight="calc(100vh - 300px)"
      wrapperHeight="100vh"
      isFullscreen
    />
  );
}
