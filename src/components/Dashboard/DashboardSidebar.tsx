import { faPowerOff, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { logout, TUser, useCurrentUser } from "../../redux/features/authSlice";
import { adminPaths, userPaths } from "../../routes/user.routes";

interface DashboardSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  sidebarOpen,
  setSidebarOpen,
}) => {
  const user = useAppSelector(useCurrentUser) as TUser | null;
  const dispatch = useAppDispatch();
  let sidebarItems;

  if (user?.role === "admin") {
    sidebarItems = adminPaths;
  } else if (user?.role === "user") {
    sidebarItems = userPaths;
  }

  return (
    <div
      className={`pl-[20px] lg:w-[25%] absolute lg:static lg:bg-transparent  ${
        sidebarOpen ? "visible" : "invisible"
      } lg:visible bg-black bg-opacity-95   shadow-md text-white lg:text-black `}
    >
      <div className=" relative pt-[30px] pb-[20px]">
        <Link to={"/"} className="flex items-center align-middle ">
          <h1 className="text-[44px] text-[#E94F69] font-bold">S </h1>
          <p className="text-[36px] text-[#203A51]">tationary</p>
        </Link>
        <h1 className="py-5 text-center">
          {user?.role.toUpperCase()} DASHBOARD
        </h1>
        <div
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`absolute top-[30px] lg:invisible ${
            sidebarOpen ? "visible" : "invisible"
          } right-[10px] bg-white p-2 text-black rounded-full flex items-center justify-center`}
        >
          <FontAwesomeIcon icon={faX} />
        </div>
      </div>
      <div>
        <ul
          className=" pr-[30px] overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 120px)" }}
        >
          {sidebarItems?.map((item) => (
            <Link
              to={`/${user?.role}/${item.path}`}
              key={item.name}
              className="flex cursor-pointer   py-4 hover:bg-[#7cecc5] rounded-md hover:text-[#123a2d] items-center"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
          <li
            onClick={() => dispatch(logout())}
            className="flex cursor-pointer  py-4 hover:bg-[#7cecc5] rounded-md hover:text-[#123a2d] items-center"
          >
            <FontAwesomeIcon icon={faPowerOff} className="px-2" />
            Log Out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
