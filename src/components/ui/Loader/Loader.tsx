import styles from "./Loader.module.css";

export const LoaderUI = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderItem}></div>
    </div>
  );
};
