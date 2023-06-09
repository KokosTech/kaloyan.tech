import Link from "next/link";
import { TbMail } from "react-icons/tb";
import { EMAIL, SOCIALS } from "@/constants/socials";

import styles from "@/styles/partials/navbar.module.css";

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
  return (
    <div className={styles.navWrapper}>
      <nav className={styles.navbar}>
        <Link href={`mailto:${EMAIL}`} className={styles.mail}>
          <div className={styles.mailButton}>
            <TbMail />
          </div>
          <p>
            kaloyan@<span>kaloyan.tech</span>
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
