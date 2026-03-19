import s from "../Resume/Resume.module.scss";

function Resume({ title, resumeData }) {
  return (
    <div className={s.resumeSection}>
      <h3>{title}</h3>

      <div className={s.resumeList}>
        {resumeData.map((el, index) => (
          <div key={index} className={s.resumeItem}>
            <p className={s.period}>{el.period}</p>
            <h4>
              <span>{el.position}</span> — {el.company}
            </h4>
            <p className={s.description}>{el.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resume;
