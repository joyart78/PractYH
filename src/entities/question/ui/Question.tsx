import { IQuestion } from "@/features/questions/model/types.ts";
import styles from "./styles.module.css";
import { useState } from "react";
import { images } from "@/shared/images/images.ts";

const Question = ({ question }: { question: IQuestion }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className={styles.accordion_item}>
        <div
          className={styles.accordion_header}
          onClick={() => setIsActive(!isActive)}
        >
          {question.title}
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
          {question.imageSrc && (
            <img
              src={question.imageSrc}
              alt={question.title}
              style={{ maxWidth: "100%", borderRadius: "12px" }}
            />
          )}
          <div dangerouslySetInnerHTML={{ __html: question.shortAnswer }} />
        </div>
      </div>
    </div>
  );
};

export default Question;
