import { faDochub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetAllOrdersQuery } from "../../../redux/features/order/orderApi";
import Loading from "../../Loading";

const UserDashboardHome = () => {
  const { data: orders, isLoading: orderLoading } = useGetAllOrdersQuery(
    {
      page: 1,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  if (orderLoading) {
    return <Loading />;
  }
  return (
    <div className="p-5  ">
      <div className="mx-auto  w-full rounded-xl p-9 max-md:px-4  ">
        <h2 className="mb-9 text-center text-2xl font-bold lg:mb-11 lg:text-[28px]">
          Welcome to user Home Page
        </h2>

        <div className="bg-white rounded-xl flex py-5 px-5 ">
          <FontAwesomeIcon
            icon={faDochub}
            className="text-2xl  bg-[#D9F3EA] p-4 rounded-full "
          />
          <div className="pl-[15px]">
            <h1 className="text-3xl font-bold">{orders?.data?.length}</h1>
            <p className="text-xl">Total Orders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardHome;
