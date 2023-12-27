/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import classNames from "classnames";

import styles from "./page.module.scss";

const qualifiers = [
  "an excellent",
  "an outstanding",
  "a great",
  "a skilled",
  "a proficient",
  "a talented",
  "an expert",
  "a knowledgeable",
  "a skillful",
  "an innovative",
  "a reliable",
  "an efficient",
  "a competent",
];

const titles = [
  "senior developer",
  "lead developer",
  "senior software dev",
  "experienced dev",
  "senior solution dev",
  "solution architect",
];

export default function Home() {
  const [qualifierIndex, setQualifierIndex] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const qualifierInterval = setInterval(
      () => setQualifierIndex((index) => index + 1),
      3000
    );
    const titleInterval = setTimeout(
      () => setInterval(() => setTitleIndex((index) => index + 1), 5500),
      2500
    );
    return () => {
      clearTimeout(qualifierInterval);
      clearTimeout(titleInterval);
    };
  }, []);

  const icon1 = <img src="/shopify.svg" alt="Shopify" width={16} height={16} />;
  const icon2 = (
    <img src="/turbulent.png" alt="Turbulent" width={16} height={16} />
  );
  const icon3 = (
    <img src="/arsenalweb.png" alt="Arsenal Web" width={16} height={16} />
  );
  const icon4 = (
    <img src="/favicon-16x16.png" alt="Self-Employed" width={16} height={16} />
  );

  return (
    <main className={styles.main}>
      <section className={styles.hi}>
        <img src="/kev.gif" alt="Keven" width={80} height={80} />
        <p>
          <em>Bonjour, I&apos;m Keven!</em>
          With 15+ years in software development, I excel in delivering
          outstanding results for high-stakes projects.
        </p>
      </section>
      <section className={styles.animatedText}>
        <div>
          <span>I&apos;ve heard that</span> <span>you&apos;re in need of</span>
        </div>

        <div className={styles.mobileOnly}>
          <TextTransition springConfig={presets.slow}>
            {qualifiers[qualifierIndex % qualifiers.length]}
          </TextTransition>{" "}
          <TextTransition springConfig={presets.stiff}>
            {titles[titleIndex % titles.length]}
          </TextTransition>
        </div>

        <div className={styles.exceptMobile}>
          <TextTransition springConfig={presets.slow} inline>
            {qualifiers[qualifierIndex % qualifiers.length]}
          </TextTransition>{" "}
          <TextTransition springConfig={presets.stiff} inline>
            {titles[titleIndex % titles.length]}
          </TextTransition>
        </div>
      </section>
      <ul className={styles.quicklook}>
        <li>
          <span>Senior Software Developer</span> <span>@ {icon1} Shopify</span>
          <span>2021 - Now</span>
        </li>
        <li>
          <span>Senior Tech & Dev Lead</span> <span>@ {icon2} Turbulent</span>
          <span>2020 - 2021 </span>
        </li>
        <li>
          <span>Director of Technology</span> <span>@ {icon3} Arsenal Web</span>
          <span>2018 - 2020 </span>
        </li>
        <li>
          <span>...</span>
        </li>
        <li className={styles.lessPaddingBottom}>
          <span>Consultant / Web Developer </span>
          <span>@ {icon4} Self-Employed</span>
          <span>2008 - Now</span>
        </li>
        <li>
          <span></span>
          <span className={classNames(styles.colspan, styles.padded)}>
            for Garda, GHD, Lavo, ...
          </span>
        </li>
      </ul>
      <a href="mailto:keven@nevek.co">
        Let&apos;s chat
        <img
          src="/Mouse-cursor-hand-pointer.svg"
          alt="Hand pointer"
          width={36}
          height={36}
          style={{ marginLeft: 10 }}
        />
      </a>
    </main>
  );
}
