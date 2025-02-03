/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {
  useGetMeQuery,
  useUpdateUserMutation,
} from "../../../redux/features/users/userApi";
import Loading from "../../Loading";

const UserProfile = () => {
  const {
    data: user,
    isLoading: userLoading,
    refetch,
  } = useGetMeQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const [updateUser, { isLoading: updateUserLoading }] =
    useUpdateUserMutation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (user?.data) {
      setFormData({
        name: user.data.name || "",
        email: user.data.email || "",
        phone: user.data.phone || "",
        address: user.data.address || "",
      });
    }
  }, [user]);

  if (userLoading || updateUserLoading) {
    return <Loading />;
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const updatedData = {
      name: formData.name,
      phone: formData.phone,
      address: formData.address,
    };

    await updateUser(updatedData).unwrap();
    refetch();
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-2xl py-5 ">My Profile</h1>
      </div>

      <form
        onSubmit={handleSubmit}
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
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
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
            value={formData.email}
            disabled
          />
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
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
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
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="rounded  bg-primary  hover:bg-secondary dark:bg-primary text-white px-4 py-2 my-4  transition-all hover:opacity-80 duration-300"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
