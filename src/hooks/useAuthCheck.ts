import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/authSlice";

export const useAuthCheck = () => {
  const dispatch = useDispatch();
  const [authChecked, setAuthCheck] = useState(false);
  useEffect(() => {
    const localAuth = localStorage?.getItem("auth");
    if (localAuth) {
      const auth = JSON.parse(localAuth);
      if (auth?.token && auth?.user) {
        dispatch(setUser({ user: auth.user, token: auth.token }));
      }
    }
    setAuthCheck(true);
  }, [dispatch, setAuthCheck]);
  return authChecked;
};
