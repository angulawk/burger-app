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

const BuildControls = ({
  onAdd,
  onRemove,
  disabled,
  price,
  purchasable,
  orderBurger
}) => (
  <BuildControls.Container>
    <p>Current Price: {price.toFixed(2)}</p>
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
    <BuildControls.OrderButton disabled={!purchasable} onClick={orderBurger}>
      Order Now
    </BuildControls.OrderButton>
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

BuildControls.OrderButton = styled.button`
   background-color: #546e7a;
   outline: none;
   cursor: pointer;
   border: 1px solid #FFF;
   color: #FFF;
   font-family: inherit;
   font-size: 1.2em;
   padding: 15px 30px;
   box-shadow: 2px 2px 2px #FFF;
   margin: 15px 0;

 :hover,
 :active {
   background-color: #607d8b;
   border: 1px solid #FFF;
   color: #FFF;
  }

 :disabled {
   background-color: #C7C6C6;
   cursor: not-allowed;
   border: 1px solid #ccc;
   color: #888888;
  }

  :not(:disabled) {
   animation: enable 0.3s linear;
  }

  @keyframes enable {
   0% {
     transform: scale(1);
   }

   60% {
     transform: scale(1.1);
   }

   100% {
     transform: scale(1);
    }
  }
`;

export default BuildControls;
