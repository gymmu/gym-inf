import { useEffect, useRef, useState } from 'react';
import MonacoEditor from "react-monaco-editor"

export default function PPM({ ppmS }) {
    const [ppmString, setPPMString] = useState(ppmS)
    const canvasRef = useRef(null);

    const radix = 16

    useEffect(() => {
        if (!ppmString) return;

        const lines = ppmString.split('\n');
        const [format, width, height, maxColor] = lines.slice(0, 4);
        if (format !== 'P3') {
            console.error('Unsupported PPM format');
            return;
        }

        const pixelData = lines.slice(4).join(' ').split(' ').map((val) => parseInt(val, radix));
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,canvas.width, canvas.height)
        ctx.imageSmoothingEnabled = false; // Disable image smoothing for pixelated effect
        const imgWidth = parseInt(width, radix) || 1
        const imgHeight = parseInt(height, radix) || 1
        const imageData = ctx.createImageData(imgWidth, imgHeight);

        for (let i = 0, j = 0; i < pixelData.length; i += 3, j += 4) {
            imageData.data[j] = parseInt(pixelData[i], radix);     // Red
            imageData.data[j + 1] = parseInt(pixelData[i + 1], radix); // Green
            imageData.data[j + 2] = parseInt(pixelData[i + 2], radix); // Blue
            imageData.data[j + 3] = 255;         // Alpha
        }
        // Create an off-screen canvas for scaling
        const offScreenCanvas = document.createElement('canvas');
        offScreenCanvas.width = imgWidth
        offScreenCanvas.height = imgHeight
        const offScreenCtx = offScreenCanvas.getContext('2d');
        offScreenCtx.putImageData(imageData, 0, 0);

        // Draw the scaled image on the main canvas
        ctx.drawImage(offScreenCanvas, 0, 0, imgWidth, imgHeight, 0, 0, canvas.width, canvas.height);
    }, [ppmString]);

    const handleEditorChange = (value) => {
        setPPMString(value)
    }

    return (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "center",
                    width: "100%",
                    gap: "1em"
                }}>
                <MonacoEditor
                    language="json"
                    value={ppmString}
                    height="300px"
                    theme="vs-dark"
                    onChange={handleEditorChange}
                // automaticLayout={true}
                />
                <canvas ref={canvasRef} style={{ border: "1px solid white", width: "300px", height: "300px", imageRendering: "pixelated" }}></canvas>
            </div>
    );
}
