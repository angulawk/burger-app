import React from "react";
import Burger from "../../Burger";
import Button from "../../UI/Button";

import styled from "styled-components";

const CheckoutSummary = ({ingredients, checkoutCancelled, checkoutContinued}) => {
  return (
    <CheckoutSummary.Container>
      <h1>We hope it tastes well</h1>
      <div style={{width: "100%", height: "300px", margin: "auto"}}>
        <Burger ingredients={ingredients} />
      </div>
      <Button btnType="danger" clicked={checkoutCancelled}>
        Cancel
      </Button>
      <Button btnType="success" clicked={checkoutContinued}>
        Continue
      </Button>
    </CheckoutSummary.Container>
  );
};

CheckoutSummary.Container = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;

  @media (min-width: 600px) {
    width: 500px;
  }
`;

export default CheckoutSummary;
