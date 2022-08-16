//-=-=-=-=-=-=---=-=-=-=-=-=-=components import
import { Services, SocialMediaBar } from "../componentsHub";
//-=-=-=-=-=-=-=-=-=-=- style  import s-=-=-=-=-=
import style from "./servicesPage.module.scss";
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-  data import -=-=-=-=-=-=-=|||
import { carouselData } from "../dataHub";

export default function ServicesPage() {
  return (
    <>
      <div className={style.homeContainer}>
        <div className={style.profileContainer}>
          <SocialMediaBar />
        </div>
        <div>
          <Services {...carouselData} />
        </div>
      </div>
    </>
  );
}
