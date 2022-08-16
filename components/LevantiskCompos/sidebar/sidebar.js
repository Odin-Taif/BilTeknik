import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import style from "./sidebar.module.scss";

const SideBar = ({ setDrawerOpen, drawerOpen }) => {
  return (
    <div>
      <ul className={style.sideBarMenu}>
        <li className={style.sideBarItem}>
          <Link href="/">
            <a onClick={() => setDrawerOpen(false)}> HEM</a>
          </Link>
        </li>
        <li className={style.sideBarItem}>
          <Link href="/">
            <a onClick={() => setDrawerOpen(false)}> TJÄNSTER</a>
          </Link>
        </li>
        <li className={style.sideBarItem}>
          <Link href="/about">
            <a onClick={() => setDrawerOpen(false)}> $TORE</a>
          </Link>
        </li>
        <li className={style.sideBarItem}>
          <Link href="/about">
            <a onClick={() => setDrawerOpen(false)}> OM OSS</a>
          </Link>
        </li>
        <li className={style.sideBarItem}>
          <Link href="/about">
            <a onClick={() => setDrawerOpen(false)}> KONTACT</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
