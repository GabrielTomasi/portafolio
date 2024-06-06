import { useState } from "react";
import style from "./NavBar.module.css";
import { HashLink as Link } from "react-router-hash-link";
const NavBar = () => {
  const [activePage, setActivePage] = useState("home");
  const handleClick = (page) => {
    setActivePage(page);
  };

  return (
    <nav className={style.nav}>
      <Link to={"#home"} smooth>
        <button
          className={`${style.button}  ${
            activePage === "home" ? style.active : ""
          }`}
          onClick={() => {
            handleClick("home");
          }}
        >
          Home
        </button>
      </Link>

      <Link to={"#stack"} smooth>
        <button
          className={`${style.button}  ${
            activePage === "stack" ? style.active : ""
          }`}
          onClick={() => {
            handleClick("stack");
          }}
        >
          Stack
        </button>
      </Link>

      <Link to={"#proyects"} smooth>
        <button
          className={`${style.button}  ${
            activePage === "proyects" ? style.active : ""
          }`}
          onClick={() => {
            handleClick("proyects");
          }}
        >
          Proyectos
        </button>
      </Link>
      <Link to={"#contact"} smooth>
        <button
          className={`${style.button}  ${
            activePage === "contact" ? style.active : ""
          }`}
          onClick={() => {
            handleClick("contact");
          }}
        >
          Conctacto
        </button>
      </Link>
    </nav>
  );
};

export default NavBar;
