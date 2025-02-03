interface PaginationProps {
  current: number;
  pageSize: number;
  total: number;
  onChange: (page: number) => void;
  isNextDisabled: boolean;
}

const Pagination = ({
  current,
  pageSize,
  total,
  onChange,
  isNextDisabled,
}: PaginationProps) => {
  const totalPages = Math.ceil(total / pageSize);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePageChange = (page: number) => {
    onChange(page);
  };

  return (
    <ul className="flex space-x-5 justify-center font-[sans-serif]">
      {/* Previous button */}
      <li
        onClick={() => handlePageChange(current - 1)}
        className={`flex items-center justify-center shrink-0 w-9 h-9 rounded-md cursor-pointer ${
          current === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-600"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 fill-gray-400"
          viewBox="0 0 55.753 55.753"
        >
          <path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" />
        </svg>
      </li>

      {/* Page Numbers */}
      {pageNumbers.map((page) => (
        <li
          key={page}
          onClick={() => handlePageChange(page)}
          className={`flex items-center justify-center shrink-0 w-9 h-9 rounded-md cursor-pointer text-base font-bold ${
            page === current
              ? "bg-blue-500 text-white"
              : "border hover:border-blue-500 text-gray-800"
          }`}
        >
          {page}
        </li>
      ))}

      {/* Next button */}
      <li
        onClick={() => handlePageChange(current + 1)}
        className={`flex items-center justify-center shrink-0 w-9 h-9 rounded-md cursor-pointer ${
          current === totalPages || isNextDisabled
            ? "text-gray-400 cursor-not-allowed"
            : "text-gray-600"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 fill-gray-400 rotate-180"
          viewBox="0 0 55.753 55.753"
        >
          <path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" />
        </svg>
      </li>
    </ul>
  );
};

export default Pagination;
