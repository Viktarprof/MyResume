import s from "../NavMenu/NavMenu.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggle, close } from "../../store/toggleReduser";
import { menuList } from "../../data/data";

function NavMenu() {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.toggleMenu.isOpen);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      dispatch(close());
    }
  };

  return (
    <>
      {!active && (
        <div className={s.btn_burger} onClick={() => dispatch(toggle())}>
          <span className={s.line}></span>
        </div>
      )}

      {active && (
        <div className={s.btn_close} onClick={() => dispatch(close())}>
          <span className={s.closeLine}></span>
        </div>
      )}

      {active && (
        <div className={s.overlay} onClick={() => dispatch(close())}></div>
      )}

      <div className={`${s.menuList} ${active ? s.active : ""}`}>
        {menuList.map((item) => (
          <div
            key={item.id}
            className={s.colorBtn}
            onClick={() => handleScroll(item.id)}
          >
            <span>—</span> {item.label}
          </div>
        ))}
      </div>
    </>
  );
}

export default NavMenu;
