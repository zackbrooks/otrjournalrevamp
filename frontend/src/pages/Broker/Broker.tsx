import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  updateBroker,
  deleteData,
  getAllData,
  addNewData,
} from "../../api/journalApi";
import { ToastContainer } from "react-toastify";
import BrokerFrom from "./BrokerFrom";
import BrokerCard from "./BrokerCard";

type Props = {};

const Broker = (props: Props) => {
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

  let content;
  if (isLoading) {
    content = <div className="flex text-9xl">Data Loading</div>;
  } else if (isError) {
    content = <div className="flex text-9xl">error.message</div>;
  } else {
    content = brokerInfo;
  }
  return (
    <div className="p-3 bg-zinc-500 h-[100vh]">
      <h1 className="text-3xl text-center">Broker Page</h1>
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
      <BrokerFrom addBrokerMutation={addBrokerMutation} />

      <div className="flex gap-4 max-w-screen-lg mx-auto flex-col md:flex-row justify-center items-center mt-4">
        {isLoading ? (
          <p>Data is loading</p>
        ) : Array.isArray(content) && content.length > 0 ? (
          content.map((broker: any) => (
            <BrokerCard
              key={broker._id}
              broker={broker}
              deleteBrokerMutation={deleteBrokerMutation}
            />
          ))
        ) : (
          <p>You havent entered any broker data</p>
        )}
      </div>
    </div>
  );
};

export default Broker;
