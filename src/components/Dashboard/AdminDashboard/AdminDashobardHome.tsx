import {
  faBoxArchive,
  faCartShopping,
  faFolderTree,
  faPeopleCarryBox,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetAllBrandsQuery } from "../../../redux/features/brand/brandApi";
import { useGetAllCategoriesQuery } from "../../../redux/features/category/categoryApi";
import { useGetAllOrdersQuery } from "../../../redux/features/order/orderApi";
import { useGetAllProductsQuery } from "../../../redux/features/product/productApi";
import { useGetAllUsersQuery } from "../../../redux/features/users/userApi";
import Loading from "../../Loading";

const AdminDashobardHome = () => {
  const { data: orders, isLoading: orderLoading } = useGetAllOrdersQuery(
    {
      page: 1,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const { data: products, isLoading: productsLoading } = useGetAllProductsQuery(
    {
      page: 1,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  const { data: brands, isLoading: brandsLoading } = useGetAllBrandsQuery(
    {
      page: 1,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  const { data: categories, isLoading: categoriesLoading } =
    useGetAllCategoriesQuery(
      {
        page: 1,
      },
      {
        refetchOnMountOrArgChange: true,
      }
    );
  const { data: users, isLoading: usersLoading } = useGetAllUsersQuery(
    {
      page: 1,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  if (
    orderLoading ||
    productsLoading ||
    brandsLoading ||
    categoriesLoading ||
    usersLoading
  ) {
    return <Loading />;
  }
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-6 mt-5">
        <div className="bg-white rounded-xl flex py-5 px-5 ">
          <FontAwesomeIcon
            icon={faBoxArchive}
            className="text-2xl  bg-[#D9F3EA] p-4 rounded-full "
          />
          <div className="pl-[15px]">
            <h1 className="text-3xl font-bold">{products?.data?.length}</h1>
            <p className="text-xl">Total Products</p>
          </div>
        </div>
        <div className="bg-white rounded-xl flex py-5 px-5 ">
          <FontAwesomeIcon
            icon={faPeopleGroup}
            className="text-2xl  bg-[#D9F3EA] p-4 rounded-full "
          />
          <div className="pl-[15px]">
            <h1 className="text-3xl font-bold">{users?.data?.length}</h1>
            <p className="text-xl">Total Users</p>
          </div>
        </div>
        <div className="bg-white rounded-xl flex py-5 px-5 ">
          <FontAwesomeIcon
            icon={faPeopleCarryBox}
            className="text-2xl  bg-[#D9F3EA] p-4 rounded-full "
          />
          <div className="pl-[15px]">
            <h1 className="text-3xl font-bold">{orders?.data?.length}</h1>
            <p className="text-xl">Total Orders</p>
          </div>
        </div>
        <div className="bg-white rounded-xl flex py-5 px-5 ">
          <FontAwesomeIcon
            icon={faFolderTree}
            className="text-2xl  bg-[#D9F3EA] p-4 rounded-full "
          />
          <div className="pl-[15px]">
            <h1 className="text-3xl font-bold">{brands?.data?.length}</h1>
            <p className="text-xl">Total Brands</p>
          </div>
        </div>
        <div className="bg-white rounded-xl flex py-5 px-5 ">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-2xl  bg-[#D9F3EA] p-4 rounded-full "
          />
          <div className="pl-[15px]">
            <h1 className="text-3xl font-bold">{categories?.data?.length}</h1>
            <p className="text-xl">Total Categories</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashobardHome;
