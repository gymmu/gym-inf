export default function AnimateHamburger() {
  const repeatCount = "indefinite"
  const time = "4s"
  const keytimes = "0;0.15;1"
  const stroke = "#cccccc"

  return (
    <svg viewBox="0 0 300 300" width="300">
      <g transform-origin="100 100">
        <path
          fill="none"
          stroke={stroke}
          strokeWidth="10"
          strokeLinecap="round"
          d="M 100 100 H 200"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          additive="sum"
          values="0;45;45"
          keyTimes={keytimes}
          dur={time}
          repeatCount={repeatCount}
          fill="freeze"></animateTransform>
        <animateTransform
          attributeName="transform"
          type="scale"
          additive="sum"
          values="0;1.414;1.414"
          keyTimes={keytimes}
          dur={time}
          repeatCount={repeatCount}
          fill="freeze"></animateTransform>
      </g>
      <g transform-origin="0 0">
        <path
          fill="none"
          stroke={stroke}
          strokeWidth="10"
          strokeLinecap="round"
          d="M 100 150 H 200"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          additive="sum"
          values="0 0;300 0;300 0"
          keyTimes={keytimes}
          dur={time}
          repeatCount={repeatCount}
          fill="freeze"></animateTransform>
      </g>
      <g transform-origin="100 200">
        <path
          fill="none"
          stroke={stroke}
          strokeWidth="10"
          strokeLinecap="round"
          d="M 100 200 H 200"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          additive="sum"
          values="0;-45;-45"
          keyTimes={keytimes}
          dur={time}
          repeatCount={repeatCount}
          fill="freeze"></animateTransform>
        <animateTransform
          attributeName="transform"
          type="scale"
          additive="sum"
          values="0;1.414;1.414"
          keyTimes={keytimes}
          dur={time}
          repeatCount={repeatCount}
          fill="freeze"></animateTransform>
      </g>
    </svg>
  )
}
