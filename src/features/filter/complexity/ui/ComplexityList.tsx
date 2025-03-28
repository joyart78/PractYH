import { useDispatch, useSelector } from "react-redux";
import FilterSkillButton from "@/shared/ui/FilterSkillButton/FilterSkillButton.tsx";
import styles from "./styles.module.css";
import { setComplexity } from "@/entities/question/model/questionSlice.ts";
import { RootState } from "@/app/store/store.ts";
import Skeleton from "@/shared/ui/skeleton/Skeleton.tsx";

const ComplexityList = () => {
  const dispatch = useDispatch();
  const load = useSelector((state: RootState) => state.questions.questions);

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (!load.length) {
    return <Skeleton height={100} width={300} />;
  }

  return (
    <div className={styles.skills_container}>
      <span className={styles.title}>Уровень сложности</span>
      <div style={{ width: "296px" }} className={styles.button_list}>
        {data.map((item, index) => (
          <FilterSkillButton
            title={`${item}`}
            cb={() => dispatch(setComplexity(item))}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ComplexityList;
