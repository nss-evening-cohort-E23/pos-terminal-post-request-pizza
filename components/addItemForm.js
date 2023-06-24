import { getAllItems, getItemsForRadios } from '../api/itemData';
import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const addItemForm = async (orderItem = {}) => {
  console.log('orderItem on item form render', orderItem);
  const getOrderFBKeyForNewItems = (orderItem) => {
    if (orderItem.firebaseKey === undefined) {
      return orderItem.orderFBKey;
    }
  };

  clearDom();
  let radioItems = await getItemsForRadios();
  let domString = `
  <h2 class="form-header">Menu Items</h2>
  <form id="${orderItem.firebaseKey ? 'update-item-form' : 'add-item-form'}">
  `;

  // const itemSelected = () => {
  //   if (orderItem.name === orderItem.name) {
  //     return `checked="checked"`;
  //   } else {
  //     return '';
  //   }
  // };

  radioItems.forEach((item) => {
    domString += `
        <input type="radio" name="type" id="menu-items" id="${item.name}-radio" value="${item.firebaseKey}">
        <label for="${item.name}-radio">${item.name}</label>
        `;
  });
  domString += `
      <div id="radioItemContainer">
        <div for="create-new-item-field">
        <input type="radio" id="add-new-item" name="type" value="add-new-item"></input>
        <label for="add-new-item">Create New Item</label>
        </div>
        <label id="new-item-name-label" for="add-new-name" style="visibility: hidden">New Item Name:&nbsp;</label>  
        <input type="text" id="new-item-name" value="" style="visibility: hidden"></input>
        <div for="input-fields">
        <label id="new-item-price-label" for="new-item-price" style="visibility: hidden">New Item Price:$</label>
        <input type="number" id="new-item-price" style="visibility: hidden"></input>
        </div>
        <button type="submit" class="btn btn-warning" id="${
          orderItem.firebaseKey
            ? `update-item-btn--${orderItem.firebaseKey}`
            : `submit-item-btn--${getOrderFBKeyForNewItems(orderItem)}`
        }">Add/Edit Item</button>
      </div>
    </form>
    `;
  renderToDom('#form-container', domString);
};

export default addItemForm;
