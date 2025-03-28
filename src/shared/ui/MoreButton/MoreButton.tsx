import { images } from "@/shared/images/images.ts";
import styles from "./MoreButton.module.css";
import { Link } from "react-router";

const MoreButton = ({ id }: { id: number }) => {
  return (
    <Link to={`/question_info/${id}`} className={styles.more_button}>
      <span className={styles.button_title}>Подробнее</span>
      <img
        src={images.Arrow_right}
        alt="More information"
        className={styles.arrow}
      />
    </Link>
  );
};

export default MoreButton;
