import Link from "next/link";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import style from "./socialMedia.module.scss";
const SocialMedia = () => {
  return (
    <div className={style.container}>
      <a
        href="tel:018136001"
        target="_blank"
        rel="noreferrer"
        alt="Call"
        className={style.socialMediaLink}
      >
        <BiPhoneCall />
        <span>-Mobile</span>
      </a>
      <a
        href="mailto:mailto:Bil-teknik@outlook.com"
        target="_blank"
        rel="noreferrer"
        className={style.socialMediaLink}
      >
        <MdOutlineMailOutline />
        <span>-E-post</span>
      </a>
      <a
        href="https://www.instagram.com/farhatabed/"
        target="_blank"
        rel="noopener"
        className={style.socialMediaLink}
      >
        <BsInstagram />
        <span>-Instagram</span>
      </a>
      <a
        href="https://www.facebook.com/people/Bilteknik/100063896716725/"
        target="_blank"
        rel="noopener"
        className={style.socialMediaLink}
      >
        <BsFacebook />
        <span>-Facebook</span>
      </a>
    </div>
  );
};

export default SocialMedia;
