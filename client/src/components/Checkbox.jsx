export default function Checkbox({toggle, setToggle, labelText = ""}) {

    return (
        <>
            <label>
                <input type="checkbox" value={toggle} onChange={() => setToggle(!toggle)} />
                {labelText}
            </label>
        </>
    )
}
