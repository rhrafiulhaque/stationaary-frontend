import { faPowerOff, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { logout, TUser, useCurrentUser } from "../../redux/features/authSlice";
import { setSearchTerm } from "../../redux/features/product/searchProductSlice";

const Navbar = () => {
  const user = useAppSelector(useCurrentUser) as TUser | null;
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };
  return (
    <div className="bg-[#F5F5F5]">
      <div className=" container mx-auto">
        <div className="flex justify-between  w-full  py-[10px]">
          <Link to={"/"} className="flex items-center align-middle ">
            <h1 className="text-[44px] text-[#E94F69] font-bold">S </h1>
            <p className="text-[36px] text-[#203A51]">tationary</p>
          </Link>

          {/* Searchbar Section for desktop  */}
          <div className="mx-4 lg:block flex-1 hidden text-center  content-center">
            <div className=" flex overflow-hidden justify-center">
              <input
                onChange={handleSearchChange}
                type="text"
                placeholder="Search here"
                className="w-full relative max-w-xl rounded-full bg-white   px-4 py-2 text-[#203A51] focus:outline-none"
              />
            </div>
          </div>

          {/* Cart and SigninSection  */}
          <div className="flex items-center sm:space-x-8 space-x-6 overflow-hidden">
            <Link
              to={"/cart"}
              className="flex flex-col items-center justify-center gap-0.5 cursor-pointer"
            >
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  className="cursor-pointer fill-[#333] inline"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"
                  ></path>
                </svg>
                <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                  {cart?.length > 0 ? cart?.length : 0}
                </span>
              </div>
              <span className="text-[13px] font-semibold text-[#333]">
                Cart
              </span>
            </Link>
            {/* Mobile Sign in  */}
            <div className=" py-2  space-y-3">
              {user && (
                <Link
                  to={`https://stationaary.vercel.app/${user.role}/dashboard`}
                  className="lg:hidden px-2 py-2 text-sm rounded-full cursor-pointer text-white border-2 border-[#189128] bg-[#189128] hover:bg-[#27b12e]"
                >
                  <span>
                    <FontAwesomeIcon icon={faUser} className="px-2" />
                    My Profile
                  </span>
                </Link>
              )}

              {user && (
                <li
                  onClick={() => dispatch(logout())}
                  className="lg:hidden list-none px-2 py-2 text-sm rounded-full cursor-pointer text-white border-2 border-[#ff3459] bg-[#E84F6A] hover:bg-[#e84f57]"
                >
                  <span>
                    <FontAwesomeIcon icon={faPowerOff} className="px-2" />
                    Log Out
                  </span>
                </li>
              )}
            </div>
            {/* Mobile Sign in  */}

            {!user && (
              <Link
                to={"/login"}
                className="lg:hidden px-4 py-2 text-sm rounded-full cursor-pointer text-white border-2 border-[#ff3459] bg-[#E84F6A] hover:bg-[#e84f57]"
              >
                Sign In
              </Link>
            )}

            {user && (
              <Link
                to={`https://stationaary.vercel.app/${user.role}/dashboard`}
                className="max-lg:hidden px-4 py-2 text-sm rounded-full cursor-pointer text-white border-2 border-[#189128] bg-[#189128] hover:bg-[#27b12e]"
              >
                <span>
                  <FontAwesomeIcon icon={faUser} className="px-2" />
                  My Profile
                </span>
              </Link>
            )}
            {user && (
              <li
                onClick={() => dispatch(logout())}
                className="max-lg:hidden list-none px-4 py-2 text-sm rounded-full cursor-pointer text-white border-2 border-[#ff3459] bg-[#E84F6A] hover:bg-[#e84f57]"
              >
                <span>
                  <FontAwesomeIcon icon={faPowerOff} className="px-2" />
                  Log Out
                </span>
              </li>
            )}

            {!user && (
              <Link
                to={"/login"}
                className="max-lg:hidden px-4 py-2 text-sm rounded-full cursor-pointer text-white border-2 border-[#ff3459] bg-[#E84F6A] hover:bg-[#e84f57]"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>

        {/* Searchbar Section form mobile */}

        <div className="mx-4 py-2 flex-1 lg:hidden text-center  content-center">
          <div className=" flex overflow-hidden justify-center">
            <input
              type="text"
              onChange={handleSearchChange}
              placeholder="Search here"
              className="w-full relative max-w-xl rounded-full bg-white   px-4 py-2 text-[#203A51] focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
