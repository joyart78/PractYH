import { IQuestion } from "@/entities/question/model/types.ts";
import styles from "./styles.module.css";
import { useState } from "react";
import { images } from "@/shared/images/images.ts";
import MoreButton from "@/shared/ui/MoreButton/MoreButton.tsx";

const Question = ({ question }: { question: IQuestion }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.accordion_item}>
      <div
        className={styles.accordion_header}
        onClick={() => setIsActive(!isActive)}
      >
        <div className={styles.question_title}>
          <img src={images.Ellipse} alt="" />
          {question.title}
        </div>

        <img
          src={images.Arrow}
          alt="accordeon"
          className={`${styles.arrow} ${isActive ? styles.active : ""}`}
        />
      </div>
      <div
        className={styles.accordion_content}
        style={{
          opacity: isActive ? "1" : "0",
          visibility: isActive ? "visible" : "hidden",
          maxHeight: isActive ? "800px" : "0",
        }}
      >
        <div className={styles.rate_container}>
          <span className={styles.rate}>
            Рейтинг: <span className={styles.rate_number}>{question.rate}</span>
          </span>
          <span className={styles.rate}>
            Сложность:{" "}
            <span className={styles.rate_number}>{question.complexity}</span>
          </span>
        </div>

        {question.imageSrc && (
          <img
            src={question.imageSrc}
            alt={question.title}
            style={{
              maxWidth: "475px",
              maxHeight: "312px",
              borderRadius: "24px",
            }}
          />
        )}

        <div dangerouslySetInnerHTML={{ __html: question.shortAnswer }} />

        <div className={styles.accordion_more_button}>
          <MoreButton id={question.id} />
        </div>
      </div>
    </div>
  );
};

export default Question;
