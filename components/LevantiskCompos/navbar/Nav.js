//=========importing elements from next and react.
import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import { useRouter } from "next/router";

//-=-=-=-=-=- componentes import-=-=-=-=-=-=-||
import { LevantiskLogo } from "../ReusableComponents/reuseableHub.ts";
import { LoginModal } from "../componentsHub";

import MuiDrawer from "../drawer/drawer";
//============importing styles.
import style from "./navbar.module.scss";

//============importing icons
import { FaStoreAlt } from "react-icons/fa";

const Nav = () => {
  const router = useRouter();
  //===============Smooth scrollin section.
  const [scrollNav, setScrollNav] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 60) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <nav className={scrollNav ? style.scrollNavTrans : style.scrollNavBlack}>
        <MuiDrawer />
        <LevantiskLogo toggleHome={toggleHome} />
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          show={showLoginModal}
        />

        <div className={style.navBarContainer}>
          <ul className={style.navMenu}>
            <li className={style.navLinks}>
              <Link href={"/"}>
                <a className={router.pathname == "/" ? style.active : ""}>
                  HEM
                </a>
              </Link>
            </li>
            <li className={style.navLinks}>
              <Link href={"/services"}>
                <a
                  className={router.pathname == "/services" ? style.active : ""}
                >
                  TJÄNSTER
                </a>
              </Link>
            </li>

            <li className={style.navLinks}>
              <Link href={"/about"}>
                <a className={router.pathname == "/about" ? style.active : ""}>
                  OM OSS
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
