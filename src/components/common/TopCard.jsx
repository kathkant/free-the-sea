import React from "react";

const TopCard = ({ children, fullCenter, hCenter, vCenter }) => (
  <div
    className={`flex h-50 w-100 mt4 mb2 ${fullCenter &&
      "justify-center items-center"} ${hCenter && "justify-center"} ${vCenter &&
      "items-center"}`}
  >
    {children}
  </div>
);

export default TopCard;
