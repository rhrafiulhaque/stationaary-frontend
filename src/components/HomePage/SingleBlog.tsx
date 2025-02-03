const SingleBlog = () => {
  return (
    <div className="bg-white rounded overflow-hidden">
      <img
        src="https://readymadeui.com/cardImg.webp"
        alt="Blog Post 1"
        className="w-full h-52 object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">
          Lorem Ipsum Dolor
        </h3>
        <p className="text-gray-500 text-sm">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore...
        </p>
        <p className="text-[#E84F6A] text-[13px] font-semibold mt-4">
          08 April 2024
        </p>
        <a
          href="javascript:void(0);"
          className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-[#E84F6A] hover:bg-[#e84f4f] text-white text-[13px]"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default SingleBlog;
