"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "../app/page.module.css";

const PopupInfo = () => {
  const [open, setOpen] = useState(true);
  
  if(!open) return null;

  return (
    open && (
      <div className={styles.bottomPopup}>
        <div className={styles.bottomPopupContent}>
          {/* close button */}
          <button className={styles.closeButton} onClick={() => setOpen(false)}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
          </button>

          <h2>TUES Fest 2023</h2>
          <p>
            TUES Fest is an annual event organized by the students of{" "}
            <Link href={"https://tues.bg"}>
              <u>TUES</u>
            </Link>
            . The even is held in Sofia Tech Park on the 23rd of April and is a
            great opportunity for you to meet the talents of TUES. You can check
            it out{" "}
            <Link href={"https://tuesfest.bg"}>
              <u>here</u>
            </Link>
            .
          </p>
        </div>
      </div>
    )
  );
};

export default PopupInfo;