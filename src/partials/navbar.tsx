"use client";

import { IconMail } from "@tabler/icons-react";
import Link from "next/link";

import { EMAIL, SOCIALS } from "@/constants/socials";
import styles from "@/styles/partials/navbar.module.css";
import { useEffect, useState } from "react";

const Social = ({ href, name }: { href: string; name: string }) => {
  return (
    <li>
      <Link href={href}>
        <p>{name}</p>
      </Link>
    </li>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.navWrapper + (scrolled ? " backdrop-blur-lg z-20" : " ")}>
      <nav className={styles.navbar}>
        <Link href={`mailto:${EMAIL}`} className={styles.mail}>
          <div className={styles.mailButton}>
            <IconMail />
          </div>
          <p>
            kaloyan<span>@</span>
            <span>kaloyan.tech</span>
          </p>
        </Link>
        <ul className={styles.socials}>
          {SOCIALS.map((social) => (
            <Social key={social.url} href={social.url} name={social.name} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
