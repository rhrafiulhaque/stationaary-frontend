/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAppSelector } from "../../../../hooks/hooks";
import {
  useAddBrandMutation,
  useUpdateBrandMutation,
} from "../../../../redux/features/brand/brandApi";
import { clearBrand } from "../../../../redux/features/brand/brandSlice";
import Loading from "../../../Loading";

const AdminAddBrand = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<{ name: string }>();
  const navigate = useNavigate();

  const [addBrand] = useAddBrandMutation();
  const [updateBrand, { isLoading: updateBrandLoading }] =
    useUpdateBrandMutation();
  const dispatch = useDispatch();

  const selectedBrand = useAppSelector((state) => state.brand);
  let isEditMode: boolean;
  if (selectedBrand?._id === null && selectedBrand?.name === null) {
    isEditMode = false;
  } else {
    isEditMode = true;
  }

  useEffect(() => {
    if (isEditMode && selectedBrand) {
      setValue("name", selectedBrand?.name || "");
    }
  }, [isEditMode, selectedBrand, setValue]);

  const submitForm = async (formData: { name: string }) => {
    const toastId = toast.loading("Adding Brand...");
    try {
      if (isEditMode) {
        const result = await updateBrand({
          brandId: selectedBrand._id,
          data: formData,
        }).unwrap();
        if (result.success === true) {
          toast.success("Brand Updated Successfull", {
            id: toastId,
            duration: 2000,
          });
        }
        dispatch(clearBrand());
        navigate("/admin/brand-list");
      } else {
        await addBrand(formData).unwrap();
        toast.success("Brand Added Successfull", {
          id: toastId,
          duration: 2000,
        });
        navigate("/admin/brand-list");
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  if (updateBrandLoading) {
    return <Loading />;
  }

  return (
    <div className="p-5">
      <div className="mx-auto my-5 w-full max-w-[740px] rounded-xl border border-[#3e3e41]  p-9 max-md:px-4 lg:my-10 lg:p-11 ">
        <h2 className="mb-9 text-center text-2xl font-bold  lg:mb-11 lg:text-[28px]">
          {isEditMode ? "Edit" : "Create"} Brand
        </h2>

        <div className="space-y-9  lg:space-y-10">
          <form
            onSubmit={handleSubmit(submitForm)}
            className="space-y-2 lg:space-y-3"
          >
            <label htmlFor="name">Brand</label>
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

export default AdminAddBrand;
