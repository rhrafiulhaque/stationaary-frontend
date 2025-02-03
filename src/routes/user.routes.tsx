import {
  faBolt,
  faBox,
  faCarAlt,
  faClipboardList,
  faFolderTree,
  faHome,
  faLayerGroup,
  faList,
  faPen,
  faPeopleGroup,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminDashobardHome from "../components/Dashboard/AdminDashboard/AdminDashobardHome";
import AdminAddBrand from "../components/Dashboard/AdminDashboard/Brand/AdminBrandAdd";
import AdminBrandList from "../components/Dashboard/AdminDashboard/Brand/AdminBrandList";
import AdminAddCategory from "../components/Dashboard/AdminDashboard/Category/AdminAddCategory";
import AdminCategoryList from "../components/Dashboard/AdminDashboard/Category/AdminCategoryList";
import AdminCustomerList from "../components/Dashboard/AdminDashboard/Customer/AdminCustomerList";
import AdminOrderList from "../components/Dashboard/AdminDashboard/Order/AdminOrderList";
import AdminAddProduct from "../components/Dashboard/AdminDashboard/Product/AdminAddProduct";
import AdminProductList from "../components/Dashboard/AdminDashboard/Product/AdminProductList";
import AdminReviewList from "../components/Dashboard/AdminDashboard/Review/AdminReviewList";
import UserDashboardHome from "../components/Dashboard/UserDashboard/UserDashboardHome";
import UserOrderList from "../components/Dashboard/UserDashboard/UserOrder";
import UserProfile from "../components/Dashboard/UserDashboard/UserProfile";

export const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: <FontAwesomeIcon icon={faHome} className="px-2" />,
    element: <UserDashboardHome />,
  },
  {
    name: "Order List",
    path: "order-list",
    element: <UserOrderList />,
    icon: <FontAwesomeIcon icon={faCarAlt} className="px-2" />,
  },
  {
    name: "User Profile",
    path: "profile",
    icon: <FontAwesomeIcon icon={faUser} className="px-2" />,
    element: <UserProfile />,
  },
];
export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: <FontAwesomeIcon icon={faHome} className="px-2" />,
    element: <AdminDashobardHome />,
  },

  {
    name: "Add Product",
    path: "add-product",
    icon: <FontAwesomeIcon icon={faBox} className="px-2" />,
    element: <AdminAddProduct />,
  },
  {
    name: "Product List",
    path: "product-list",
    icon: <FontAwesomeIcon icon={faList} className="px-2" />,
    element: <AdminProductList />,
  },
  {
    name: "Add Brand",
    path: "add-brand",
    icon: <FontAwesomeIcon icon={faBolt} className="px-2" />,
    element: <AdminAddBrand />,
  },
  {
    name: "Brand List",
    path: "brand-list",
    icon: <FontAwesomeIcon icon={faList} className="px-2" />,
    element: <AdminBrandList />,
  },
  {
    name: "Add Category",
    path: "add-category",
    icon: <FontAwesomeIcon icon={faLayerGroup} className="px-2" />,
    element: <AdminAddCategory />,
  },
  {
    name: "Category List",
    path: "category-list",
    icon: <FontAwesomeIcon icon={faClipboardList} className="px-2" />,
    element: <AdminCategoryList />,
  },

  {
    name: "Order List",
    path: "order-list",
    icon: <FontAwesomeIcon icon={faFolderTree} className="px-2" />,
    element: <AdminOrderList />,
  },
  {
    name: "Customer List",
    path: "customer-list",
    icon: <FontAwesomeIcon icon={faPeopleGroup} className="px-2" />,
    element: <AdminCustomerList />,
  },
  {
    name: "Review List",
    path: "review-list",
    icon: <FontAwesomeIcon icon={faPen} className="px-2" />,
    element: <AdminReviewList />,
  },
];
