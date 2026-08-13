import JSTerminalLayout from "@components/JSTerminalLayout";

/**
 * JSTerminal — standard wrapper for the JavaScript terminal.
 *
 * Used on EF pages inside the normal layout. The editor fills the
 * remaining height after the 200 px terminal section.
 *
 * @param {Object} props
 * @param {string} props.filename - Initial filename
 * @param {string} [props.initialCode] - Fallback code
 * @param {ReactNode} [props.defaultCode] - Default code (priority over initialCode)
 */
export default function JSTerminal({
  filename,
  initialCode,
  defaultCode,
  height = "300px",
}) {
  // Calculate Monaco height: wrapper (600px) – terminal (200px) – headers/padding (~80px)
  // We pass `height` directly since the CSS already sets the wrapper height.
  return (
    <JSTerminalLayout
      filename={filename}
      initialCode={initialCode}
      defaultCode={defaultCode}
      monacoHeight={height}
      wrapperHeight="600px"
    />
  );
}
