import s from "../Aboutme/Aboutme.module.scss";
import { personalData, skillsData } from "../../data/data/";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function Aboutme({id}) {
  return (
     <section id={id} className={s.about}>
      <SectionTitle text={"About"} textTeitle={"ME"} contentText={"About"} />

      <div className={s.aboutContainer}>
        <div className={s.aboutDetail}>
          <h4>Inspiration gives birth to creativity.</h4>
          <p>
            In programming, I am passionate about the ability to create,
            constant development, and the end result of my work. I strive to use
            advanced technologies and methods to create products that meet
            modern requirements. I am an ambitious person with a great desire to
            learn and grow. I am ready to work in a team and share my knowledge
            to achieve common goals and implement high-level projects.
          </p>
          <ul className={s.aboutList}>
            {personalData.map((item) => {
              const value = Object.entries(item).find(
                ([key]) => key !== "id" && key !== "label"
              )?.[1];

              const labelText =
                typeof item.label === "object" ? item.label.text : item.label;
              return (
                <li key={item.id} className={s.aboutItem}>
                  <span className={s.label}>{labelText}</span>
                  <span>:</span>
                  <span className={s.value}>
                    {labelText === "Git Hub" ? (
                      <a href={value} target="_blank" rel="noopener noreferrer">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={s.skillsContainer}>
          {skillsData.map((item, index) => {
            const colorCircle = { //стиль цвета програсс бара
              "--progress": `${item.level}%`,
              "--circleColor":
                item.level >= 90 ? "var(--mainColor)" : "var(--iaActive)",
            };
            return (
              <div key={index} className={s.skillItem}>
                <div className={s.progressCircle} style={colorCircle}>
                  <span>{item.level}%</span>
                </div>
                <h3>{item.category}</h3>
                <p>{item.skills.join(", ")}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
