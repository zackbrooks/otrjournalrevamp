import React from "react";
import RegisterForm from "./RegisterForm";
import Nav from "../../components/Nav";
type Props = {};

const index = (props: Props) => {
  return (
    <>
      <Nav />
      <RegisterForm />
    </>
  );
};

export default index;
