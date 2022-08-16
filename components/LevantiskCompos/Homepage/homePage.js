//-=-=-=-=-=-=---=-=-=-=-=-=-=components import
import { SocialMediaBar, Header, Carousel } from "../componentsHub";
//-=-=-=-=-=-=-=-=-=-=- style  import s-=-=-=-=-=
import style from "./homePage1.module.scss";
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-  data import -=-=-=-=-=-=-=|||
import { carouselData } from "../dataHub";

export default function HomePage() {
  return (
    <>
      <div className={style.homeContainer}>
        <div className={style.profileContainer}>
          <SocialMediaBar />
        </div>
        <div>
          <Header />
          <Carousel {...carouselData} />
        </div>
      </div>
    </>
  );
}
