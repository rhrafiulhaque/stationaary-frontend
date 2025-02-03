import { useSearchParams } from "react-router-dom";
import Navbar from "../components/HomePage/Navbar";
import Loading from "../components/Loading";
import { useVerifyOrderQuery } from "../redux/features/order/orderApi";

interface OrderData {
  id: number;
  order_id: string;
  currency: string;
  amount: number;
  payable_amount: number;
  discsount_amount: number | null;
  disc_percent: number;
  received_amount: string;
  usd_amt: number;
  usd_rate: number;
  is_verify: number;
  card_holder_name: string | null;
  card_number: string | null;
  phone_no: string;
  bank_trx_id: string;
  invoice_no: string;
  bank_status: string;
  customer_order_id: string;
  sp_code: string;
  sp_message: string;
  name: string;
  email: string;
  address: string;
  city: string;
  value1: string | null;
  value2: string | null;
  value3: string | null;
  value4: string | null;
  transaction_status: string | null;
  method: string;
  date_time: string;
}

export default function VerifyOrder() {
  const [searchParams] = useSearchParams();

  const { isLoading, data } = useVerifyOrderQuery(
    searchParams.get("order_id"),
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const orderData: OrderData = data?.data?.[0];

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Order Verification</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Order Details */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Order Details</h2>
            <dl className="grid grid-cols-2 gap-2">
              <dt className="font-semibold text-gray-700">Order ID:</dt>
              <dd className="text-gray-500">{orderData?.order_id}</dd>
              <dt className="font-semibold text-gray-700">Amount:</dt>
              <dd className="text-gray-500">
                {orderData?.currency} {orderData?.amount?.toFixed(2)}
              </dd>
              <dt className="font-semibold text-gray-700">Status:</dt>
              <dd>
                <span
                  className={`${
                    orderData?.bank_status === "Success"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  } inline-block px-2 py-1 text-sm rounded-full`}
                >
                  {orderData?.bank_status}
                </span>
              </dd>
              <dt className="font-semibold text-gray-700">Date:</dt>
              <dd className="text-gray-500">
                {new Date(orderData?.date_time)?.toLocaleString()}
              </dd>
            </dl>
          </div>

          {/* Payment Information */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
            <dl className="grid grid-cols-2 gap-2">
              <dt className="font-semibold text-gray-700">Method:</dt>
              <dd className="text-gray-500">{orderData?.method}</dd>
              <dt className="font-semibold text-gray-700">Transaction ID:</dt>
              <dd className="text-gray-500">{orderData?.bank_trx_id}</dd>
              <dt className="font-semibold text-gray-700">Invoice No:</dt>
              <dd className="text-gray-500">{orderData?.invoice_no}</dd>
              <dt className="font-semibold text-gray-700">SP Code:</dt>
              <dd className="text-gray-500">{orderData?.sp_code}</dd>
              <dt className="font-semibold text-gray-700">SP Message:</dt>
              <dd className="text-gray-500">{orderData?.sp_message}</dd>
            </dl>
          </div>

          {/* Customer Information */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Customer Information</h2>
            <dl className="grid grid-cols-2 gap-2">
              <dt className="font-semibold text-gray-700">Name:</dt>
              <dd className="text-gray-500">{orderData?.name}</dd>
              <dt className="font-semibold text-gray-700">Email:</dt>
              <dd className="text-gray-500">{orderData?.email}</dd>
              <dt className="font-semibold text-gray-700">Phone:</dt>
              <dd className="text-gray-500">{orderData?.phone_no}</dd>
              <dt className="font-semibold text-gray-700">Address:</dt>
              <dd className="text-gray-500">{orderData?.address}</dd>
              <dt className="font-semibold text-gray-700">City:</dt>
              <dd className="text-gray-500">{orderData?.city}</dd>
            </dl>
          </div>

          {/* Verification Status
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Verification Status</h2>
            <div className="flex items-center gap-2">
              {orderData?.is_verify === 1 ? (
                <>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500"
                  />
                  <span className="text-green-500">Verified</span>
                </>
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faCircleNodes}
                    className="text-yellow-500"
                  />
                  <span className="text-yellow-500">Not Verified</span>
                </>
              )}
            </div>
            <div className="mt-4">
              <Link to="/order">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                  View Orders
                </button>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
