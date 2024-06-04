import { useState } from "react";
import { NavLink } from "react-router-dom"
import style from "./NavBar.module.css";
const NavBar = () => {
    const [activePage, setActivePage] = useState('home');

    const handleClick = (page)=>{
        setActivePage(page)
    }

return(
    <nav className={style.nav}>
        <div>
            <NavLink to={"/"} >
                <button className={`${style.button}  ${activePage === 'home' ? style.active : ""}`}
                onClick={()=>{handleClick('home')}}>Home</button>
            </NavLink>
            <NavLink to={"/stack"} >
                <button className={`${style.button}  ${activePage === 'stack' ? style.active : ""}`}
                onClick={()=>{handleClick('stack')}}>Stack</button>
            </NavLink>
            <NavLink to={"/proyects"} >
                <button className={`${style.button}  ${activePage === 'proyects' ? style.active : ""}`}
                onClick={()=>{handleClick('proyects')}}>Proyectos</button>
            </NavLink>
            <NavLink to={"/contact"} >
                <button className={`${style.button}  ${activePage === 'contact' ? style.active : ""}`}
                onClick={()=>{handleClick('contact')}}>Conctacto</button>
            </NavLink>
        </div>
    </nav>
)
}

export default NavBar