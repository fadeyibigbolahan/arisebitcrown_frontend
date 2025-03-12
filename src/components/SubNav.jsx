import React, { useState } from "react";

const SubNav = ({ navItem }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="my-2">
      <a
        key={navItem.id}
        href={navItem.url}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={`text-white text-sm font-semibold ${
          isHover && "bg-[#7e7e7e]/50 py-1 px-1 rounded-sm"
        } cursor-pointer`}
      >
        {navItem.title}
      </a>
      <a
        href={navItem.url}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <p
          className={`text-[#7E7E7E] ${
            isHover && "text-white text-[13px]"
          } text-xs leading-5 cursor-pointer`}
        >
          {navItem.desc}
        </p>
      </a>
    </div>
  );
};

export default SubNav;
