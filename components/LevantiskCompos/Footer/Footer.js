import Link from "next/link";
import style from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Link href="/" className={style.levantisk}>
        BILTEKNIK
      </Link>
      ©{new Date().getUTCFullYear()} | All RIGHTS RESERVED.
      <div>
        <span>
          Developed by |
          <a href="https://www.levantisk.com/" target="_blank" rel="noreferrer">
            Levantisk.©.DEV
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
