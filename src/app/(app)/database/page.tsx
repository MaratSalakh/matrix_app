"use client";

import styles from "./page.module.css";
import { ButtonUI } from "@/components/ui/ButtonUI/ButtonUI";
import { useGetUsersQuery } from "@/network/apiDATA";
import { incrementLimit } from "@/slices/databaseSlice";
import { useAppDispatch, useAppSelector } from "@/slices/hooks";
import { useRouter } from "next/navigation";
import React from "react";

export default function DatabasePage() {
  const limit = useAppSelector((state) => state.database.limit);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { data: users } = useGetUsersQuery({
    page: 1,
    limit: limit,
  });

  const fetchMorePersons = () => {
    dispatch(incrementLimit());
  };

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
        {limit < 100 ? (
          <ButtonUI onClick={fetchMorePersons} className={styles.listItem}>
            More persons
          </ButtonUI>
        ) : null}
      </div>
    </div>
  );
}
