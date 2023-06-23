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
      <option id="dropdown-item" value="Credit">Credit Card</option>
      <option id="dropdown-item" value="Cash">Cash</button>
      <option id="dropdown-item" value="Mobile">Mobile</button>
    </select>
  </div>

    <div class="form-group mt-3" id="close-order-form">
      <label for="tipAmount">Tip Amount:&nbsp;</label>
      &nbsp;
      <input type="text" class="form-control" id="tipAmount" style="width: 10rem;" placeholder="Enter Tip Amount" required>
    </div>
    <button id="close-order-btn--${obj.firebaseKey}" class="btn btn-warning btn-lg">Close Order</button>
  </div>
    `;

  renderToDom('#close-orders', domString);
};

export default closeOrderForm;
