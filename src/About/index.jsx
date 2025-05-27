"use client";

import stl from "./index.module.scss";
import Image from "next/image";

export default function About() {
  return (
    <div className={stl.aboutContainer}>
      <div className={stl.aboutText}>
        {" "}
        <h2>Make Your Digital Presence Unforgettable 🚀</h2>
        <p>
          Crafting sleek, high-performance frontend experiences that captivate
          and convert.
        </p>
      </div>
      <div className={stl.swiperContainer}>
        <div className={stl.swiper4}>
          <Image
            src="/004.jpeg"
            alt="Hero Image"
            width={40}
            height={100}
            quality={100}
            className={stl.heroImage}
          />
        </div>
        <div className={stl.swiper1}>
          {" "}
          <Image
            src="/002.jpeg"
            alt="Hero Image"
            width={500}
            height={300}
            className={stl.heroImage}
          />
        </div>

        <div className={stl.swiper2}>
          {" "}
          <Image
            src="/003.jpeg"
            alt="Hero Image"
            width={500}
            height={300}
            className={stl.heroImage}
          />
        </div>

        <div className={stl.swiper3}>
          {" "}
          <Image
            src="/005.jpeg"
            alt="Hero Image"
            width={500}
            height={300}
            className={stl.heroImage}
          />
        </div>
      </div>
    </div>
  );
}
