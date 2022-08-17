import Head from "next/head";
import {
  BusinessCard,
  ContactForm,
} from "../components/LevantiskCompos/componentsHub";

import style from "../styles/pagesStyles/about.module.scss";

export default function About() {
  return (
    <>
      <Head>
        <title> OM OSS </title>
        <meta name="keywords" content="web development" />
      </Head>
      <div className={style.container}></div>
      <ContactForm />
    </>
  );
}
