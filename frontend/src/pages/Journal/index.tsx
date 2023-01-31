import React from "react";
import { getAllBrokers } from "../../api/journalApi";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { addBroker, updateBroker, deleteBroker } from "../../api/journalApi";
type Props = {};

const index = (props: Props) => {
  getAllBrokers();
  return <div>Journal</div>;
};

export default index;
