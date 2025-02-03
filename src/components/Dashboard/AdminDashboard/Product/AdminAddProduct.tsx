/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAppSelector } from "../../../../hooks/hooks";
import { useGetAllBrandsQuery } from "../../../../redux/features/brand/brandApi";
import { TBrand } from "../../../../redux/features/brand/brandSlice";
import { useGetAllCategoriesQuery } from "../../../../redux/features/category/categoryApi";
import { TCategory } from "../../../../redux/features/category/categorySlice";
import {
  useAddProductMutation,
  useUpdateProductMutation,
} from "../../../../redux/features/product/productApi";
import {
  clearProduct,
  TProduct,
} from "../../../../redux/features/product/productSlice";
import Loading from "../../../Loading";
import { TProductList } from "./AdminProductList";

const AdminAddProduct = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TProduct>();
  const navigate = useNavigate();

  const [addProduct, { isLoading: isAddProductLoading }] =
    useAddProductMutation();
  const { data: brands, isLoading: isBrandLoading } = useGetAllBrandsQuery({
    page: 1,
  });
  const { data: categories, isLoading: isCategoryLoading } =
    useGetAllCategoriesQuery({
      page: 1,
    });

  const [updateProduct, { isLoading: updateProductLoading }] =
    useUpdateProductMutation();
  const dispatch = useDispatch();

  const selectedProduct = useAppSelector(
    (state) => state.product
  ) as TProductList;
  const isEditMode = !!selectedProduct?._id;
  useEffect(() => {
    if (isEditMode && selectedProduct) {
      setValue("name", selectedProduct?.name || "");
      setValue("brand", selectedProduct?.brand?._id || "");
      setValue("price", selectedProduct?.price || null);
      setValue("category", selectedProduct?.category?._id || "");
      setValue("description", selectedProduct?.description || "");
      setValue("image", selectedProduct?.image || "");
      setValue("stock", selectedProduct?.stock || null);
      if (selectedProduct?.image) {
        setValue("image", selectedProduct?.image);
      }
    }
  }, [isEditMode, selectedProduct, setValue]);



  const submitForm = async (formData: TProduct) => {
    const toastId = toast.loading(
      isEditMode ? "Updating Product..." : "Adding Product..."
    );

    const data = new FormData();

    // Append the form fields to the FormData object
    data.append("name", formData.name || "");
    data.append("price", formData.price?.toString() || "");
    data.append("stock", formData.stock?.toString() || "");
    data.append("brand", formData.brand || "");
    data.append("category", formData.category || "");
    data.append("description", formData.description || "");

    //image upload
    if (formData.image && formData.image[0]) {
      data.append("image", formData.image[0]);
    }

    try {
      if (isEditMode) {
        const result = await updateProduct({
          productId: selectedProduct._id,
          data: formData,
        }).unwrap();
        if (result.success === true) {
          toast.success("Product Updated Successfull", {
            id: toastId,
            duration: 2000,
          });
        }
        dispatch(clearProduct());
        navigate("/admin/product-list");
      } else {
        await addProduct(data).unwrap();
        toast.success("Product Added Successfully", {
          id: toastId,
          duration: 2000,
        });
        navigate("/admin/product-list");
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  if (
    updateProductLoading ||
    isAddProductLoading ||
    isBrandLoading ||
    isCategoryLoading
  ) {
    return <Loading />;
  }

  return (
    <div className="p-5">
      <div className="mx-auto my-5 w-full max-w-[740px] rounded-xl border border-[#3e3e41]  p-9 max-md:px-4 lg:my-10 lg:p-11 ">
        <h2 className="mb-9 text-center text-2xl font-bold  lg:mb-11 lg:text-[28px]">
          {isEditMode ? "Edit" : "Create"} Product
        </h2>

        <div className="space-y-9  lg:space-y-10">
          <form
            encType="multipart/form-data"
            onSubmit={handleSubmit(submitForm)}
            className="space-y-2 lg:space-y-3"
          >
            <label htmlFor="name">Product</label>
            <input
              className="block w-full rounded-md border border-gray-600 bg-transparent  px-3 py-2.5"
              type="text"
              id="name"
              required
              {...register("name", {
                required: "Name is Required",
              })}
            />
            {!!errors.name && (
              <div role="alert" className="text-red-600">
                {typeof errors.name?.message === "string" && (
                  <span>{errors.name.message}</span>
                )}
              </div>
            )}

            <div className="flex gap-9">
              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="price">Price</label>
                <input
                  className="block w-full rounded-md border border-gray-600 bg-transparent  px-3 py-2.5"
                  type="number"
                  id="price"
                  required
                  {...register("price", {
                    required: "Price is Required",
                  })}
                />
                {!!errors.price && (
                  <div role="alert" className="text-red-600">
                    {typeof errors.price?.message === "string" && (
                      <span>{errors.price.message}</span>
                    )}
                  </div>
                )}
              </div>

              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="stock">stock</label>
                <input
                  className="block w-full rounded-md border border-gray-600 bg-transparent  px-3 py-2.5"
                  type="number"
                  id="stock"
                  required
                  {...register("stock", {
                    required: "stock is Required",
                  })}
                />
                {!!errors.stock && (
                  <div role="alert" className="text-red-600">
                    {typeof errors.stock?.message === "string" && (
                      <span>{errors.stock.message}</span>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="brand">Brand</label>
              <select
                className="block w-full cursor-pointer rounded-md  border border-gray-600   px-3 py-2.5"
                id="brand"
                required
                {...register("brand", {
                  required: "Brand is Required",
                })}
              >
                <option value="">Select Option</option>
                {brands?.data?.map((brand: TBrand) => (
                  <option
                    key={brand._id}
                    value={brand._id || ""}
                    selected={selectedProduct?.brand?._id === brand._id}
                  >
                    {brand.name}
                  </option>
                ))}
              </select>
              {!!errors.brand && (
                <div role="alert" className="text-red-600">
                  {typeof errors.brand?.message === "string" && (
                    <span>{errors.brand.message}</span>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="category">Category</label>
              <select
                className="block w-full cursor-pointer rounded-md  border border-gray-600   px-3 py-2.5"
                id="category"
                required
                {...register("category", {
                  required: "Category is Required",
                })}
              >
                <option value="">Select Option</option>
                {categories?.data?.map((cat: TCategory) => (
                  <option
                    key={cat._id}
                    value={cat._id || ""}
                    selected={cat?._id === selectedProduct?.category?._id}
                  >
                    {cat.name}
                  </option>
                ))}
              </select>
              {!!errors.category && (
                <div role="alert" className="text-red-600">
                  {typeof errors.category?.message === "string" && (
                    <span>{errors.category.message}</span>
                  )}
                </div>
              )}
            </div>
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="description">Description</label>
              <textarea
                className="block bg-transparent border border-gray-600 min-h-[120px] w-full rounded-md  px-3 py-2.5 lg:min-h-[180px]"
                id="description"
                required
                {...register("description", {
                  required: "Description is Required",
                })}
              ></textarea>
              {!!errors.description && (
                <div role="alert" className="text-red-600">
                  {typeof errors.description?.message === "string" && (
                    <span>{errors.description.message}</span>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="image">Product Image</label>
              {isEditMode && selectedProduct?.image && (
                <div>
                  <img
                    src={selectedProduct.image}
                    alt="Current Product"
                    className="w-32 h-32 object-cover mb-4"
                  />
                </div>
              )}
              {!isEditMode && (
                <input
                  className="block w-full rounded-md border border-gray-600 bg-transparent  px-3 py-2.5"
                  type="file"
                  id="image"
                  accept="image/*"
                  required
                  {...register("image")}
                />
              )}
              {!!errors.image && (
                <div role="alert" className="text-red-600">
                  {typeof errors.image?.message === "string" && (
                    <span>{errors.image.message}</span>
                  )}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="rounded  bg-primary  hover:bg-secondary dark:bg-primary text-white px-4 py-2 my-4  transition-all hover:opacity-80 duration-300"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAddProduct;
