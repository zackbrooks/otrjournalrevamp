import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div
      id="home"
      style={{ backgroundImage: `url(../../imgs/hero.jpg)` }}
      className="flex h-[90vh] min-h-[400px] flex-col items-center justify-center bg-cover bg-fixed md:bg-center bg-[center_left_-10rem]"
    ></div>
  );
};

export default Hero;
