import { useState } from "react";

//-=-=-=-=-=-=-=-=--=-=-Components import-=-=-=-=-=-=-=-=|||
import { Nav, Footer } from "./layoutHub.ts";
//-=-=-=-=-=-=-=-=-=-=- style import-=-=-=-=
import layoutStyle from "./layout.module.scss";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const showSocialNav = () => {
    setShowSocial(!showSocial);
  };

  return (
    <>
      <Nav toggle={toggle} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={layoutStyle.container}>
        <main className={layoutStyle.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
