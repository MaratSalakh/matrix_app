import { ReactNode } from "react";
import styles from "./ContentBlockUI.module.css";

export const ContentBlockUI = (props: { children: ReactNode }) => {
  const { children } = props;

  return <div className={styles.contentBlock}>{children}</div>;
};
