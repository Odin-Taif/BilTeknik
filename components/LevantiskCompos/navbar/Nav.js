//=========importing elements from next and react.
import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import Link from "next/link";

//-=-=-=-=-=- componentes import-=-=-=-=-=-=-||
import {
  LanguageDrop,
  LevantiskLogo,
  LevantiksButton,
} from "../ReusableComponents/reuseableHub.ts";
import { LoginModal } from "../componentsHub";

import MuiDrawer from "../drawer/drawer";
//============importing styles.
import style from "./navbar.module.scss";

//============importing icons
import { FaStoreAlt } from "react-icons/fa";

const Nav = () => {
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
              <Link
                href={"/"}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                HEM
              </Link>
            </li>
            <li className={style.navLinks}>
              <Link
                href={"/services"}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                TJÄNSTER
              </Link>
            </li>

            <li className={style.navLinks}>
              <Link
                href={"/about"}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                OM OSS
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
