import React, { useState } from "react";
import Image from "next/image";
import style from "./profilePic.module.scss";
import bilteknik1 from "../../../public/Assets/webp/bilteknik=1.webp";
import bilteknik2 from "../../../public/Assets/webp/bilteknik=2.webp";
import bilteknik3 from "../../../public/Assets/webp/bilteknik=3.webp";
import bilteknik4 from "../../../public/Assets/webp/bilteknik=4.webp";
import bilteknik5 from "../../../public/Assets/webp/bilteknik=5.webp";
import bilteknik6 from "../../../public/Assets/webp/bilteknik=6.webp";

const ProfilePic = () => {
  return (
    <>
      <div className={style.profilePic}>
        <Image
          className={style.profileImage}
          src={bilteknik1}
          width={"200px"}
          height={"200px"}
          alt="Mjd Profile picture"
          priority={true}
          quality={50}
          draggable={false}
          layout={"responsive"}
        />
        <Image
          src={bilteknik2}
          width={"200px"}
          height={"200px"}
          alt="bil teknik"
          quality={50}
          priority={true}
          layout={"responsive"}
          draggable={false}
          className={style.profileImage}
        />
        <Image
          src={bilteknik3}
          width={"200px"}
          height={"200px"}
          alt="bil teknik"
          quality={50}
          priority={true}
          layout={"responsive"}
          draggable={false}
          className={style.profileImage}
        />
        <Image
          src={bilteknik4}
          width={"200px"}
          height={"200px"}
          alt="bil teknik"
          quality={50}
          priority={true}
          layout={"responsive"}
          draggable={false}
          className={style.profileImage}
        />
        <Image
          src={bilteknik5}
          width={"200px"}
          height={"200px"}
          alt="bil teknik"
          quality={50}
          priority={true}
          layout={"responsive"}
          draggable={false}
          className={style.profileImage}
        />
        <Image
          src={bilteknik6}
          width={"200px"}
          height={"200px"}
          alt="bil teknik"
          quality={50}
          priority={true}
          layout={"responsive"}
          draggable={false}
          className={style.profileImage}
        />
      </div>
    </>
  );
};
export default ProfilePic;
