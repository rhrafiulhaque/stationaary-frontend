const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        type="button"
        className="px-5 py-2.5 flex items-center justify-center rounded-full text-white text-sm tracking-wider font-semibold border-none outline-none bg-orange-600 hover:bg-orange-700 active:bg-orange-600"
      >
        Loading
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18px"
          fill="#fff"
          className="ml-2 inline animate-spin"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M7.03 2.757a1 1 0 0 1 1.213-.727l4 1a1 1 0 0 1 .59 1.525l-2 3a1 1 0 0 1-1.665-1.11l.755-1.132a7.003 7.003 0 0 0-2.735 11.77 1 1 0 0 1-1.376 1.453A8.978 8.978 0 0 1 3 12a9 9 0 0 1 4.874-8l-.117-.03a1 1 0 0 1-.727-1.213zm10.092 3.017a1 1 0 0 1 1.414.038A8.973 8.973 0 0 1 21 12a9 9 0 0 1-5.068 8.098 1 1 0 0 1-.707 1.864l-3.5-1a1 1 0 0 1-.557-1.517l2-3a1 1 0 0 1 1.664 1.11l-.755 1.132a7.003 7.003 0 0 0 3.006-11.5 1 1 0 0 1 .039-1.413z"
            clip-rule="evenodd"
            data-original="#000000"
          />
        </svg>
      </button>
    </div>
  );
};

export default Loading;
