import React, { useState } from "react";

import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  updateBroker,
  deleteData,
  getAllData,
  addNewData,
} from "../../api/journalApi";
import { BsTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { ToastContainer } from "react-toastify";

type Props = {};

const Broker = (props: Props) => {
  const [broker, setBroker] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    rating: 1,
    notes: "",
    userId: "63d48272c8ad1d722139ed3d",
  });
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    error,
    data: brokerInfo,
  } = useQuery("brokers", () => getAllData("broker"));

  const addBrokerMutation = useMutation(addNewData, {
    onSuccess: () => {
      //Invalidates cache and refetch
      queryClient.invalidateQueries("brokers");
    },
  });
  const updateBrokerMutation = useMutation(updateBroker, {
    onSuccess: () => {
      //Invalidates cache and refetch
      queryClient.invalidateQueries("brokers");
    },
  });
  const deleteBrokerMutation = useMutation(deleteData, {
    onSuccess: () => {
      //Invalidates cache and refetch
      queryClient.invalidateQueries("brokers");
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addBrokerMutation.mutate({ dataType: "broker", dataInfo: broker });
    setBroker({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      rating: 1,
      notes: "",
      userId: "63d48272c8ad1d722139ed3d",
    });
  };
  const handleChange = (prop: any) => (event: any) => {
    setBroker({ ...broker, [prop]: event.target.value });
  };

  const newBroker = (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        limit={6}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <form onSubmit={handleSubmit}>
        <svg className="animate-bounce w-6 h-6 bg-teal-300">dafsd</svg>
        <div className="flex m-1">
          <label htmlFor="firstName">Enter Broker First Name</label>
          <input
            type="text"
            id="firstName"
            value={broker.firstName}
            onChange={handleChange("firstName")}
            placeholder="Enter First Name"
            className="ml-1 border-2"
          />
        </div>
        <div className="flex m-1">
          <label htmlFor="lastName">Enter Broker Last Name</label>
          <input
            type="text"
            id="lastName"
            value={broker.lastName}
            onChange={handleChange("lastName")}
            placeholder="Enter Last Name"
            className="ml-1 border-2"
          />
        </div>
        <div className="flex m-1">
          <label htmlFor="email">Enter Broker Email</label>
          <input
            type="text"
            id="email"
            value={broker.email}
            onChange={handleChange("email")}
            placeholder="Enter Email"
            className="ml-1 border-2"
          />
        </div>
        <div className="flex m-1">
          <label htmlFor="phoneNumber">Enter Broker Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            value={broker.phoneNumber}
            onChange={handleChange("phoneNumber")}
            placeholder="Enter Phone Number"
            className="ml-1 border-2"
          />
        </div>
        <div className="flex m-1">
          <label htmlFor="rating">Enter Broker Rating</label>
          <input
            type="number"
            id="rating"
            value={broker.rating}
            onChange={handleChange("rating")}
            placeholder="Enter Rating"
            className="ml-1 border-2"
          />
        </div>
        <div className="flex m-1">
          <label htmlFor="notes">Enter Broker Notes</label>
          <input
            type="text"
            id="notes"
            value={broker.notes}
            onChange={handleChange("notes")}
            placeholder="Enter Notes"
            className="ml-1 border-2"
          />
        </div>
        <button
          className="bg-zinc-500 hover:bg-zinc-900 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
  let content;
  if (isLoading) {
    content = <div className="flex text-9xl">Data Loading</div>;
  } else if (isError) {
    content = <div className="flex text-9xl">error.message</div>;
  } else {
    content = brokerInfo;
  }
  return (
    <main>
      <h1 className="text-3xl">Broker List</h1>
      {newBroker}
      {/* {content} */}
      <div className="flex gap-1 max-w-screen-lg mx-auto">
        {isLoading ? (
          <p>Data is loading</p>
        ) : Array.isArray(content) && content.length > 0 ? (
          content.map((broker: any) => {
            return (
              <div className="w-fit border-2 border-black p-2" key={broker._id}>
                <p>Name: {broker.firstName + " " + broker.lastName}</p>
                <p>Phone Number: {broker.phoneNumber}</p>
                <p>Email: {broker.email}</p>
                <p>Rating: {broker.rating}</p>
                <p>Notes: {broker.notes}</p>
                <div className="flex justify-between mt-2">
                  <button
                    onClick={() =>
                      deleteBrokerMutation.mutate({
                        dataType: "broker",
                        dataId: broker._id,
                      })
                    }
                  >
                    <BsTrashFill />
                  </button>
                  <AiFillEdit />
                </div>
              </div>
            );
          })
        ) : (
          <p>You havent entered any broker data</p>
        )}
      </div>
    </main>
  );
};

export default Broker;
