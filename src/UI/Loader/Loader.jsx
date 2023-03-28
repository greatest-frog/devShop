import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className="loader__circle-wrapper">
        <div className={styles.loader__circle}></div>
      </div>
      <div className={styles.loader__title}>Loading...</div>
    </div>
  );
};

export default Loader;
