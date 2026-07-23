import style from "@components/Path.module.css";
import { useEffect, useState } from "react";
import Slider from "./Slider";
import { Rectangle } from "./SVG";
import SVGTransformBase from "./SVGTransformBase";

export default function SVGTransformRectangle() {
  const [outputString, setOutputString] = useState("");
  const [x, setX] = useState(100);
  const [y, setY] = useState(100);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  const fill = "pink";

  useEffect(() => {
    setOutputString(
      `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${fill}" />`,
    );
  }, [x, y, width, height]);

  return (
    <SVGTransformBase
      elementControlls={
        <>
          <h3>Kontrollelemente Rechteck</h3>
          <div className={style.controlls}>
            <div className={style.formGroup}>
              <Slider
                sliderText={`Eckpunkt x = ${x}`}
                value={x}
                setValue={setX}
                minVal={0}
                maxVal={300}
              />
            </div>
            <div className={style.formGroup}>
              <Slider
                sliderText={`Eckpunkt y = ${y}`}
                value={y}
                setValue={setY}
                minVal={0}
                maxVal={300}
              />
            </div>
            <div className={style.formGroup}>
              <Slider
                sliderText={`Breite = ${width}`}
                value={width}
                setValue={setWidth}
                minVal={0}
                maxVal={300}
              />
            </div>
            <div className={style.formGroup}>
              <Slider
                sliderText={`Höhe = ${height}`}
                value={height}
                setValue={setHeight}
                minVal={0}
                maxVal={300}
              />
            </div>
          </div>
        </>
      }
      element={
        <Rectangle
          x={x}
          y={y}
          width={width}
          height={height}
          fill={fill}
        ></Rectangle>
      }
      outputString={outputString}
    />
  );
}
