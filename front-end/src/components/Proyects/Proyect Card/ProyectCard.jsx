import style from "./ProyectCard.module.css";
import githubIcon from "../../../assets/iconos/tools/github.png";
import externalIcon from "../../../assets/iconos/externalIcon.png";

const ProyectCard = (props) => {
  return (
    <div className={style.firstContainer}>
      <div className={style.cardContainer}>
        <div className={style.topcontainer}>
          <div className={style.nameContainer}>
            <div className={style.name}>
              <p>{props.name}</p>
            </div>
          </div>
          <div className={style.imageContainer}>
            <img
              src={props.image}
              alt="backgraundImg"
              className={style.proyectimg}
            />
          </div>
        </div>
        <div className={style.infoContainer}>
          <p>{props.description}</p>
          <div className={style.anchors}>
            <a href={props.url}>
              <img
                src={externalIcon}
                alt="externalIcon"
                className={style.icon}
              />
            </a>

            <a href={props.githubUrl}>
              <img
                src={githubIcon}
                alt={`${props.githubUrl}`}
                className={style.icon}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProyectCard;
