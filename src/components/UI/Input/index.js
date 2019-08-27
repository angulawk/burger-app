import React, {Fragment} from "react";
import styled from "styled-components";

const Input = (props, {label, inputType}) => {
  let inputElem = null;

  switch (inputType) {
    case "input":
      inputElem = <Input.Container {...props} />;
      break;
    case "textarea":
      inputElem = <Input.TextArea {...props} />;
      break;
    default:
      inputElem = <Input.Container {...props} />;
      break;
  }
  return (
    <Fragment>
      <Input.Label>{label}</Input.Label>
      {inputElem}
    </Fragment>
  );
};

Input.Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`;

Input.Container = styled.input`
  display: block;
  width: 100%;
  outline: none;
  border: 1px solid #ccc;
  background-color: #fff;
  font: inherit;
  padding: 6px 10px;

  :focus {
    outline: none;
    background-color: #ccc;
  }
`;

Input.TextArea = styled.textarea``;

export default Input;
