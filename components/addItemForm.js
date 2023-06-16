import { getAllItems, getItemsForRadios } from '../api/itemData';
import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const addItemForm = async (orderItem = {}) => {
  clearDom();
  let radioItems = await getItemsForRadios();
  console.log(radioItems);
  let domString = `
  <h2 class="form-header">Items!</h2>
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
        <input type="radio" id="${item.name}-radio" value="${item.firebaseKey}">
        <label for="${item.name}-radio">${item.name}</label>
        `;

    console.log('loop working?');
  });
  domString += `
        <input type="radio" id="add-new-item" value="add-new-item"></input>
        <label for="add-new-item">Add New Item</label>
        <input type="text" id="new-item-name" style="visibility: hidden"></input>
        <label for="add-new-name" style="visibility: hidden">Add New Item</label>
        <input type="text" id="new-item-price" style="visibility: hidden"></input>
        <label for="new-item-price" style="visibility: hidden">Add New Item</label>
        <button type="submit" id="${
          orderItem.firebaseKey ? 'update-item-btn' : 'add-item-btn'
        }">Add/Edit Item</button>
    </form>
    `;
  console.log(domString);
  renderToDom('#form-container', domString);
};

export default addItemForm;
