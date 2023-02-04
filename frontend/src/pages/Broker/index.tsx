import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  editData,
  deleteData,
  getAllData,
  addNewData,
} from "../../api/journalApi";
import BrokerFrom from "./BrokerFrom";
import BrokerCard from "./BrokerCard";

type Props = {};

const Index = (props: Props) => {
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
  const updateBrokerMutation = useMutation(editData, {
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
    <>
      <h1 className="text-3xl mx-auto mb-2 bg-zinc-200/95 rounded-[0.35rem] w-full text-center md:w-80 pb-1 ">
        Broker Page
      </h1>
      <BrokerFrom addBrokerMutation={addBrokerMutation} />

      <div className="flex gap-4 mx-auto max-w-screen-md  flex-col md:flex-row justify-center items-center mt-4 md:flex-wrap md:w-[760px]">
        {isLoading ? (
          <p>Data is loading</p>
        ) : Array.isArray(content) && content.length > 0 ? (
          content.map((broker: any) => (
            <BrokerCard
              key={broker._id}
              broker={broker}
              deleteBrokerMutation={deleteBrokerMutation}
              updateBrokerMutation={updateBrokerMutation}
            />
          ))
        ) : (
          <p>You havent entered any broker data</p>
        )}
      </div>
    </>
  );
};

export default Index;
