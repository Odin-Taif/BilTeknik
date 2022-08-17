import { useRef } from "react";
import emailjs from "emailjs-com";
import style from "./contactForm.module.scss";
import { SeclectCountry, CheckBox } from "../componentsHub";

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1lijzfi",
        "template_q5iskbq",
        form.current,
        "dWlURBGetKYlEjW64"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <div className={style.contactContainer}>
        <div className={style.contactForm}>
          <form className={style.form} ref={form} onSubmit={sendEmail}>
            <label className={style.formHeader}>
              Hur kan vi hjälpa dig och din bil?
            </label>
            <input
              type="text"
              name="name"
              placeholder="Skriv ditt namn."
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Skriv ditt email."
              required
            />

            <input
              type="text"
              name="name"
              placeholder="Skriv ditt telefon nummer."
              required
            />

            <input
              type="text"
              name="text"
              placeholder="Skriv model eller type av Din bill. "
              required
            />
            <textarea
              name="message"
              placeholder="Berätta hur vi kan hjälpa dig, du kan titta på de tjänster vi offrar nedan?"
              rows="7"
              required
            ></textarea>
            <button type="submit" className={style.formBtn}>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
