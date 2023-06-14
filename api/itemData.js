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

const getItemsByOrderFBKey = (orderFBKey) => {
  try {
    let response = fetch(
      `${DBUrl}/item.json?orderBy="orderFBKey"&equalTo="${orderFBKey}"`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    let responseJSON = response.json();
    let orderItemsArr = Object.values(responseJSON);
    return orderItemsArr;
  } catch (e) {
    console.warn(e);
  }
};

const getSingleItem = async (firebaseKey) => {
  try {
    let response = fetch(`${DBUrl}/items/${firebaseKey}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let item = await response.json();
    return item;
  } catch (e) {
    console.warn(e);
  }
};

const createItem = async (payload) => {
  try {
    let response = fetch(`${DBUrl}/items.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    let responseJSON = response.json();
    let firebaseKey = responseJSON.name;
    await updateItem({ firebaseKey });
  } catch (e) {
    console.warn(e);
  }
};

const updateItem = async (payload) => {
  try {
    let response = fetch(`${DBUrl}/items/${payload.firebaseKey}`, {
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
    let response = fetch(`${DBUrl}/items/${firebaseKey}`, {
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
};
