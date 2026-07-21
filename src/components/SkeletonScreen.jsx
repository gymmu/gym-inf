import style from "./SkeletonScreen.module.css";

export default function SkeletonScreen() {
  return (
    <div className={style.skeleton}>
      <div className={style.skeletonHeader}>
        <div className={`${style.skeletonBox} ${style.title}`}></div>
      </div>
      <div className={style.skeletonContent}>
        <div className={`${style.skeletonBox} ${style.paragraph}`}></div>
        <div className={`${style.skeletonBox} ${style.paragraph}`}></div>
        <div className={`${style.skeletonBox} ${style.paragraphShort}`}></div>
        <div className={style.skeletonSpacer}></div>
        <div className={`${style.skeletonBox} ${style.subheading}`}></div>
        <div className={`${style.skeletonBox} ${style.paragraph}`}></div>
        <div className={`${style.skeletonBox} ${style.paragraphShort}`}></div>
      </div>
    </div>
  );
}
