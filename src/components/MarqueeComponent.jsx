import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  return (
    <div className="flex flex-row justify-center items-center w-full">
      <Marquee speed={50} gradient={false} className="md:w-[60%] w-full">
        Arise Bit Crown Investment International offers a secure, transparent,
        and efficient investment platform, providing competitive returns and a
        diversified investment portfolio. 🚀🔥
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
