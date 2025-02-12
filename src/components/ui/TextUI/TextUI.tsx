import { ReactNode } from "react";
import styles from "./TextUI.module.css";
import cn from "classnames";

export const TextUI = (props: { children: ReactNode; className?: string }) => {
  const { children, className } = props;

  return <span className={cn(className, styles.textUI)}>{children}</span>;
};
