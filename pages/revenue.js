import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';
import { getAllOrders } from '../api/orderData';


// const emptyRevenue = () => {
//   const domString = '<h1>No Revenue</h1>';
//   renderToDom('#revenue', domString);
// };

// const showRevOrders = (array) => {
//   clearDom();

const sumCallInOrders = async () => {
  let callInOrders = 0;
  let orders = await getAllOrders();
  orders.forEach((order) => {
    if (order.orderType === 'Call-In') {
      callInOrders++;
    }
  });
  return callInOrders;
};

const sumWalkInOrders = async () => {
  let walkInORders = 0;
  let orders = await getAllOrders();
  orders.forEach((order) => {
    if (order.orderType === 'Walk-In') {
      walkInOrders++;
    }
  });
  return walkInOrders;
}

const totalRevenue = async () => {
  let domString = `
        <p>Total Tips: </p>
        <p>Total Call-In Orders: ${sumCallInOrders()}</p>
        <p>Total Walk-In Orders: ${sumWalkInOrders()}</p>
        <hr>
        <p>Payment Types:</p>
        <p>Cash - </p>
        <p>Credit - </p>
        <p>Mobile - </p>
  `;
  renderToDom('#revenue', domString);
};

export default totalRevenue;
