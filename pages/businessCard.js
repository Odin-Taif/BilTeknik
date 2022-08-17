import Head from "next/head";
import {
  BussinessCard,
  ContactForm,
} from "../components/LevantiskCompos/componentsHub";
import style from "../styles/pagesStyles/about.module.scss";

const BusinessCard = () => {
  return (
    <div className={style.container}>
      <Head>
        <title> |= BusinessCard </title>
        <meta name="keywords" content="my gallary containes all my art work." />
      </Head>
      <BussinessCard />
      <ContactForm />
    </div>
  );
};
export default BusinessCard;
