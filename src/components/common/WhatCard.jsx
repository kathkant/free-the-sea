import React from "react";
import { Colors } from "../../config/styles";

const WhatCard = ({ name, height, width, borderRadius, shadow }) => (
  <div
    className="flex"
    style={{
      height: height || 140,
      width: width || 140,
      backgroundColor: "white",
      borderRadius: borderRadius || 10,
      border: `5px solid ${Colors.primaryLight}`,
      boxShadow: shadow && "5px 5px 5px rgba(0, 0, 0, .5)",
      alignItems: "center",
      justifyContent: "center",
      marginRight: 20,
      marginTop: 20
    }}
  >
    <div
      className="flex flex-wrap"
      style={{
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: "center"
      }}
    >
      {name}
    </div>
  </div>
);

export default WhatCard;
