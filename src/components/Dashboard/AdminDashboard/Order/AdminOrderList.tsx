import { useState } from "react";
import {
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
} from "../../../../redux/features/order/orderApi";
import { TOrder } from "../../../../types/formData.type";
import Loading from "../../../Loading";
import Pagination from "../../../Pagination";

const AdminOrderList = () => {
  const [page, setPage] = useState(1);

  const { data: orders, isLoading: orderLoading } = useGetAllOrdersQuery(
    {
      page,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const [updateOrderStatus, { isLoading: updateLoading }] =
    useUpdateOrderStatusMutation();
  const metaData = orders?.meta;

  // Searching next page is disable or not
  const isNextDisabled = orders?.data.length < metaData?.limit;

  // Calculate the serial number
  const calculateSerialNumber = (index: number) => {
    return (page - 1) * metaData?.limit + (index + 1);
  };

  if (orderLoading || updateLoading) {
    return <Loading />;
  }

  const handleStatusChange = (orderId: string, newStatus: string) => {
    updateOrderStatus({ id: orderId, data: { status: newStatus } });
  };
  return (
    <div className="p-5  ">
      <div className="mx-auto  w-full rounded-xl p-9 max-md:px-4  ">
        <h2 className="mb-9 text-center text-2xl font-bold lg:mb-11 lg:text-[28px]">
          Order List
        </h2>

        {orders?.data?.length > 0 ? (
          <table className="mx-auto text-sm text-left rtl:text-right dark:text-gray-400 ">
            <thead className="text-xs  uppercase bg-transparent border-b border-white ">
              <tr>
                <th scope="col" className="px-2 py-3">
                  SL
                </th>
                <th scope="col" className="px-2 py-3">
                  Order Id
                </th>
                <th scope="col" className="px-2 py-3">
                  Total Price
                </th>
                <th scope="col" className="px-2 py-3">
                  Customer Name
                </th>
                <th scope="col" className="px-2 py-3">
                  Customer Email
                </th>
                <th scope="col" className="px-2 py-3">
                  Transaction ID
                </th>
                <th scope="col" className="px-2 py-3">
                  Order Date
                </th>
                <th scope="col" className="px-2 py-3">
                  Order Status
                </th>
              </tr>
            </thead>
            <tbody>
              {orders?.data?.map((order: TOrder, i: number) => (
                <tr key={order._id} className="bg-transparent border-b  ">
                  <th
                    scope="row"
                    className="px-2 py-4 font-medium dark:text-white"
                  >
                    {calculateSerialNumber(i)}
                  </th>
                  <td className="px-2 py-4">{order._id}</td>
                  <td className="px-2 py-4">{order.totalPrice}</td>
                  <td className="px-2 py-4">{order?.user?.name}</td>
                  <td className="px-2 py-4">{order?.user?.email}</td>
                  <td className="px-2 py-4">{order?.transaction?.id}</td>
                  <td className="px-2 py-4">
                    {new Date(order?.createdAt)?.toLocaleString()}
                  </td>
                  <td className="px-2 py-4">
                    <select
                      className="block w-full cursor-pointer rounded-md border border-gray-600 px-3 py-2.5"
                      value={order?.status}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                    >
                      <option value="">Select Option</option>
                      <option value="Paid">Paid</option>
                      <option value="Pending">Pending</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="my-8">
            {" "}
            <h1 className="text-red-600 text-center font-bold border border-red-600 p-2 rounded-lg">
              No Order Found
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

export default AdminOrderList;
