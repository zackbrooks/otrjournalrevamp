import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  editData,
  deleteData,
  getAllData,
  addNewData,
} from "../../api/journalApi";
import LoadForm from "./LoadForm";
import LoadCard from "./LoadCard";

type Props = {};

const Index = (props: Props) => {
  const [formOpen, setFormOpen] = useState(false);
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    error,
    data: loadInfo,
  } = useQuery("load", () => getAllData("load"));

  const addLoadMutation = useMutation(addNewData, {
    onSuccess: () => {
      //Invalidates cache and refetch
      queryClient.invalidateQueries("load");
    },
  });
  const updateLoadMutation = useMutation(editData, {
    onSuccess: () => {
      //Invalidates cache and refetch
      queryClient.invalidateQueries("load");
    },
  });
  const deleteLoadMutation = useMutation(deleteData, {
    onSuccess: () => {
      //Invalidates cache and refetch
      queryClient.invalidateQueries("load");
    },
  });

  let content;
  if (isLoading) {
    content = <div className="flex text-9xl">Data Loading</div>;
  } else if (isError) {
    content = <div className="flex text-9xl">error.message</div>;
  } else {
    content = loadInfo;
  }
  return (
    <div className="">
      <h1 className="text-3xl mx-auto mb-2 bg-zinc-200/95 rounded-[0.35rem] w-full text-center md:w-80 pb-1 ">
        Load Page
      </h1>
      <button
        className="hover:bg-zinc-700 bg-zinc-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-2"
        type="submit"
        onClick={() => setFormOpen(!formOpen)}
      >
        {formOpen ? "Click to Close form" : "Click to Add New Load"}
      </button>
      {formOpen ? <LoadForm addLoadMutation={addLoadMutation} /> : null}

      <div className="flex gap-4 mx-auto max-w-screen-md  flex-col md:flex-row justify-center items-center mt-4 md:flex-wrap md:w-[760px]">
        {isLoading ? (
          <p>Data is loading</p>
        ) : Array.isArray(content) && content.length > 0 ? (
          content.map((load: any) => (
            <LoadCard
              key={load._id}
              load={load}
              deleteLoadMutation={deleteLoadMutation}
              updateLoadMutation={updateLoadMutation}
            />
          ))
        ) : (
          <p>You havent entered any load data</p>
        )}
      </div>
    </div>
  );
};

export default Index;
