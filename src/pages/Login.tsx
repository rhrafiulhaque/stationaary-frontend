/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Navbar from "../components/HomePage/Navbar";
import { useAppDispatch } from "../hooks/hooks";
import { useLoginMutation } from "../redux/features/authApi";
import { setUser, TUser } from "../redux/features/authSlice";
import { TFormData } from "../types/formData.type";
import { verifyToken } from "../utils/verifyToken";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const submitForm = async (formData: TFormData) => {
    const toastId = toast.loading("Logging the User...");

    try {
      const res = await login(formData).unwrap();
      const user = verifyToken(res.data.token) as TUser;
      localStorage.setItem(
        "auth",
        JSON.stringify({ user, token: res.data.token })
      );

      dispatch(setUser({ user: user, token: res.data.token }));
      toast.success("Logging Successfull", { id: toastId, duration: 2000 });
      if (user.role === "admin") {
        navigate("/admin/dashboard");
      } else if (user.role === "user") {
        navigate("/");
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <>
      <Navbar />
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
                    'url("https://static.vecteezy.com/system/resources/previews/025/481/237/non_2x/felt-tip-pens-scissors-ruler-and-notepad-for-drawing-or-writing-stationery-on-abstract-blue-background-concept-of-back-to-school-education-copy-space-photo.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              {/* <!-- Col --> */}
              <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">
                  Log In
                </h3>
                <form
                  onSubmit={handleSubmit(submitForm)}
                  className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded"
                >
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
                      htmlFor="email"
                    >
                      Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
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

                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-primary rounded-full hover:bg-secondary dark:bg-primary dark:text-white dark:hover:bg-primary focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Submit
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
                      to={"/signup"}
                      className="inline-block text-sm text-primary dark:text-primary align-baseline hover:text-secondary"
                    >
                      Have not an account? Register
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
