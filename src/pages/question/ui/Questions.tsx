import styles from "./styles.module.css";
import QuestionList from "@/features/questions/ui/question/QuestionList.tsx";
import Filer from "@/widgets/questionFilter/ui/Filer.tsx";

const Questions = () => {
  return (
    <div className={styles.question_container}>
      <div className={styles.question_list}>
        <QuestionList />
      </div>
      <div className={styles.question_filter}>
        <Filer />
      </div>
    </div>
  );
};

export default Questions;
