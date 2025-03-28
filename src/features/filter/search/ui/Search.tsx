import { images } from "@/shared/images/images.ts";
import { useDispatch, useSelector } from "react-redux";
import { setTitleOrDescription } from "@/entities/question/model/questionSlice.ts";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { RootState } from "@/app/store/store.ts";
import Skeleton from "@/shared/ui/skeleton/Skeleton.tsx";

const Search = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      dispatch(setTitleOrDescription(inputValue));
    }, 500);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [inputValue, dispatch]);

  const load = useSelector((state: RootState) => state.questions.questions);

  if (!load.length) {
    return <Skeleton height={100} width={300} />;
  }

  return (
    <div className={styles.input_container}>
      <img
        src={images.Magnifer}
        alt="search"
        style={{ height: "20px", width: "20px" }}
      />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={styles.input}
        placeholder="Введите запрос..."
      />
    </div>
  );
};

export default Search;
