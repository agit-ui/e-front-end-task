import React from "react";
import style from "./customButton.module.css"
import { assertTSImportEqualsDeclaration } from "@babel/types";

interface Props {
  label: string;
  state: string;
}

const customButton: React.FC<Props> = ({ label,state }) => {
  const str: string = state;
  return (
    <button className = {style[str]}>
      {label}
    </button>
  );
}

export default customButton;
