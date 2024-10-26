"use client";

import Link from "next/link";
import styles from "./error.module.scss"

const Error = () => {
  return (
    <div className={styles.error}>
      <h1>Ops! Essa página não existe</h1>
      <Link href="/">Voltar para home</Link>
    </div>
  );
};

export default Error;
