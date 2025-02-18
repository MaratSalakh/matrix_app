"use client";

import styles from "./page.module.css";
import { ButtonUI } from "@/components/ui/ButtonUI/ButtonUI";
import { useGetUsersQuery } from "@/network/apiDATA";
import React from "react";

export default function DatabasePage() {
  const { data: users } = useGetUsersQuery({ page: 1, limit: 20 });

  return (
    <div>
      <div className={styles.mainBlock}>
        {users?.data.data.map((item, i) => (
          <ButtonUI className={styles.listItem} key={i}>
            {`${item.name.first} ${item.name.last}`}
          </ButtonUI>
        ))}
      </div>
    </div>
  );
}
