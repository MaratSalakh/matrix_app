"use client";

import { ButtonUI } from "@/components/ui/ButtonUI/ButtonUI";
import styles from "./page.module.css";
import Image from "next/image";
import { TextUI } from "@/components/ui/TextUI/TextUI";
import { usePostTextMutation } from "@/network/apiAI";
import { LoaderUI } from "@/components/ui/Loader/Loader";
import { useGetPersonsQuery } from "@/network/apiMATRIX";
import { translit } from "@/utils/translitter";
import { useState } from "react";
import { ContentBlockUI } from "@/components/ui/ContentBlockUI/ContentBlockUI";
import { PersonData } from "@/models/responsePersons";
import { getRandomInt } from "@/utils/getRandomInt";

export default function ProfilePage() {
  const [personIndex, setPersonIndex] = useState(0);
  const { data } = useGetPersonsQuery();
  const currentPerson = data ? data[personIndex] : null;

  const [sendQuery, { data: queryData, isUninitialized, isLoading }] =
    usePostTextMutation();

  const query = () => {
    sendQuery("write decription of young beautiful girl").then((res) =>
      console.log(res)
    );
  };

  const previousPerson = () => {
    return personIndex > 0 ? setPersonIndex(personIndex - 1) : null;
  };

  const nextPerson = () => {
    if (!data) {
      return;
    }

    return personIndex < data?.length - 1
      ? setPersonIndex(personIndex + 1)
      : null;
  };

  const imageMatcher = (person: PersonData | null) => {
    if (person?.gender === "male") {
      return `/man_pictures/pixel_portrait_${getRandomInt(2)}.webp`;
    }

    return `/woman_pictures/pixel_portrait_${getRandomInt(5)}.webp`;
  };

  return (
    <ContentBlockUI className={styles.contentBlock}>
      <div>
        <div className={styles.personInfo}>
          <Image
            alt="portrait"
            height={250}
            width={250}
            src={imageMatcher(currentPerson)}
            className={styles.personPhoto}
          ></Image>
          {
            <ul className={styles.info}>
              <li>
                Name: {currentPerson ? translit(currentPerson.name) : null}
              </li>
              <li>
                Surname:{" "}
                {currentPerson ? translit(currentPerson.surname) : null}
              </li>
              <li>Birth date: {currentPerson ? currentPerson.year : null}</li>
              <li>
                Country:{" "}
                {currentPerson ? translit(currentPerson.country) : null}
              </li>
              <li>
                Gender: {currentPerson ? translit(currentPerson.gender) : null}
              </li>
            </ul>
          }
        </div>
      </div>
      {isLoading ? (
        <LoaderUI></LoaderUI>
      ) : (
        <TextUI>
          {isUninitialized ? "no data" : queryData?.choices[0].message.content}
        </TextUI>
      )}
      <ButtonUI onClick={query} className={styles.generateButton}>
        Generate description
      </ButtonUI>
      <div className={styles.controlButtons}>
        <ButtonUI onClick={previousPerson}>Previous person</ButtonUI>
        <ButtonUI onClick={nextPerson}>Next person</ButtonUI>
      </div>
    </ContentBlockUI>
  );
}
