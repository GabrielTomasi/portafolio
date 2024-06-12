import { useState } from "react"

import style from "./Proyects.module.css"
import ProyectCard from "../Proyects/Proyect Card/ProyectCard.jsx"
import data from "./Data.js"
import {AnimateKeyframes} from "react-simple-animate"
const Proyects = ()=>{
  const [play, setPlay] = useState(false)
  
  const proyect = data.map((proyect)=>{
    return (
      <ProyectCard 
      key={proyect.id}
      name={proyect.name}
      url= {proyect.url}
      githubUrl = {proyect.githubUrl}
      description = {proyect.description}
      />
    )
  })
    return (
        <div className={style.container}>
        <header className={style.header}>
        <h2>Proyectos</h2>{" "}
      </header>
      <AnimateKeyframes
     play
     duration={3}
     keyframes={["opacity: 0", "opacity: 1"]}
     iterationCount={2}
   
      >
      {proyect}
      </AnimateKeyframes>
   
        </div>
    )
}

export default Proyects