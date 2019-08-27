import React, {useState} from "react";
import Button from "../../../components/UI/Button";
import styled from "styled-components";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner";

const ContactData = ({ingredients, price}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState({
    street: "",
    postalCode: ""
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

  let form = (
    <ContactData.Form action="">
      <input type="text" name="name" placeholder="Your name" />
      <input type="email" name="email" placeholder="Your email" />
      <input type="text" name="street" placeholder="Street" />
      <input type="text" name="postal" placeholder="Postalcode" />
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

  input {
    margin: 10px 0;
  }
`;

export default ContactData;
