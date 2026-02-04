import style from "@components/Figure.module.css";

export default function Figure({
  src,
  alt = "Bild ohne Beschreibung",
  caption,
  origin = null,
}) {
  return (
    <figure className={style.figureContainer}>
      <img src={src} alt={alt} />
      <figcaption>{caption}</figcaption>
      <div className={style.origin}>
        Ursprung des Bildes:{" "}
        <a href={origin} target="_blank">
          {origin}
        </a>
      </div>
    </figure>
  );
}
