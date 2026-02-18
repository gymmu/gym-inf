import { useState, useEffect } from "react"

import styles from "@components/RGB.module.css"


export default function RGB() {

    const [bg, setBg] = useState("#000000")
    const [red, setRed] = useState('00')
    const [green, setGreen] = useState('00')
    const [blue, setBlue] = useState('00')

    useEffect(() => {
        setBg(`#${padWithZero(red)}${padWithZero(green)}${padWithZero(blue)}`)
    }, [red, green, blue])

    const padWithZero = (val) => {
        let newValue = `${val}`
        while (newValue.length < 2) {
            newValue = `0${newValue}`
            console.log(newValue)
        }
        return newValue
    }

    const updateRed = (ev) => { setRed(ev.target.value) }
    const updateGreen = (ev) => { setGreen(ev.target.value) }
    const updateBlue = (ev) => { setBlue(ev.target.value) }

    return (
        <div className={styles.container}>
            <div className={styles.huge}>
                #
            </div>
            <div className={styles.inputgroup}>
                <label className={styles.red} htmlFor="red">Rot</label>
                <input className={styles.colorinput} id="red" maxLength="2" type="text" name="red" value={red} onChange={updateRed} />
            </div>
            <div className={styles.inputgroup}>
                <label className={styles.green} htmlFor="green">Grün</label>
                <input className={styles.colorinput} id="green" maxLength="2" type="text" name="green" value={green} onChange={updateGreen} />
            </div>
            <div className={styles.inputgroup}>
                <label className={styles.blue} htmlFor="blue">Blau</label>
                <input className={styles.colorinput} id="blue" maxLength="2" type="text" name="blue" value={blue} onChange={updateBlue} />
            </div>

            <div className={styles.huge}>
                =
            </div>
            <div className={styles.box} style={{backgroundColor: bg}}> </div>
        </div>
    )
}
