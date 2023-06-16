import { getItemsByOrderFBKey } from '../api/itemData';
import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const showOrderDetails = async (firebaseKey) => {
  clearDom();
  let orderItems = await getItemsByOrderFBKey(firebaseKey);
  let orderTotal = 0;
  let domString = '';
  orderItems.forEach((item) => {
    orderTotal += item.price;
  });
  if (orderItems.length > 0) {
    domString += `
    <h2 class="order-details-total">Total: ${orderTotal}<h2>
    `;
    orderItems.forEach((item) => {
      domString += `
        <div class="card w-75">
          <div class="card-body">
            <h5 class="card-title item-card-name">${item.name}</h5>
            <p class="card-text item-card-price">Price: $${item.price}</p>
            <button class="btn btn-secondary" id="edit-item-btn--${item.firebaseKey}">Edit Item</button>
            <button class="btn btn-secondary" id="delete-item-btn--${item.firebaseKey}">Delete Item</button>
          </div>
        </div>
        `;
    });
  } else {
    domString = `
    <h2 class="order-details-total">No items in order</h2>
    `;
  }
  renderToDom('#order-details', domString);
};

export default showOrderDetails;
