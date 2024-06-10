import style from "./ProyectCard.module.css"

const ProyectCard = () =>{
    return (
        <div className={style.cardContainer}>
        <div className={style.leftcontainer}>

        <div className={style.name}>
            Nombre del Proyecto / URL
        </div>
        <div className={style.imageContainer}>
            imagenes
        </div>
        </div>
        <div className={style.infoContainer}>
            informacion del proyecto
        </div>
        </div>
    )
}

export default ProyectCard