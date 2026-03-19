import s from "./Experiense.module.scss";
import Resume from "../Resume/Resume";
import SectionTitle from "../SectionTitle/SectionTitle";
import {
  educationData,
  workExperienceData,
  achivementsList,
} from "../../data/data";
import Button from "../UI/Button/Button";

function Experiense({ id }) {
  return (
    <section  id={id} className={s.experiense}>
      <SectionTitle text={"Resume"} contentText={"Achivements"} />

      <div className={s.experienseContainer}>
        <Resume title={"Education"} resumeData={educationData} />
        <Resume title={"Experiense"} resumeData={workExperienceData} />
      </div>
      <div className={s.achivementsList}>
        {achivementsList.map((el, index) => {
          const Icon = el.icon;
          return (
            <div
              key={index}
              className={s.achivementsItem}
              onMouseEnter={() => setHovered(el.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className={s.front}>
                <div className={s.icon}>
                  <Icon size={40} />
                </div>
                <p className={s.title}>{el.title}</p>
                
                <p>{el.description}</p>
              </div>

              <div className={s.back}>
                <Button
                  el={el}
                  styles={"btnMore"}
                  text={"Read more"}
                  type = "button"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Experiense;
