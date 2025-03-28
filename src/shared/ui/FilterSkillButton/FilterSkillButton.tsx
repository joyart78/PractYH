import styles from "./styles.module.css";
import { useState } from "react";

interface IProps {
  img?: string;
  title: string;
  cb?: () => void;
}

const FilterSkillButton = ({ img, title, cb }: IProps) => {
  const [active, setActive] = useState(false);

  return (
    <button
      className={`${styles.filter_btn} ${active ? styles.active : ""}`}
      onClick={() => {
        setActive(!active);
        if (cb) cb();
      }}
    >
      {img && <img src={img} alt="skill icon" className={styles.filter_img} />}
      <span className={styles.filter_title}>{title}</span>
    </button>
  );
};

export default FilterSkillButton;
