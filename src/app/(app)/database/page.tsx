"use client";

import styles from "./page.module.css";
import { ButtonUI } from "@/components/ui/ButtonUI/ButtonUI";
import { useGetUsersQuery } from "@/network/apiDATA";
import { useRouter } from "next/navigation";
import React from "react";

export default function DatabasePage() {
  const router = useRouter();
  const { data: users } = useGetUsersQuery({ page: 1, limit: 20 });

  return (
    <div>
      <div className={styles.mainBlock}>
        {users?.data.data.map((item, i) => (
          <ButtonUI
            onClick={() => router.push(`/database/${item.id}`)}
            className={styles.listItem}
            key={i}
          >
            {`${item.name.first} ${item.name.last}`}
          </ButtonUI>
        ))}
      </div>
    </div>
  );
}
