import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store.ts";
import questionApi from "@/entities/question/api/questionApi.ts";
import {
  nextPage,
  prevPage,
  setPage,
  setQuestions,
  setTotalPages,
} from "@/entities/question/model/questionSlice.ts";
import { useEffect } from "react";
import Question from "@/entities/question/ui/question/Question.tsx";
import Pagination from "@/shared/ui/pagination/ui/Pagination.tsx";
import Skeleton from "@/shared/ui/skeleton/Skeleton.tsx";
import styles from "./styles.module.css";

const QuestionList = () => {
  const {
    page,
    limit,
    titleOrDescription,
    specialization,
    skills,
    complexity,
    rate,
    questions,
    totalPages,
  } = useSelector((state: RootState) => state.questions);

  const dispatch = useDispatch();

  const { data, isLoading } = questionApi.useGetQuestionQuery({
    page,
    limit,
    titleOrDescription,
    specialization,
    skills,
    complexity,
    rate,
  });

  useEffect(() => {
    if (data) {
      dispatch(setTotalPages(Math.ceil(data.total / limit)));
      dispatch(setQuestions(data.data));
    }
  }, [data, limit, dispatch]);

  const handlePrevPage = () => dispatch(prevPage());
  const handleNextPage = () => dispatch(nextPage());
  const handlePageClick = (pageNumber: number) => dispatch(setPage(pageNumber));

  if (!questions.length)
    return (
      <div>
        <Skeleton height={650} width={750} />
      </div>
    );

  return (
    <div>
      <span className={styles.page_title}>Вопросы</span>
      <div className={styles.items_list}>
        {questions.map((item) => (
          <Question question={item} key={item.id} />
        ))}
      </div>

      <div className={styles.pagination}>
        <Pagination
          page={page}
          totalPage={totalPages}
          isLoading={isLoading}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          handlePageClick={handlePageClick}
        />
      </div>
    </div>
  );
};

export default QuestionList;
