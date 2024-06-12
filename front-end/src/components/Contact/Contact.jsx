import ContactForm from "./ContactForm/ContactForm"
import style from "./Contact.module.css"

const Contact = () => {
    return (
        <div className={style.container}>

            <ContactForm />
        </div>
    )
}

export default Contact