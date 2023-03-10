import { useFormik } from "formik";
import * as Yup from "yup";
type Props = {
  addBrokerMutation: any;
};

const BrokerFrom = (props: Props) => {
  const { addBrokerMutation } = props;

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      rating: 1,
      notes: "",
      userId: "63d48272c8ad1d722139ed3d",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      phoneNumber: Yup.string(),
      rating: Yup.number(),
      notes: Yup.string(),
      userId: Yup.string(),
    }),
    onSubmit: async (values) => {
      console.log(props.addBrokerMutation);
      addBrokerMutation.mutate({ dataType: "broker", dataInfo: values });
    },
  });

  return (
    <>
      <div className="w-full md:w-80 mx-auto bg-zinc-200/95 rounded-[0.35rem] p-2 pb-4">
        <h3 className="text-center">Add New Broker</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex m-1">
            <div className="flex flex-col w-full">
              <label
                htmlFor="firstName"
                className={`text-xs font-bold bg-zinc-200/95 w-fit px-1 rounded-[0.35rem] pb-3 ${
                  formik.touched.firstName && formik.errors.firstName
                    ? " border-red-500 border-2 bg-red-200 pb-1 "
                    : null
                }`}
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="John"
                className={` rounded-[0.35rem] p-1 bg-zinc-200/95
                outline-none mt-[-6.75px]  focus:border-black w-full focus:border-2 mb-[-3px] ${
                  formik.touched.firstName && formik.errors.firstName
                    ? "bg-red-200 border-red-500 border-2  "
                    : null
                }`}
              />

              {formik.touched.firstName && formik.errors.firstName ? (
                <p className="text-red-500 text-xs font-bold border-2 bg-red-200 w-fit px-1 rounded-[0.35rem] border-red-500 border-t-0 pt-1 rounded-tl-none rounded-tr-none">
                  {formik.errors.firstName}
                </p>
              ) : null}
            </div>
          </div>

          <div className="flex m-1">
            <div className="flex flex-col w-full">
              <label
                htmlFor="lastName"
                className={`text-xs font-bold bg-zinc-200/95 w-fit px-1 rounded-[0.35rem] pb-3 mt-2 ${
                  formik.touched.lastName && formik.errors.lastName
                    ? " border-red-500 border-2 bg-red-200 pb-1 "
                    : null
                }`}
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Doe"
                className={` rounded-[0.35rem] p-1 bg-zinc-200/95
                outline-none mt-[-6.75px]  focus:border-black w-full focus:border-2 mb-[-3px] ${
                  formik.touched.lastName && formik.errors.lastName
                    ? "bg-red-200 border-red-500 border-2  "
                    : null
                }`}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <p className="text-red-500 text-xs font-bold border-2 bg-red-200 w-fit px-1 rounded-[0.35rem] border-red-500 border-t-0 pt-1 rounded-tl-none rounded-tr-none">
                  {formik.errors.lastName}
                </p>
              ) : null}
            </div>
          </div>
          <div className="flex m-1">
            <div className="flex flex-col w-full">
              <label
                htmlFor="email"
                className={`text-xs font-bold bg-zinc-200/95 w-fit px-1 rounded-[0.35rem] pb-3 mt-2 ${
                  formik.touched.email && formik.errors.email
                    ? " border-red-500 border-2 bg-red-200 pb-1 "
                    : null
                }`}
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="example@email.com"
                className={` rounded-[0.35rem] p-1 bg-zinc-200/95
                outline-none mt-[-6.75px]  focus:border-black w-full focus:border-2 mb-[-3px] ${
                  formik.touched.email && formik.errors.email
                    ? "bg-red-200 border-red-500 border-2  "
                    : null
                }`}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-500 text-xs font-bold border-2 bg-red-200 w-fit px-1 rounded-[0.35rem] border-red-500 border-t-0 pt-1 rounded-tl-none rounded-tr-none">
                  {formik.errors.email}
                </p>
              ) : null}
            </div>
          </div>
          <div className="flex m-1">
            <div className="flex flex-col w-full">
              <label
                htmlFor="phoneNumber"
                className={`text-xs font-bold bg-zinc-200/95 w-fit px-1 rounded-[0.35rem] pb-3 mt-2 ${
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                    ? " border-red-500 border-2 bg-red-200 pb-1 "
                    : null
                }`}
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="1231231234"
                className={` rounded-[0.35rem] p-1 bg-zinc-200/95
                outline-none mt-[-6.75px]  focus:border-black w-full focus:border-2 mb-[-3px] ${
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                    ? "bg-red-200 border-red-500 border-2  "
                    : null
                }`}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <p className="text-red-500 text-xs font-bold border-2 bg-red-200 w-fit px-1 rounded-[0.35rem] border-red-500 border-t-0 pt-1 rounded-tl-none rounded-tr-none">
                  {formik.errors.phoneNumber}
                </p>
              ) : null}
            </div>
          </div>
          <div className="flex m-1">
            <div className="flex flex-col w-full">
              <label
                htmlFor="rating"
                className={`text-xs font-bold bg-zinc-200/95 w-fit px-1 rounded-[0.35rem] pb-3 mt-2 ${
                  formik.touched.rating && formik.errors.rating
                    ? " border-red-500 border-2 bg-red-200 pb-1 "
                    : null
                }`}
              >
                Rating
              </label>
              <input
                type="number"
                id="rating"
                value={formik.values.rating}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter Rating"
                className={` rounded-[0.35rem] p-1 bg-zinc-200/95
                outline-none mt-[-6.75px]  focus:border-black w-full focus:border-2 mb-[-3px] ${
                  formik.touched.rating && formik.errors.rating
                    ? "bg-red-200 border-red-500 border-2  "
                    : null
                }`}
              />
              {formik.touched.rating && formik.errors.rating ? (
                <p className="text-red-500 text-xs font-bold border-2 bg-red-200 w-fit px-1 rounded-[0.35rem] border-red-500 border-t-0 pt-1 rounded-tl-none rounded-tr-none">
                  {formik.errors.rating}
                </p>
              ) : null}
            </div>
          </div>
          <div className="flex m-1">
            <div className="flex flex-col w-full">
              <label
                htmlFor="notes"
                className={`text-xs font-bold bg-zinc-200/95 w-fit px-1 rounded-[0.35rem] pb-3 mt-2 ${
                  formik.touched.notes && formik.errors.notes
                    ? " border-red-500 border-2 bg-red-200 pb-1 "
                    : null
                }`}
              >
                Notes
              </label>
              <textarea
                id="notes"
                value={formik.values.notes}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="The broker pays well and is fair."
                className={` rounded-[0.35rem] p-1 bg-zinc-200/95
                outline-none mt-[-6.75px]  focus:border-black w-full focus:border-2 mb-[-3px] ${
                  formik.touched.notes && formik.errors.notes
                    ? "bg-red-200 border-red-500 border-2  "
                    : null
                }`}
              />

              {formik.touched.notes && formik.errors.notes ? (
                <p className="text-red-500 text-xs font-bold border-2 bg-red-200 w-fit px-1 rounded-[0.35rem] border-red-500 border-t-0 pt-1 rounded-tl-none rounded-tr-none">
                  {formik.errors.notes}
                </p>
              ) : null}
            </div>
          </div>
          <button
            className="hover:bg-zinc-700 bg-zinc-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-2"
            type="submit"
          >
            Create Broker
          </button>
        </form>
      </div>
    </>
  );
};

export default BrokerFrom;
