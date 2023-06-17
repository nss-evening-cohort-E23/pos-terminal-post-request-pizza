import { getAllOrders } from "../api/orderData";
import { showOrders } from "../pages/orderCards";
import { signOut } from "../utils/auth";
import addOrderForm from "../components/addOrderForm";
import showRevenueOrders from "../pages/revenue";
import clearDom from '../utils/clearDom';



const navigationEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
  // LOGOUT BUTTON
  if (e.target.id.includes('logout-button')) {
    signOut();
  }
  // GET 'CREATE AN ORDER' FORM TO SHOW
  if (e.target.id.includes('create-order')) {
    addOrderForm({});
  }
  // GET 'VIEW ORDERS' BUTTON TO WORK
  if (e.target.id.includes('view-order')) {
    getAllOrders(user).then(showOrders);
  }

  // VIEW REVENUE PAGE
  if (e.target.id.includes('view-revenue')) {
    // console.warn(e.target, 'VIEW REVENUE BUTTON CLICKED');
    clearDom();
    showRevenueOrders(user);
  }
  })
  // END OF navigationEvents
}
export default navigationEvents;
