import React, {useState} from "react";
import Button from "../../../components/UI/Button";
import styled from "styled-components";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner";
import Input from "../../../components/UI/Input";

const ContactData = ({ingredients, price}) => {
  const [orderForm, setOrderForm] = useState({
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Your name"
      },
      value: ""
    },
    email: {
      elementType: "email",
      elementConfig: {
        type: "text",
        placeholder: "Your email"
      },
      value: ""
    },
    street: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Street"
      },
      value: ""
    },
    postalCode: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Postal code"
      },
      value: ""
    },
    country: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Country"
      },
      value: ""
    },
    deliveryMethod: {
      elementType: "select",
      elementConfig: {
        options: [
          {
            value: "fastest",
            displayValue: "Fastest"
          },
          {
            value: "cheapest",
            displayValue: "Cheapest"
          }
        ]
      },
      value: ""
    }
  });

  const [loading, setLoading] = useState(false);

  function orderHandler(event) {
    event.preventDefault();

    let customer = {};

    for (let order in orderForm) {
      customer[order] = orderForm[order].value;
    }

    setLoading(true);
    const order = {
      ingredients,
      price,
      customer
    };

    axios
      .post("/orders.json", order)
      .then(response => {
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
  }

  let orderFormArray = [];

  for (let order in orderForm) {
    orderFormArray.push({
      id: order,
      config: orderForm[order]
    });
  }

  function inputChangeHandler(event, inputField) {
    const currentInput = orderFormArray.find(order => order.id === inputField);

    setOrderForm({
      ...orderForm,
      [currentInput.id]: {
        ...orderForm[inputField],
        value: event.target.value
      }
    });
  }

  let form = (
    <ContactData.Form action="" onSubmit={orderHandler}>
      {orderFormArray.map(input => (
        <Input
          key={input.id}
          elementType={input.config.elementType}
          elementConfig={input.config.elementConfig}
          value={input.config.value}
          changed={inputChangeHandler}
          id={input.id}
        />
      ))}
      <Button btnType="success">Order</Button>
    </ContactData.Form>
  );

  if (loading) {
    form = <Spinner />;
  }

  return (
    <ContactData.Container>
      <h4>Enter your Contact Data</h4>
      {form}
    </ContactData.Container>
  );
};

ContactData.Container = styled.div`
  margin: 20px;
  text-align: center;
`;

ContactData.Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
`;

export default ContactData;
