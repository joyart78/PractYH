import { useDispatch } from "react-redux";
import { useState } from "react";
import FilterSkillButton from "@/shared/ui/FilterSkillButton/FilterSkillButton.tsx";
import styles from "./styles.module.css";
import Skeleton from "@/shared/ui/skeleton/Skeleton.tsx";
import { setSpecialization } from "@/entities/question/model/questionSlice.ts";
import specializationsApi from "@/entities/specializations/api/specializationsApi.ts";

const SpecializationList = () => {
  const [limit, setLimit] = useState<number>(5);
  const dispatch = useDispatch();

  const { data, error, isLoading } =
    specializationsApi.useGetSpecializationsQuery({
      page: 1,
      limit,
    });

  const handleSetLimitTotal = () => {
    if (data) {
      setLimit(data.total);
    }
  };
  const handleSetLimit = () => {
    if (data) {
      setLimit(5);
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
      <span className={styles.title}>Специализация</span>
      <div style={{ width: "296px" }} className={styles.button_list}>
        {data?.data.map((item) => (
          <FilterSkillButton
            title={item.title}
            cb={() => dispatch(setSpecialization(item.id))}
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

export default SpecializationList;
