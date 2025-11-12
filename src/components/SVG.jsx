export function SVGComponent({ children }) {
  return (
    <svg
      style={{ backgroundColor: "white" }}
      viewBox="-25 -25 350 350"
      width="300">
      <Grid></Grid>
      <g id="xAxisLabels">
        <text x="-5" y="-5">
          0
        </text>
        <text x="40" y="-5">
          50
        </text>
        <text x="85" y="-5">
          100
        </text>
        <text x="135" y="-5">
          150
        </text>
        <text x="185" y="-5">
          200
        </text>
        <text x="235" y="-5">
          250
        </text>
        <text x="285" y="-5">
          300
        </text>
      </g>
      <g id="yAxisLabels">
        <text x="-15" y="5">
          0
        </text>
        <text x="-20" y="55">
          50
        </text>
        <text x="-25" y="105">
          100
        </text>
        <text x="-25" y="155">
          150
        </text>
        <text x="-25" y="205">
          200
        </text>
        <text x="-25" y="255">
          250
        </text>
        <text x="-25" y="305">
          300
        </text>
      </g>
      {children}
    </svg>
  )
}

export function Path({
  strokeWidth = 2,
  strokeColor = "black",
  fill = "none",
  d = "",
}) {
  return (
    <path strokeWidth={strokeWidth} stroke={strokeColor} fill={fill} d={d} />
  )
}

export function Circle({
  cx = 0,
  cy = 0,
  r = 10,
  fill = "black",
  stroke = "none",
  children,
}) {
  return (
    <circle cx={cx} cy={cy} r={r} fill={fill} stroke={stroke}>
      {children}
    </circle>
  )
}

export function Animation({
  animateRef,
  attributeName,
  values,
  begin,
  dur = "1s",
  repeat = "indefinite",
}) {
  return (
    <animate
      ref={animateRef}
      attributeName={attributeName}
      values={values}
      begin={begin}
      dur={dur}
      repeatCount={repeat}
      restart="always"
    />
  )
}

export function Grid() {
  return (
    <>
      <defs>
        <pattern
          id="smallGrid"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse">
          <path
            d="M 10 0 L 0 0 0 10"
            fill="none"
            stroke="gray"
            strokeWidth="0.5"
          />
        </pattern>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <rect width="50" height="50" fill="url(#smallGrid)" />
          <path
            d="M 50 0 L 0 0 0 50"
            fill="none"
            stroke="gray"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="301" height="301" fill="url(#grid)" />
    </>
  )
}

export function Transform({ children, tx = 50, ty = 0, rot = 0, scale = 1 }) {
  return (
    <g transform={`translate(${tx}, ${ty}) rotate(${rot}) scale(${scale})`}>
      {children}
    </g>
  )
}
