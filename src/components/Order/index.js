import React from "react";
import styled from "styled-components";
import axios from "../../axios-orders";
import withErrorHandler from "../../containers/hoc/withErrorHandler";

function Order({ingredients, price}) {
  let orderedIngredients = [];
  for (let ingredientName in ingredients) {
    orderedIngredients.push({
      amount: ingredients[ingredientName],
      name: ingredientName
    });
  }

  return (
    <Order.Container>
      <p>
        <strong>Ingredients: </strong>
        {orderedIngredients.map(ingredient => (
          <Order.Ingredients key={ingredient.name}>
            {ingredient.name} ({ingredient.amount})
          </Order.Ingredients>
        ))}
      </p>
      <p>
        Price: <strong>USD {Number(price).toFixed(2)}</strong>{" "}
      </p>
    </Order.Container>
  );
}

Order.Container = styled.div`
  width: 80%;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
`;

Order.Ingredients = styled.span`
  text-transform: capitalize;
  display: inline-block;
  margin: 0 8px;
  border: 1px solid #ccc;
  padding: 3px;
`;

export default withErrorHandler(Order, axios);
