import React, {
  Component, 
  Fragment, 
  useState, 
  useMemo 
} from "react";

import Burger from "../../components/Burger";
import BuildControls from "../../components/Burger/BuildControls";
import Modal from "../../components/UI/Modal";
import OrderSummary from "../../components/Burger/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

function BurgerBuilder() {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  });

  const [totalPrice, setTotalPrice] = useState(4);
  const [purchasable, setPurchasable] = useState(false);
  const [isOrderModalVisible, setOrderModalVisiblity] = useState(false);

  const memoizedOrderSummaryProps = useMemo(
    () => ({
        ingredients,
        cancelPurchase: purchaseCancelHandler,
        continuePurchase: purchaseContinueHandler,
        price: totalPrice
    }),
    [isOrderModalVisible]
  );

  function updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(ingredientKey => ingredients[ingredientKey])
      .reduce((sum, el) => {
        return sum + el;
      })

    setPurchasable(sum > 0)
  }

  function addIngredientHandler(type) {
    const oldCount = ingredients[type];
    const updatedCount = oldCount + 1;

    const updatedIngredients = { ...ingredients }
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

    if(oldCount <= 0) {
      return;
    }

    const updatedCount = oldCount - 1;

    const updatedIngredients = { ...ingredients }
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
    alert("You continue")
  }

  const disabledInfo = {
    ...ingredients
  }

  for(let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0
  }

  return (
    <Fragment>
      <Modal isVisible={isOrderModalVisible} modalClosed={purchaseCancelHandler}>
        <OrderSummary {...memoizedOrderSummaryProps}/>
      </Modal>
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
}

export default BurgerBuilder;
