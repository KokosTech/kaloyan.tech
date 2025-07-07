"use strict";
"use static";

import style from "@/styles/pages/home.module.css";
import Link from "next/link";

const Home = () => (
  <main>
    <div className={style.wrapper}>
      <h1 className={style.title}>
        Kaloyan <span>Doychinov</span>
      </h1>
    </div>
    <div className="px-2 lg:px-40 gap-4 flex-col mb-[1000px]">
      <div className="flex gap-2 justify-evenly text-3xl bg-neutral-800/10 backdrop-blur-[1px] px-4 py-2 rounded-xl border border-neutral-700">
        <Link href="/dev-projects" className={style.galleryLink}>
          <p className={style.galleryText + " hover:underline"}>
            /dev-projects
          </p>
        </Link>
        <Link href="/gallery" className={style.galleryLink}>
          <p className={style.galleryText + " hover:underline"}>/gallery</p>
        </Link>
      </div>
    </div>
  </main>
);

export default Home;
