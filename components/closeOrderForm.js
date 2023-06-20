import clearDom from "../utils/clearDom";
import renderToDom from "../utils/renderToDom";

const closeOrderForm = (obj = {}) => {
    clearDom();
    const domString = `
    <div class="close-orders">
    <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Payment Type
    </button>
    <div class="dropdown-menu" aria-labelledby="dropDownMenu">
      <button class="dropdown-item" type="button" value="Credit Card">Credit Card</button>
      <button class="dropdown-item" type="button" value="Cash">Cash</button>
    </div>
  </div>

    <div class="form-group mt-3">
      <label for="tipAmount">Tip Amount:</label>
      <input type="text" class="form-control" id="tipAmount" placeholder="Enter tip amount" required>
    </div>

    <button id="close-order-btn" class="btn btn-success btn-lg">Close Orders</button>
  </div>
    `;

    renderToDom('#close-orders', domString);
}

export default closeOrderForm;