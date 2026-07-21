export default function Slider({sliderText, value, setValue, minVal = 0, maxVal = 300, step=1}) {

    const uid = function(){
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    const id = uid()

    function handleChange(event) {
        setValue(event.target.value)
    }

    return (<>
        <label htmlFor={id}>{sliderText}</label>
        <input id={id} type="range" min={minVal} max={maxVal} value={value} step={step} onChange={handleChange} />
    </>)
}
