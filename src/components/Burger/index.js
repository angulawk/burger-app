import React from "react";
import styled from "styled-components";
import BurgerIngredient from "./BurgerIngredient";

const Burger = ({ ingredients }) => {

  let transformedIngredients = Object.keys(ingredients)
    .map(ingredientKey => {
      return [...Array(ingredients[ingredientKey])]
    .map((_, index) => {
      return <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />
    })
  }).reduce((arr, el) => {
    return arr.concat(el);
  }, [])

  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>
  }

  return (
    <Burger.Container>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </Burger.Container>
  )
}

Burger.Container = styled.div`
  width: 100%;
  margin: auto;
  height: 250px;
  overflow: scroll;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }

  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }

  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }
`;

export default Burger;
