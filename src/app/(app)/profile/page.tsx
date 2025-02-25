"use client";

import { ButtonUI } from "@/components/ui/ButtonUI/ButtonUI";
import styles from "./page.module.css";
import Image from "next/image";
import { TextUI } from "@/components/ui/TextUI/TextUI";
import { usePostTextMutation } from "@/network/apiAI";
import { peoples } from "@/data/data";
import { LoaderUI } from "@/components/ui/Loader/Loader";

export default function ProfilePage() {
  const currentPerson = peoples[0];

  const [sendQuery, { data: queryData, isUninitialized, isLoading }] =
    usePostTextMutation();

  const query = () => {
    sendQuery("write decription of young beautiful girl").then((res) =>
      console.log(res)
    );
  };

  return (
    <div>
      <div className={styles.profileBlock}>
        <div className={styles.profileInfo}>
          <Image
            alt="portrait"
            height={250}
            width={250}
            src="/woman_pictures/pixel_portrait_3.webp"
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
        {isLoading ? (
          <LoaderUI></LoaderUI>
        ) : (
          <TextUI>
            {isUninitialized
              ? "no data"
              : queryData?.choices[0].message.content}
          </TextUI>
        )}
        <ButtonUI onClick={query} className={styles.generateButton}>
          Generate description
        </ButtonUI>
      </div>
    </div>
  );
}
