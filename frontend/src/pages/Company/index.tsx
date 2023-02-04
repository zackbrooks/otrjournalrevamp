import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  editData,
  deleteData,
  getAllData,
  addNewData,
} from "../../api/journalApi";
import CompanyForm from "./CompanyForm";
import CompanyCard from "./CompanyCard";

type Props = {};

const Index = (props: Props) => {
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    error,
    data: companyInfo,
  } = useQuery("company", () => getAllData("company"));

  const addCompanyMutation = useMutation(addNewData, {
    onSuccess: () => {
      //Invalidates cache and refetch
      queryClient.invalidateQueries("company");
    },
  });
  const updateCompanyMutation = useMutation(editData, {
    onSuccess: () => {
      //Invalidates cache and refetch
      queryClient.invalidateQueries("company");
    },
  });
  const deleteCompanyMutation = useMutation(deleteData, {
    onSuccess: () => {
      //Invalidates cache and refetch
      queryClient.invalidateQueries("company");
    },
  });

  let content;
  if (isLoading) {
    content = <div className="flex text-9xl">Data Loading</div>;
  } else if (isError) {
    content = <div className="flex text-9xl">error.message</div>;
  } else {
    content = companyInfo;
  }
  return (
    <>
      <h1 className="text-3xl mx-auto mb-2 bg-zinc-200/95 rounded-[0.35rem] w-full text-center md:w-80 pb-1 ">
        Company Page
      </h1>
      <CompanyForm addCompanyMutation={addCompanyMutation} />

      <div className="flex gap-4 mx-auto max-w-screen-md  flex-col md:flex-row justify-center items-center mt-4 md:flex-wrap md:w-[760px]">
        {isLoading ? (
          <p>Data is loading</p>
        ) : Array.isArray(content) && content.length > 0 ? (
          content.map((company: any) => (
            <CompanyCard
              key={company._id}
              company={company}
              deleteCompanyMutation={deleteCompanyMutation}
              updateCompanyMutation={updateCompanyMutation}
            />
          ))
        ) : (
          <p>You havent entered any company data</p>
        )}
      </div>
    </>
  );
};

export default Index;
