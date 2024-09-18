import React from "react";
import styles from "./loading.module.scss";

export default function Loading() {
  return (
    <svg
      className={styles.spinner}
      width="35px"
      height="35px"
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className={styles.path}
        fill="none"
        stroke-width="6"
        stroke-linecap="round"
        cx="33"
        cy="33"
        r="30"
      ></circle>
    </svg>
  );
}
