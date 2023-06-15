import clearDom from "../utils/clearDom";
import renderToDom from "../utils/renderToDom";

// ORDER CARD STRUCTURE
const emptyOrders = () => {
  const domString = '<h1>No current orders</h1>';
  // TODO: ADD THE ID FOR THE DIV THAT THIS GOES INTO
  renderToDOM('#', domString);
};

const showOrders = (array) => {
  clearDom();

  let domString = '';
  array.forEach((order) => {
    domString += `
    <div class="card" id="orderClosedCards">
    <div class="card-body">
    <h5 class="card-title fs-2">Order Name: ${order.orderName}</h5>
      <p class="fs-4">Order Status: ${order.open}</p>
      <p class="fs-4">Phone: ${order.customerPhone}</p>
      <p class="fs-4">Email: ${order.customerEmail}</p>
      <p class="fs-4">Type: ${order.orderType}</p>
      <p class="fs-4">Items:</p>
      </div>
      <div id="card-buttons">
      <button id="view-details--${order.firebaseKey}" class="btn btn-success fs-4">Details</button>
      <button id="edit-order--${order.firebaseKey}" class="btn btn-success fs-4">Edit Order</button>
      <button id="delete-order--${order.firebaseKey}" class="btn btn-success fs-4">Delete</button>
      </div>
  </div>`;
  });
  
  renderToDom('#view-orders', domString);
};

export { showOrders, emptyOrders };
