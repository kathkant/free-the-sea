import React from "react";
import { Colors } from "../../config/styles";

const Image = ({ src, height, width, borderRadius, shadow, alt }) => (
  <img
    src={src}
    style={{
      height: height || 250,
      width: width || 250,
      borderRadius: borderRadius || 10,
      border: `5px solid ${Colors.primaryLight}`,
      boxShadow: shadow && "5px 5px 5px rgba(0, 0, 0, .5)"
    }}
    alt={alt || "photo"}
  />
);

export default Image;
