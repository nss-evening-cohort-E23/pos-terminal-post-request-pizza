import { getAllOrders } from "../api/orderData";
import { showOrders } from "../pages/orderCards";
import { signOut } from "../utils/auth";
import addOrderForm from "../components/addOrderForm";


const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // GET 'CREATE AN ORDER' FORM TO SHOW
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('create-order')) {
      addOrderForm();
    }
  });

  // GET 'VIEW ORDERS' BUTTON TO WORK
  document.querySelector('#view-order').addEventListener('click', () => {
    getAllOrders(user).then(showOrders);
  });

  // END OF navigationEvents
};
export default navigationEvents;
