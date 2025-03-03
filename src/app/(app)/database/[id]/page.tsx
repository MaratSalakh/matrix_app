import Image from "next/image";
import styles from "./page.module.css";
import { TextUI } from "@/components/ui/TextUI/TextUI";
import { Daum } from "@/models/responseUsers";
import { descriptions_men, descriptions_women } from "@/data/data";
import { getRandomInt } from "@/utils/getRandomInt";

const limit = 100;
const url = `https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=${limit}`;
const options = { method: "GET", headers: { accept: "application/json" } };

async function getUser(id: string): Promise<Daum | undefined> {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.data.data[+id - 1];
  } catch (error) {
    console.error(error);
  }
}

export default async function PersonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const user = await getUser(id);

  const imageMatcher = () => {
    if (user?.gender === "male") {
      return `/man_pictures/pixel_portrait_${getRandomInt(2)}.webp`;
    }

    return `/woman_pictures/pixel_portrait_${getRandomInt(5)}.webp`;
  };

  return (
    <>
      {user ? (
        <div className={styles.profileBlock}>
          <div className={styles.profileInfo}>
            <Image
              alt="portrait"
              height={250}
              width={250}
              src={imageMatcher()}
              className={styles.profilePhoto}
            ></Image>

            <ul className={styles.info}>
              <li>id: {user.id}</li>
              <li>
                Name: {user.name.first} {user.name.last}
              </li>
              <li>Nationality: {user.nat}</li>
              <li>Gender: {user.gender}</li>
              <li>Location: {user.location.city}</li>
              <li>Phone: {user.phone}</li>
            </ul>
          </div>
          <TextUI>
            {user?.gender === "male"
              ? descriptions_men[getRandomInt(4)].text
              : descriptions_women[getRandomInt(4)].text}
          </TextUI>
        </div>
      ) : null}
    </>
  );
}
