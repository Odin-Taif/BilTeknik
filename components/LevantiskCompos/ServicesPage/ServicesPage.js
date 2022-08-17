//-=-=-=-=-=-=---=-=-=-=-=-=-=components import
import { Services, SocialMediaBar } from "../componentsHub";
//-=-=-=-=-=-=-=-=-=-=- style  import s-=-=-=-=-=
import style from "./servicesPag.module.scss";
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-  data import -=-=-=-=-=-=-=|||
import { bilTeknikData } from "../dataHub";

export default function ServicesPage() {
  return (
    <>
      <div className={style.homeContainer}>
        <div className={style.profileContainer}>
          <SocialMediaBar />
        </div>
        <div>
          <Services {...bilTeknikData} />
        </div>
      </div>
    </>
  );
}
