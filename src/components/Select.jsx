export default function Select({options, value, onChange}) {
    return (
        <select value={value} onChange={onChange}>
            {options.map((option) => <option>{option}</option>)}
        </select>
    )
}
