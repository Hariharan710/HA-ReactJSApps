import React from "react";

export interface IFancyBoxProps {
    color: string;
    children: any;
}

/*
  Creates a colorful box around the passed in child components.
*/
const FancyBox = (props: IFancyBoxProps) => (
  <div style={{ borderStyle: "solid", borderWidth:"10px", borderColor: props.color }}>
    {props.children}
  </div>
);

export default FancyBox;
