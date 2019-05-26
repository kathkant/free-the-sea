import React from "react";

const CardHolder = ({ children }) => (
  <div className="w-100 h-100 flex flex-column justify-center items-center">
    {children}
  </div>
);

export default CardHolder;
