import styles from "./styles.module.css";
import { SkillsList } from "@/features/filter/skills";
import Search from "@/features/filter/search";
import SpecializationList from "@/features/filter/specialization";
import RateList from "@/features/filter/rate";
import ComplexityList from "@/features/filter/complexity";

const Filer = () => {
  return (
    <div className={styles.filter_container}>
      <Search />
      <SpecializationList />
      <SkillsList />
      <ComplexityList />
      <RateList />
    </div>
  );
};

export default Filer;
