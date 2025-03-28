import { images } from "@/shared/images/images.ts";
import styles from "./styles.module.css";

interface PaginationProps {
  page: number;
  totalPage: number;
  isLoading: boolean;
  handlePrevPage: () => void;
  handleNextPage: () => void;
  handlePageClick: (pageNumber: number) => void;
}

const Pagination = ({
  totalPage,
  handlePrevPage,
  handlePageClick,
  handleNextPage,
  page,
  isLoading,
}: PaginationProps) => {
  return (
    <div
      className={styles.pagination}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <button onClick={handlePrevPage} disabled={page === 1 || isLoading}>
        <img src={images.paginationArrow} alt="previous page" />
      </button>

      <ul className={styles.page_numbers}>
        {Array.from({ length: Math.min(6, totalPage) }, (_, i) => {
          let pageNum;
          if (totalPage <= 5) {
            pageNum = i + 1;
          } else if (page <= 3) {
            pageNum = i + 1;
          } else if (page >= totalPage - 2) {
            pageNum = totalPage - 4 + i;
          } else {
            pageNum = page - 2 + i;
          }

          if (pageNum > 0 && pageNum <= totalPage) {
            return (
              <li key={pageNum}>
                <button
                  onClick={() => handlePageClick(pageNum)}
                  className={`${styles.number} ${page === pageNum ? styles.active : ""}`}
                  disabled={isLoading}
                >
                  {pageNum}
                </button>
              </li>
            );
          }
          return null;
        })}
      </ul>

      <img
        src={images.threeDots}
        alt=""
        style={{ display: page > totalPage - 4 ? "none" : "block" }}
      />

      <button
        onClick={() => handlePageClick(totalPage)}
        className={`${styles.number} ${page === totalPage ? styles.active : ""}`}
        style={{ display: page > totalPage - 4 ? "none" : "block" }}
        disabled={isLoading}
      >
        {totalPage}
      </button>

      <button
        onClick={handleNextPage}
        disabled={page === totalPage || isLoading}
      >
        <img
          src={images.paginationArrow}
          alt="next page"
          style={{
            transform: "rotate(-180deg)",
          }}
        />
      </button>
    </div>
  );
};

export default Pagination;
