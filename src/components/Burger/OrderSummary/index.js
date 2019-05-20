import React, { Fragment } from "react";

function OrderSummary({ ingredients }) {
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
    </Fragment>
  )
}

export default OrderSummary;
