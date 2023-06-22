import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

// FIXME: CREATE ORDER FORM
const addOrderForm = (obj = {}) => {
  clearDom();
  console.log(obj);
  const domString = `
    <form class="addOrderText" id="${
      obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'
    }"class="mb-4">
     <div class="form-group fs-3 mx-auto w-50">
        <label for="order_name" id="orderName">Order Name:</label>
        <input type="text" class="form-control" id="order_name" placeholder="Enter first name" required>
      </div>
      <div class="form-group fs-3 mx-auto w-50">
        <label for="phone" id="phoneNumber">Phone Number:</label>
        <input type="number" class="form-control" id="phone" placeholder="Enter phone number" required>
      </div>
      <div class="form-group fs-3 mx-auto w-50">
        <label for="email" id="email">Email:</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email" required>
      </div>
        <div class="form-group  fs-3 mx-auto w-50" id="select-type"> <label for="type_input" id="orderInputType">Order Type:</label>
        <select class="form-select" id="type_input" aria-label="Default select example" required>
        <option value="Walk-In">Walk-In</option>
        <option value="Call-In">Call-In</option>
        </select>
      </div>
      <button type="submit" id=${
        obj.firebaseKey
          ? `update-order-btn--${obj.firebaseKey}`
          : 'submit-order-btn'
      } class="btn btn-warning" id="addOrderSubmitBtn">Submit
      Order</button>
    </form>`;

  renderToDom('#form-container', domString);
};

export default addOrderForm;
