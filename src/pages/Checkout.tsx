import { useEffect } from "react";
import { toast } from "sonner";
import Footer from "../components/HomePage/Footer";
import Navbar from "../components/HomePage/Navbar";
import { useAppSelector } from "../hooks/hooks";
import { useCreateOrderMutation } from "../redux/features/order/orderApi";

const Checkout = () => {
  const carts = useAppSelector((state) => state.cart);
  const [createOrder, { isLoading, isSuccess, data, isError, error }] =
    useCreateOrderMutation();

  const handleSubmit = async () => {
    await createOrder(carts);
  };

  const toastId = "cart";
  useEffect(() => {
    if (isLoading) toast.loading("Processing ...", { id: toastId });

    if (isSuccess) {
      toast.success(data?.message, { id: toastId });
      if (data?.data) {
        setTimeout(() => {
          window.location.href = data.data;
        }, 1000);
      }
    }

    if (isError) toast.error(JSON.stringify(error), { id: toastId });
  }, [data?.data, data?.message, error, isError, isLoading, isSuccess]);
  const subTotal = carts.reduce((acc, cart) => {
    return acc + (cart.productTotalPrice ?? 0);
  }, 0);

  return (
    <div>
      <Navbar />
      <div className=" lg:flex lg:items-center w-full bg-gray-200  lg:justify-center max-lg:py-4">
        <div className="p-8 container mx-auto rounded-md">
          <h2 className="text-3xl font-extrabold text-gray-800 text-center">
            Checkout
          </h2>

          <div className="grid lg:grid-cols-3 gap-6 max-lg:gap-8 mt-16">
            <div className="lg:col-span-2">
              <h3 className="text-lg font-bold text-gray-800">
                Choose your payment method
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 mt-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    className="w-5 h-5 cursor-pointer"
                    id="card"
                    checked
                  />
                  <label
                    htmlFor="card"
                    className="ml-4 flex gap-2 cursor-pointer"
                  >
                    <img
                      src="https://sslcommerz.com/wp-content/uploads/2021/11/logo.png"
                      alt="card1"
                    />
                  </label>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => handleSubmit()}
                  type="button"
                  className=" list-none px-4 py-2 text-sm rounded-full cursor-pointer text-white border-2 border-[#ff3459] bg-[#E84F6A] hover:bg-[#e84f57]"
                >
                  {" "}
                  Pay Now
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-md max-lg:-order-1">
              <h3 className="text-lg font-bold text-gray-800">Summary</h3>
              <ul className="text-gray-800 mt-6 space-y-3">
                <li className="flex flex-wrap gap-4 text-sm">
                  Sub total{" "}
                  <span className="ml-auto font-bold">${subTotal}.00</span>
                </li>
                <li className="flex flex-wrap gap-4 text-sm">
                  Discount
                  <span className="ml-auto font-bold">$0.00</span>
                </li>
                <li className="flex flex-wrap gap-4 text-sm">
                  Tax <span className="ml-auto font-bold">$0.00</span>
                </li>
                <hr />
                <li className="flex flex-wrap gap-4 text-base font-bold">
                  Total <span className="ml-auto">${subTotal}.00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
