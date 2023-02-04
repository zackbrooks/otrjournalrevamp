import React from "react";

import Hero from "../../components/Hero";

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <Hero />
      <div
        id="what"
        className="flex justify-center text-4xl md:text-6xl mt-2 h-[50vh]"
      >
        <h2>What is OTR Journal!!!!!?</h2>
      </div>
      <div
        id="why"
        className="flex justify-center text-3xl md:text-6xl mt-2 h-[50vh] "
      >
        <h2>Why Choose OTR Journal?</h2>
      </div>
    </>
  );
};

export default index;
