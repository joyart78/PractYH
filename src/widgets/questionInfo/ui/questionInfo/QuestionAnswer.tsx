import questionInfoApi from "@/entities/questionInfo/api/questionInfoApi.ts";
import { Link, useParams } from "react-router";
import styles from "./styles.module.css";
import Skeleton from "@/shared/ui/skeleton/Skeleton.tsx";
import FilterSkillButton from "@/shared/ui/FilterSkillButton/FilterSkillButton.tsx";

const QuestionAnswer = () => {
  const { id } = useParams();
  const questionId = Number(id);
  const { data, isError } = questionInfoApi.useGetQuestionInfoQuery({
    questionId,
  });

  if (!data)
    return (
      <div style={{ margin: "75px 0" }}>
        <Skeleton height={750} width={850} />
      </div>
    );
  if (isError) return <div>Error</div>;

  return (
    <div>
      <Link to="/" className={styles.back}>
        Назад
      </Link>
      <div className={styles.container}>
        <section className={styles.answers}>
          <div className={`${styles.content_container} ${styles.short_answer}`}>
            <h1 className={styles.answer_title}>{data.title}</h1>
            <p className={styles.answer_content}>{data.description}</p>
          </div>
          <div
            className={`${styles.content_container} ${styles.content_answer}`}
          >
            <h2 className={styles.answer_content_title}>Краткий ответ</h2>
            <div dangerouslySetInnerHTML={{ __html: data.shortAnswer }} />
          </div>
          <div
            className={`${styles.content_container} ${styles.content_answer}`}
          >
            <h2 className={styles.answer_content_title}>Развернутый ответ</h2>
            <div dangerouslySetInnerHTML={{ __html: data.longAnswer }} />
          </div>
        </section>
        <section className={styles.filter}>
          <div
            className={`${styles.content_container} ${styles.content_filter}`}
          >
            <div className={styles.filer_container}>
              <span className={styles.filter_title}>Уровень:</span>
              <div className={styles.filter_list}>
                <span className={styles.rate}>
                  Рейтинг:
                  <span className={styles.rate_number}>{data.rate}</span>
                </span>
                <span className={styles.rate}>
                  Сложность:
                  <span className={styles.rate_number}>{data.complexity}</span>
                </span>
              </div>
            </div>
            <div className={styles.filer_container}>
              <span className={styles.filter_title}>Навыки:</span>
              <div className={styles.filter_list}>
                {data.questionSkills.map((item) => (
                  <FilterSkillButton
                    img={item.imageSrc}
                    title={item.title}
                    key={item.id}
                  />
                ))}
              </div>
            </div>
            <div className={styles.filer_container}>
              <span className={styles.filter_title}>Ключевые слова:</span>
              <div className={styles.filter_list}>
                {data.keywords.map((item) => (
                  <span style={{ color: "#6A0BFF" }}>#{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QuestionAnswer;
