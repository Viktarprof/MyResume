import s from "../Fotter/Fotter.module.scss";
import { personalData, linksData } from "../../data/data";

function Fotter() {
  return (
    <div id={s.fotter}>
      <div className={s.containerFotter}>
        <p>
          © 2025 {' '}
          {personalData.map((el, index) => (
            <a key={index} href="#" target="_blank" className={s.link}>
              {el.fullName} {' '}
            </a>
          ))}
          - Created by me.
        </p>

        <div className={s.socialLogo}>
             <ul>
          {linksData.map((el, index) => {
            return (
              <li key={index}>
                <a
                  href={el.link}
                  target="_blank"
                  className={s.logo}
                >
                  {el.logo}
                </a>
              </li>
            );
          })}
        </ul>
        </div>
       
      </div>
    </div>
  );
}

export default Fotter;
