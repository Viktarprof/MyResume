import s from "../Projects/Projects.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import { filtersBtb } from "../../data/data";
import { useSelector, useDispatch } from "react-redux";
import {
  all,
  js,
  animation,
  api,
  react,
  game,
  redux,
  other,
} from "../../store/filterReduser";
import Button from "../UI/Button/Button";
import { useState } from "react";

export default function Projects({ id }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animate, setAnimate] = useState(false);
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.filter);

  const filtersMap = {
    All: all,
    JS: js,
    Animation: animation,
    API: api,
    React: react,
    Redux: redux,
    Game: game,
    Other: other,
  };

  const handleFilter = (filterName) => {
    if (activeFilter === filterName) return;
    setAnimate(true);

    setTimeout(() => {
      setActiveFilter(filterName);
      const action = filtersMap[filterName] || all;
      dispatch(action());
      setAnimate(false);
    }, 300);
  };

  return (
    <section id={id} className={s.projects}>
      <SectionTitle text="My" textTeitle="Projects" contentText="Portfolio" />

      <ul className={s.sortBtbs}>
        {filtersBtb.map((el) => (
          <li key={el}>
            <Button
              text={el}
              styles={activeFilter === el ? "active" : "filterBtn"}
              onClick={() => handleFilter(el)}
            />
          </li>
        ))}
      </ul>

      <div className={`${s.projectsList} ${animate ? s.fadeOut : s.fadeIn}`}>
        {projects.map((el, index) => (
          <div key={index} className={s.projectsItem}>
            <h4>{el.title}</h4>
            <p>{el.description}</p>

            <div className={s.detail}>
              <img src={el.image} alt={el.title} />
              <ul>
                <li>
                  <span>Tech:</span>{" "}
                  {el.tools
                    .map(
                      (tool) =>
                        tool.charAt(0).toUpperCase() + tool.slice(1).toLowerCase()).join(", ")}
                </li>
                <li>
                  <a
                    href={el.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.projectLink}
                    aria-label={`Visit ${el.title} project`}
                  >
                    Link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
