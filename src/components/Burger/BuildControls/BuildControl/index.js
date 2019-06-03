import React from "react";
import styled from "styled-components";

function BuildControl({
  label,
  type,
  onAddIngredient,
  onRemoveIngredient,
  disabled
}) {
  return (
    <BuildControl.Container>
      <BuildControl.Label>{label}</BuildControl.Label>
      <BuildControl.BtnLess
        onClick={handleButtonLessClick}
        disabled={disabled}
      >
        Less
      </BuildControl.BtnLess>
      <BuildControl.BtnMore
        onClick={handleButtonMoreClick}
      >
        More
      </BuildControl.BtnMore>
    </BuildControl.Container>
  )

  function handleButtonMoreClick() {
    onAddIngredient(type);
  }

  function handleButtonLessClick() {
    onRemoveIngredient(type);
  }
}

BuildControl.Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  width: 300px;
`;

BuildControl.Label = styled.span`
  width: 50px;
`;

BuildControl.BtnLess = styled.button`
  display: block;
  font: inherit;
  padding: 0 5px;
  width: 80px;
  cursor: pointer;
  outline: none;
  background: #ff8a65;
`

BuildControl.BtnMore = styled.button`
  display: block;
  font: inherit;
  padding: 0 5px;
  width: 80px;
  cursor: pointer;
  outline: none;
  background: #a5d6a7;
`

export default BuildControl;
