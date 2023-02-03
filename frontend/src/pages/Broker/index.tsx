import React from "react";
import Broker from "./Broker";
import Layout from "../../components/HOC/Layout";
import Nav from "../../components/Nav";

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <Nav />
      <Broker />
    </>
  );
};

export default index;
