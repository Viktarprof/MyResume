import s from "../Textarea/Textarea.module.scss";
import { forwardRef } from "react";

const Textarea = forwardRef(({ styles, ...rest }, ref) => {
  return (
    <textarea
      ref={ref}
      {...rest}
      className={s[styles]}
    />
  );
});

export default Textarea;
