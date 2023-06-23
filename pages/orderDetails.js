import { getItemsByOrderFBKey } from '../api/itemData';
import { getSingleOrder } from '../api/orderData';
import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const showOrderDetails = async (orderFirebaseKey) => {
  clearDom();
  let orderItems = await getItemsByOrderFBKey(orderFirebaseKey);
  let orderTotal = 0;
  let domString = '';
  let order = await getSingleOrder(orderFirebaseKey);
  orderItems.forEach((item) => {
    orderTotal += item.price;
  });
  if (orderItems.length > 0) {
    domString += `
    <h2 class="order-details-total">Current Total: $${orderTotal}<h2>
    `;
    orderItems.forEach((item) => {
      domString += `
        <div class="card w-75 item-card">
          <div class="card-body">
            <h5 class="card-title item-card-name">${item.name}</h5>
            <p class="card-text item-card-price">Price: $${item.price}</p>
            ${order.open ? `<button class="btn btn-warning" style="margin-right: 3px; width: 7rem"; id="edit-item-btn--${item.firebaseKey}">Edit Item</button><button class="btn btn-warning" style="margin-left: 3px; width: 7rem"; id="delete-item-btn--${item.firebaseKey}">Delete Item</button>`:''}
            </div>
        </div>
        `;
    });
    if (order.open === true) {
    domString += `
    <button class="btn btn-warning" id="add-item-btn--${orderFirebaseKey}">Add Item To Order</button>
    <button class="btn btn-warning" id="to-payment-btn--${orderFirebaseKey}">Go To Payment</button>
    `;
    } else {
      domString += `<h2 id="orderClosed">Order Closed</h2>`
    }
  } else {
    domString = `
    <h2 class="order-details-total">No Items In Order</h2>
    <button class="btn btn-warning fs-4" style="width:17rem" id="add-item-btn--${orderFirebaseKey}">Add Item to Order</button>
    <button class="btn btn-warning fs-4" style="width:17rem" id="to-payment-btn--${orderFirebaseKey}">Go To Payment</button>
    `;
  }
  renderToDom('#order-details', domString);
};

export default showOrderDetails;
