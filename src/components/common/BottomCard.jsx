import React from "react";

const BottomCard = ({ children, fullCenter, hCenter, vCenter }) => (
  <div
    className={`flex h-50 w-100 mt2 mb4 ${fullCenter &&
      "justify-center items-center"} ${hCenter && "justify-center"} ${vCenter &&
      "items-center"}`}
  >
    {children}
  </div>
);

export default BottomCard;
