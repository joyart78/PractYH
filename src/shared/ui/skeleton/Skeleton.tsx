import styles from "./styles.module.css";

const Skeleton = ({ height, width }: { height: number; width: number }) => {
  return (
    <div
      className={styles.skeleton}
      style={{
        height: height || "100%",
        width: width || "100%",
      }}
    />
  );
};

export default Skeleton;
