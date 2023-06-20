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
      }
  )}


// const formEvents2 = (user) => {
//   document.querySelector('#main-container').addEventListener('submit', (e) => {
//     e.preventDefault();
//     // FOR SUBMITTING ORDER FORM
    

//     // END OF FORMEVENTS2
//   })
// }
 

 


export default formEvents;
