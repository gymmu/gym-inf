import style from "@components/ImgGrid.module.css"

export default function ImgGrid({children}) {
    return <div className={style.imgGrid}>{children}</div>
}

export function SvgWithGrid({children}) {
    return (
        <svg viewBox="-25 -25 350 350" width="300">
            <defs>
                <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" stroke-width="0.5"></path>
                </pattern>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <rect width="50" height="50" fill="url(#smallGrid)"></rect>
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="gray" stroke-width="1"></path>
                </pattern>
            </defs>
            <rect width="301" height="301" fill="url(#grid)"></rect>
            <g id="xAxisLabels">
                <text x="-5" y="-5">0</text>
                <text x="40" y="-5">50</text>
                <text x="85" y="-5">100</text>
                <text x="135" y="-5">150</text>
                <text x="185" y="-5">200</text>
                <text x="235" y="-5">250</text>
                <text x="285" y="-5">300</text>
            </g>
            <g id="yAxisLabels">
                <text x="-15" y="5">0</text>
                <text x="-20" y="55">50</text>
                <text x="-25" y="105">100</text>
                <text x="-25" y="155">150</text>
                <text x="-25" y="205">200</text>
                <text x="-25" y="255">250</text>
                <text x="-25" y="305">300</text>
            </g>
            {children}
        </svg>

    )
}
