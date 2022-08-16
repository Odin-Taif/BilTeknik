import Head from "next/head";
import HomePage from "../components/LevantiskCompos/Homepage/homePage";

export default function Home() {
  return (
    <>
      <Head>
        <title> BILLTEKNIK </title>
        <meta name="keywords" content="web development" />
      </Head>
      <HomePage />
    </>
  );
}
