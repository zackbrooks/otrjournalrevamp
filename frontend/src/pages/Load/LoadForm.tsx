import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import ListMenu from "../../components/ListMenu";

import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiOutlineChevronUpDown, HiCheck } from "react-icons/hi2";

// export interface dateFilter {
//   startDate: string;
//   endDate: string;
// }
interface Load {
  bol: string;
  payment: string;
  notes: string;
  completed: boolean;
  originName: string;
  originAddress: string;
  originTrailer: string;
  originWindow: object[];
  originMiles: string;
  originType: string;
  destinationName: string;
  destinationAddress: string;
  destinationTrailer: string;
  destinationWindow: object[];
  destinationMiles: string;
  destinationType: string;
  userId: "63d48272c8ad1d722139ed3d";
}
const type = [{ type: "Live" }, { type: "Drop and Hook" }, ,];
type Props = {
  addLoadMutation: any;
};

const LoadForm = (props: Props) => {
  const [typeSelected, setTypeSelected] = useState(type[0]);
  const [dateRange, setDateRange] = useState<any>([]);
  const [startDate, endDate] = dateRange;
  const [dateRange2, setDateRange2] = useState<any>([]);
  const [startDate2, endDate2] = dateRange2;
  const { addLoadMutation } = props;

  console.log(dateRange2[0]);

  const formik = useFormik({
    initialValues: {
      bol: "",
      payment: "",
      notes: "",
      completed: false,
      originName: "",
      originAddress: "",
      originTrailer: "",
      originWindow: [],
      originMiles: "",
      originType: "",
      destinationName: "",
      destinationAddress: "",
      destinationTrailer: "",
      destinationWindow: [],
      destinationMiles: "",
      destinationType: "",
      userId: "63d48272c8ad1d722139ed3d",
    },
    validationSchema: Yup.object({
      bol: Yup.string().required(),
      payment: Yup.string(),
      notes: Yup.string(),
      completed: Yup.boolean(),
      originName: Yup.string().required("Required"),
      originAddress: Yup.string().required("Required"),
      originTrailer: Yup.string().required("Required"),
      originWindow: Yup.array(),
      originMiles: Yup.string(),
      originType: Yup.string(),
      destinationName: Yup.string().required("Required"),
      destinationAddress: Yup.string().required("Required"),
      destinationTrailer: Yup.string().required("Required"),
      destinationWindow: Yup.array(),
      destinationMiles: Yup.string(),
      destinationType: Yup.string(),
      userId: Yup.string(),
    }),
    onSubmit: async (values) => {
      // values.completed = true;
      // values.originWindow.push(4);
      console.log(dateRange[0]);
      // values.originWindow = [dateRange[0],]
      console.log("VALUES", values);
      // addLoadMutation.mutate({ dataType: "load", dataInfo: values });
    },
  });

  return (
    <>
      <div className="w-full md:w-80 mx-auto bg-zinc-200/95 rounded-[0.35rem] p-2 pb-4">
        <h3 className="text-center">Add New Load</h3>
        <p className="text-center text-xs">
          * <span className="text-[10px]">Required</span>{" "}
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex">
            <div className="flex m-1">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="bol"
                  className={`text-xs font-bold bg-zinc-200/95 w-fit px-1 rounded-[0.35rem] pb-3 ${
                    formik.touched.bol && formik.errors.bol
                      ? " border-red-500 border-2 bg-red-200 pb-1 "
                      : null
                  }`}
                >
                  Bill Of Lading
                </label>
                <input
                  type="text"
                  id="bol"
                  value={formik.values.bol}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="BOL2354AEG34"
                  className={` rounded-[0.35rem] p-1 bg-zinc-200/95
                outline-none mt-[-6.75px]  focus:border-black w-full focus:border-2 mb-[-3px] ${
                  formik.touched.bol && formik.errors.bol
                    ? "bg-red-200 border-red-500 border-2  "
                    : null
                }`}
                />

                {formik.touched.bol && formik.errors.bol ? (
                  <p className="text-red-500 text-xs font-bold border-2 bg-red-200 w-fit px-1 rounded-[0.35rem] border-red-500 border-t-0 pt-1 rounded-tl-none rounded-tr-none">
                    {formik.errors.bol}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="flex m-1">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="payment"
                  className={`text-xs font-bold bg-zinc-200/95 w-fit px-1 rounded-[0.35rem] pb-3 ${
                    formik.touched.payment && formik.errors.payment
                      ? " border-red-500 border-2 bg-red-200 pb-1 "
                      : null
                  }`}
                >
                  Payment
                </label>
                <input
                  type="text"
                  id="payment"
                  value={formik.values.payment}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="840"
                  className={` rounded-[0.35rem] p-1 bg-zinc-200/95
                outline-none mt-[-6.75px]  focus:border-black w-full focus:border-2 mb-[-3px] ${
                  formik.touched.payment && formik.errors.payment
                    ? "bg-red-200 border-red-500 border-2  "
                    : null
                }`}
                />

                {formik.touched.payment && formik.errors.payment ? (
                  <p className="text-red-500 text-xs font-bold border-2 bg-red-200 w-fit px-1 rounded-[0.35rem] border-red-500 border-t-0 pt-1 rounded-tl-none rounded-tr-none">
                    {formik.errors.payment}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          {/* <div className="flex m-1">
            <div className="flex flex-col w-full">
              <label
                htmlFor="completed"
                className={`text-xs font-bold bg-zinc-200/95 w-fit px-1 rounded-[0.35rem] pb-3 ${
                  formik.touched.completed && formik.errors.completed
                    ? " border-red-500 border-2 bg-red-200 pb-1 "
                    : null
                }`}
              >
                Load Completed?
              </label>
              <input
                type="text"
                id="completed"
                value={formik.values.completed}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="True"
                className={` rounded-[0.35rem] p-1 bg-zinc-200/95
                outline-none mt-[-6.75px]  focus:border-black w-full focus:border-2 mb-[-3px] ${
                  formik.touched.completed && formik.errors.completed
                    ? "bg-red-200 border-red-500 border-2  "
                    : null
                }`}
              />

              {formik.touched.completed && formik.errors.completed ? (
                <p className="text-red-500 text-xs font-bold border-2 bg-red-200 w-fit px-1 rounded-[0.35rem] border-red-500 border-t-0 pt-1 rounded-tl-none rounded-tr-none">
                  {formik.errors.completed}
                </p>
              ) : null}
            </div>
          </div> */}

          <div className="text-center border-solid border-zinc-400 border text-xs font-bold bg-zinc-200/95 w-fit px-1 rounded-[0.35rem] pb-3 mt-2">
            <h4>Origin Info</h4>
            <div className="flex m-1">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="originName"
                  className={`text-xs font-bold bg-zinc-200/95 w-fit px-1 rounded-[0.35rem] pb-3 mt-2 ${
                    formik.touched.originName && formik.errors.originName
                      ? " border-red-500 border-2 bg-red-200 pb-1 "
                      : null
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="originName"
                  value={formik.values.originName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="ABC Distribution Center"
                  className={` rounded-[0.35rem] p-1 bg-zinc-200/95
                outline-none mt-[-6.75px]  focus:border-black w-full focus:border-2 mb-[-3px] ${
                  formik.touched.originName && formik.errors.originName
                    ? "bg-red-200 border-red-500 border-2  "
                    : null
                }`}
                />
                {formik.touched.originName && formik.errors.originName ? (
                  <p className="text-red-500 text-xs font-bold border-2 bg-red-200 w-fit px-1 rounded-[0.35rem] border-red-500 border-t-0 pt-1 rounded-tl-none rounded-tr-none">
                    {formik.errors.originName}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="flex m-1">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="originAddress"
                  className={`text-xs font-bold bg-zinc-200/95 w-fit px-1 rounded-[0.35rem] pb-3 mt-2 ${
                    formik.touched.originAddress && formik.errors.originAddress
                      ? " border-red-500 border-2 bg-red-200 pb-1 "
                      : null
                  }`}
                >
                  Address
                </label>
                <input
                  type="text"
                  id="originAddress"
                  value={formik.values.originAddress}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="123 Driver Lane"
                  className={` rounded-[0.35rem] p-1 bg-zinc-200/95
                outline-none mt-[-6.75px]  focus:border-black w-full focus:border-2 mb-[-3px] ${
                  formik.touched.originAddress && formik.errors.originAddress
                    ? "bg-red-200 border-red-500 border-2  "
                    : null
                }`}
                />
                {formik.touched.originAddress && formik.errors.originAddress ? (
                  <p className="text-red-500 text-xs font-bold border-2 bg-red-200 w-fit px-1 rounded-[0.35rem] border-red-500 border-t-0 pt-1 rounded-tl-none rounded-tr-none">
                    {formik.errors.originAddress}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="flex">
              <div className="flex m-1">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="originTrailer"
                    className={`text-xs font-bold bg-zinc-200/95 w-fit px-1 rounded-[0.35rem] pb-3 mt-2 ${
                      formik.touched.originTrailer &&
                      formik.errors.originTrailer
                        ? " border-red-500 border-2 bg-red-200 pb-1 "
                        : null
                    }`}
                  >
                    Trailer Number
                  </label>
                  <input
                    type="text"
                    id="originTrailer"
                    value={formik.values.originTrailer}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Truck Stop"
                    className={` rounded-[0.35rem] p-1 bg-zinc-200/95
                outline-none mt-[-6.75px]  focus:border-black w-full focus:border-2 mb-[-3px] ${
                  formik.touched.originTrailer && formik.errors.originTrailer
                    ? "bg-red-200 border-red-500 border-2  "
                    : null
                }`}
                  />

                  {formik.touched.originTrailer &&
                  formik.errors.originTrailer ? (
                    <p className="text-red-500 text-xs font-bold border-2 bg-red-200 w-fit px-1 rounded-[0.35rem] border-red-500 border-t-0 pt-1 rounded-tl-none rounded-tr-none">
                      {formik.errors.originTrailer}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="flex m-1">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="originMiles"
                    className={`text-xs font-bold bg-zinc-200/95 w-fit px-1 rounded-[0.35rem] pb-3 mt-2 ${
                      formik.touched.originMiles && formik.errors.originMiles
                        ? " border-red-500 border-2 bg-red-200 pb-1 "
                        : null
                    }`}
                  >
                    Miles
                  </label>
                  <input
                    type="text"
                    id="originMiles"
                    value={formik.values.originMiles}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="344"
                    className={` rounded-[0.35rem] p-1 bg-zinc-200/95
                outline-none mt-[-6.75px]  focus:border-black w-10 focus:border-2 mb-[-3px]  ${
                  formik.touched.originMiles && formik.errors.originMiles
                    ? "bg-red-200 border-red-500 border-2  "
                    : null
                }`}
                  />
                  {formik.touched.originMiles && formik.errors.originMiles ? (
                    <p className="text-red-500 text-xs font-bold border-2 bg-red-200 w-fit px-1 rounded-[0.35rem] border-red-500 border-t-0 pt-1 rounded-tl-none rounded-tr-none">
                      {formik.errors.originMiles}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="flex m-1">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="originType"
                    className={`text-xs font-bold bg-zinc-200/95 w-fit px-1 rounded-[0.35rem] pb-3 mt-2 ${
                      formik.touched.originType && formik.errors.originType
                        ? " border-red-500 border-2 bg-red-200 pb-1 "
                        : null
                    }`}
                  >
                    Type
                  </label>

                  <Listbox value={typeSelected} onChange={setTypeSelected}>
                    <div className="relative mt-1">
                      <Listbox.Button
                        className={` rounded-[0.35rem] p-1 bg-zinc-200/95
                outline-none mt-[-6.75px]  focus:border-black w-full focus:border-2 mb-[-3px] ${
                  formik.touched.originType && formik.errors.originType
                    ? "bg-red-200 border-red-500 border-2  "
                    : null
                }`}
                      >
                        <span className="block truncate w-32">
                          {typeSelected?.type}
                        </span>
                        <span className="pointer-events-none absolute -inset-y-16 right-[-11.5px] flex items-center pr-2">
                          <HiOutlineChevronUpDown
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md  bg-zinc-200/95 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
                          {type.map((type, typeIdx) => (
                            <Listbox.Option
                              key={typeIdx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-amber-100 text-amber-900"
                                    : "text-gray-900"
                                }`
                              }
                              value={type}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {type?.type}
                                  </span>
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                  {formik.touched.originType && formik.errors.originType ? (
                    <p className="text-red-500 text-xs font-bold border-2 bg-red-200 w-fit px-1 rounded-[0.35rem] border-red-500 border-t-0 pt-1 rounded-tl-none rounded-tr-none">
                      {formik.errors.originType}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="flex m-1">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="originWindow"
                  className={`text-xs font-bold bg-zinc-200/95 w-fit px-1 rounded-[0.35rem] pb-3 mt-2 ${
                    formik.touched.originWindow && formik.errors.originWindow
                      ? " border-red-500 border-2 bg-red-200 pb-1 "
                      : null
                  } `}
                >
                  Pickup Window
                </label>
                <DatePicker
                  id="originWindow"
                  required
                  className={` rounded-[0.35rem] p-1 bg-zinc-200/95
                outline-none mt-[-6.75px]  focus:border-black w-full focus:border-2 mb-[-3px] `}
                  selectsRange={true}
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(update: any) => {
                    setDateRange(update);
                  }}
                  isClearable={true}
                  placeholderText={"Click to enter pickup window"}
                />
              </div>
            </div>
          </div>

          <div className="text-center border-solid border-zinc-400 border text-xs font-bold bg-zinc-200/95 w-fit px-1 rounded-[0.35rem] pb-3 mt-2">
            <h4>Destination Info</h4>
            <div className="flex m-1">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="destinationName"
                  className={`text-xs font-bold bg-zinc-200/95 w-fit px-1 rounded-[0.35rem] pb-3 mt-2 ${
                    formik.touched.destinationName &&
                    formik.errors.destinationName
                      ? " border-red-500 border-2 bg-red-200 pb-1 "
                      : null
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="destinationName"
                  value={formik.values.destinationName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="ABC Distribution Center"
                  className={` rounded-[0.35rem] p-1 bg-zinc-200/95
                outline-none mt-[-6.75px]  focus:border-black w-full focus:border-2 mb-[-3px] ${
                  formik.touched.destinationName &&
                  formik.errors.destinationName
                    ? "bg-red-200 border-red-500 border-2  "
                    : null
                }`}
                />
                {formik.touched.destinationName &&
                formik.errors.destinationName ? (
                  <p className="text-red-500 text-xs font-bold border-2 bg-red-200 w-fit px-1 rounded-[0.35rem] border-red-500 border-t-0 pt-1 rounded-tl-none rounded-tr-none">
                    {formik.errors.destinationName}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="flex m-1">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="destinationAddress"
                  className={`text-xs font-bold bg-zinc-200/95 w-fit px-1 rounded-[0.35rem] pb-3 mt-2 ${
                    formik.touched.destinationAddress &&
                    formik.errors.destinationAddress
                      ? " border-red-500 border-2 bg-red-200 pb-1 "
                      : null
                  }`}
                >
                  Address
                </label>
                <input
                  type="text"
                  id="destinationAddress"
                  value={formik.values.destinationAddress}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="123 Driver Lane"
                  className={` rounded-[0.35rem] p-1 bg-zinc-200/95
                outline-none mt-[-6.75px]  focus:border-black w-full focus:border-2 mb-[-3px] ${
                  formik.touched.destinationAddress &&
                  formik.errors.destinationAddress
                    ? "bg-red-200 border-red-500 border-2  "
                    : null
                }`}
                />
                {formik.touched.destinationAddress &&
                formik.errors.destinationAddress ? (
                  <p className="text-red-500 text-xs font-bold border-2 bg-red-200 w-fit px-1 rounded-[0.35rem] border-red-500 border-t-0 pt-1 rounded-tl-none rounded-tr-none">
                    {formik.errors.destinationAddress}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="flex">
              <div className="flex m-1">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="destinationTrailer"
                    className={`text-xs font-bold bg-zinc-200/95 w-fit px-1 rounded-[0.35rem] pb-3 mt-2 ${
                      formik.touched.destinationTrailer &&
                      formik.errors.destinationTrailer
                        ? " border-red-500 border-2 bg-red-200 pb-1 "
                        : null
                    }`}
                  >
                    Trailer Number
                  </label>
                  <input
                    type="text"
                    id="destinationTrailer"
                    value={formik.values.destinationTrailer}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Truck Stop"
                    className={` rounded-[0.35rem] p-1 bg-zinc-200/95
                outline-none mt-[-6.75px]  focus:border-black w-full focus:border-2 mb-[-3px] ${
                  formik.touched.destinationTrailer &&
                  formik.errors.destinationTrailer
                    ? "bg-red-200 border-red-500 border-2  "
                    : null
                }`}
                  />

                  {formik.touched.destinationTrailer &&
                  formik.errors.destinationTrailer ? (
                    <p className="text-red-500 text-xs font-bold border-2 bg-red-200 w-fit px-1 rounded-[0.35rem] border-red-500 border-t-0 pt-1 rounded-tl-none rounded-tr-none">
                      {formik.errors.destinationTrailer}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="flex m-1">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="destinationMiles"
                    className={`text-xs font-bold bg-zinc-200/95 w-fit px-1 rounded-[0.35rem] pb-3 mt-2 ${
                      formik.touched.destinationMiles &&
                      formik.errors.destinationMiles
                        ? " border-red-500 border-2 bg-red-200 pb-1 "
                        : null
                    }`}
                  >
                    Miles
                  </label>
                  <input
                    type="text"
                    id="destinationMiles"
                    value={formik.values.destinationMiles}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="344"
                    className={` rounded-[0.35rem] p-1 bg-zinc-200/95
                outline-none mt-[-6.75px]  focus:border-black w-10 focus:border-2 mb-[-3px]  ${
                  formik.touched.destinationMiles &&
                  formik.errors.destinationMiles
                    ? "bg-red-200 border-red-500 border-2  "
                    : null
                }`}
                  />
                  {formik.touched.destinationMiles &&
                  formik.errors.destinationMiles ? (
                    <p className="text-red-500 text-xs font-bold border-2 bg-red-200 w-fit px-1 rounded-[0.35rem] border-red-500 border-t-0 pt-1 rounded-tl-none rounded-tr-none">
                      {formik.errors.destinationMiles}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="flex m-1">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="destinationType"
                    className={`text-xs font-bold bg-zinc-200/95 w-fit px-1 rounded-[0.35rem] pb-3 mt-2 ${
                      formik.touched.destinationType &&
                      formik.errors.destinationType
                        ? " border-red-500 border-2 bg-red-200 pb-1 "
                        : null
                    }`}
                  >
                    Type
                  </label>

                  <Listbox value={typeSelected} onChange={setTypeSelected}>
                    <div className="relative mt-1">
                      <Listbox.Button
                        className={` rounded-[0.35rem] p-1 bg-zinc-200/95
                outline-none mt-[-6.75px]  focus:border-black w-full focus:border-2 mb-[-3px] ${
                  formik.touched.destinationType &&
                  formik.errors.destinationType
                    ? "bg-red-200 border-red-500 border-2  "
                    : null
                }`}
                      >
                        <span className="block truncate w-32">
                          {typeSelected?.type}
                        </span>
                        <span className="pointer-events-none absolute -inset-y-16 right-[-11.5px] flex items-center pr-2">
                          <HiOutlineChevronUpDown
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md  bg-zinc-200/95 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
                          {type.map((type, typeIdx) => (
                            <Listbox.Option
                              key={typeIdx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-amber-100 text-amber-900"
                                    : "text-gray-900"
                                }`
                              }
                              value={type}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {type?.type}
                                  </span>
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                  {formik.touched.destinationType &&
                  formik.errors.destinationType ? (
                    <p className="text-red-500 text-xs font-bold border-2 bg-red-200 w-fit px-1 rounded-[0.35rem] border-red-500 border-t-0 pt-1 rounded-tl-none rounded-tr-none">
                      {formik.errors.destinationType}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="flex m-1">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="destinationWindow"
                  className={`text-xs font-bold bg-zinc-200/95 w-fit px-1 rounded-[0.35rem] pb-3 mt-2 ${
                    formik.touched.destinationWindow &&
                    formik.errors.destinationWindow
                      ? " border-red-500 border-2 bg-red-200 pb-1 "
                      : null
                  } `}
                >
                  Dropoff Window
                </label>
                <DatePicker
                  id="destinationWindow"
                  required
                  className={` rounded-[0.35rem] p-1 bg-zinc-200/95
                outline-none mt-[-6.75px]  focus:border-black w-full focus:border-2 mb-[-3px] `}
                  selectsRange={true}
                  startDate={startDate2}
                  endDate={endDate2}
                  onChange={(update: any) => {
                    setDateRange2(update);
                  }}
                  isClearable={true}
                  placeholderText={"Click to enter pickup window"}
                />
              </div>
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
                Load Notes
              </label>
              <textarea
                id="notes"
                value={formik.values.notes}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Very heavy, make sure they load it correctly."
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
            Create Load
          </button>
        </form>
      </div>
    </>
  );
};

export default LoadForm;
