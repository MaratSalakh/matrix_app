"use client";

import { ButtonUI } from "@/components/ui/ButtonUI/ButtonUI";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div className={styles.menu}>
        <ButtonUI fontSize={36} onClick={() => router.push("/profile")}>
          Profile
        </ButtonUI>
        <ButtonUI fontSize={36} onClick={() => router.push("/database")}>
          Database
        </ButtonUI>
        <ButtonUI fontSize={36} onClick={() => router.push("/calls")}>
          Calls
        </ButtonUI>
      </div>
    </div>
  );
}
