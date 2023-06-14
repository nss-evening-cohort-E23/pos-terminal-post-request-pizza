// FIXME: CREATE ORDER FORM
const addOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `add-order--${obj.firebaseKey}` : 'submit-order'}"class="mb-4">
     <div class="form-group fs-3 mx-auto w-50">
        <label for="order-name">Order Name:</label>
        <input type="text" class="form-control" id="order-name" aria-describedby="orderName" placeholder="Enter order id" value="${obj.uid}" required>
      </div>
      <div class="form-group fs-3 mx-auto w-50">
        <label for="phone">Phone Number:</label>
        <input type="tel" class="form-control" id="phone"  placeholder="Enter phone number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value="${obj.customerPhone}" required>
      </div>
      <div class="form-group fs-3 mx-auto w-50">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" aria-describedby="orderPhone" placeholder="Enter order phone" value="${obj.customerEmail}" required>
      </div>
      <div class="form-group fs-3 mx-auto w-50">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" aria-describedby="orderPhone" placeholder="Enter order phone" value="${obj.customerEmail}" required>
      </div>
      <div class="form-group  fs-3 mx-auto w-50" id="select-category">
      <select class="form-select" id="category-input" aria-label="Default select example" required>
      <option selected>Choose a Category</option>
      <option value="Phone">Phone</option>
      <option value="In person">In person</option>
      </select>
      </div>
      <button type="submit" class="btn btn-primary" id="submit-order">Submit
      Order</button>
    </form>`;
    // DOES THE FIRST LABEL/INPUT NEED SOMETHING OTHER THAN TYPE = TEXT
  // TODO: ADD DIV ID OF WHERE THE FORM SHOULD APPEAR
  renderToDOM('#', domString);
};
