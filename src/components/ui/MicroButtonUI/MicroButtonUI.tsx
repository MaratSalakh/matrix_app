import { ReactNode } from "react";
import styles from "./MicroButtonUI.module.css";

export const MicroButtonUI = (props: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const { children, onClick, className } = props;

  return (
    <button
      className={`${className} ${styles.microButtonUI}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
