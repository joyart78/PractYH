import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store.ts";
import questionApi from "@/features/questions/api/questionApi.ts";
import {
  nextPage,
  prevPage,
  setPage,
  setQuestions,
  setTotalPages,
} from "@/features/questions/model/questionSlice.ts";
import { useEffect } from "react";
import Question from "@/entities/question/ui/Question.tsx";
import Pagination from "@/shared/ui/pagination/ui/Pagination.tsx";
import Skeleton from "@/shared/ui/skeleton/Skeleton.tsx";
import styles from "./styles.module.css";

const QuestionList = () => {
  const page = useSelector((state: RootState) => state.questions.page);
  const limit = useSelector((state: RootState) => state.questions.limit);
  const totalPage = useSelector(
    (state: RootState) => state.questions.totalPages,
  );
  const questions = useSelector(
    (state: RootState) => state.questions.questions,
  );
  const dispatch = useDispatch();

  const { data, error, isLoading } = questionApi.useGetQuestionQuery({
    page,
    limit,
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

  if (error) return <div>404 error</div>;

  if (!questions.length)
    return (
      <div>
        <Skeleton height={650} width={750} />
      </div>
    );

  return (
    <div>
      <span className={styles.page_title}>Вопросы</span>
      <div className="items-list">
        {questions.map((item) => (
          <Question question={item} key={item.id} />
        ))}
      </div>

      <div className={styles.pagination}></div>
      <Pagination
        page={page}
        totalPage={totalPage}
        isLoading={isLoading}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
      />
    </div>
  );
};

export default QuestionList;
