/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useRegisterUserMutation } from "../redux/features/authApi";
import { TFormData } from "../types/formData.type";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>();
  const navigate = useNavigate();
  const [registerUser] = useRegisterUserMutation();

  const submitForm = async (formData: TFormData) => {
    const toastId = toast.loading("Registering the User...");

    try {
      await registerUser(formData).unwrap();
      toast.success("Register Successfull", { id: toastId, duration: 2000 });
      navigate("/login");
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="h-full bg-gray-400 dark:bg-gray-900">
      {/* <!-- Container --> */}
      <div className="mx-auto">
        <div className="flex justify-center px-6 py-12">
          {/* <!-- Row --> */}
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            {/* <!-- Col --> */}
            <div
              className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage:
                  'url("https://png.pngtree.com/background/20250122/original/pngtree-stationery-objects-school-and-office-supplies-picture-image_15573064.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            {/* <!-- Col --> */}
            <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
              <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">
                Create an Account!
              </h3>
              <form
                onSubmit={handleSubmit(submitForm)}
                className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded space-y-4"
              >
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Name"
                    {...register("name", {
                      required: "Name is Required",
                      pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Only alphabetic letters are accepted",
                      },
                    })}
                  />
                  {!!errors.name && (
                    <div role="alert" className="text-red-600">
                      {typeof errors.name?.message === "string" && (
                        <span>{errors.name.message}</span>
                      )}
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is Required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email",
                      },
                    })}
                  />
                  {!!errors.email && (
                    <div role="alert" className="text-red-600">
                      {typeof errors.email?.message === "string" && (
                        <span>{errors.email.message}</span>
                      )}
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="number"
                    placeholder="Phone"
                    {...register("phone", {
                      required: "Phone is Required",
                    })}
                  />
                  {!!errors.phone && (
                    <div role="alert" className="text-red-600">
                      {typeof errors.phone?.message === "string" && (
                        <span>{errors.phone.message}</span>
                      )}
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is Required",
                    })}
                  />
                  {!!errors.password && (
                    <div role="alert" className="text-red-600">
                      {typeof errors.password?.message === "string" && (
                        <span>{errors.password.message}</span>
                      )}
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    htmlFor="address"
                  >
                    Address
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="address"
                    type="text"
                    placeholder="Address"
                    {...register("address", {
                      required: "Address is Required",
                    })}
                  />
                  {!!errors.name && (
                    <div role="alert" className="text-red-600">
                      {typeof errors.password?.message === "string" && (
                        <span>{errors.password.message}</span>
                      )}
                    </div>
                  )}
                </div>

                {/* Profile Photo */}
                {/* <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    htmlFor="profilePhoto"
                  >
                    Profile Photo
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="profilePhoto"
                    type="file"
                    placeholder="Profile Photo"
                  />
                </div> */}

                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-primary rounded-full hover:bg-secondary dark:bg-primary dark:text-white dark:hover:bg-secondary focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Register Account
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-primary dark:text-primary align-baseline hover:text-secondary"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-primary dark:text-primary align-baseline hover:text-secondary"
                    to={"/login"}
                  >
                    Already have an account? Login!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
