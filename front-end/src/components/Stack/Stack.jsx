import style from "./Stack.module.css";
import ToolStack from "./ToolStack/ToolStack.jsx";
import FrontEndStack from "./FrontEndStack.jsx/FrontEndStack.jsx";
import BackEndStack from "./BackEndStack/BackEndStack.jsx";

const Stack = () => {
  return (
    <div className={style.container}>
      <div className={style.stackContainer}>
        <header className={style.header}>
          <h2>MIS HERRAMIENTAS</h2>{" "}
        </header>
        <FrontEndStack />
        <BackEndStack />
        <ToolStack />
      </div>
    </div>
  );
};

export default Stack;
