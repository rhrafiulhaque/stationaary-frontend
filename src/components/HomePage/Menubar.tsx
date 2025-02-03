import { useState } from "react";
import { CiCircleList } from "react-icons/ci";
import { HiOutlineLightBulb } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../../redux/features/category/categoryApi";
import { TCategory } from "../../redux/features/category/categorySlice";
import Loading from "../Loading";

const Menubar = () => {
  const [open, setOpen] = useState(false);
  const { data: categories, isLoading: categoriesLoading } =
    useGetAllCategoriesQuery(
      { page: 1 },
      {
        refetchOnMountOrArgChange: true,
      }
    );

  if (categoriesLoading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto py-2 lg:block hidden ">
      <div className="flex justify-between align-middle items-center ">
        {/* DropDownmenu  */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            type="button"
            id="dropdownToggle"
            className="flex gap-2 justify-center items-center align-middle px-5 py-2.5 border border-gray-300 text-gray-800 text-sm outline-none bg-white hover:bg-gray-50"
          >
            <CiCircleList /> Categories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 fill-gray-500 inline ml-3"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clip-rule="evenodd"
                data-original="#000000"
              />
            </svg>
          </button>

          {open && (
            <ul
              id="dropdownMenu"
              className="absolute shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto"
            >
              {categories?.data?.map((cat: TCategory) => (
                <li className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
                  {cat.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* DropDownmenu  */}
        <div>
          <ul className="flex gap-6">
            <Link to={"/"}>Home</Link>
            <Link to={"/products"}>Products</Link>
            <Link to={"/blogs"}>Blog</Link>
            <Link to={"/aboutus"}>About Us</Link>
            <Link to={"/contacts"}>Contact</Link>
          </ul>
        </div>

        <div className="flex gap-4">
          <HiOutlineLightBulb />
          <h1>
            Clearence Up to <span className="text-[#E84F6A]">30% Off</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
