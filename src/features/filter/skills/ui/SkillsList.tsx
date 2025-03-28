import skillsApi from "@/entities/skills/api/skillsApi.ts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store.ts";
import { useState } from "react";
import FilterSkillButton from "@/shared/ui/FilterSkillButton/FilterSkillButton.tsx";
import styles from "./styles.module.css";
import Skeleton from "@/shared/ui/skeleton/Skeleton.tsx";
import { setSkills } from "@/entities/question/model/questionSlice.ts";

const SkillsList = () => {
  const [limit, setLimit] = useState<number>(8);
  const dispatch = useDispatch();

  const specializations = useSelector(
    (state: RootState) => state.questions.specialization,
  );

  const { data, error, isLoading } = skillsApi.useGetSkillsQuery({
    page: 1,
    limit,
    specializations,
  });

  const handleSetLimitTotal = () => {
    if (data) {
      setLimit(data.total);
    }
  };
  const handleSetLimit = () => {
    if (data) {
      setLimit(8);
    }
  };

  if (isLoading)
    return (
      <div className={styles.loading}>
        <Skeleton height={200} width={300} />
      </div>
    );
  if (error)
    return (
      <div className={styles.error}>
        <Skeleton height={200} width={300} />
      </div>
    );

  return (
    <div className={styles.skills_container}>
      <span className={styles.title}>Навыки</span>
      <div style={{ width: "296px" }} className={styles.button_list}>
        {data?.data.map((item) => (
          <FilterSkillButton
            img={item.imageSrc}
            title={item.title}
            cb={() => dispatch(setSkills(item.id))}
            key={item.id}
          />
        ))}
      </div>
      {limit != data?.total ? (
        <button className={styles.button_more} onClick={handleSetLimitTotal}>
          Посмотреть все
        </button>
      ) : (
        <button className={styles.button_more} onClick={handleSetLimit}>
          скрыть
        </button>
      )}
    </div>
  );
};

export default SkillsList;
