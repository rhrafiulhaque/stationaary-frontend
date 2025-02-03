import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useAppDispatch } from "../../../../hooks/hooks";
import {
  useDeleteProductsMutation,
  useGetAllProductsQuery,
} from "../../../../redux/features/product/productApi";
import { setProduct } from "../../../../redux/features/product/productSlice";
import Loading from "../../../Loading";
import Pagination from "../../../Pagination";

export type TProductList = {
  _id?: string | null;
  name: string | null;
  brand: { _id: string; name: string } | null;
  price: string | null;
  category: { _id: string; name: string } | null;
  description: string | null;
  image: string | null;
  stock: string | null;
};

const AdminProductList = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const { data: products, isLoading: isProductLoading } =
    useGetAllProductsQuery({
      page,
    });

  const [deleteProduct, { isLoading: isProductDeleteLoading }] =
    useDeleteProductsMutation();

  const metaData = products?.meta;

  // Searching next page is disable or not
  const isNextDisabled = products?.data.length < metaData?.limit;

  // Calculate the serial number
  const calculateSerialNumber = (index: number) => {
    return (page - 1) * metaData?.limit + (index + 1);
  };

  const handleDelete = async (productId: string) => {
    const confirmDelete = confirm("Are you sure to delete this?");
    if (confirmDelete) {
      const result = await deleteProduct(productId).unwrap();
      if (result?.success === true) {
        toast.success("Product Deleted successfully");
      }
    }
  };

  return (
    <div className="p-5">
      <div className="mx-auto my-5 w-full rounded-xl p-9 max-md:px-4 lg:my-10 lg:p-11 ">
        <h2 className="mb-9 text-center text-2xl font-bold lg:mb-11 lg:text-[28px]">
          Product List
        </h2>
        {isProductLoading || isProductDeleteLoading ? (
          <Loading />
        ) : products?.data?.length > 0 ? (
          <table className="w-full  text-sm text-left rtl:text-right dark:text-gray-400 ">
            <thead className="text-xs  uppercase bg-transparent border-b border-gray-600 ">
              <tr>
                <th scope="col" className="px-2 py-3">
                  SL
                </th>
                <th scope="col" className="px-2 py-3">
                  Image
                </th>
                <th scope="col" className="px-2 py-3">
                  Name
                </th>
                <th scope="col" className="px-2 py-3">
                  Price
                </th>
                <th scope="col" className="px-2 py-3">
                  Brand
                </th>
                <th scope="col" className="px-2 py-3">
                  Category
                </th>
                <th scope="col" className="px-2 py-3">
                  stock
                </th>
                <th scope="col" className="px-2 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.data.map((product: TProductList, i: number) => (
                <tr key={product._id} className="bg-transparent border-b  ">
                  <th
                    scope="row"
                    className="px-2 py-4 font-medium dark:text-white"
                  >
                    {calculateSerialNumber(i)}
                  </th>
                  <td className="px-2 py-4">
                    <img
                      className={"w-4 h-4"}
                      src={product?.image ?? ""}
                      alt={product?.name ?? "Product Image"}
                    />
                  </td>
                  <td className="px-2 py-4">{product.name}</td>
                  <td className="px-2 py-4">{product.price}</td>
                  <td className="px-2 py-4">{product.brand!.name}</td>
                  <td className="px-2 py-4">{product.category!.name}</td>
                  <td className="px-2 py-4">{product.stock}</td>
                  <td className="px-2 py-4">
                    <div className="flex gap-8">
                      <Link to={"/admin/add-product"}>
                        <FontAwesomeIcon
                          onClick={() => dispatch(setProduct(product))}
                          icon={faEdit}
                          className="hover:text-green-400 duration-300 transition cursor-pointer"
                        />
                      </Link>
                      <FontAwesomeIcon
                        onClick={() => product._id && handleDelete(product._id)}
                        icon={faTrash}
                        className="hover:text-red-500 duration-300 transition cursor-pointer"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="my-8">
            {" "}
            <h1 className="text-red-600 text-center font-bold border border-red-600 p-2 rounded-lg">
              No Products Found
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
export default AdminProductList;
