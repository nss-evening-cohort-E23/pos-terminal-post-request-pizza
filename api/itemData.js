import client from '../utils/client';

const DBUrl = client.databaseURL;

const getAllItems = async () => {
  try {
    let response = await fetch(`${DBUrl}/items.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let itemsJSON = await response.json();
    let itemsArr = Object.values(itemsJSON);
    if (itemsArr) {
      return itemsArr;
    } else {
      return [];
    }
  } catch (e) {
    console.warn(e);
  }
};

const getItemsForRadios = async () => {
  try {
    let response = await fetch(
      `${DBUrl}/items.json?orderBy="orderFBKey"&equalTo=null`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    let itemsJSON = await response.json();
    let itemsArr = Object.values(itemsJSON);
    if (itemsArr) {
      return itemsArr;
    } else {
      return [];
    }
  } catch (e) {
    console.warn(e);
  }
};

const getItemsByOrderFBKey = async (orderFBKey) => {
  try {
    let response = await fetch(
      `${DBUrl}/items.json?orderBy="orderFBKey"&equalTo="${orderFBKey}"`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    let responseJSON = await response.json();
    let orderItemsArr = Object.values(responseJSON);
    if (orderItemsArr) {
      return orderItemsArr;
    } else {
      return [];
    }
  } catch (e) {
    console.warn(e);
  }
};

const getSingleItem = async (firebaseKey) => {
  try {
    let response = await fetch(`${DBUrl}/items/${firebaseKey}.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let item = await response.json();
    console.log(item);
    return item;
  } catch (e) {
    console.warn(e);
  }
};

const createItem = async (payload) => {
  try {
    let response = await fetch(`${DBUrl}/items.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    let responseJSON = await response.json();
    let firebaseKey = responseJSON.name;
    console.log('newItemFBKey', firebaseKey);
    await updateItem({ firebaseKey });
  } catch (e) {
    console.warn(e);
  }
};

const updateItem = async (payload) => {
  try {
    let response = await fetch(`${DBUrl}/items/${payload.firebaseKey}.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    return await response.json();
  } catch (e) {
    console.warn(e);
  }
};

const deleteItem = async (firebaseKey) => {
  try {
    let response = await fetch(`${DBUrl}/items/${firebaseKey}.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  } catch (e) {
    console.warn(e);
  }
};

export {
  getAllItems,
  getSingleItem,
  createItem,
  updateItem,
  deleteItem,
  getItemsByOrderFBKey,
  getItemsForRadios,
};
