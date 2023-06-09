import Link from "next/link";
import { TbMail } from "react-icons/tb";
import { EMAIL, SOCIALS } from "@/constants/socials";

import styles from "@/styles/partials/navbar.module.css";

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
            <li key={social.name}>
              <Link href={social.url}>
                <p>{social.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
