import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useAppDispatch } from "../../../../hooks/hooks";
import {
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
} from "../../../../redux/features/category/categoryApi";
import { setCategory } from "../../../../redux/features/category/categorySlice";
import Loading from "../../../Loading";
import Pagination from "../../../Pagination";
const AdminCategoryList = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const { data: categories, isLoading: isCategoryLoading } =
    useGetAllCategoriesQuery({
      page,
    });

  const [deleteCategory, { isLoading: isCategoryDeleteLoading }] =
    useDeleteCategoryMutation();

  const metaData = categories?.meta;

  // Searching next page is disable or not
  const isNextDisabled = categories?.data.length < metaData?.limit;

  // Calculate the serial number
  const calculateSerialNumber = (index: number) => {
    return (page - 1) * metaData?.limit + (index + 1);
  };

  const handleDelete = async (catId: string) => {
    const confirmDelete = confirm("Are you sure to delete this?");
    if (confirmDelete) {
      const result = await deleteCategory(catId).unwrap();
      if (result?.success === true) {
        toast.success("Category Deleted successfully");
      }
    }
  };

  return (
    <div className="p-5">
      <div className="mx-auto my-5 w-full rounded-xl p-9 max-md:px-4 lg:my-10 lg:p-11 ">
        <h2 className="mb-9 text-center text-2xl font-bold lg:mb-11 lg:text-[28px]">
          Category List
        </h2>
        {isCategoryLoading || isCategoryDeleteLoading ? (
          <Loading />
        ) : categories?.data?.length > 0 ? (
          <table className="w-full  text-sm text-left rtl:text-right dark:text-gray-400 ">
            <thead className="text-xs  uppercase bg-transparent border-b border-gray-600 ">
              <tr>
                <th scope="col" className="px-2 py-3">
                  SL
                </th>
                <th scope="col" className="px-2 py-3">
                  Category Name
                </th>
                <th scope="col" className="px-2 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.data.map(
                (cat: { _id: string; name: string }, i: number) => (
                  <tr key={cat._id} className="bg-transparent border-b  ">
                    <th
                      scope="row"
                      className="px-2 py-4 font-medium dark:text-white"
                    >
                      {calculateSerialNumber(i)}
                    </th>
                    <td className="px-2 py-4">{cat.name}</td>
                    <td className="px-2 py-4">
                      <div className="flex gap-8">
                        <Link to={"/admin/add-category"}>
                          <FontAwesomeIcon
                            onClick={() => dispatch(setCategory(cat))}
                            icon={faEdit}
                            className="hover:text-green-400 duration-300 transition cursor-pointer"
                          />
                        </Link>
                        <FontAwesomeIcon
                          onClick={() => handleDelete(cat?._id)}
                          icon={faTrash}
                          className="hover:text-red-500 duration-300 transition cursor-pointer"
                        />
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        ) : (
          <div className="my-8">
            {" "}
            <h1 className="text-red-600 text-center font-bold border border-red-600 p-2 rounded-lg">
              No Category Found
            </h1>
          </div>
        )}
      </div>

      <Pagination
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={metaData?.limit}
        total={metaData?.total}
        isNextDisabled={isNextDisabled}
      />
    </div>
  );
};
export default AdminCategoryList;
