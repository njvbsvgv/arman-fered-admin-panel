import React from "react";
import type { TInput } from "../../core/types/TInput";

const CustomeInput: React.FC<TInput> = ({
  type,
  name,
  value,
  onChange,
  width,
  children,
}) => {
  return (
    <div className="input-control relative" style={{ width: `${width}%` }}>
      {type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className="customeInput resize-none h-[100px]"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          // onChange={(event) => onChange?.(event.target.value)}
          onChange={onChange}
          className="customeInput"
        />
      )}
      {children && <span className="absolute left-0 top-3">{children}</span>}
    </div>
  );
};

export default CustomeInput;
