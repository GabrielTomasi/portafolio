import style from "./Proyects.module.css"
import ProyectCard from "../Proyects/Proyect Card/ProyectCard.jsx"
const Proyects = ()=>{
    return (
        <div className={style.container}>
        <header className={style.header}>
        <h2>Proyectos</h2>{" "}
      </header>
      <ProyectCard />
   
        </div>
    )
}

export default Proyects