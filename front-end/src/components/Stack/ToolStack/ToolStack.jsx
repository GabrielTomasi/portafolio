import style from "./ToolStack.module.css";

import toolsImg from "../../../assets/iconos/toolsImg.png";
import figmaLogo from "../../../assets/iconos/tools/Figma.png";
import gitLogo from "../../../assets/iconos/tools/git.png";
import githubLogo from "../../../assets/iconos/tools/github.png";
import jiraLogo from "../../../assets/iconos/tools/jira.png";
import vsCodeLogo from "../../../assets/iconos/tools/vistualstudio code.png";

const TollStack = () => {
  return (
    <div className={style.toolsContainer}>
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
  );
};

export default TollStack;
