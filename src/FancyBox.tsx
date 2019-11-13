import React, { ReactChildren } from "react";

export interface IFancyBoxProps {
    color: string;
    children: any;
}

const FancyBox = (props: IFancyBoxProps) => (
  <div style={{ borderStyle: "solid", borderWidth:"10px", borderColor: props.color }}>
    {props.children}
  </div>
);

export default FancyBox;
