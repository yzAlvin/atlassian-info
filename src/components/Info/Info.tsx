import React from "react";
import "./Info.css";

export enum InfoType {
  Info = "Info",
  Note = "Note",
  Success = "Success",
  Warning = "Warning",
  Error = "Error",
}

export interface InfoProps {
  symbol?: string;
  type: InfoType;
  title?: string;
  text?: string;
}

const Info = (props: InfoProps) => (
  <div className={`Card ${props.type}`}>
    <div className="Symbol">
      <p>{props.symbol}</p>
    </div>
    <div className="Content">
      <p className="Title">{props.title}</p>
      <p>{props.text}</p>
    </div>
  </div>
);

export default Info;
