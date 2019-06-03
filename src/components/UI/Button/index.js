import React from "react";
import styled, { css } from "styled-components";

const Button = ({ clicked, children, btnType }) => {
  return (
    <Button.Container onClick={clicked} btnType={btnType}>
      {children}
    </Button.Container>
  )
}

Button.Container = styled.button`
${({
    btnType
  }) => css`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  color: #FFFFFF;
  background-color: ${(btnType === "danger") ? "#944317;" : "#5C9210;"}`}
`;

export default Button;
