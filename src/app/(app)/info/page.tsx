import { ContentBlockUI } from "@/components/ui/ContentBlockUI/ContentBlockUI";
import styles from "./page.module.css";
import { TextUI } from "@/components/ui/TextUI/TextUI";

export default function InfoPage() {
  return (
    <ContentBlockUI>
      <div className={styles.content}>
        <TextUI>Current AI is Gemini</TextUI>
      </div>
      <div className={styles.animationBlock}>
        <div className={styles.animate}>
          <div className={styles.cube}></div>
        </div>
      </div>
    </ContentBlockUI>
  );
}
