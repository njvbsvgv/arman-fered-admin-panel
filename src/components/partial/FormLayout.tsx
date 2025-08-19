import React, { useEffect, useState } from "react";
import type { TFormLayout } from "../../core/types/TFormLayout";

const FormLayout: React.FC<TFormLayout> = ({ width, children, margin }) => {
  const [marginState, setMarginState] = useState<string>("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  document.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth)
  })

  const calcMargin = () => {
    const newArra: string[] = [];
    margin?.map((item) => {
      let newMargin = `${item}px`;
      newArra.push(newMargin);
    });
    let oneVr: string = ""
    let towVr: string = ""
    newArra.map((item) => {
        oneVr = item
        towVr = `${towVr} ${oneVr}`
        setMarginState(towVr)
    })
  };

  useEffect(() => {
    calcMargin();
  }, []);

  console.log("marginState ==>", JSON.stringify(marginState))

  return (
    <div
      className="form-layout-control bg-[#fff] p-7 rounded-3xl w-4/5 max-lg:w-[90%]"
      style={{ margin: windowWidth > 1024 ? marginState : "" }}
    >
      {children}
    </div>
  );
};

export default FormLayout;
