import styles from "./styles.module.css";
import QuestionList from "@/features/questions/ui/question/QuestionList.tsx";

const Question = () => {
  return (
    <div className={styles.container}>
      <div className={styles.question_container}>
        <div className={styles.question_list}>
          <QuestionList />
        </div>
        <div className={styles.question_filter}></div>
      </div>
    </div>
  );
};

export default Question;
