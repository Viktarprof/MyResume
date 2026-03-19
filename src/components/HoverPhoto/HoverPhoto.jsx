import styles from "../HoverPhoto/HoverPhoto.module.scss";

export default function HoverPhoto({ 
    maxRotate = 7
 }) {

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    e.currentTarget.style.transformOrigin = `${x < 50 ? 100 : 0}% ${y < 50 ? 100 : 0}%`;
    const rotateX = ((y - 50) / 50) * -maxRotate;
    const rotateY = ((x - 50) / 50) * maxRotate;

    e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleLeave = (e) => {
    e.currentTarget.style.transform = `rotateX(0deg) rotateY(0deg) translate(0,0)`;
    e.currentTarget.style.transformOrigin = `0% 0%`;
  };

  return (
    <div
      className={styles.photoHero}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    ></div>
  );
}

