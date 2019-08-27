import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Order from "../../components/Order";
import withErrorHandler from "../../containers/hoc/withErrorHandler";
import axios from "../../axios-orders";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      // fetch data from a url endpoint
      const data = await axios
        .get("/orders.json")
        .then(res => {
          const fetchedOrders = [];
          for (let key in res.data) {
            fetchedOrders.push({
              ...res.data[key],
              id: key
            });
          }
          setLoading(false);
          setOrders(fetchedOrders);
        })
        .catch(err => {
          setLoading(false);
        });
      return data;
    }

    fetchData();
  });

  return (
    <Orders.Container>
      {orders.map(order => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}
        />
      ))}
    </Orders.Container>
  );
};

Orders.Container = styled.div``;

export default withErrorHandler(Orders, axios);
