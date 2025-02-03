import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../hooks/hooks";
import { TUser, useCurrentUser } from "../../redux/features/authSlice";

interface DashboardNavbarProps {
  setSidebarOpen: (open: boolean) => void;
  sidebarOpen: boolean;
}

const DashboardNavbar: React.FC<DashboardNavbarProps> = ({
  setSidebarOpen,
  sidebarOpen,
}) => {
  const user = useAppSelector(useCurrentUser) as TUser | null;
  return (
    <div className=" w-full  px-4 py-4 ">
      <div className="flex justify-between">
        <div>
          <div className="visible lg:invisible">
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            />
          </div>
          <h1 className="font-semibold invisible lg:visible">Dashboard</h1>{" "}
        </div>
        <div className="flex items-center">
          <div className="w-[40px] h-[40px] ">
            <img
              src="/assets/image/person.png"
              className="rounded-full "
              alt=""
            />
          </div>
          <h1 className="pl-4">Hello,{user?.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
