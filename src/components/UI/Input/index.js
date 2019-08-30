import React, {Fragment} from "react";
import styled, {css} from "styled-components";

const Input = ({
  label,
  elementType,
  elementConfig,
  value,
  changed,
  id,
  errorMessage
}) => {
  let inputElem = null;

  function handleInputChange(event) {
    changed(event, id);
  }

  switch (elementType) {
    case "input":
      inputElem = (
        <Input.BaseInput
          {...elementConfig}
          value={value}
          onChange={handleInputChange}
        />
      );
      break;
    case "textarea":
      inputElem = (
        <Input.TextArea
          {...elementConfig}
          value={value}
          onChange={handleInputChange}
        />
      );
      break;
    case "select":
      inputElem = (
        <Input.Select
          {...elementConfig}
          value={value}
          onChange={handleInputChange}
        >
          {elementConfig.options.map(option => (
            <Input.SelectOption key={option.value} value={option.value}>
              {option.displayValue}
            </Input.SelectOption>
          ))}
        </Input.Select>
      );
      break;
    default:
      inputElem = (
        <Input.BaseInput
          {...elementConfig}
          value={value}
          onChange={handleInputChange}
        />
      );
      break;
  }
  return (
    <Fragment>
      <Input.Label>{label}</Input.Label>
      {inputElem}
      {errorMessage}
    </Fragment>
  );
};

Input.Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`;

const styledInput = css`
  display: block;
  width: 100%;
  outline: none;
  border: 1px solid #ccc;
  background-color: #fff;
  font: inherit;
  padding: 6px 10px;
  box-sizing: border-box;

  :focus {
    outline: none;
    background-color: #ccc;
  }
`;

Input.BaseInput = styled.input`
  ${styledInput};
`;

Input.TextArea = styled.textarea``;
Input.Select = styled.select`
  ${styledInput};
`;
Input.SelectOption = styled.option``;

export default Input;
