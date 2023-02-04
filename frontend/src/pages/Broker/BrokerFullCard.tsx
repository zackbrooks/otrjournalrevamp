import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
type Props = {
  updateBrokerMutation: any;
  broker: any;
  editMode: boolean;
};

type Broker = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  rating: number;
  notes: string;
  userId: string;
};

const BrokerFullCard = (props: Props) => {
  const { updateBrokerMutation, broker, editMode } = props;

  const currentBroker: Broker = {
    firstName: broker.firstName,
    lastName: broker.lastName,
    phoneNumber: broker.phoneNumber,
    email: broker.email,
    rating: 1,
    notes: broker.notes,
    userId: "63d48272c8ad1d722139ed3d",
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: currentBroker,

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
      updateBrokerMutation.mutate({
        dataType: "broker",
        dataInfo: values,
        dataId: broker._id,
      });
    },
  });

  return (
    <>
      <div className="w-full md:w-80 mx-auto">
        {/* <h3 className="text-center">{editMode ? `Edit` Add New Broker}</h3> */}
        <form onSubmit={formik.handleSubmit}>
          <div className="flex m-1">
            <div className="flex flex-col w-full">
              <label
                htmlFor="firstName"
                className={`text-xs font-bold bg-zinc-200/95 w-fit px-1 rounded-[0.35rem] pb-3 ${
                  formik.touched.firstName && formik.errors.firstName
                    ? " border-red-500 border-2 bg-red-200 pb-1 "
                    : null
                } `}
              >
                First Name
              </label>
              <input
                disabled={!editMode}
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
                disabled={!editMode}
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
                disabled={!editMode}
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
                disabled={!editMode}
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
                disabled={!editMode}
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
                disabled={!editMode}
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
          {editMode && (
            <button
              className="hover:bg-zinc-700 bg-zinc-900 text-white font-bold py-2 md:px-1 rounded focus:outline-none focus:shadow-outline w-full mt-2"
              type="submit"
            >
              Save Updated Info
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default BrokerFullCard;
