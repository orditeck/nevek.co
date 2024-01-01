import { useEffect, useState } from "react";
import { default as TextTransitionLib, presets } from "react-text-transition";

import styles from './TextTransition.module.scss'

export default function TextTransition() {
  const [qualifierIndex, setQualifierIndex] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);

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
    "solution architect"
  ];

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

  return (
    <section className={styles.textTransition}>
      <div className={styles.mobileOnly}>
        <TextTransitionLib springConfig={presets.slow}>
          {qualifiers[qualifierIndex % qualifiers.length]}
        </TextTransitionLib>{" "}
        <TextTransitionLib springConfig={presets.stiff}>
          {titles[titleIndex % titles.length]}
        </TextTransitionLib>
      </div>

      <div className={styles.exceptMobile}>
        <TextTransitionLib springConfig={presets.slow} inline>
          {qualifiers[qualifierIndex % qualifiers.length]}
        </TextTransitionLib>{" "}
        <TextTransitionLib springConfig={presets.stiff} inline>
          {titles[titleIndex % titles.length]}
        </TextTransitionLib>
      </div>
    </section>
  );
}
