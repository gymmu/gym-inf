import Slider from "@components/Slider.jsx"
import PrismBlock from "@components/PrismBlock.jsx"
import styles from "@components/GridTransformation.module.css"
import { useState } from "react"

export default function GridTransformation() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [rot, setRot] = useState(0)
    const [scale, setScale] = useState(1)

    return (
        <div className={styles.gridTransormationContainer}>
            <div className={styles.gridTransormationWrapper}>
                <div className={styles.controllsPart}>
                    <Slider sliderText={`x: ${x}`} value={x} setValue={setX} />
                    <Slider sliderText={`y: ${y}`} value={y} setValue={setY} />
                    <Slider sliderText={`rot: ${rot}`} value={rot} setValue={setRot} />
                    <Slider sliderText={`scale: ${scale}`} value={scale} setValue={setScale} minVal="0.125" step="0.125" maxVal="4" />
Code:
                    <PrismBlock>
                        <pre>
                            <code>
                    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${scale})`}>
                        <rect width="100%" height="100%" fill="url(#gridBlue)" />
                        <circle r="5" fill="blue"/>
                        <circle cx="150" cy="150" r="5" fill="blue"/>
                    </g>
                    </code>
                        </pre>
                    </PrismBlock>
                </div>

                <div className={styles.svgPart}>
                <svg viewBox="0 0 300 300" width="100%">
                    <defs>
                        <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" stroke-width="0.5"/>
                        </pattern>
                        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                            <rect width="50" height="50" fill="url(#smallGrid)"/>
                            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="gray" stroke-width="1"/>
                        </pattern>

                        <pattern id="smallGridBlue" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="blue" stroke-width="0.5"/>
                        </pattern>
                        <pattern id="gridBlue" width="50" height="50" patternUnits="userSpaceOnUse">
                            <rect width="50" height="50" fill="url(#smallGridBlue)"/>
                            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="blue" stroke-width="1"/>
                        </pattern>
                    </defs>
                    <g>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </g>
                    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${scale})`}>
                        <rect width="100%" height="100%" fill="url(#gridBlue)" />
                        <circle r="5" fill="blue"/>
                        <circle cx="150" cy="150" r="5" fill="blue"/>
                    </g>

                </svg> 
                </div>
            </div>
        </div>
    )
}
