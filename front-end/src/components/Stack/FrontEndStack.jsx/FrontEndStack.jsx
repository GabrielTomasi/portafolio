// front images
import frontImg from "../../../assets/iconos/frontImg.png";
import cssLogo from "../../../assets/iconos/front/cssLogo.png";
import htmlLogo from "../../../assets/iconos/front/html logo.png";
import jsLogo from "../../../assets/iconos/front/javascript logo 2.png";
import reactLogo from "../../../assets/iconos/front/react logo.png";
import reduxLogo from "../../../assets/iconos/front/redux.png";
import tailwindLogo from "../../../assets/iconos/front/tailwind.png";
import styledComponentsLogo from "../../../assets/iconos/front/styled components logo.png";
import graphQLLogo from "../../../assets/iconos/front/graphQL.png";
import style from "./FrontEndStack.module.css";
import LazyLoad from "react-lazyload";
import { RevolvingDot } from "react-loader-spinner";
const FrontEndStack = () => {
  return (
    <>
      <img className={style.frontImg} src={frontImg} alt="frontImg" />
      <h3>Front end</h3>
      <div className={style.imagesContainer}>
        <img className={style.images} src={cssLogo} alt="cssLogo" />
        <img className={style.images} src={htmlLogo} alt="htmlLogo" />
        <img className={style.images} src={jsLogo} alt="jsLogo" />
        <img className={style.images} src={reactLogo} alt="reactLogo" />
        <img className={style.images} src={reduxLogo} alt="reduxLogo" />
        <img className={style.images} src={tailwindLogo} alt="tailwindLogo" />
        <img
          className={style.images}
          src={styledComponentsLogo}
          alt="styledComponentsLogo"
        />
        <img className={style.images} src={graphQLLogo} alt="graphQLLogo" />
      </div>
    </>
  );
};

export default FrontEndStack;
