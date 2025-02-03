import { useState } from "react";
import { toast } from "sonner";
import {
  useBlockUserMutation,
  useGetAllUsersQuery,
} from "../../../../redux/features/users/userApi";
import Loading from "../../../Loading";
import Pagination from "../../../Pagination";

export type TUser = {
  _id: string;
  address: string | null;
  email: string | null;
  isBlocked: boolean;
  name: string | null;
  phone: string | null;
  profilePhoto: string | null;
  role: string | null;
};

const AdminCustomerList = () => {
  const [page, setPage] = useState(1);
  const { data: users, isLoading: isUsersLoading } = useGetAllUsersQuery({
    page,
  });

  const [blockUser, { isLoading: blockUserLoading }] = useBlockUserMutation();

  const metaData = users?.meta;

  // Searching next page is disable or not
  const isNextDisabled = users?.data?.length < metaData?.limit;

  // Calculate the serial number
  const calculateSerialNumber = (index: number) => {
    return (page - 1) * metaData?.limit + (index + 1);
  };

  const handleBlockUser = async (userId: string, isBlock: boolean) => {
    const confirmBlock = confirm(
      `Are you sure to ${!isBlock ? "block" : "unblocked"} this user?`
    );
    if (confirmBlock) {
      const data = { isBlocked: !isBlock };
      const result = await blockUser({ userId, data }).unwrap();
      if (result?.success === true) {
        toast.success(
          `${
            result?.data?.isBlocked
              ? "User Blocked Successfully"
              : "User Unblocked Successfully"
          }`
        );
      }
    }
  };

  return (
    <div className="p-5">
      <div className="mx-auto my-5 w-full rounded-xl p-9 max-md:px-4 lg:my-10 lg:p-11 ">
        <h2 className="mb-9 text-center text-2xl font-bold lg:mb-11 lg:text-[28px]">
          User List
        </h2>
        {isUsersLoading || blockUserLoading ? (
          <Loading />
        ) : users?.data?.length > 0 ? (
          <table className="w-full  text-sm text-left rtl:text-right dark:text-gray-400 ">
            <thead className="text-xs  uppercase bg-transparent border-b border-gray-600 ">
              <tr>
                <th scope="col" className="px-2 py-3">
                  SL
                </th>
                <th scope="col" className="px-2 py-3">
                  Name
                </th>
                <th scope="col" className="px-2 py-3">
                  Email
                </th>
                <th scope="col" className="px-2 py-3">
                  Phone
                </th>
                <th scope="col" className="px-2 py-3">
                  Status
                </th>
                <th scope="col" className="px-2 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.data?.map((user: TUser, i: number) => (
                <tr key={user._id} className="bg-transparent border-b  ">
                  <th
                    scope="row"
                    className="px-2 py-4 font-medium dark:text-white"
                  >
                    {calculateSerialNumber(i)}
                  </th>
                  <td className="px-2 py-4">{user.name}</td>
                  <td className="px-2 py-4">{user.email}</td>
                  <td className="px-2 py-4">{user.phone}</td>
                  <td className="px-2 py-4">{`${
                    user.isBlocked ? "Blocked" : "Active"
                  }`}</td>
                  <td className="px-2 py-4">
                    <div className="flex gap-8">
                      <button
                        className="border border-red-300 bg-red-300  p-2 rounded text-red-500"
                        onClick={() =>
                          handleBlockUser(user?._id, user?.isBlocked)
                        }
                      >
                        {user.isBlocked ? "Unblock" : "Block"}{" "}
                      </button>
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
              No Users Found
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
export default AdminCustomerList;
