import homeImage from "../../assets/homeImage.svg"
import style from "./Home.module.css"
const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h1>GABRIEL TOMASI</h1>
        <div className={style.h2Container}>

        <h2>------------------------------------------------</h2>
        <h2>Desarrollador Full Stack</h2>
        </div>
        <p>Soy un entusiasta desarrollador web de Argentina, con un firme deseo de aprender y crecer profesionalmente</p>
      </div>
      <div className={style.imgContainer}>
        <img src={homeImage} alt="homeImage"/>
      </div>
    </div>
  );
};

export default Home;
