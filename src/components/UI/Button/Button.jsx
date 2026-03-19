import s from "../Button/Button.module.scss";

export default function Button({ text, styles, icon, el, type, onClick }) {
  const hasFile = el?.file;

  return (
    <button type={type} className={s[styles]} onClick={onClick}>
      {hasFile ? (
        <a
          href={el.file}
          download={el.title || true}
          className={s.linkInside}
          onClick={(e) => e.stopPropagation()}
        >
          {text || icon}
        </a>
      ) : (
        <span>{text || icon}</span>
      )}
    </button>
  );
}
