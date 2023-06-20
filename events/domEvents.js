import {
  deleteItem,
  getItemsByOrderFBKey,
  getSingleItem,
} from '../api/itemData';
import { deleteOrder, getAllOrders, getSingleOrder } from '../api/orderData';
import addItemForm from '../components/addItemForm';
import addOrderForm from '../components/addOrderForm';
import closeOrderForm from '../components/closeOrderForm';
import { showOrders } from '../pages/orderCards';
import showOrderDetails from '../pages/orderDetails';
import clearDom from '../utils/clearDom';
import showRevenueOrders from '../pages/revenue';

const domEvents = (user) => {
  document
    .querySelector('#main-container')
    .addEventListener('click', async (e) => {
      // FOR DELETING AN ORDER
      if (e.target.id.includes('delete-order')) {
        // eslint-disable-next-line no-alert
        if (
          window.confirm('Are you sure that you want to delete this order?')
        ) {
          console.warn('CLICKED DELETE', e.target.id);
          const [, firebaseKey] = e.target.id.split('--');

          deleteOrder(firebaseKey).then(() => {
            getAllOrders().then(showOrders);
          });
        }
      }

      // SHOW FORM FOR ADDING A CARD
      if (e.target.id.includes('create-order')) {
        addOrderForm({});
      }
      // SHOW FORM FOR ADDING A CARD
      if (e.target.id.includes('create-order-landing')) {
        console.warn('click');
        addOrderForm({}, user);
      }

      if (e.target.id.includes('view-order')) {
        getAllOrders(user.uid).then((orders) => showOrders(orders));
      }

      // FOR EDITING/UPDATING A CARD
      if (e.target.id.includes('edit-order')) {
        const [, firebaseKey] = e.target.id.split('--');

        getSingleOrder(firebaseKey).then((orderObj) =>
          addOrderForm(orderObj)
        );
      }

      // //TODO: ClICK EVENT FOR ORDER DETAILS
      // if (e.target.id.includes('view-order-details')) {
      //   const [, firebaseKey] = e.target.id.split('--');
      //   getOrderDetails(firebaseKey).then(viewOrders);
      // }

      //FOR SHOWING DETAILS OF CARD
      if (e.target.id.includes('order-details')) {
        const [, firebaseKey] = e.target.id.split('--');
        console.log(firebaseKey);
        await showOrderDetails(firebaseKey);
      }

      //FOR ADDING AN ITEM TO AN ORDER
      if (e.target.id.includes('add-item-btn')) {
        const [, orderFirebaseKey] = e.target.id.split('--');
        let item = { orderFBKey: orderFirebaseKey };
        console.log('additembtn item', item);
        addItemForm(item);
      }
      //FOR EDITING AND ITEM
      if (e.target.id.includes('edit-item-btn')) {
        const [, firebaseKey] = e.target.id.split('--');
        console.log(firebaseKey);
        let item = await getSingleItem(firebaseKey);
        addItemForm(item);
      }
      //FOR DELETING AN ITEM
      if (e.target.id.includes('delete-item-btn')) {
        const [, firebaseKey] = e.target.id.split('--');
        let item = await getSingleItem(firebaseKey);
        let orderFBKey = item.orderFBKey;
        await deleteItem(firebaseKey);
        await showOrderDetails(orderFBKey);
      }

      if (e.target.id.includes('to-payment-btn')) {
        const [, firebaseKey] = e.target.id.split('--');
        let order = await getSingleOrder(firebaseKey);
        closeOrderForm(order);
      }

      // VIEW REVENUE PAGE
      if (e.target.id.includes('view-revenue')) {
        // console.warn(e.target, 'VIEW REVENUE BUTTON CLICKED');
        clearDom();
        showRevenueOrders(user);
      }

      // END OF domEvents
    });
};

export default domEvents;
