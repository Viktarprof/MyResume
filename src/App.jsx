import "./App.scss";
import { useState, useEffect } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";
import Button from "./components/UI/Button/Button";
import NavMenu from "./components/NavMenu/NavMenu";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Aboutme from "./components/Aboutme/Aboutme";
import Experiense from "./components/Experiense/Experiense";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import Fotter from "./components/Fotter/Fotter";

export default function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <NavMenu />
      <ProfileCard />
      <Aboutme id="about" />
      <Experiense id="experiense" />
      <Projects id="projects" />
      <Contacts id="contacts" />
      <Fotter />

      {showScroll && (
        <Button
          styles="scrollBtn"
          icon={<IoMdArrowRoundUp size={30} />}
          onClick={scrollToTop}
        />
      )}
    </>
  );
}
