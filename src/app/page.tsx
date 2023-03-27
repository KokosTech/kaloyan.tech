"use static";

import Link from "next/link";

import {
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandLinkedin,
} from "react-icons/tb";

import PopupInfo from "@/components/PopupInfo";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>
          <strong>{"Hi, I'm Kaloyan Doychinov"}</strong>
        </h1>
        <p>
          <strong>Porfolio</strong>
        </p>
      </div>
      <div className={styles.centeredDescription}>
        <p>
          {"I'm a software developer and a student at "}
          <Link href={"https://tues.bg"}>
            <u>TUES</u>
          </Link>
          <br />
          {"I'm currently working as an organizer of "}
          <Link href={"https://tuesfest.bg"}>
            <u>HackTUES 9</u>
          </Link>
          {" & "}
          <Link href={"https://tuesfest.bg"}>
            <u>TUES Fest 2023</u>
          </Link>
        </p>
        <div className={styles.links}>
          <Link href={"https://github.com/KokosTech"}>
            <TbBrandGithub /> GitHub
          </Link>
          <Link href={"https://www.instagram.com/kaloyanx/"}>
            <TbBrandInstagram /> Instagram
          </Link>
          <Link href={"https://www.linkedin.com/in/kaloyand/"}>
            <TbBrandLinkedin /> LinkedIn
          </Link>
        </div>
      </div>
      <PopupInfo />
      <div className={styles.center}></div>
    </main>
  );
}
