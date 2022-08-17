import Link from "next/link";
import {
  BsWalletFill,
  BsFacebook,
  BsInstagram,
  BsGlobe2,
} from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import style from "./smHorizental.module.scss";

const HorizentalSM = () => {
  return (
    <div className={style.container}>
      <Link href="/businessCard" alt="Hire me">
        <BsWalletFill />
      </Link>

      <Link href="/" alt="portfilio">
        <a>
          <BsGlobe2 />
        </a>
      </Link>
      <a
        href="mailto:Bil-teknik@outlook.com"
        target="_blank"
        rel="noreferrer"
        alt="Email"
      >
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
export default HorizentalSM;
