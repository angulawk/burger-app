import React, {useState, useEffect} from "react";
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
      value: "",
      validation: {
        required: true
      },
      valid: false,
      errorMessage: ""
    },
    email: {
      elementType: "email",
      elementConfig: {
        type: "text",
        placeholder: "Your email"
      },
      value: "",
      validation: {
        required: true
      },
      valid: false,
      errorMessage: ""
    },
    street: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Street"
      },
      value: "",
      validation: {
        required: true
      },
      valid: false,
      errorMessage: ""
    },
    postalCode: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Postal code"
      },
      value: "",
      validation: {
        required: true
      },
      valid: false,
      errorMessage: ""
    },
    country: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Country"
      },
      value: "",
      validation: {
        required: true
      },
      valid: false,
      errorMessage: ""
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
      value: "",
      validation: {
        required: true
      },
      valid: false,
      errorMessage: ""
    }
  });

  const [loading, setLoading] = useState(false);
  const [isFormValid, setFormValidation] = useState(false);
  const [vatidationErrorMessages, setValidationErrorMessages] = useState([]);

  useEffect(() => {
    let isValid = true;
    for (let order in orderForm) {
      if (!orderForm[order].valid) {
        isValid = false;
      }
    }
    setFormValidation(isValid);
  }, [orderForm]);

  function orderHandler(event) {
    event.preventDefault();

    let customer = {};

    for (let order in orderForm) {
      customer[order] = orderForm[order].value;
    }

    const order = {
      ingredients,
      price,
      customer
    };

    if (isFormValid) {
      setLoading(true);
      axios
        .post("/orders.json", order)
        .then(response => {
          setLoading(false);
          setValidationErrorMessages([]);
        })
        .catch(error => {
          setLoading(false);
        });
    } else {
      const orderFormCopy = {...orderForm};
      for (let order in orderFormCopy) {
        console.log("orderFormCopy[order]", orderFormCopy[order]);
        if (!orderFormCopy[order].valid) {
          orderFormCopy[order].errorMessage = "Field is required";
        }
      }

      setOrderForm(orderFormCopy);
    }
  }

  let orderFormArray = [];

  for (let order in orderForm) {
    orderFormArray.push({
      id: order,
      config: orderForm[order],
      errorMessage: orderForm[order].errorMessage
    });
  }

  function checkValidity(value, rules) {
    if (rules.required) {
      return value.trim() !== "";
    }
    return true;
  }

  async function inputChangeHandler(event, inputField) {
    const currentInput = orderFormArray.find(order => order.id === inputField);

    await setOrderForm({
      ...orderForm,
      [currentInput.id]: {
        ...orderForm[inputField],
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          orderForm[inputField].validation
        )
      }
    });

    return orderForm;
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
          errorMessage={input.errorMessage}
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
