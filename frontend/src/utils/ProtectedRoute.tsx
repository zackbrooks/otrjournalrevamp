import { useNavigate, Link, Outlet, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

type Props = {};

const ProtectedRoute = (props: Props) => {
  let auth = { "token": true };

  let boom = <></>;

  if (auth.token) {
    return <Outlet />;
  } else {
    console.log("User not authorized, being directed to login.");
    // toast.error("User not authorized, being directed to login.");
    toast.error("User not authorized, being directed to login.");
    return <Navigate to={"/login"} />;
  }
};

export default ProtectedRoute;
