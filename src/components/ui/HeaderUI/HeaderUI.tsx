"use client";

import { ButtonUI } from "../ButtonUI/ButtonUI";
import styles from "./HeaderUI.module.css";
import { useRouter } from "next/navigation";

export default function HeaderUI() {
  const router = useRouter();

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Matrix</h1>
      <ButtonUI onClick={() => router.back()}>Back</ButtonUI>
    </div>
  );
}
