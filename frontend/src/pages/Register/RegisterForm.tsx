import { journalApi } from "../../api/journalApi";
import { useAuthStore } from "../../store/userStore";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as Yup from "yup";

type Props = {};

const RegisterForm = (props: Props) => {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      password2: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
      password2: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Passwords don't match!"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await journalApi.post("/api/user/signup", {
          email: values.email,
          password: values.password,
        });
        toast.success("User created! You will now be taken to the login page.");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } catch (error: any) {
        toast.error(error.response.data);
        return error.response.data;
      }
    },
  });

  return (
    <>
      {/* <Nav /> */}
      <div
        id="home"
        style={{ backgroundImage: `url(../../imgs/hero.jpg)` }}
        className="flex h-[100vh] min-h-[400px] justify-center bg-cover bg-fixed md:bg-center bg-[center_left_-10rem] md:items-center"
      >
        <div className="w-full max-w-xs">
          <form
            className="bg-zinc-200/60 shadow-md rounded px-8 pt-4 pb-8 mb-4 mt-24 md:mt-0"
            onSubmit={formik.handleSubmit}
          >
            <h4 className="text-center text-3xl font-bold mt-0 mb-2">
              Registration
            </h4>
            <ToastContainer
              position="top-center"
              autoClose={3000}
              limit={1}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            {/* {alertStatus ? (
              <p className={`text-${alertType}`}>{alertText}</p>
            ) : null} */}
            <div className="mb-4">
              <label className="block  text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-500 text-xs">{formik.errors.email}</p>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                className="block  text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none  rounded w-full py-2 px-3  mb-0 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="text-red-500 text-xs">{formik.errors.password}</p>
              ) : null}
            </div>
            <div className="mb-6">
              <label
                className="block  text-sm font-bold mb-2"
                htmlFor="password2"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none  rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password2"
                type="password"
                placeholder="******************"
                value={formik.values.password2}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password2 && formik.errors.password2 ? (
                <p className="text-red-500 text-xs">
                  {formik.errors.password2}
                </p>
              ) : null}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-zinc-500 hover:bg-zinc-900 hover:text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline text-[0.75rem] w-auto"
                type="submit"
              >
                Create Account
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm hover:text-zinc-300 "
                href="#"
              >
                Already A Member?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
