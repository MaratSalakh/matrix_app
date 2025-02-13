"use client";

import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div className={styles.menu}>
        <button
          onClick={() => router.push("/profile")}
          className={styles.menuItem}
        >
          Profile
        </button>
        <button
          onClick={() => router.push("/database")}
          className={styles.menuItem}
        >
          Database
        </button>
        <button
          onClick={() => router.push("/calls")}
          className={styles.menuItem}
        >
          Calls
        </button>
        <button className={styles.menuItem}>Settings</button>
      </div>
    </div>
  );
}
