import { BsFacebook, BsInstagram } from "react-icons/bs";

import { MdOutlineMailOutline } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import style from "./socialMediaBar.module.scss";

const SocialMediaBar = () => {
  return (
    <div className={style.socialContainer}>
      <a href="tel:018136001" target="_blank" rel="noreferrer" alt="Call">
        <BiPhoneCall />
      </a>
      <a href="mailto:bil-teknik@outlook.com" target="_blank" rel="noreferrer">
        <MdOutlineMailOutline />
      </a>
      <a
        href="https://www.facebook.com/people/Bilteknik/100063896716725/"
        target="_blank"
        rel="noreferrer"
      >
        <BsFacebook />
      </a>

      <a
        href="https://www.instagram.com/farhatabed/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  );
};

export default SocialMediaBar;
