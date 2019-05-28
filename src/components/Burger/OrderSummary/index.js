import React, { Fragment } from "react";
import Button from "../../UI/Button";

function OrderSummary({
  ingredients,
  calcelPurchase,
  continuePurchase
}) {
  const ingredientSummary = Object.keys(ingredients)
    .map(ingredientKey => {
      return (
        <li key={ingredientKey}>{ingredientKey}: {ingredients[ingredientKey]}</li>
      )
    });

  return (
    <Fragment>
      <h3>Your order</h3>
      <p>A delicious burger with ingredients:</p>
      <ul>
        { ingredientSummary }
      </ul>
      <p>Continue to check out</p>
      <Button clicked={calcelPurchase} btnType="danger">CANCEL</Button>
      <Button clicked={continuePurchase} btnType="success">CONTINUE</Button>
    </Fragment>
  )
}

export default OrderSummary;
