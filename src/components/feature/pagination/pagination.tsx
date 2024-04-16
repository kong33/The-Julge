import styles from './pagination.module.scss';

type PaginationType = {
  currentPage: number;
  totalPages: number;
  // eslint-disable-next-line no-unused-vars
  onPageChange: (page: number) => void;
};
function Pagination({ currentPage, totalPages, onPageChange }: PaginationType) {
  // 다음 페이지로 이동하는 함수
  const nextPage = () => {
    onPageChange(currentPage + 1);
  };
  // 페이지 그룹 계산
  const groupStart = Math.floor((currentPage - 1) / 7) * 7 + 1;
  const groupEnd = Math.min(groupStart + 6, totalPages);

  return (
    <ul className={styles.pagination}>
      {/* 이전 페이지 버튼 */}
      {currentPage > 7 && (
        <li>
          <button type="button" onClick={() => onPageChange(currentPage - 1)}>
            &lt;
          </button>
        </li>
      )}
      {/* 페이지 번호 버튼 */}
      {/* 배열 길이  groupEnd - groupStart + 1 */}
      {Array.from({ length: groupEnd - groupStart + 1 }, (_, i) => i + groupStart).map((page) => (
        <li key={page}>
          <button
            type="button"
            className={currentPage === page ? styles.active : ''}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        </li>
      ))}
      {/* 다음 페이지 버튼 */}
      {currentPage > 7 && currentPage < totalPages && (
        <li>
          <button type="button" onClick={nextPage}>
            &gt;
          </button>
        </li>
      )}
    </ul>
  );
}

export default Pagination;
