import calculatePizzaPrize from './calculatePizzaPrize';

export default function calculateOrderTotal(order, pizzas) {
  return order.reduce((runningTotal, singleOrder) => {
    const pizza = pizzas.find(
      (singlePizza) => singlePizza.id === singleOrder.id
    );
    return runningTotal + calculatePizzaPrize(pizza.price, singleOrder.size);
  }, 0);
}
