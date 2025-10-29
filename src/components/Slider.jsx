export default function Slider({sliderText, value, setValue, minVal = 0, maxVal = 300, step=1}) {

    function handleChange(event) {
        setValue(event.target.value)
    }

    return (<>
        <label>{sliderText}</label>
        <input type="range" min={minVal} max={maxVal} value={value} step={step} onChange={handleChange} />
    </>)
}
