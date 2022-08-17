import { useState } from "react";
import Image from "next/image";
import QrImage from "../../../public/Assets/qrcode.png";
import { Modal, ContactForm, SlideReviewApp } from "../componentsHub";
import style from "./header.module.scss";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header>
      <div className={style.headerContainer}>
        <ContactForm />
        <div className={style.headerBanner}>
          <div className={style.squre}>
            <Modal onClose={() => setShow(false)} show={show} />
            <h1 className={style.headerTitle}> BILLTEKNIK</h1>
            <h1 className={style.headerDiscription}>
              Välkommen till ett helt nytt sätt att tvätta och raparera bilen.
              Ett sätt som gör att du slipper vänta i kö eller blöta ner skorna.
              Där modern tvätteknik i kombination med manuellt efterarbete
              garanterar skinande rent resultat och skapar en härlig
              nybilskänsla både invändigt och utvändigt. Välkommen till
              BILLTEKNIK ett företag som bestämt sig för att vända upp och ned
              på kundens bill. Vi tar väl hand om både dig och din bil men också
              miljön. Unikt detaljfokus gör att du kan njuta lite extra varje
              gång du kommer på besök.
            </h1>

            <div className={style.squre}>
              <h1 className={style.squre}> Scanna och få tag på oss nu!</h1>

              <div className={style.QrcodeContainer}>
                <Image
                  width="300px"
                  height="300px"
                  src={QrImage}
                  alt={"QR CODE"}
                  priority={true}
                  draggable={false}
                  className={style.qrImage}
                  onClick={() => setShow(true)}
                />
              </div>
              <h3 className={style.squre}>
                Måndag - Fredag: <span style={{ color: "green" }}> 8:30 </span>
                Am - <span style={{ color: "green" }}> 18 </span> Pm,
                <br /> Lördag : <span style={{ color: "green" }}>10</span> Am -
                <span style={{ color: "green" }}>15</span> Pm
                <br /> - Söndag: <span style={{ color: "red" }}> stängt</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
