import client from '../utils/client';

const DBUrl = client.databaseURL;

const getAllOrders = async () => {
  try {
    let response = await fetch(`${DBUrl}/orders.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let responseJSON = await response.json();
    let ordersArr = Object.values(responseJSON);
    if (ordersArr) {
      return ordersArr;
    } else {
      return [];
    }
  } catch (e) {
    console.warn(e);
  }
};

const getSingleOrder = async (firebaseKey) => {
  try {
    let response = await fetch(`${DBUrl}/orders/${firebaseKey}.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let order = await response.json();
    return order;
  } catch (e) {
    console.warn(e);
  }
};

const createOrder = async (payload) => {
  try {
    let response = await fetch(`${DBUrl}/orders.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    let responseJSON = await response.json();
    let firebaseKey = responseJSON.name;
    await updateOrder({ firebaseKey });
  } catch (e) {
    console.warn(e);
  }
};

const updateOrder = async (payload) => {
  try {
    let response = await fetch(`${DBUrl}/orders/${payload.firebaseKey}.json`, {
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

const deleteOrder = async (firebaseKey) => {
  try {
    let response = await fetch(`${DBUrl}/orders/${firebaseKey}.json`, {
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

export { getAllOrders, getSingleOrder, createOrder, updateOrder, deleteOrder };
