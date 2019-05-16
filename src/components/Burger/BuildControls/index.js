import React from "react";
import styled from "styled-components";
import BuildControl from "./BuildControl";

const controls = [
  {
    label: "Salad",
    type: "salad"
  },
  {
    label: "Bacon",
    type: "bacon"
  },
  {
    label: "Cheese",
    type: "cheese"
  },
  {
    label: "Meat",
    type: "meat"
  }
];

const BuildControls = ({ onAdd, onRemove, disabled }) => (
  <BuildControls.Container>
    {controls.map(control => (
      <BuildControl
        onAddIngredient={onAdd}
        onRemoveIngredient={onRemove}
        key={control.label}
        label={control.label}
        type={control.type}
        disabled={disabled[control.type]}
      />
    ))}
  </BuildControls.Container>
)

BuildControls.Container = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: 0 2px 1px #CCC;
  margin: auto;
  padding: 10px 0;
`;

export default BuildControls;
