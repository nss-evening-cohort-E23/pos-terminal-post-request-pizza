import { getAllItems } from '../api/itemData';

const addItemForm = async (obj = {}) => {
  let items = await getAllItems();
  let domString = `
  <h2 class="form-header">Items!</h2>
  <form id=${obj.firebaseKey ? 'update-item-form' : 'add-item-form'}>
  `;

  const itemSelected = () => {
    if (obj.name === item.name) {
      return `checked="checked"`;
    } else {
      return '';
    }
  };

  items.forEach((item) => {
    domString += `
        <input type="radio" id="${item.name}-radio" value="${
      item.firebaseKey
    }" ${itemSelected()}>
        <label for="${item.name}-radio>${item.name}</label>
        `;
  });
  domString += `
        <input type="radio" id="add-new-item" value="add-new-item">
        <label for="add-new-item">Add New Item</label>
        <input type="text" id="new-item-name" style="visibility: hidden">
        <label for="add-new-name" style="visibility: hidden">Add New Item</label>
        <input type="text" id="new-item-price" style="visibility: hidden">
        <label for="new-item-price" style="visibility: hidden">Add New Item</label>
        <button type="submit" id=${
          obj.firebaseKey ? 'update-item-btn' : 'add-item-btn'
        }>Add/Edit Item</button>
    </form>
    `;
};

export default addItemForm;
