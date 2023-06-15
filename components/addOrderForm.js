import clearDom from "../utils/clearDom";
import renderToDom from "../utils/renderToDom";

// FIXME: CREATE ORDER FORM
const addOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}"class="mb-4">
     <div class="form-group fs-3 mx-auto w-50">
        <label for="order-name">Order Name:</label>
        <input type="text" class="form-control" id="order-name" aria-describedby="orderName" placeholder="Enter first name" value="${obj.orderName}" required>
      </div>
      <div class="form-group fs-3 mx-auto w-50">
        <label for="phone">Phone Number:</label>
        <input type="number" class="form-control" id="phone" placeholder="Enter phone number" value="${obj.customerPhone}" required>
      </div>
      <div class="form-group fs-3 mx-auto w-50">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" aria-describedby="orderPhone" placeholder="Enter order phone" value="${obj.customerEmail}" required>
      </div>
      <div class="form-group  fs-3 mx-auto w-50" id="select-type">
      <select class="form-select" id="type-input" aria-label="Default select example" required>
      <option selected>Choose a Category</option>
      <option value="Walk-In">Walk-In</option>
      <option value="Call-In">Call-In</option>
      </select>
      </div>
      <button type="submit" class="btn btn-primary" id="submit-order">Submit
      Order</button>
    </form>`;

  renderToDom('#form-container', domString);
};

export default addOrderForm;
