import { RouterProvider } from "react-router-dom";
import { useAuthCheck } from "../hooks/useAuthCheck";
import router from "../routes/routes";

const AuthCheckWrapper = () => {
  const authChecked = useAuthCheck();

  if (!authChecked) {
    return <div>Loading...</div>;
  }

  return <RouterProvider router={router} />;
};

export default AuthCheckWrapper;
