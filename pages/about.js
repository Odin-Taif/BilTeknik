import Head from "next/head";
import {
  BusinessCard,
  ContactForm,
  ProfilePic,
} from "../components/LevantiskCompos/componentsHub";

import style from "../styles/pagesStyles/about.module.scss";

export default function About() {
  return (
    <>
      <Head>
        <title> OM OSS </title>
        <meta name="keywords" content="web development" />
      </Head>
      <div className={style.container}>
        <div>
          <article className={style.article}>
            Slipp köer eller blöta skor! Välkommen till ett helt nytt sätt att
            tvätta bilen. Ett sätt som gör att du slipper vänta i kö eller blöta
            ner skorna. Där modern tvätteknik i kombination med manuellt för-
            och efterarbete garanterar skinande rent resultat och skapar en
            härlig nybilskänsla både invändigt och utvändigt. En tvätt tar 7
            minuter och vi klarar av upp till 60 bilar i timmen. Välkommen också
            till ett företag som bestämt sig för att vända upp och ned på
            biltvättsbranschens alla tidigare sanningar. Som tar väl hand om
            både dig och din bil men också miljön och sin personal. Som genom
            schyssta priser, personlig service och unikt detaljfokus gör att du
            kan njuta lite extra varje gång du kommer på besök. Modernast och
            miljövänligast i Sverige! Nu har vi har skapat den mest moderna och
            mest miljövänliga bilvårdstjänsten i Sverige. Vi erbjuder såväl
            utvändig- och invändig tvätt som en rad olika andra tjänster för att
            vårda bilar, transportbilar och lastbilar. Vi erbjuder såväl
            utvändig- som invändig tvätt av bilar, transportbilar och lastbilar
            Nu har vi har skapat den mest moderna och mest miljövänliga
            bilvårdstjänsten i Sverige. Vi erbjuder såväl utvändig- och invändig
            tvätt som en rad olika andra tjänster för att vårda bilar,
            transportbilar och lastbilar. Vi tar även hand om era firmabilar
            Oavsett storlek på din vagnpark jobbar vi tillsammans fram ett avtal
            där du som transportör, hantverkare eller kanske företag med
            flertalet tjänstebilar får chansen att njuta av en ren bil med jämna
            mellanrum.
          </article>
        </div>
        <ContactForm />
      </div>
      <ProfilePic />
    </>
  );
}
