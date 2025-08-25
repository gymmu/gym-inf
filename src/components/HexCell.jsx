import React, { useRef, useEffect, useState } from "react"
import MonacoEditor from "react-monaco-editor"
import { hexy } from "hexy"

export default function HexCell() {
    const [hex, setHex] = useState("Hello World!")
    const [format, setFormat] = useState({
        width: 4,
        numbering: "none",
        format: "twos",
        radix: 16
    }

    )

    const outputRef = useRef(null)

    const setRadix = (value) => {
        setFormat(prev => ({ ...prev, radix: value }))

    }
    const handleEditorChange = (value) => {
        setHex(value)
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            {/* Controlpanel */}
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem"
            }}>
                <button onClick={() => setRadix(2)}>Binary</button>
                <button onClick={() => setRadix(8)}>Octal</button>
                <button onClick={() => setRadix(10)}>Decimal</button>
                <button onClick={() => setRadix(16)}>Hexadecimal</button>
            </div>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    gap: "1em"
                }}>
                <MonacoEditor
                    language="json"
                    value={hex}
                    height="300px"
                    theme="vs-dark"
                    onChange={handleEditorChange}
                // automaticLayout={true}
                />

                <pre
                    ref={outputRef}
                    style={{
                        border: "1px solid black",
                        width: "320px",
                        height: "300px",
                        marginRight: "1em",
                        overflowY: "scroll",

                    }}>
                    {hexy(hex, format)}
                </pre>
            </div>
        </div>
    )
}
