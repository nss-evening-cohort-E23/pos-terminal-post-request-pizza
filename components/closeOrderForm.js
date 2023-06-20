import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const closeOrderForm = (obj) => {
  clearDom();
  const domString = `
    <div class="close-orders">
    <div class="dropdown">
    <h2 id="dropdown-label">Payment Type: </h2>
    <select id="dropdown-menu" aria-labelledby="dropDownMenu">
      <label for="dropdown-menu">Payment Type:</label>
      <option id="dropdown-item" value="Credit Card">Credit Card</option>
      <option id="dropdown-item" value="Cash">Cash</button>
    </select>
  </div>

    <div class="form-group mt-3">
      <label for="tipAmount">Tip Amount:</label>
      <input type="text" class="form-control" id="tipAmount" placeholder="Enter tip amount" required>
    </div>

    <button id="close-order-btn--${obj.firebaseKey}" class="btn btn-success btn-lg">Close Orders</button>
  </div>
    `;

  renderToDom('#close-orders', domString);
};

export default closeOrderForm;
