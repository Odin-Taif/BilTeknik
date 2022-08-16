//-=-=-=-=-=-=---=-=-=-=-=-=-=components import
import ServicesPage from "../components/LevantiskCompos/ServicesPage/ServicesPage";
import Head from "next/head";
export default function Services() {
  return (
    <>
      <Head>
        <title> Tjänster </title>
        <meta name="keywords" content="web development" />
      </Head>
      <ServicesPage />
    </>
  );
}
