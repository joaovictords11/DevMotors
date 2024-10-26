import Image from "next/image";
import styles from "./styles.module.scss";
import React from "react";

type HeroProps = {
  heading: string;
  buttonUrl: string;
  buttonTitle: string;
  bannerUrl: string;
  icon: React.ReactNode;
};

const Hero = ({
  bannerUrl,
  buttonTitle,
  buttonUrl,
  heading,
  icon,
}: HeroProps) => {
  return (
    <main className={styles.main}>
      <div className={styles.containerHero}>
        <h1 className={styles.title}>{heading}</h1>

        <a target="_blank" href={buttonUrl} className={styles.link}>
          {icon}
          {buttonTitle}
        </a>
      </div>
      <div className={styles.contentBanner}>
        <Image
          className={styles.banner}
          alt={heading}
          src={bannerUrl}
          priority={true}
          quality={100}
          fill
          sizes="100vw"
        />
      </div>
    </main>
  );
};

export default Hero;
