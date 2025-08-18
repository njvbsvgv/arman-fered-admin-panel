import React from "react";
import type { TTitleText } from "../../core/types/TTitleText";

const TitleText: React.FC<TTitleText> = ({ title, fontSize, color, className }) => {
  return (
    <h1
      className={`font-extrabold indent-1 ${className}`}
      style={{ fontSize: `${fontSize}px`, color: color }}
    >
      {title}
    </h1>
  );
};

export default TitleText;
