"use client";

import styles from "./page.module.css";
import { ButtonUI } from "@/components/ui/ButtonUI/ButtonUI";
import { Daum, Root } from "@/models/responseUsers";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const url = "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10";
const options = { method: "GET", headers: { accept: "application/json" } };

async function getUsers() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default function DatabasePage() {
  const [users, setUsers] = useState<Daum[]>([]);
  const router = useRouter();

  useEffect(() => {
    const asyncFunc = async () => {
      const data: Root = await getUsers();
      setUsers(data.data.data);
    };

    asyncFunc();
  }, []);

  return (
    <div>
      <div className={styles.mainBlock}>
        {users.map((item, i) => (
          <ButtonUI
            onClick={() => router.push(`database/${i}`)}
            className={styles.button}
            key={i}
          >
            {`${item.name.first} ${item.name.last}`}
          </ButtonUI>
        ))}
      </div>
    </div>
  );
}
