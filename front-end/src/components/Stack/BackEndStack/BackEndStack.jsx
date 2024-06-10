import style from "./BackEndStack.module.css";
import LazyLoad from "react-lazyload";

//back images
import backImg from "../../../assets/iconos/backImg.png";
import apolloLogo from "../../../assets/iconos/back/apollo.png";
import expressLogo from "../../../assets/iconos/back/express.png";
import nodeJSLogo from "../../../assets/iconos/back/node js.png";
import sequelize from "../../../assets/iconos/back/sequelize.png";
import postgreSQLLogo from "../../../assets/iconos/back/postgreSQL.png";

const BackEndStack = () => {
  return (
    <div className={style.backContainer}>
      <img className={style.frontImg} src={backImg} alt="frontImg" />
      <h3>Back end</h3>
      <div className={style.imagesContainer}>
        <img className={style.images} src={nodeJSLogo} alt="nodeJSLogo" />

        <img className={style.images} src={expressLogo} alt="expressLogo" />

        <img className={style.images} src={sequelize} alt="sequelize" />

        <img
          className={style.images}
          src={postgreSQLLogo}
          alt="postgreSQLLogo"
        />

        <img className={style.images} src={apolloLogo} alt="apolloLogo" />
      </div>
    </div>
  );
};

export default BackEndStack;
