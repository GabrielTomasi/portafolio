import style from "./ProyectCard.module.css";
import githubIcon from "../../../assets/iconos/tools/github.png";
import externalIcon from "../../../assets/iconos/externalIcon.png";

const ProyectCard = (props) => {

  return (
    <div className={style.cardContainer}>
      <div className={style.bgImg}> </div>
      <div className={style.leftcontainer}>
        <div className={style.nameContainer}>
        <div className={style.name}>
            <p>{props.name}</p>
          </div>
          
     
        </div>

        <div className={style.imageContainer}></div>
      </div>
      <div className={style.infoContainer}>
        <p>{props.description}</p>
        <div className={style.anchors}>
            {props.url ? (
              <a href={props.url}>
                <img
                  src={externalIcon}
                  alt="externalIcon"
                  className={style.icon}
                />
              </a>
            ) : (
              ""
            )}
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
  );
};

export default ProyectCard;
