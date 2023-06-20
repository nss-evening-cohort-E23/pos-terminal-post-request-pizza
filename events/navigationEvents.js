import { getAllOrders } from "../api/orderData";
import { showOrders } from "../pages/orderCards";
import { signOut } from "../utils/auth";
import addOrderForm from "../components/addOrderForm";
import showRevenueOrders from "../pages/revenue";
import clearDom from '../utils/clearDom';



const navigationEvents = (user) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
  // LOGOUT BUTTON
  if (e.target.id.includes('logout-button')) {
    signOut();
  }
  // GET 'CREATE AN ORDER' FORM TO SHOW
  if (e.target.id.includes('create-order-landing')) {
    addOrderForm({});
  }
  // GET 'VIEW ORDERS' BUTTON TO WORK
  if (e.target.id.includes('view-order')) {
    getAllOrders(user).then(showOrders);
  }


  })
  // END OF navigationEvents
}
export default navigationEvents;
