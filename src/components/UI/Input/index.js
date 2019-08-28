import React, {Fragment} from "react";
import styled from "styled-components";

const Input = ({label, elementType, elementConfig, value}) => {
  let inputElem = null;

  switch (elementType) {
    case "input":
      inputElem = <Input.Container {...elementConfig} value={value} />;
      break;
    case "textarea":
      inputElem = <Input.TextArea {...elementConfig} value={value} />;
      break;
    case "select":
      inputElem = (
        <Input.Select {...elementConfig} value={value}>
          {elementConfig.options.map(option => (
            <Input.SelectOption value={option.value}>
              {option.value}
            </Input.SelectOption>
          ))}
        </Input.Select>
      );
      break;
    default:
      inputElem = <Input.Container {...elementConfig} value={value} />;
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
Input.Select = styled.select``;
Input.SelectOption = styled.option``;

export default Input;
