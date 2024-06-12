import style from "./ContactForm.module.css";
import instagram from "../../../assets/iconos/redes/instagram.png";
import linkedin from "../../../assets/iconos/redes/linkedin.png";
import github from "../../../assets/iconos/redes/github.png";
const ContactForm = () => {
  return (
    <div className={style.container}>
      <div className={style.headerContainer}>
        <div>
          <h2>Ponte en Contacto !</h2>
          <p>Envía tu mensaje y te responderé a la brevedad</p>
        </div>
        <div className={style.iconsContainer}>
          <img src={instagram} alt="instagram icon" />
          <img src={linkedin} alt="linkedin" />
          <img src={github} alt="github" />
        </div>
      </div>
      <form className={style.formContainer}>
        <label>
          <span>Nombre</span>
          <input type="text" className={style.input} placeholder="Tu nombre"/>
        </label>
        <label>
          <span>Apellido</span>
          <input className={style.input} placeholder="Tu apellido"/>
        </label>
        <label>
          <span>Correo electrónico</span>
          <input className={style.input}placeholder="example@example.com"/>
        </label>
        <label>
          <span>Tu mensaje</span>
          <textarea className={style.textarea} placeholder="Tu mensaje"/>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
