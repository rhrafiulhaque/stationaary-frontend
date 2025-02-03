import { useGetAllProductsQuery } from "../../redux/features/product/productApi";
import { TProduct } from "../../redux/features/product/productSlice";
import Loading from "../Loading";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SingleProduct from "./SingleProduct";

const ProductListAll = () => {
  const { data: products, isLoading: productsLoading } = useGetAllProductsQuery(
    { page: 1 }
  );

  if (productsLoading) {
    return <Loading />;
  }
  return (
    <>
      <Navbar />
      <div className=" bg-gray-100 pt-[40px] ">
        <div className="p-4 mx-auto lg:max-w-7xl md:max-w-4xl sm:max-w-xl max-sm:max-w-sm mb-16">
          <h2 className="text-3xl text-center font-bold text-gray-800">
            Explore Our Premium Stationery Collection
          </h2>
          <p className="text-center py-4">
            Browse through our handpicked collection of high-quality <br />{" "}
            stationery products designed to inspire creativity, organization,{" "}
            <br /> and productivity.
          </p>

          {products?.data?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6 mt-[40px]">
              {products?.data?.map((product: TProduct) => (
                <SingleProduct key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <div>
              {" "}
              <h1 className="text-red-600 text-center font-bold border border-red-600 p-2 rounded-lg">
                No Product Found
              </h1>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductListAll;
