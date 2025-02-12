"use client";

import { ButtonUI } from "@/components/ui/ButtonUI/ButtonUI";
import styles from "./page.module.css";
import Image from "next/image";
import { TextUI } from "@/components/ui/TextUI/TextUI";
import { usePostTextMutation } from "@/network/apiAI";
import { peoples } from "@/data/data";
import { useState } from "react";

export default function ProfilePage() {
  const [count, setCount] = useState(0);

  const [sendQuery, { data: queryData, isUninitialized }] =
    usePostTextMutation();

  const query = (text: string) => {
    sendQuery(text).then((res) => console.log(res));
  };

  const currentPerson = peoples[count];

  const generate = () => {
    // query(
    //   "write decription of young beautiful girl, return only object: {name: string; age: number; gender: string; height: string; profession: string; hobbies: string; }"
    // )
    if (count > 0) {
      setCount(0);
    } else {
      setCount(1);
    }
  };

  return (
    <div>
      <div className={styles.profileBlock}>
        <div className={styles.profileInfo}>
          <Image
            alt="portrait"
            height={250}
            width={250}
            src="/pixel_portrait_3.webp"
            className={styles.profilePhoto}
          ></Image>
          {
            <ul className={styles.info}>
              <li>Name: {currentPerson.name}</li>
              <li>Age: {currentPerson.age}</li>
              <li>Gender: {currentPerson.gender}</li>
              <li>Height: {currentPerson.height}</li>
              <li>Profession: {currentPerson.profession}</li>
              <li>Hobbies: {currentPerson.hobbies}</li>
            </ul>
          }
        </div>
        <TextUI>
          {isUninitialized ? "no data" : queryData?.choices[0].message.content}
        </TextUI>
        <ButtonUI onClick={() => generate()} className={styles.generateButton}>
          Generate
        </ButtonUI>
      </div>
    </div>
  );
}
