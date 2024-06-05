// front images
import style from "./Stack.module.css";
import cssLogo from "../../assets/iconos/front/cssLogo.png";
import htmlLogo from "../../assets/iconos/front/html logo.png";
import jsLogo from "../../assets/iconos/front/javascript logo 2.png";
import reactLogo from "../../assets/iconos/front/react logo.png";
import reduxLogo from "../../assets/iconos/front/redux.png";
import tailwindLogo from "../../assets/iconos/front/tailwind.png";
import styledComponentsLogo from "../../assets/iconos/front/styled components logo.png";
import graphQLLogo from "../../assets/iconos/front/graphQL.png";
import frontImg from "../../assets/iconos/frontImg.png";
//back images
import backImg from "../../assets/iconos/backImg.png";
import apolloLogo from "../../assets/iconos/back/apollo.png";
import expressLogo from "../../assets/iconos/back/express.png";
import nodeJSLogo from "../../assets/iconos/back/node js.png";
import sequelize from "../../assets/iconos/back/sequelize.png";
import postgreSQLLogo from "../../assets/iconos/back/postgreSQL.png";
//tools images
import toolsImg from "../../assets/iconos/toolsImg.png";
import figmaLogo from "../../assets/iconos/tools/Figma.png";
import gitLogo from "../../assets/iconos/tools/git.png";
import githubLogo from "../../assets/iconos/tools/github.png";
import jiraLogo from "../../assets/iconos/tools/jira.png";
import vsCodeLogo from "../../assets/iconos/tools/vistualstudio code.png";
const Stack = () => {
  return (
    <div className={style.container}>
      <h2>MIS HERRAMIENTAS</h2>
      <div className={style.stackContainer}>
        <div className={style.frontContainer}>
          <img className={style.frontImg} src={frontImg} alt="frontImg" />
          <h3>Front end</h3>
          <div className={style.imagesContainer}>
            <img className={style.images} src={cssLogo} alt="cssLogo" />
            <img className={style.images} src={htmlLogo} alt="htmlLogo" />
            <img className={style.images} src={jsLogo} alt="jsLogo" />
            <img className={style.images} src={reactLogo} alt="reactLogo" />
            <img className={style.images} src={reduxLogo} alt="reduxLogo" />
            <img
              className={style.images}
              src={tailwindLogo}
              alt="tailwindLogo"
            />
            <img
              className={style.images}
              src={styledComponentsLogo}
              alt="styledComponentsLogo"
            />
            <img className={style.images} src={graphQLLogo} alt="graphQLLogo" />
          </div>
        </div>
        <div className={style.frontContainer}>
          <img className={style.frontImg} src={backImg} alt="frontImg" />
          <h3>Back end</h3>
          <div className={style.imagesContainer}>
            <img className={style.images} src={nodeJSLogo} alt="nodeJSLogo" />
            <img className={style.images} src={expressLogo} alt="expressLogo" />
            <img className={style.images} src={sequelize} alt="sequelize" />
            <img className={style.images} src={postgreSQLLogo} alt="postgreSQLLogo" />
            <img className={style.images} src={apolloLogo} alt="apolloLogo" />
          </div>
        </div>
        <div className={style.frontContainer}>
          <img className={style.frontImg} src={toolsImg} alt="toolsImg" />
          <h3>Otras Herramientas</h3>
          <div className={style.imagesContainer}>
            <img className={style.images} src={figmaLogo} alt="figmaLogo" />
            <img className={style.images} src={gitLogo} alt="gitLogo" />
            <img className={style.images} src={githubLogo} alt="githubLogo" />
            <img className={style.images} src={jiraLogo} alt="jiraLogo" />
            <img className={style.images} src={vsCodeLogo} alt="vsCodeLogo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
