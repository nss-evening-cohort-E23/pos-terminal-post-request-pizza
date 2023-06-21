import {
  createItem,
  getItemsByOrderFBKey,
  getSingleItem,
  updateItem,
} from '../api/itemData';
import { createOrder, getAllOrders, updateOrder } from '../api/orderData';
import { showOrders } from '../pages/orderCards';
import showOrderDetails from '../pages/orderDetails';

const formEvents = (user) => {
  document
    .querySelector('#main-container')
    .addEventListener('click', async (e) => {
      if (e.target.id.includes('submit-order')) {
        e.preventDefault();
        const dateSubmit = new Date();
        const date_submitted = dateSubmit.toLocaleString();
        const payload = {
          orderName: document.querySelector('#order_name').value,
          customerPhone: document.querySelector('#phone').value,
          customerEmail: document.querySelector('#email').value,
          orderType: document.querySelector('#type_input').value,
          open: true,
          date: date_submitted,
          uid: user.uid,
        };
        await createOrder(payload);
        getAllOrders(user.uid).then(showOrders);
      }

      if (e.target.id.includes('update-order-btn')) {
        e.preventDefault();
        const [, firebaseKey] = e.target.id.split('--');
        const payload = {
          orderName: document.querySelector('#order_name').value,
          customerPhone: document.querySelector('#phone').value,
          customerEmail: document.querySelector('#email').value,
          orderType: document.querySelector('#type_input').value,
          firebaseKey,
        };

        updateOrder(payload).then(() => {
          getAllOrders(user.uid).then(showOrders);
        });
      }

      if (e.target.matches('input[name="type"]')) {
        if (e.target.value === 'add-new-item') {
          document.querySelector('#new-item-name').style.visibility = 'visible';
          document.querySelector('#new-item-name-label').style.visibility =
            'visible';
          document.querySelector('#new-item-price').style.visibility =
            'visible';
          document.querySelector('#new-item-price-label').style.visibility =
            'visible';
        } else {
          document.querySelector('#new-item-name').style.visibility = 'hidden';
          document.querySelector('#new-item-name-label').style.visibility =
            'hidden';
          document.querySelector('#new-item-price').style.visibility = 'hidden';
          document.querySelector('#new-item-price-label').style.visibility =
            'hidden';
        }
      }

      //FOR ADDING AN ITEM TO AN ORDER
      if (e.target.id.includes('submit-item-btn')) {
        e.preventDefault();
        console.log('submitbtnID', e.target.id);
        const [, orderFBKey] = e.target.id.split('--');
        console.log('orderFBKey on submit', orderFBKey);
        const radioItem = await getSingleItem(
          document.querySelector('input[name="type"]:checked').value
        );
        let payload = {};
        let newItemForRadio = {};
        if (document.querySelector('#add-new-item').checked) {
          payload = {
            name: document.querySelector('#new-item-name').value,
            orderFBKey,
            price: Number(document.querySelector('#new-item-price').value),
          };

          newItemForRadio = {
            name: document.querySelector('#new-item-name').value,
            price: Number(document.querySelector('#new-item-price').value),
          };
          await createItem(payload);
          await createItem(newItemForRadio);
          await showOrderDetails(orderFBKey);
        } else {
          payload = {
            name: radioItem.name,
            orderFBKey,
            price: radioItem.price,
            type: radioItem.type,
          };
          await createItem(payload);
          await showOrderDetails(orderFBKey);
        }
      }

      //FOR UPDATING AN ITEM
      if (e.target.id.includes('update-item-btn')) {
        const radioItem = await getSingleItem(
          document.querySelector('input[name="type"]:checked').value
        );
        let payload = {};
        let newItemForRadio = {};
        const [, itemFBKey] = e.target.id.split('--');
        const originalItem = await getSingleItem(itemFBKey);
        if (document.querySelector('#add-new-item').checked) {
          payload = {
            firebaseKey: itemFBKey,
            name: document.querySelector('#new-item-name').value,
            orderFBKey: originalItem.orderFBKey,
            price: Number(document.querySelector('#new-item-price').value),
            type: originalItem.type,
          };

          newItemForRadio = {
            name: document.querySelector('#new-item-name').value,
            price: Number(document.querySelector('#new-item-price').value),
          };
        } else {
          payload = {
            firebaseKey: itemFBKey,
            name: radioItem.name,
            orderFBKey: originalItem.orderFBKey,
            price: radioItem.price,
            type: originalItem.type,
          };
        }
        let payloadStr = JSON.stringify(payload);
        let comparisonPayloadStr = JSON.stringify(originalItem);
        console.log('payloadStr', payloadStr);
        console.log('comparisonPayloadStr', comparisonPayloadStr);

        if (payloadStr === comparisonPayloadStr) {
          if (document.querySelector('#add-new-item').checked) {
            await showOrderDetails(originalItem.orderFBKey);
          }
        } else {
          await updateItem(payload);
          await createItem(newItemForRadio);
          await showOrderDetails(payload.orderFBKey);
        }
      }
      // END of formEvents
      // Close Order Button
      if (e.target.id.includes('close-order-btn')) {
        const [, firebaseKey] = e.target.id.split('--');
        let orderItems = await getItemsByOrderFBKey(firebaseKey);
        let orderTotal = 0;
        orderItems.forEach((item) => {
          orderTotal += item.price;
        });
        console.log(firebaseKey);
        const payload = {
          firebaseKey,
          paymentType: document.querySelector('#dropdown-menu').value,
          totalOrderAmount: orderTotal,
          tipAmount: Number(document.querySelector('#tipAmount').value),
          open: false,
        };

        updateOrder(payload).then(() => {
          getAllOrders(user.uid).then(showOrders);
        });
      }
      // end of formEvents
    });
};

export default formEvents;
