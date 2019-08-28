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

    setLoading(true);
    const order = {
      ingredients,
      price,
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

  let form = (
    <ContactData.Form action="">
      {orderFormArray.map(input => (
        <Input
          key={input.id}
          elementType={input.config.elementType}
          elementConfig={input.config.elementConfig}
          value={input.config.value}
        />
      ))}
      <Button btnType="success" clicked={orderHandler}>
        Order
      </Button>
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
