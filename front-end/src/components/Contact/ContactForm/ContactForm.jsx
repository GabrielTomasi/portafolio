import style from "./ContactForm.module.css";
import instagram from "../../../assets/iconos/redes/instagram.png";
import linkedin from "../../../assets/iconos/redes/linkedin.png";
import github from "../../../assets/iconos/redes/github.png";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";


const ContactForm = () => {
 const {VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY}=import.meta.env
  const formu = useRef();
  const [formInfo, setFormInfo] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });


  const handleFormInfo = (event) => {
    const { name, value } = event.target;
    setFormInfo({ ...formInfo,[name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(VITE_SERVICE_ID, VITE_TEMPLATE_ID, formu.current, {
        publicKey: VITE_PUBLIC_KEY,
      })
      .then(
        (data) => {
          console.log("success", data.text);
        },
        (error) => {
          console.log("error: ", error.text);
        }
      );
  };
  console.log(formInfo);
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
      <form className={style.formContainer} onSubmit={handleSubmit} ref={formu}>
        <label>
          <span>Nombre</span>
          <input
            type="text"
            name="name"
            className={style.input}
            placeholder="Tu nombre"
            onChange={handleFormInfo}
          />
        </label>
        <label>
          <span>Apellido</span>
          <input
            className={style.input}
            name="lastName"
            placeholder="Tu apellido"
            onChange={handleFormInfo}
          />
        </label>
        <label>
          <span>Correo electrónico</span>
          <input
            className={style.input}
            name="email"
            placeholder="example@example.com"
            onChange={handleFormInfo}
          />
        </label>
        <label>
          <span>Tu mensaje</span>
          <textarea
            className={style.textarea}
            name="message"
            placeholder="Tu mensaje"
            onChange={handleFormInfo}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
