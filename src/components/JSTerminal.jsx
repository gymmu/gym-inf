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
 * @param {ReactNode} [props.children] - Code as children (priority over defaultCode)
 */
export default function JSTerminal({
  filename,
  initialCode,
  defaultCode,
  children,
  height = "300px",
  wrapperHeight = "600px",
}) {
  // Calculate Monaco height: wrapper – terminal (200px) – headers/padding (~80px)
  return (
    <JSTerminalLayout
      filename={filename}
      initialCode={initialCode}
      defaultCode={children || defaultCode}
      monacoHeight={height}
      wrapperHeight={wrapperHeight}
    />
  );
}
