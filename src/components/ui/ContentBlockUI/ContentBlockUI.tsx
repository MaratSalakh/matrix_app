import { ReactNode } from "react";
import styles from "./ContentBlockUI.module.css";
import cn from "classnames";

export const ContentBlockUI = (props: {
  className?: string;
  children: ReactNode;
}) => {
  const { children, className } = props;

  return <div className={cn(styles.contentBlock, className)}>{children}</div>;
};
