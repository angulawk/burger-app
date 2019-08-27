import React, {Fragment, useState, useEffect} from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary";
import {Route} from "react-router-dom";
import ContactData from "./ContactData";

const Checkout = ({history, match}) => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    meat: 0,
    cheese: 0,
    bacon: 0
  });

  const [totalPrice, setTotalPrice] = useState(4);

  useEffect(() => {
    let query = new URLSearchParams(history.location.search);
    const ingredients = {};
    let price = 0;

    for (let param of query.entries()) {
      if (param[0] === "price") {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }

    setIngredients(ingredients);
    setTotalPrice(price);
  }, []);

  function checkoutCancelledHandler() {
    history.goBack();
  }

  function checkoutContinuedHandler() {
    history.replace("/checkout/contact-data");
  }

  return (
    <Fragment>
      <CheckoutSummary
        ingredients={ingredients}
        checkoutCancelled={checkoutCancelledHandler}
        checkoutContinued={checkoutContinuedHandler}
      />
      <Route
        path={`${match.path}/contact-data`}
        render={props => (
          <ContactData
            ingredients={ingredients}
            price={totalPrice}
            {...props}
          />
        )}
      />
    </Fragment>
  );
};

export default Checkout;
