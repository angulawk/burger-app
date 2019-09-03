export default function changeOrderFormObjIntoArray(orderForm) {
  let orderFormArray = [];

  for (let order in orderForm) {
    orderFormArray.push({
      id: order,
      config: orderForm[order],
      errorMessage: orderForm[order].errorMessage
    });
  }

  return orderFormArray;
}
