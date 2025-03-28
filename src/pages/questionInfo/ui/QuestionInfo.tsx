import QuestionAnswer from "@/widgets/questionInfo";
import styles from "./styles.module.css";

const QuestionInfo = () => {
  return (
    <div className={styles.info_container}>
      <QuestionAnswer />
    </div>
  );
};

export default QuestionInfo;
