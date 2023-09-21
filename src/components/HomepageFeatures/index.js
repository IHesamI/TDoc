import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    link:'/docs/django/index',
    title: "Focus on What Matters",
    path: require("@site/static/img/pyDjan.png").default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    link:'/docs/bot/index',
    title: "Focus on What Matters",
    path: require("@site/static/img/pyBot.png").default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
];

function Feature({ link, path, title, description }) {
  return (
    <Link href={link} className={"link_container"}>
      <div className="text--center">
        <img width={"200px"} height={'200px'} src={path} />
      </div>
      <div
      className="text--center padding-horiz--md"
      >
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section>
      <div>
        <div className={styles.link_row}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
