import { useEffect, useRef, useState } from 'react';

export default function PPM({ ppmS }) {
    const [ppmString, setPPMString] = useState(ppmS)
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!ppmString) return;

        const lines = ppmString.split('\n');
        const [format, width, height, maxColor] = lines.slice(0, 4);
        if (format !== 'P3') {
            console.error('Unsupported PPM format');
            return;
        }

        const pixelData = lines.slice(4).join(' ').split(' ').map(Number);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = false; // Disable image smoothing for pixelated effect
        const imageData = ctx.createImageData(parseInt(width), parseInt(height));

        for (let i = 0, j = 0; i < pixelData.length; i += 3, j += 4) {
            imageData.data[j] = parseInt(pixelData[i]);     // Red
            imageData.data[j + 1] = parseInt(pixelData[i + 1]); // Green
            imageData.data[j + 2] = parseInt(pixelData[i + 2]); // Blue
            imageData.data[j + 3] = 255;         // Alpha
        }
        console.log(imageData.data)
        // Create an off-screen canvas for scaling
        const offScreenCanvas = document.createElement('canvas');
        offScreenCanvas.width = parseInt(width);
        offScreenCanvas.height = parseInt(height);
        const offScreenCtx = offScreenCanvas.getContext('2d');
        offScreenCtx.putImageData(imageData, 0, 0);

        // Draw the scaled image on the main canvas
        ctx.drawImage(offScreenCanvas, 0, 0, parseInt(width), parseInt(height), 0, 0, canvas.width, canvas.height);
    }, [ppmString]);

    return (
        <canvas ref={canvasRef} style={{ border: "1px solid white", width: "100px", height: "100px", imageRendering: "pixelated" }}></canvas>
    );
}
