export default function SmallASCII() {

  const style = {
    grid: {
      width: "50%",
      minWidth: "360px",
      marginInline: "auto",
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)"
    },

    cell: {
      textAlign: "center",
      border: "1px solid #eee",
      paddingBlock: "0.5em",
      margin: 0
    },
    header: {
      fontWeight: "600"
    }
  }

  return (
    <div style={style.grid}>
      <span style={{...style.cell, ...style.header}}>Byte</span>
      <span style={{...style.cell, ...style.header}}>Zeichen</span>

      <pre style={{...style.cell}}>0110 0001</pre>
      <pre style={{...style.cell}}>a</pre>
      <pre style={{...style.cell}}>0110 0010</pre>
      <pre style={{...style.cell}}>b</pre>
      <pre style={{...style.cell}}>0110 0011</pre>
      <pre style={{...style.cell}}>c</pre>

      <pre style={{...style.cell}}>0011 0000</pre>
      <pre style={{...style.cell}}>0</pre>
      <pre style={{...style.cell}}>0011 0001</pre>
      <pre style={{...style.cell}}>1</pre>
      <pre style={{...style.cell}}>0011 0010</pre>
      <pre style={{...style.cell}}>2</pre>

      <pre style={{...style.cell}}>0010 0000</pre>
      <pre style={{...style.cell}}>SPACE</pre>


      <pre style={{...style.cell}}>0100 0001</pre>
      <pre style={{...style.cell}}>A</pre>
      <pre style={{...style.cell}}>0100 0010</pre>
      <pre style={{...style.cell}}>B</pre>
      <pre style={{...style.cell}}>0100 0011</pre>
      <pre style={{...style.cell}}>C</pre>
    </div>
  )
}
