import { createOrder, getAllOrders, updateOrder } from "../api/orderData";
import { showOrders } from "../pages/orderCards";

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.id.includes('add-item')) {
      if (document.querySelector('#add-new-item').checked !== true) {
      }
    }

    if (e.target.id.includes('submit-order')) {
      const dateSubmit = new Date();
      const date_submitted = dateSubmit.toLocaleString();
      const payload = {
        orderName: document.querySelector('#order_name').value,
        customerPhone: document.querySelector('#phone').value,
        customerEmail: document.querySelector('#email').value,
        orderType: document.querySelector('#type_input').value,
        open: true,
        date: date_submitted,
        uid: user.uid
      };

        
          getAllOrders(user.uid).then(showOrders);
        };

    // FOR EDITING ORDER
    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        orderName: document.querySelector('#order-name').value,
        customerPhone: document.querySelector('#phone').value,
        customerEmail: document.querySelector('#email').value,
        orderType: document.querySelector('#type-input').value,
        firebaseKey,
      };

      updateOrder(payload).then(() => {
        getAllOrders(user.uid).then(showOrders);
      })
    }

    // Close Order Button
    if(e.target.id.includes('close-order-btn')) {
      const payload = {
        paymentType: document.querySelector('#dropDownMenu').value,
        tipAmount: document.querySelector('#tipAmount').value,
        open: false,
      };

      updateOrder(payload).then(() => {
        getAllOrders(user.uid).then(showOrders);
      })
    }
    // end of formEvents
  });
};

export default formEvents;
