import { createOrder, getAllOrders, updateOrder } from "../api/orderData";
import { showOrders } from "../pages/orderCards";

const formEvents = () => {
  document.querySelector('#form-container').addEventListener('click', (e) => {
    if (e.target.id.includes('add-item')) {
      if (document.querySelector('#add-new-item').checked !== true) {
      }
    }

    // FOR SUBMITTING ORDER FORM
    if (target.id.includes('submit-order')) {
      const dateSubmit = new Date();
      const date_submitted = dateSubmit.toLocaleString();
      const payload = {
        orderName: document.querySelector('#order-name').value,
        customerPhone: document.querySelector('#phone').value,
        customerEmail: document.querySelector('#email').value,
        orderType: document.querySelector('#type-input').value,
        date: date_submitted,
        uid: user.uid
      };

      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name};

        updateOrder(patchPayload).then(() => {
          getAllOrders(user.uid).then(showOrders);
        });
      });
    }

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
    // end of formEvents
  });
};

export default formEvents;
