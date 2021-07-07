import React, {useState, useEffect} from "react";
import Button from "../../../components/UI/Button";
import styled from "styled-components";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner";
import Input from "../../../components/UI/Input";
import changeOrderFormObjIntoArray from "../../../utils/changeOrderFormObjIntoArray";

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
  let orderFormArray = changeOrderFormObjIntoArray(orderForm);

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

      if (isFormValid) {
        if (orderForm[order].valid) {
          orderForm[order].errorMessage = "";
        }
      }
    }

    const order = {
      ingredients,
      price,
      customer
    };

    if (isFormValid) {
      setLoading(true);
      setOrderForm(orderForm);
      axios
        .post("/orders.json", order)
        .then(response => {
          setLoading(false);
        })
        .catch(error => {
          setLoading(false);
        });
    } else {
      const orderFormCopy = {...orderForm};
      for (let order in orderFormCopy) {
        if (!orderFormCopy[order].valid) {
          orderFormCopy[order].errorMessage = "Field is required";
        }
      }

      setOrderForm(orderFormCopy);
    }
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

  return (
    <ContactData.Container>
      <h4>Enter your Contact Data</h4>
      {loading ? (
        <Spinner />
      ) : (
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
      )}
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
