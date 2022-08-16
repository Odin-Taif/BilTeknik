import Link from "next/link";
import React, { useState, useEffect } from "react";
//-=-=-=-=-=-=-=-=-=-=- style  import s-=-=-=-=-=
import style from "../styles/pagesStyles/notFound.module.scss";

const NotFound = () => {
  const [counter, setCounter] = useState(10000);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter - 1000);
    }, 1000);
    const redirect = () => {
      if (typeof window !== "undefined") {
        window.setTimeout(function () {
          window.location.href = "/";
        }, counter);
      }
    };
    return () => {
      clearInterval(interval);
      redirect();
    };
  }, [counter]);
  return (
    <div className={style.container}>
      <h2 style={{ color: "red" }}> Sidan hittades inte 404!</h2>
      <Link href="/">
        <a>Ta mig tillbacks!</a>
      </Link>
      <article style={{ color: "white" }}>
        Du kommer att riktas till hemsidan i
        <span className={style.counter}> | {counter / 1000}</span>
      </article>
    </div>
  );
};

export default NotFound;
