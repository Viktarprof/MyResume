import myDocument from "../../assets/CV-Viktar Kalosha.pdf";
import HoverPhoto from "../HoverPhoto/HoverPhoto";
import s from "./ProfileCard.module.scss";
import Button from "../UI/Button/Button";
import { RiArrowDownDoubleLine } from "react-icons/ri";

export default function ProfileCard({ id }) {
  const onScrollToAbout = () => {
    const section = document.getElementById("about");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div id={id} className={s.heroContainer}>
        <div className={s.heroDetail}>
          <h3 className={s.heroTitle}>
            Hello, <br /> I am <br /> <span>Viktar Kalosha</span>
          </h3>
          <p>
            I am a Front-End developer creating modern and interactive web
            interfaces using HTML, CSS, JavaScript, and React. I enjoy turning
            ideas into visually appealing and dynamic applications while
            constantly exploring new technologies and web development trends.
          </p>
          <div className={s.linkCV}>
            <div className={s.circle}></div>
            <a href={myDocument} download="myDocument.pdf">
              Download CV <span>—</span>
            </a>
          </div>
        </div>
        <HoverPhoto />
        <div className={s.heroProfetiion}>
          <h3>Frontend Developer</h3>
          <span className={s.redLine}></span>
        </div>
      </div>
      

      <Button
        type="button"
        styles="scrollNext"
        icon={<RiArrowDownDoubleLine size={30} />}
        onClick={onScrollToAbout}
      />
    </>
  );
}

