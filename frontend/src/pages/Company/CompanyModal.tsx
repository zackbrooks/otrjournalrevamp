import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
type Props = {
  updateCompanyMutation: any;
  company: any;
  editMode: boolean;
};

type Company = {
  name: string;
  location: string;
  phoneNumber: string;
  email: string;
  rating: number;
  notes: string;
  routing: string;
  userId: string;
  type: string;
};

const CompanyModal = (props: Props) => {
  const { updateCompanyMutation, company, editMode } = props;

  const currentCompany: Company = {
    name: company.name,
    location: company.location,
    phoneNumber: company.phoneNumber,
    email: company.email,
    rating: 1,
    notes: company.notes,
    routing: company.routing,
    type: company.type,
    userId: "63d48272c8ad1d722139ed3d",
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: currentCompany,

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address"),
      name: Yup.string().required("Required"),
      type: Yup.string().required("Required"),
      location: Yup.string().required("Required"),
      phoneNumber: Yup.string(),
      rating: Yup.number(),
      notes: Yup.string(),
      routing: Yup.string(),
      userId: Yup.string(),
    }),
    onSubmit: async (values) => {
      updateCompanyMutation.mutate({
        dataType: "company",
        dataInfo: values,
        dataId: company._id,
      });
    },
  });

  return (
    <>
      <div className="w-full md:w-80 mx-auto">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex m-1">
            <div className="flex flex-col w-full">
              <label
                htmlFor="name"
                className={`text-xs font-bold bg-zinc-200/95 w-fit px-1 rounded-[0.35rem] pb-3 ${
                  formik.touched.name && formik.errors.name
                    ? " border-red-500 border-2 bg-red-200 pb-1 "
                    : null
                }`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Transport Inc."
                className={` rounded-[0.35rem] p-1 bg-zinc-200/95
                outline-none mt-[-6.75px]  focus:border-black w-full focus:border-2 mb-[-3px] ${
                  formik.touched.name && formik.errors.name
                    ? "bg-red-200 border-red-500 border-2  "
                    : null
                }`}
              />

              {formik.touched.name && formik.errors.name ? (
                <p className="text-red-500 text-xs font-bold border-2 bg-red-200 w-fit px-1 rounded-[0.35rem] border-red-500 border-t-0 pt-1 rounded-tl-none rounded-tr-none">
                  {formik.errors.name}
                </p>
              ) : null}
            </div>
          </div>

          <div className="flex m-1">
            <div className="flex flex-col w-full">
              <label
                htmlFor="location"
                className={`text-xs font-bold bg-zinc-200/95 w-fit px-1 rounded-[0.35rem] pb-3 mt-2 ${
                  formik.touched.location && formik.errors.location
                    ? " border-red-500 border-2 bg-red-200 pb-1 "
                    : null
                }`}
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                value={formik.values.location}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Little Rock, Arkansas"
                className={` rounded-[0.35rem] p-1 bg-zinc-200/95
                outline-none mt-[-6.75px]  focus:border-black w-full focus:border-2 mb-[-3px] ${
                  formik.touched.location && formik.errors.location
                    ? "bg-red-200 border-red-500 border-2  "
                    : null
                }`}
              />
              {formik.touched.location && formik.errors.location ? (
                <p className="text-red-500 text-xs font-bold border-2 bg-red-200 w-fit px-1 rounded-[0.35rem] border-red-500 border-t-0 pt-1 rounded-tl-none rounded-tr-none">
                  {formik.errors.location}
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
                htmlFor="type"
                className={`text-xs font-bold bg-zinc-200/95 w-fit px-1 rounded-[0.35rem] pb-3 mt-2 ${
                  formik.touched.type && formik.errors.type
                    ? " border-red-500 border-2 bg-red-200 pb-1 "
                    : null
                }`}
              >
                Company Type
              </label>
              <input
                type="text"
                id="type"
                value={formik.values.type}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Truck Stop"
                className={` rounded-[0.35rem] p-1 bg-zinc-200/95
                outline-none mt-[-6.75px]  focus:border-black w-full focus:border-2 mb-[-3px] ${
                  formik.touched.type && formik.errors.type
                    ? "bg-red-200 border-red-500 border-2  "
                    : null
                }`}
              />

              {formik.touched.type && formik.errors.type ? (
                <p className="text-red-500 text-xs font-bold border-2 bg-red-200 w-fit px-1 rounded-[0.35rem] border-red-500 border-t-0 pt-1 rounded-tl-none rounded-tr-none">
                  {formik.errors.type}
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
                placeholder="This company has 24hr parking for anyone."
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
          <div className="flex m-1">
            <div className="flex flex-col w-full">
              <label
                htmlFor="routing"
                className={`text-xs font-bold bg-zinc-200/95 w-fit px-1 rounded-[0.35rem] pb-3 mt-2 ${
                  formik.touched.routing && formik.errors.routing
                    ? " border-red-500 border-2 bg-red-200 pb-1 "
                    : null
                }`}
              >
                Routing routing
              </label>
              <textarea
                id="routing"
                value={formik.values.routing}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Must enter the property coming from the east."
                className={` rounded-[0.35rem] p-1 bg-zinc-200/95
                outline-none mt-[-6.75px]  focus:border-black w-full focus:border-2 mb-[-3px] ${
                  formik.touched.routing && formik.errors.routing
                    ? "bg-red-200 border-red-500 border-2  "
                    : null
                }`}
              />

              {formik.touched.routing && formik.errors.routing ? (
                <p className="text-red-500 text-xs font-bold border-2 bg-red-200 w-fit px-1 rounded-[0.35rem] border-red-500 border-t-0 pt-1 rounded-tl-none rounded-tr-none">
                  {formik.errors.routing}
                </p>
              ) : null}
            </div>
          </div>
          {editMode && (
            <button
              className="hover:bg-zinc-700 bg-zinc-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-2"
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

export default CompanyModal;
