import clearDom from "../utils/clearDom";
import renderToDom from "../utils/renderToDom";

// FIXME: CREATE ORDER FORM
const addOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}"class="mb-4">
     <div class="form-group fs-3 mx-auto w-50">
        <label for="order_name">Order Name:</label>
        <input type="text" class="form-control" id="order_name" placeholder="Enter first name" required>
      </div>
      <div class="form-group fs-3 mx-auto w-50">
        <label for="phone">Phone Number:</label>
        <input type="number" class="form-control" id="phone" placeholder="Enter phone number" required>
      </div>
      <div class="form-group fs-3 mx-auto w-50">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email" required>
      </div>
      <div class="form-group  fs-3 mx-auto w-50" id="select-type">
      <select class="form-select" id="type_input" aria-label="Default select example" required>
      <option selected>Choose a Category</option>
      <option value="Walk-In">Walk-In</option>
      <option value="Call-In">Call-In</option>
      </select>
      </div>
      <button type="submit" id="submit-order-btn" class="btn btn-primary">Submit
      Order</button>
    </form>`;

  renderToDom('#form-container', domString);
};

export default addOrderForm;
