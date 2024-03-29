import { useEffect, useState } from "react";
import { default as TextTransitionLib, presets } from "react-text-transition";

import styles from "./TextTransition.module.scss";

export default function TextTransition({ lang }: { lang: "fr" | "en" }) {
  const [qualifierIndex, setQualifierIndex] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);

  const qualifiers = {
    en: [
      "a competent",
      "an innovative",
      "a reliable",
      "a skillful",
      "an efficient",
      "an excellent",
      "a great",
      "a proficient",
      "a talented",
      "a knowledgeable",
      "a skilled",
    ],
    fr: [
      "compétent",
      "innovant",
      "fiable",
      "habile",
      "talentueux",
      "informé",
      "adroit",
      "efficace",
    ],
  };

  const titles = {
    en: [
      "senior developer",
      "lead developer",
      "senior software dev",
      "experienced dev",
      "senior solution dev",
      "solution architect",
    ],
    fr: [
      "développeur senior",
      "chef développeur",
      "développeur logiciel senior",
      "développeur expérimenté",
      "développeur de solutions senior",
      "architecte de solutions",
    ],
  };

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

  const qualifier = qualifiers[lang][qualifierIndex % qualifiers[lang].length];
  const title = titles[lang][titleIndex % titles[lang].length];
  const word1 = lang === "en" ? qualifier : title;
  const word2 = lang === "en" ? title : qualifier;

  return (
    <section className={styles.textTransition}>
      <div className={styles.mobileOnly}>
        <TextTransitionLib springConfig={presets.slow}>
          {word1}
        </TextTransitionLib>{" "}
        <TextTransitionLib springConfig={presets.stiff}>
          {word2}
        </TextTransitionLib>
      </div>

      <div className={styles.exceptMobile}>
        <TextTransitionLib springConfig={presets.slow} inline>
          {word1}
        </TextTransitionLib>{" "}
        <TextTransitionLib springConfig={presets.stiff} inline>
          {word2}
        </TextTransitionLib>
      </div>
    </section>
  );
}
