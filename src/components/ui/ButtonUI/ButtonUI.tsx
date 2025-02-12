import { ReactNode } from "react";
import styles from "./ButtonUI.module.css";

export const ButtonUI = (props: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const { children, onClick, className } = props;

  return (
    <button className={`${className} ${styles.buttonUI}`} onClick={onClick}>
      {children}
    </button>
  );
};
