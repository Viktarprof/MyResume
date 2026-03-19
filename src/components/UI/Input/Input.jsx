import s from "../Input/Input.module.scss";
import { forwardRef } from "react";

const Input = forwardRef(({ styles, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      {...rest}
      className={s[styles]}
    />
  );
});

export default Input;
