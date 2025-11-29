import style from "@components/Figure.module.css";

export default function Figure({
  src,
  alt = "Bild ohne Beschreibung",
  caption,
  origin = null,
}) {
  return (
    <figure class={style.figureContainer}>
      <img src={src} alt={alt} />
      <figcaption>{caption}</figcaption>
      <div class={style.origin}>
        Ursprung des Bildes:{" "}
        <a href={origin} target="_blank">
          {origin}
        </a>
      </div>
    </figure>
  );
}
