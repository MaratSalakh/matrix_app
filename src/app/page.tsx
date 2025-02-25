"use client";

import { ButtonUI } from "@/components/ui/ButtonUI/ButtonUI";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { Routes } from "@/constants/routes";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div className={styles.menu}>
        <ButtonUI fontSize={36} onClick={() => router.push(Routes.profile)}>
          Profile
        </ButtonUI>
        <ButtonUI fontSize={36} onClick={() => router.push(Routes.database)}>
          Database
        </ButtonUI>
        <ButtonUI fontSize={36} onClick={() => router.push(Routes.calls)}>
          Calls
        </ButtonUI>
        <ButtonUI fontSize={36} onClick={() => router.push(Routes.info)}>
          Info
        </ButtonUI>
      </div>
    </div>
  );
}
