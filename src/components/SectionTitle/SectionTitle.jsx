import s from "../SectionTitle/SectionTitle.module.scss";

function SectionTitle({ text, textTeitle, contentText }) {
  return (
    <h2 className={s.title} data-content={contentText}>
      {text} <span>{textTeitle}</span>
    </h2>
  );
}

export default SectionTitle;
