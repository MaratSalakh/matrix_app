import { ReactNode } from "react";
import styles from "./ButtonUI.module.css";

export const ButtonUI = (props: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  fontSize?: number;
}) => {
  const { children, onClick, className, fontSize = 30 } = props;

  const onClickHandler = () => {
    const audio = new Audio("/click_sound.mp3");
    audio.play();
    audio.volume = 0.1;
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      style={{ fontSize: `${fontSize}px` }}
      className={`${className} ${styles.buttonUI}`}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};
