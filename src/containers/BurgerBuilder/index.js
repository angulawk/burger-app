import React, {Component, Fragment, useEffect, useState, useMemo} from "react";

import Burger from "../../components/Burger";
import BuildControls from "../../components/Burger/BuildControls";
import Modal from "../../components/UI/Modal";
import OrderSummary from "../../components/Burger/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner";
import withErrorHandler from "../hoc/withErrorHandler";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

function BurgerBuilder() {
  const [ingredients, setIngredients] = useState(null);

  const [totalPrice, setTotalPrice] = useState(4);
  const [purchasable, setPurchasable] = useState(false);
  const [isOrderModalVisible, setOrderModalVisiblity] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const memoizedOrderSummaryProps = useMemo(
    () => ({
      ingredients,
      cancelPurchase: purchaseCancelHandler,
      continuePurchase: purchaseContinueHandler,
      price: totalPrice
    }),
    [ingredients, purchaseContinueHandler, totalPrice]
  );

  useEffect(() => {
    axios
      .get("https://burger-app-24365.firebaseio.com/ingredients.json", {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(response => {
        setIngredients(response.data);
      })
      .catch(error => setError(true));
  }, [loading]);

  function updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(ingredientKey => ingredients[ingredientKey])
      .reduce((sum, el) => {
        return sum + el;
      });

    setPurchasable(sum > 0);
  }

  function addIngredientHandler(type) {
    const oldCount = ingredients[type];
    const updatedCount = oldCount + 1;

    const updatedIngredients = {...ingredients};
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice + priceAddition;

    setTotalPrice(newPrice);
    setIngredients(updatedIngredients);

    updatePurchaseState(updatedIngredients);
  }

  function removeIngredientHandler(type) {
    const oldCount = ingredients[type];

    if (oldCount <= 0) {
      return;
    }

    const updatedCount = oldCount - 1;

    const updatedIngredients = {...ingredients};
    updatedIngredients[type] = updatedCount;

    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice - priceDeduction;

    setTotalPrice(newPrice);
    setIngredients(updatedIngredients);

    updatePurchaseState(updatedIngredients);
  }

  function purchaseHandler() {
    setOrderModalVisiblity(true);
  }

  function purchaseCancelHandler() {
    setOrderModalVisiblity(false);
  }

  function purchaseContinueHandler() {
    setLoading(true);
    const order = {
      ingredients,
      price: totalPrice,
      customer: {
        name: "Aga Wojcik",
        address: {
          street: "Test",
          zipCode: "41400",
          country: "Poland"
        }
      }
    };

    axios
      .post("/orders.json", order)
      .then(response => {
        setLoading(false);
        setOrderModalVisiblity(false);
      })
      .catch(error => {
        setLoading(false);
        setOrderModalVisiblity(false);
      });
  }

  const disabledInfo = {
    ...ingredients
  };

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  let orderSummary = null;
  let burger = error ? <p>Ingredients cannot be shown</p> : <Spinner />;

  if (ingredients) {
    burger = (
      <Fragment>
        <Burger ingredients={ingredients} />
        <BuildControls
          onAdd={addIngredientHandler}
          onRemove={removeIngredientHandler}
          disabled={disabledInfo}
          price={totalPrice}
          purchasable={purchasable}
          orderBurger={purchaseHandler}
        />
      </Fragment>
    );

    orderSummary = <OrderSummary {...memoizedOrderSummaryProps} />;
  }

  if (loading) {
    orderSummary = <Spinner />;
  }

  return (
    <Fragment>
      <Modal
        isVisible={isOrderModalVisible}
        modalClosed={purchaseCancelHandler}
      >
        {orderSummary}
      </Modal>
      {burger}
    </Fragment>
  );
}

export default withErrorHandler(BurgerBuilder, axios);
