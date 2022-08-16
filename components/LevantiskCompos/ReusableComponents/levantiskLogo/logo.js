import React from "react";
import Link from "next/link";
//=============importing Assests.

import style from "./logo.module.scss";
function LevantiskLogo() {
  return (
    <div className={style.navLogo}>
      <Link href="/">BILTEKNIK</Link>
    </div>
  );
}

export default LevantiskLogo;
